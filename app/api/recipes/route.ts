import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { authOptions } from "../auth/[...nextauth]/route";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const recipes = await prisma.recipe.findMany({
      include: {
        author: {
          select: {
            name: true,
            email: true
          }
        }
      }
    });
    return NextResponse.json(recipes);
  } catch (error) {
    console.error("[RECIPES_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const body = await request.json();
    const { title, description, ingredients, instructions, cookTime, difficulty, mealType, image } = body;
    
    const recipe = await prisma.recipe.create({
      data: {
        title,
        description,
        ingredients,
        instructions,
        cookTime: parseInt(cookTime),
        difficulty: parseInt(difficulty),
        mealType,
        image,
        authorId: parseInt((session.user as any).id)
      }
    });

    return NextResponse.json(recipe);
  } catch (error) {
    console.error("[RECIPE_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

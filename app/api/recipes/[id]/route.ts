import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { authOptions } from "../../auth/[...nextauth]/route";

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const recipe = await prisma.recipe.findUnique({
      where: {
        id: parseInt(params.id)
      },
      include: {
        author: {
          select: {
            name: true,
            email: true
          }
        }
      }
    });

    if (!recipe) {
      return new NextResponse("Recipe not found", { status: 404 });
    }

    return NextResponse.json(recipe);
  } catch (error) {
    console.error("[RECIPE_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const body = await request.json();
    const { title, description, ingredients, instructions, cookTime, difficulty, mealType, image } = body;

    const recipe = await prisma.recipe.update({
      where: {
        id: parseInt(params.id)
      },
      data: {
        title,
        description,
        ingredients,
        instructions,
        cookTime: parseInt(cookTime),
        difficulty: parseInt(difficulty),
        mealType,
        image
      }
    });

    return NextResponse.json(recipe);
  } catch (error) {
    console.error("[RECIPE_PUT]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    await prisma.recipe.delete({
      where: {
        id: parseInt(params.id)
      }
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("[RECIPE_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

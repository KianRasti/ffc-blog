import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import RecipeTemplate from "../../components/RecipeTemplate";

// This would typically come from a database or API
const recipes = [
  {
    id: 1,
    title: "Spicy Thai Basil Chicken",
    description: "A flavorful and aromatic Thai dish that's quick to make and packed with heat.",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.7,
    ratingCount: 142,
    cookTime: 30,
    prepTime: 15,
    difficulty: 2,
    servings: 4,
    calories: 380,
    datePosted: "2023-06-15",
    author: "Chef Maria Rodriguez",
    ingredients: [
      "1 lb boneless, skinless chicken breast, sliced",
      "3 cloves garlic, minced",
      "2 Thai chili peppers, finely chopped",
      "1 cup Thai basil leaves",
      "2 tbsp vegetable oil",
      "2 tbsp oyster sauce",
      "1 tbsp soy sauce",
      "1 tsp sugar",
      "1/4 cup chicken broth",
    ],
    instructions: [
      "In a small bowl, mix oyster sauce, soy sauce, sugar, and chicken broth. Set aside.",
      "Heat oil in a large skillet or wok over high heat.",
      "Add minced garlic and chili peppers. Stir-fry for about 30 seconds until fragrant.",
      "Add sliced chicken and stir-fry for 3-4 minutes until it starts to brown.",
      "Pour in the sauce mixture and continue to cook for another 2-3 minutes until the chicken is cooked through.",
      "Remove from heat and stir in the Thai basil leaves until they're just wilted.",
      "Serve hot with steamed rice.",
    ],
    tags: ["Thai", "Spicy", "Quick", "Chicken"],
  },
  // Add more recipes here...
];

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const recipe = recipes.find((r) => r.id === Number.parseInt(params.id));
  if (!recipe) {
    return {};
  }

  return {
    title: recipe.title,
    description: recipe.description,
    openGraph: {
      title: recipe.title,
      description: recipe.description,
      images: [{ url: recipe.image, width: 600, height: 400, alt: recipe.title }],
      type: "article",
      publishedTime: recipe.datePosted,
      authors: [recipe.author],
      tags: recipe.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: recipe.title,
      description: recipe.description,
      images: [recipe.image],
    },
  };
}

const difficultyLabels = ["Easy", "Medium", "Hard"];

interface Props {
  params: {
    id: string;
  };
}

export default function RecipePage({ params }: Props) {
  const recipe = recipes.find((r) => r.id === Number.parseInt(params.id));

  if (!recipe) {
    notFound();
  }

  return <RecipeTemplate recipe={recipe} />;
}

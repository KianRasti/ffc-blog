import Link from "next/link"
import Image from "next/image"
import { Star, Clock, Utensils } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Breakfast Recipes | Flavor Fusion Cooking",
  description: "Discover delicious breakfast recipes to start your day right with Flavor Fusion Cooking.",
}

const breakfastRecipes = [
  {
    id: 1,
    title: "Fluffy Pancakes",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.8,
    cookTime: 20,
    difficulty: 1,
  },
  {
    id: 2,
    title: "Avocado Toast",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.5,
    cookTime: 10,
    difficulty: 1,
  },
  {
    id: 3,
    title: "Breakfast Burrito",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.7,
    cookTime: 25,
    difficulty: 2,
  },
  // Add more breakfast recipes as needed
]

const difficultyLabels = ["Easy", "Medium", "Hard"]

export default function BreakfastRecipesPage() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-6 text-ffc-primary">Breakfast Recipes</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {breakfastRecipes.map((recipe) => (
              <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src={recipe.image || "/placeholder.svg"}
                  alt={recipe.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
                  <div className="flex items-center mb-2">
                    <Star className="text-ffc-secondary mr-1" size={16} />
                    <span className="text-gray-600">{recipe.rating.toFixed(1)}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <Clock className="text-ffc-accent mr-1" size={16} />
                    <span className="text-gray-600">{recipe.cookTime} mins</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <Utensils className="text-ffc-primary mr-1" size={16} />
                    <span className="text-gray-600">{difficultyLabels[recipe.difficulty - 1]}</span>
                  </div>
                  <Link
                    href={`/recipes/${recipe.id}`}
                    className="text-ffc-primary hover:text-ffc-accent transition-colors duration-200"
                  >
                    View Recipe
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


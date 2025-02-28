"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Star, Clock, Utensils } from "lucide-react"

const recipes = [
  {
    id: 1,
    title: "Spicy Thai Basil Chicken",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.5,
    cookTime: 30, 
    difficulty: 2,
    mealType: "dinner"
  },
  {
    id: 2,
    title: "Creamy Mushroom Risotto",
    image: "/placeholder.svg?height=200&width=300", 
    rating: 4.8,
    cookTime: 45,
    difficulty: 3,
    mealType: "dinner"
  },
  {
    id: 3,
    title: "Grilled Salmon with Lemon Butter",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.7,
    cookTime: 25,
    difficulty: 1,
    mealType: "lunch"
  },
  {
    id: 4,
    title: "Vegetarian Quinoa Bowl",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.6, 
    cookTime: 20,
    difficulty: 1,
    mealType: "lunch"
  },
  {
    id: 5, 
    title: "Classic Beef Bourguignon",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.9,
    cookTime: 180,
    difficulty: 3,
    mealType: "dinner"
  },
  {
    id: 6,
    title: "Homemade Margherita Pizza",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.7,
    cookTime: 40,
    difficulty: 2,
    mealType: "lunch"
  }
]

const difficultyIcons = [Utensils, Utensils, Utensils]

export default function AllRecipesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [cookTime, setCookTime] = useState("")
  const [difficulty, setDifficulty] = useState("")
  const [mealType, setMealType] = useState("")

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCookTime = 
      !cookTime || 
      (cookTime === "30" && recipe.cookTime < 30) ||
      (cookTime === "60" && recipe.cookTime >= 30 && recipe.cookTime <= 60) ||
      (cookTime === "120" && recipe.cookTime > 60)
    const matchesDifficulty = !difficulty || recipe.difficulty === parseInt(difficulty)
    const matchesMealType = !mealType || recipe.mealType === mealType

    return matchesSearch && matchesCookTime && matchesDifficulty && matchesMealType
  })

  return (
    <div className="bg-ffc-background min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center font-display text-ffc-primary">All Recipes</h1>
        
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <input
            type="text"
            placeholder="Search recipes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 rounded-lg border border-ffc-accent focus:outline-none focus:ring-2 focus:ring-ffc-secondary"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select 
              value={cookTime}
              onChange={(e) => setCookTime(e.target.value)}
              className="p-3 rounded-lg border border-ffc-accent focus:outline-none focus:ring-2 focus:ring-ffc-secondary"
            >
              <option value="">All Cook Times</option>
              <option value="30">Quick (&lt; 30 mins)</option>
              <option value="60">Moderate (30-60 mins)</option>
              <option value="120">Long (&gt; 1 hour)</option>
            </select>

            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="p-3 rounded-lg border border-ffc-accent focus:outline-none focus:ring-2 focus:ring-ffc-secondary"
            >
              <option value="">All Difficulty Levels</option>
              <option value="1">Beginner</option>
              <option value="2">Intermediate</option>
              <option value="3">Advanced</option>
            </select>

            <select
              value={mealType}
              onChange={(e) => setMealType(e.target.value)}
              className="p-3 rounded-lg border border-ffc-accent focus:outline-none focus:ring-2 focus:ring-ffc-secondary"
            >
              <option value="">All Meal Types</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="snacks">Snacks</option>
              <option value="drinks">Drinks</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={recipe.image || "/placeholder.svg"}
                alt={recipe.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 font-display text-ffc-primary">{recipe.title}</h3>
                <div className="flex items-center mb-2">
                  <Star className="text-ffc-secondary mr-1" size={16} />
                  <span className="text-ffc-muted">{recipe.rating.toFixed(1)}</span>
                </div>
                <div className="flex items-center mb-2">
                  <Clock className="text-ffc-accent mr-1" size={16} />
                  <span className="text-ffc-muted">{recipe.cookTime} mins</span>
                </div>
                <div className="flex items-center mb-2">
                  {difficultyIcons.slice(0, recipe.difficulty).map((Icon, index) => (
                    <Icon
                      key={index}
                      className={`mr-1 ${index < recipe.difficulty ? "text-ffc-secondary" : "text-gray-300"}`}
                      size={16}
                    />
                  ))}
                </div>
                <Link
                  href={`/recipes/${recipe.id}`}
                  className="text-ffc-primary hover:text-ffc-accent transition-colors duration-200 inline-block mt-2"
                >
                  View Recipe
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

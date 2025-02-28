"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import { Star, Clock, Utensils, Calendar, User, Printer, Share2 } from "lucide-react";
import type { Metadata } from "next";
import ShareRecipe from "../components/ShareRecipe";
import { useState } from "react";
import template_info from "../styles/template_info";

interface Recipe {
  id: number;
  title: string;
  description: string;
  image: string;
  rating: number;
  ratingCount: number;
  cookTime: number;
  prepTime: number;
  difficulty: number;
  servings: number;
  calories: number;
  datePosted: string;
  author: string;
  ingredients: string[];
  instructions: string[];
  tags: string[];
  [key: string]: any;
}

interface RecipeTemplateProps {
  recipe: Recipe;
}

const difficultyLabels = ["Easy", "Medium", "Hard"];

export default function RecipeTemplate({ recipe }: RecipeTemplateProps) {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  if (!recipe) {
    notFound();
  }

  return (
    <article className="bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-lg p-8">
          <header className="mb-8">
            <h1 className="text-5xl font-extrabold mb-4 font-display text-black">{recipe.title}</h1>
            <p className="text-2xl text-black mb-4">{recipe.description}</p>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center bg-ffc-primary text-white px-3 py-1 rounded-full">
                <Star className="text-ffc-secondary mr-1" size={16} />
                <span className="font-bold">{recipe.rating.toFixed(1)}</span>
                <span className="ml-1">({recipe.ratingCount} ratings)</span>
              </div>
              <div className="flex items-center bg-ffc-accent text-white px-3 py-1 rounded-full">
                <Clock className="mr-1" size={16} />
                <span className="font-bold">{recipe.cookTime + recipe.prepTime} mins</span>
              </div>
              <div className="flex items-center bg-ffc-secondary text-white px-3 py-1 rounded-full">
                <Utensils className="mr-1" size={16} />
                <span className="font-bold">{difficultyLabels[recipe.difficulty - 1]}</span>
              </div>
              <div className="flex items-center bg-ffc-primary text-white px-3 py-1 rounded-full">
                <Calendar className="mr-1" size={16} />
                <span className="font-bold">{recipe.datePosted}</span>
              </div>
              <div className="flex items-center bg-ffc-accent text-white px-3 py-1 rounded-full">
                <User className="mr-1" size={16} />
                <span className="font-bold">{recipe.author}</span>
              </div>
            </div>
          </header>

          <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-2xl font-extrabold mb-4 font-display text-black">Recipe Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex justify-between">
                <span className="text-black font-bold">Prep Time:</span>
                <span className="font-semibold">{recipe.prepTime} mins</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black font-bold">Cook Time:</span>
                <span className="font-semibold">{recipe.cookTime} mins</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black font-bold">Total Time:</span>
                <span className="font-semibold">{recipe.prepTime + recipe.cookTime} mins</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black font-bold">Servings:</span>
                <span className="font-semibold">{recipe.servings}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black font-bold">Calories:</span>
                <span className="font-semibold">{recipe.calories} kcal</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black font-bold">Difficulty:</span>
                <span className="font-semibold">{difficultyLabels[recipe.difficulty - 1]}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <Image
                src={recipe.image || "/placeholder.svg"}
                alt={recipe.title}
                width={600}
                height={400}
                className="w-full rounded-lg shadow-lg mb-8"
              />

              <section className="mb-8 bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-md p-6">
                <h2 className="text-3xl font-extrabold mb-4 font-display text-black">Ingredients</h2>
                <ul className="list-disc list-inside space-y-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-black text-lg">
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-md p-6">
                <h2 className="text-3xl font-extrabold mb-4 font-display text-black">Instructions</h2>
                <ol className="list-decimal list-outside space-y-4 ml-6">
                  {recipe.instructions.map((step, index) => (
                    <li key={index} className="text-black text-lg">
                      <span className="font-bold">{step}</span>
                    </li>
                  ))}
                </ol>
              </section>
            </div>

            <aside className="md:w-1/3">
              <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg p-6 shadow-md mb-8">
                <h3 className="text-xl font-extrabold mb-4 font-display text-black">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {recipe.tags.map((tag) => (
                    <span key={tag} className="bg-ffc-secondary text-white px-3 py-1 rounded-full text-sm font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between">
                <button className="bg-ffc-primary text-white px-4 py-2 rounded-full flex items-center hover:bg-ffc-accent transition-colors duration-200 font-bold">
                  <Printer size={16} className="mr-2" />
                  Print Recipe
                </button>
                <button
                  onClick={() => setIsShareModalOpen(true)}
                  className="bg-ffc-secondary text-white px-4 py-2 rounded-full flex items-center hover:bg-ffc-accent transition-colors duration-200 font-bold"
                >
                  <Share2 size={16} className="mr-2" />
                  Share Recipe
                </button>
              </div>
              {isShareModalOpen && (
                <ShareRecipe
                  recipeId={recipe.id}
                  recipeTitle={recipe.title}
                  onClose={() => setIsShareModalOpen(false)}
                />
              )}
            </aside>
          </div>
        </div>
      </div>
    </article>
  );
}

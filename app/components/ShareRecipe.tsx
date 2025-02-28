"use client"

import { useState } from "react"
import { X } from "lucide-react"

interface ShareRecipeProps {
  recipeId: number
  recipeTitle: string
  onClose: () => void
}

export default function ShareRecipe({ recipeId, recipeTitle, onClose }: ShareRecipeProps) {
  const [copied, setCopied] = useState(false)
  const recipeUrl = `https://flavorfusioncooking.com/recipes/${recipeId}`

  const copyToClipboard = () => {
    navigator.clipboard.writeText(recipeUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-ffc-primary">Share Recipe</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <p className="mb-4">Share this delicious recipe with your friends and family!</p>
        <h3 className="text-lg font-semibold mb-2">{recipeTitle}</h3>
        <div className="flex mb-4">
          <input
            type="text"
            value={recipeUrl}
            readOnly
            className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md"
          />
          <button
            onClick={copyToClipboard}
            className="bg-ffc-primary text-white px-4 py-2 rounded-r-md hover:bg-ffc-accent transition-colors duration-200"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
        <div className="flex justify-center space-x-4">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(recipeUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            Facebook
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(recipeUrl)}&text=${encodeURIComponent(`Check out this delicious recipe: ${recipeTitle}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600"
          >
            Twitter
          </a>
          <a
            href={`mailto:?subject=${encodeURIComponent(`Check out this recipe: ${recipeTitle}`)}&body=${encodeURIComponent(`I found this delicious recipe and thought you might like it: ${recipeUrl}`)}`}
            className="text-gray-600 hover:text-gray-800"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  )
}


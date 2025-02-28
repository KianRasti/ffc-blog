import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Submit a Recipe | Flavor Fusion Cooking",
  description: "Share your favorite recipe with the Flavor Fusion Cooking community.",
}

export default function SubmitRecipePage() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-6 text-ffc-primary">Submit a Recipe</h1>
          <p className="text-lg mb-6">
            Share your culinary creations with our community! Fill out the form below to submit your recipe.
          </p>
          <form className="max-w-2xl mx-auto">
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Recipe Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-ffc-primary focus:border-ffc-primary"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-ffc-primary focus:border-ffc-primary"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700 mb-1">
                Ingredients (one per line)
              </label>
              <textarea
                id="ingredients"
                name="ingredients"
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-ffc-primary focus:border-ffc-primary"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="instructions" className="block text-sm font-medium text-gray-700 mb-1">
                Instructions (one step per line)
              </label>
              <textarea
                id="instructions"
                name="instructions"
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-ffc-primary focus:border-ffc-primary"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="cookTime" className="block text-sm font-medium text-gray-700 mb-1">
                Cook Time (in minutes)
              </label>
              <input
                type="number"
                id="cookTime"
                name="cookTime"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-ffc-primary focus:border-ffc-primary"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700 mb-1">
                Difficulty
              </label>
              <select
                id="difficulty"
                name="difficulty"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-ffc-primary focus:border-ffc-primary"
                required
              >
                <option value="">Select difficulty</option>
                <option value="1">Easy</option>
                <option value="2">Medium</option>
                <option value="3">Hard</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                Recipe Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-ffc-primary focus:border-ffc-primary"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-ffc-primary text-white py-2 px-4 rounded-md hover:bg-ffc-accent transition-colors duration-200"
              >
                Submit Recipe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}


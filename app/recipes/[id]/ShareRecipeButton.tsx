"use client";

import { useState } from "react";
import { Share2 } from "lucide-react";
import ShareRecipe from "../../components/ShareRecipe";

interface ShareRecipeButtonProps {
  recipeId: number;
  recipeTitle: string;
}

export default function ShareRecipeButton({ recipeId, recipeTitle }: ShareRecipeButtonProps) {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsShareModalOpen(true)}
        className="bg-ffc-secondary text-white px-4 py-2 rounded-full flex items-center hover:bg-ffc-accent transition-colors duration-200 font-bold"
      >
        <Share2 size={16} className="mr-2" />
        Share Recipe
      </button>
      {isShareModalOpen && (
        <ShareRecipe
          recipeId={recipeId}
          recipeTitle={recipeTitle}
          onClose={() => setIsShareModalOpen(false)}
        />
      )}
    </>
  );
}

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Star, Clock, Utensils } from "lucide-react"

const recentPosts = [
  {
    id: 1,
    title: "Spicy Thai Basil Chicken",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.5,
    cookTime: 30,
    difficulty: 2,
  },
  {
    id: 2,
    title: "Creamy Mushroom Risotto",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.8,
    cookTime: 45,
    difficulty: 3,
  },
  {
    id: 3,
    title: "Grilled Salmon with Lemon Butter",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.7,
    cookTime: 25,
    difficulty: 1,
  },
]

const difficultyIcons = [Utensils, Utensils, Utensils]

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-r from-ffc-primary to-ffc-accent py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-display">Flavor Fusion Cooking</h1>
            <p className="text-xl mb-8">Discover culinary masterpieces and unleash your inner chef</p>
            <div className="space-x-4">
              <Link
                href="/recipes"
                className="inline-block bg-ffc-secondary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-ffc-accent transition-colors duration-200"
              >
                Explore Recipes
              </Link>
              <Link
                href="/submit-recipe"
                className="inline-block bg-white text-ffc-primary px-8 py-3 rounded-full text-lg font-semibold hover:bg-ffc-secondary hover:text-white transition-colors duration-200"
              >
                Submit Recipe
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center font-display text-ffc-primary">Recent Recipes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 font-display text-ffc-primary">{post.title}</h3>
                  <div className="flex items-center mb-2">
                    <Star className="text-ffc-secondary mr-1" size={16} />
                    <span className="text-ffc-muted">{post.rating.toFixed(1)}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <Clock className="text-ffc-accent mr-1" size={16} />
                    <span className="text-ffc-muted">{post.cookTime} mins</span>
                  </div>
                  <div className="flex items-center mb-2">
                    {difficultyIcons.slice(0, post.difficulty).map((Icon, index) => (
                      <Icon key={index} className="text-ffc-secondary mr-1" size={16} />
                    ))}
                  </div>
                  <Link
                    href={`/recipes/${post.id}`}
                    className="text-ffc-primary hover:text-ffc-accent transition-colors duration-200 flex items-center"
                  >
                    Full Recipe <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/recipes"
              className="inline-block bg-ffc-primary text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-ffc-accent transition-colors duration-200"
            >
              View All Recipes
            </Link>
          </div>
        </div>
      </section>

      <section id="newsletter" className="py-16 bg-ffc-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 font-display text-ffc-primary">
              Stay Updated with Our Latest Recipes
            </h2>
            <p className="text-ffc-muted mb-6">Subscribe to our newsletter and never miss a delicious recipe!</p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-full border-2 border-ffc-primary focus:outline-none focus:border-ffc-accent"
                required
              />
              <button
                type="submit"
                className="bg-ffc-secondary text-white px-6 py-2 rounded-full font-semibold hover:bg-ffc-accent transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}


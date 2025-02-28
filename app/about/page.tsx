import Image from "next/image"

export const metadata = {
  title: "About Us | Flavor Fusion Cooking",
  description:
    "Learn about the passionate team behind Flavor Fusion Cooking and our mission to inspire home cooks worldwide.",
}

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-6 text-ffc-primary">About Flavor Fusion Cooking</h1>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Flavor Fusion Cooking Team"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg mb-4">
                Welcome to Flavor Fusion Cooking, where culinary passion meets innovation. Our journey began in 2020
                with a simple goal: to inspire home cooks to explore new flavors and techniques from around the world.
              </p>
              <p className="text-lg mb-4">
                Our team of experienced chefs and food enthusiasts work tirelessly to bring you unique, delicious
                recipes that blend traditional cooking methods with modern twists. We believe that cooking is not just
                about nourishment, but also about creativity, cultural exchange, and bringing people together.
              </p>
              <p className="text-lg mb-4">At Flavor Fusion Cooking, we're committed to:</p>
              <ul className="list-disc list-inside mb-4">
                <li>Providing easy-to-follow, reliable recipes</li>
                <li>Showcasing diverse cuisines from around the globe</li>
                <li>Encouraging sustainable and mindful cooking practices</li>
                <li>Building a community of passionate home cooks</li>
              </ul>
              <p className="text-lg">
                Join us on this flavorful journey and let's create something delicious together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Flavor Fusion Cooking",
  description: "Get in touch with the Flavor Fusion Cooking team for questions, suggestions, or collaborations.",
}

export default function ContactPage() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-6 text-ffc-primary">Contact Us</h1>
          <p className="text-lg mb-6">
            We'd love to hear from you! Whether you have a question about a recipe, want to suggest a new feature, or
            are interested in collaborating, please don't hesitate to reach out.
          </p>
          <form className="max-w-2xl mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-ffc-primary focus:border-ffc-primary"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-ffc-primary focus:border-ffc-primary"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-ffc-primary focus:border-ffc-primary"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-ffc-primary focus:border-ffc-primary"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-ffc-primary text-white py-2 px-4 rounded-md hover:bg-ffc-accent transition-colors duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}


import type { Metadata } from "next"

export const template_info = {
  // Color Palette
  colors: {
    primary: "#1A5F7A", // Deep teal
    secondary: "#FFA41B", // Warm orange
    accent: "#00B4D8", // Bright blue
    background: "#F5F5F5", // Light gray
    text: "#333333", // Dark gray
    muted: "#757575", // Medium gray
    white: "#FFFFFF",
    black: "#000000",
  },

  // Typography
  fonts: {
    sans: "var(--font-inter)", // Main text font
    display: "var(--font-playfair-display)", // Headings and display text
  },

  // Font Sizes (in rem)
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
  },

  // Font Weights
  fontWeights: {
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
  },

  // Gradients
  gradients: {
    primaryToAccent: "linear-gradient(to right, #1A5F7A, #00B4D8)",
    secondaryToAccent: "linear-gradient(to right, #FFA41B, #00B4D8)",
  },

  // Shadows
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  },

  // Border Radius
  borderRadius: {
    sm: "0.125rem",
    md: "0.375rem",
    lg: "0.5rem",
    full: "9999px",
  },

  // Spacing (in rem)
  spacing: {
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    20: "5rem",
  },

  // Layout
  layout: {
    maxWidth: "1200px",
    containerPadding: "1rem",
  },

  // Breakpoints
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },

  // Component Styles
  components: {
    // Button styles
    button: {
      primary: `
        bg-ffc-primary text-white font-semibold py-2 px-4 rounded-full
        hover:bg-ffc-accent transition-colors duration-200
      `,
      secondary: `
        bg-ffc-secondary text-white font-semibold py-2 px-4 rounded-full
        hover:bg-ffc-accent transition-colors duration-200
      `,
      outline: `
        bg-transparent border-2 border-ffc-primary text-ffc-primary font-semibold py-2 px-4 rounded-full
        hover:bg-ffc-primary hover:text-white transition-colors duration-200
      `,
    },

    // Card styles
    card: `
      bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-md p-6
    `,

    // Input styles
    input: `
      w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm
      focus:outline-none focus:ring-2 focus:ring-ffc-primary focus:border-ffc-primary
    `,

    // Section styles
    section: `
      py-12 px-4
    `,

    // Header styles
    header: `
      bg-white shadow-md py-4
    `,

    // Footer styles
    footer: `
      bg-ffc-primary text-white py-12
    `,
  },

  // Animation
  animation: {
    transition: "transition-all duration-200 ease-in-out",
  },

  // SEO and Metadata
  defaultMetadata: {
    title: {
      default: "Flavor Fusion Cooking",
      template: "%s | Flavor Fusion Cooking",
    },
    description:
      "Discover culinary masterpieces and unleash your inner chef with our delicious recipes and cooking tips.",
    keywords: ["cooking", "recipes", "culinary", "food", "chef"],
    authors: [{ name: "Flavor Fusion Cooking Team" }],
    creator: "Flavor Fusion Cooking",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://flavorfusioncooking.com",
      siteName: "Flavor Fusion Cooking",
      title: "Flavor Fusion Cooking - Discover Delicious Recipes",
      description:
        "Explore a world of flavors with our diverse collection of recipes. From quick weeknight dinners to gourmet feasts, we have something for every cook.",
      images: [
        {
          url: "https://flavorfusioncooking.com/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Flavor Fusion Cooking",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Flavor Fusion Cooking - Discover Delicious Recipes",
      description:
        "Explore a world of flavors with our diverse collection of recipes. From quick weeknight dinners to gourmet feasts, we have something for every cook.",
      images: ["https://flavorfusioncooking.com/twitter-image.jpg"],
      creator: "@FlavorFusionCooking",
    },
  } as Metadata,

  // Accessibility
  a11y: {
    skipLink: "Skip to main content",
    ariaLabels: {
      mainNav: "Main navigation",
      footer: "Footer",
      searchInput: "Search recipes",
      newsletter: "Newsletter subscription",
    },
  },
}

export default template_info


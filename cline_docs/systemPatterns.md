# System Patterns
# System Patterns

## Architectural Approach
- Next.js App Router with optimized build configuration:
  - Parallel server compiles
  - Build worker threads
  - Linting/type checking disabled during builds
- Modular component architecture
- Atomic design pattern for UI components
- Experimental optimizations enabled:
  - Webpack build worker
  - Parallel server build traces

## Key Directories
- `app/`: Page routes and layout
- `components/ui`: ShadCN UI primitives
- `hooks`: Custom React hooks
- `lib`: Utilities and helpers

## Component Structure
1. Pages use layout.tsx for consistent structure
2. UI components follow ShadCN composition patterns
3. Mobile-first responsive design using Tailwind breakpoints

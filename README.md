# Flavor Fusion Cooking Blog

A Next.js-based cooking blog with user authentication, recipe management, and a modern UI.

## Development Setup

1. Install dependencies:
```bash
npm install
```

2. Set up your environment variables by copying the example file:
```bash
cp .env.example .env
```

3. Update the `.env` file with your configuration:
- Set up your MySQL database URL
- Generate NEXTAUTH secrets (you can use `openssl rand -base64 32`)
- Configure other variables as needed

4. Initialize the database:
```bash
npx prisma generate
npx prisma db push
```

5. Run the development server:
```bash
npm run dev
```

## IONOS Deployment

1. Create a new project in IONOS Deploy Now dashboard

2. Configure the following environment variables in IONOS:
- `DATABASE_URL`: Your MySQL connection string
- `NEXTAUTH_URL`: Your production domain (e.g., https://your-domain.com)
- `NEXTAUTH_SECRET`: A secure random string
- `NEXTAUTH_JWT_SECRET`: A secure random string

3. Deploy using IONOS Deploy Now:
- Connect your GitHub repository
- The `.ionos.yaml` file will handle the deployment configuration
- Database migrations will run automatically during deployment

## Features

- User authentication with NextAuth.js
- MySQL database with Prisma ORM
- Full CRUD operations for recipes
- Responsive design with Tailwind CSS
- Server-side rendering with Next.js 14
- API routes for backend functionality

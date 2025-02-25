# Power Platform Experts - Next.js 14 Project

This repository contains a Next.js 14 website for Office Experts, migrated from WordPress. The project uses the App Router, Server-Side Rendering (SSR), and SCSS Modules for styling.

## 🏗 Project Structure

    ├── app/
    │   ├── (components)/        # Shared components for the app route
    │   ├── api/                 # API routes
    │   │   ├── contactForm/     # Contact form email handling
    │   │   ├── quoteForm/       # Quote form email handling
    │   │   └── surveyForm/      # Survey form email handling
    │   ├── client-testimonials/ # Testimonials page
    │   ├── contact-us/         # Contact pages
    │   ├── meet-the-team/      # Team page
    │   ├── services/           # Service pages
    │   ├── layout.js           # Root layout
    │   └── page.js             # Home page
    ├── components/             # Shared components
    ├── public/                 # Static assets
    ├── styles/                # SCSS modules
    └── utils/                 # Utility functions

## 🚀 Key Features

### Server-Side Rendering (SSR)

- Maximizes SEO with server-side rendered content
- Uses Next.js 14 App Router for enhanced performance
- Minimizes client-side JavaScript where possible

### Email Integration

The project uses SendGrid for email handling with three main endpoints:

- `/api/contactForm` - General contact form submissions
- `api/contactLocation` - Contact submission from location specific URL
- `/api/quoteForm` - Quote request handling with file attachments
- `api/quoteLocation` - Quote submission from location specific URL
- `/api/surveyForm` - Post-contact survey submissions

### Schema Generation

Comprehensive schema generation for SEO:

- `schemaGenerators.js` - Generates professional service and organization schemas
- `testimonialSchemaGenerator.js` - Generates schemas for testimonials
- Implements schema.org standards throughout

## 💻 Technical Stack

- **Framework**: Next.js 14
<!-- note! If you upgrade to nextjs 15 caching strategy must be changed -->
- **Styling**: SCSS Modules, global.css in /app
- **Email Service**: SendGrid
- **Deployment**: Vercel
- **Image Optimization**: Next.js Image Component
- **State Management**: React Hooks (no external state management)

## 🔐 Security Features

- CSRF protection
- File upload validation
- Honeypot fields for form spam prevention
- Secure headers implementation
- Content Security Policy (CSP) configuration
<!-- Found in middleware.js and next.config.js -->

## 📦 Key Components

### Navigation

- Responsive header with dynamic dropdowns
- Mobile-first navigation system
- Multi-level menu structure

### Forms

- Quote form with file upload capability
- Contact Form request system
- Post-submission survey
- Form validation and error handling

## 🎨 Styling Architecture

- SCSS modules for component-specific styling
- Global variables in `globals.scss`
- Responsive breakpoint mixins
- No external CSS frameworks

## 🛠 Development Guidelines

### Component Creation

- Prefer server components unless client interactivity is required
- Use `"use client"` directive only when necessary
- Keep components focused and single-responsibility

### Styling Rules

- Use SCSS modules exclusively
- Follow BEM-like naming convention
- Maintain responsive design principles
- Avoid inline styles

### Performance Considerations

- Implement image optimization
- Use dynamic imports for non-critical components
- Minimize client-side JavaScript
- Implement proper caching strategies

## 📐 Schema Structure

The project implements extensive schema.org structured data:

- Organization schema
- Professional service schema
- Testimonial schemas
- Location-specific schemas
- Breadcrumb schemas

## 🔄 State Management

- Uses React's built-in state management
- Context API for global state when necessary
- No external state management libraries

## Animations

## 📱 Responsive Design

Implements responsive design with the following breakpoints:

    $breakpoints: (
      smallPhone: 359px,
      phone: 449px,
      phoneLandscape: 766px,
      tablet: 1024px,
      desktop: 1199px
    );

## 🚀 Deployment

The project is configured for Vercel deployment with:

- Automatic preview deployments
- Environment variable management
- Edge caching configuration
- Image optimization

## 📋 Environment Variables Required

    SENDGRID_API_KEY=your_sendgrid_api_key
    NEXT_PUBLIC_GA_ID=your_google_analytics_id

## 🏃‍♂️ Running the Project

    # Install dependencies
    npm install

    # Development
    npm run dev

    # Production build
    npm run build

    # Start production server
    npm start

## 🧪 Testing

    # Run linting
    npm run lint

    # Build sitemap
    npm run postbuild

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [SendGrid Documentation](https://docs.sendgrid.com)
- [Vercel Documentation](https://vercel.com/docs)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📝 License

This project is private and confidential. All rights reserved.

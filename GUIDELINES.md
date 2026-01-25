# Project Guidelines

This document outlines the coding standards and design system for the **Portfolio** section (and potentially future expansions) of the website.

## Technology Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **UI Components**: Radix UI Primitives + shadcn/ui patterns

## key Principles

1.  **Component Composition**: Build complex UIs using small, reusable primitive components.
2.  **Accessibility**: Ensure all interactive elements are accessible (ARIA attributes, keyboard navigation) using Radix UI primitives.
3.  **Utility-First**: Use Tailwind CSS for all styling. Avoid CSS modules or styled-components unless absolutely necessary.
4.  **Type Safety**: All components must be strictly typed.

## File Structure

- `src/components/ui/`: Generic, reusable UI components (Button, Input, Card, etc.).
- `src/components/`: Feature-specific components.
- `src/lib/utils.ts`: Utility functions (e.g., `cn` for className merging).

## Coding Standards

### Class Name Merging
Use the `cn` utility to merge Tailwind classes and handle conflicts.

```tsx
import { cn } from "@/lib/utils"

export function MyComponent({ className, ...props }: ComponentProps) {
  return <div className={cn("bg-red-500", className)} {...props} />
}
```

### Component Definition
Use `React.ComponentProps` or `React.HTMLAttributes` for prop typing to ensure standard HTML attributes are supported.

```tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}
```

### Exports
Use named exports for components.

## Design System Tokens
(To be expanded as we implement Tailwind theme)
- **Radius**: `0.5rem` (rounded-md)
- **Primary Color**: Define in `globals.css` / `tailwind.config.ts`

## New Components (Portfolio)
The following components are approved for use in the portfolio section:
- Accordion, Alert, Button, Card, Carousel, Dialog, Drawer, Input, Label, Select, Sheet, etc.

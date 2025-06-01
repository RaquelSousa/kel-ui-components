# @kel/ui-components

A modern, accessible UI component library built with React 19, TypeScript, and Tailwind CSS. Based on shadcn/ui design system with additional animated components and enhanced functionality.

## Features

- 🚀 **React 19** - Built with the latest React features
- 🎨 **Tailwind CSS** - Utility-first styling with custom design tokens
- 🎯 **TypeScript** - Full type safety and excellent DX
- ♿ **Accessible** - Built on Radix UI primitives
- 🎬 **Animated** - Smooth animations with Framer Motion
- 📱 **Responsive** - Mobile-first design approach
- 🌙 **Dark Mode** - Built-in dark mode support
- 📦 **Tree Shakeable** - Import only what you need

## Installation

```bash
npm install @kel/ui-components
# or
yarn add @kel/ui-components
# or
pnpm add @kel/ui-components
```

### Peer Dependencies

Make sure you have these installed:

```bash
npm install react@^19.0.0 react-dom@^19.0.0
```

## Setup

1. **Import the CSS file** in your app's root file:

```tsx
import "@kel/ui-components/styles.css";
```

2. **Configure Tailwind CSS** (if you're using Tailwind in your project):

Add the component library to your `tailwind.config.js`:

```js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@kel/ui-components/dist/**/*.js",
  ],
  // ... rest of your config
};
```

## Usage

### Basic Components

```tsx
import { Button, Card, Input, Label } from "@kel/ui-components";

function MyComponent() {
  return (
    <Card className="p-6">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="Enter your email" />
      <Button className="mt-4">Submit</Button>
    </Card>
  );
}
```

### Animated Components

```tsx
import {
  AnimatedCard,
  AnimatedSkillBar,
  SectionHeader,
} from "@kel/ui-components";

function AnimatedSection() {
  return (
    <section className="py-16">
      <SectionHeader
        title="My Skills"
        subtitle="Technologies I work with"
        centered
      />

      <div className="grid gap-6 md:grid-cols-2">
        <AnimatedCard delay={0.1}>
          <div className="p-6">
            <h3>Frontend Development</h3>
            <AnimatedSkillBar skill="React" percentage={90} delay={0.2} />
          </div>
        </AnimatedCard>

        <AnimatedCard delay={0.2}>
          <div className="p-6">
            <h3>Backend Development</h3>
            <AnimatedSkillBar skill="Node.js" percentage={85} delay={0.3} />
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
}
```

### Toast Notifications

```tsx
import { useToast, Button } from "@kel/ui-components";

function ToastExample() {
  const { toast } = useToast();

  return (
    <Button
      onClick={() =>
        toast({
          title: "Success!",
          description: "Your action was completed successfully.",
        })
      }
    >
      Show Toast
    </Button>
  );
}
```

### Using Animations

```tsx
import { motion } from "framer-motion";
import { fadeIn, slideUp, staggerContainer } from "@kel/ui-components";

function AnimatedList() {
  const items = ["Item 1", "Item 2", "Item 3"];

  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="visible">
      {items.map((item, index) => (
        <motion.div
          key={index}
          variants={fadeIn}
          className="p-4 border rounded"
        >
          {item}
        </motion.div>
      ))}
    </motion.div>
  );
}
```

## Available Components

### UI Components

- `Alert` - Alert messages with variants
- `AnimatedCard` - Card with entrance animations
- `AnimatedSkillBar` - Progress bar with animations
- `Badge` - Status and category badges
- `Button` - Interactive buttons with variants
- `Card` - Container component
- `Example` - Simple example component
- `Input` - Form input field
- `Label` - Form labels
- `ScrollArea` - Custom scrollbar area
- `ScrollProgress` - Page scroll indicator
- `SectionHeader` - Animated section headers
- `Separator` - Visual dividers
- `Skeleton` - Loading placeholders
- `Textarea` - Multi-line text input
- `Tooltip` - Contextual tooltips

### Toast Components

- `RadixToaster` - Radix-based toast provider
- `SonnerToaster` - Sonner-based toast provider
- `Toast` - Individual toast component
- `useToast` - Toast hook for triggering notifications

### Hooks

- `useAnimations` - Animation utilities
- `useToast` - Toast management

### Animation Variants

- `fadeIn`, `slideUp`, `slideInLeft`, `slideInRight`
- `scaleIn`, `rotateIn`, `cardHover`, `buttonPress`
- `staggerContainer`, `staggerItem`
- `progressBar`, `pulse`, `float`
- And many more...

## Development

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Setup

```bash
# Clone the repository
git clone <your-repo-url>
cd kel-ui-components

# Install dependencies
npm install

# Start development
npm run dev

# Build the library
npm run build

# Run type checking
npm run type-check

# Run linting
npm run lint
```

### Project Structure

```
src/
├── components/ui/     # UI components
├── hooks/            # React hooks
├── lib/              # Utilities and animations
├── styles/           # CSS and styling
├── types/            # TypeScript type definitions
└── index.ts          # Main export file
```

### Adding New Components

1. Create your component in `src/components/ui/`
2. Export it from `src/index.ts`
3. Add proper TypeScript types
4. Follow the established patterns for styling and props

## TypeScript Support

The library is fully typed with comprehensive TypeScript definitions. All components include proper type exports for extending and customizing.

```tsx
import { ButtonProps, CardProps } from "@kel/ui-components";

interface CustomButtonProps extends ButtonProps {
  loading?: boolean;
}
```

## Customization

All components are built with customization in mind:

- **className prop** - Override styles with Tailwind classes
- **Variant system** - Built-in variants for different use cases
- **CSS variables** - Customize colors and spacing
- **Composition** - Combine components for complex UIs

## Examples

For comprehensive examples and usage patterns, see [EXAMPLES.md](./EXAMPLES.md).

## Package Information

- **Bundle Size**: ~415.4 kB (gzipped)
- **Unpacked Size**: ~2.2 MB
- **Exports**: ESM and CommonJS
- **TypeScript**: Full type definitions included
- **React**: Compatible with React 19+

## Publishing

To publish this package:

1. Update the version in `package.json`
2. Update the repository URLs to point to your actual GitHub repository
3. Run `npm run release` to build and publish

```bash
# For testing the package locally
npm run release:dry

# For actual publishing
npm run release
```

# Welcome to Modak Store 👋

## Architecture

This project follows the **Screaming Architecture** pattern, which organizes code around features rather than technical concerns. This approach makes the codebase more intuitive and easier to maintain by grouping related functionality together.

### Project Structure

```
.
├── app/             # Expo router application routes
│   ├── _layout.tsx  # Root layout component
│   ├── (app)/       # Main app routes
│   └── (auth)/      # Authentication routes
│
├── features/        # Feature-based modules
│   ├── products/    # Products feature
│   └── categories/  # Categories feature
│
├── shared/          # Shared utilities and components
│   ├── components/  # Reusable UI components
│   ├── hooks/       # Shared custom hooks
│   ├── providers/   # Third-party library providers
│   ├── assets/      # Static assets
│   ├── configs/     # Global configurations
│   └── utils/       # Utility functions
│
└── [configuration files]
```

### Screaming Architecture Benefits

This architectural approach offers several advantages:

- **Intuitive structure**: The directory structure clearly communicates the purpose of the application
- **Domain-centered organization**: Code is organized by business domain rather than technical concerns
- **Feature cohesion**: Related code stays together, making it easier to understand and modify
- **Improved maintainability**: Changes to a feature affect only one directory
- **Clear boundaries**: Dependencies between features are explicit and controlled

### Feature Organization

Each feature in the `features/` directory follows a consistent organization pattern:

#### Feature Structure

A feature typically includes these key files and directories:

```
feature-name/
├── components/             # UI components specific to this feature
│   ├── ComponentName.tsx   # Individual components
│   └── ...
├── feature-name.api.ts     # API integration and data fetching
├── feature-name.hooks.ts   # Custom hooks for the feature
├── feature-name.types.ts   # TypeScript type definitions
├── feature-name.utils.ts   # Utility functions
├── feature-name.consts.ts  # Constants and static data
└── feature-name.store.ts   # State management (using Zustand)
```

#### File Purpose and Content

- **components/**: Contains React components specific to the feature
  - Each component should have a single responsibility
  - Complex features may have nested component directories
- **feature-name.api.ts**: Handles all API calls related to the feature
  - Defines functions for fetching data from backend services
  - Encapsulates API endpoints and response handling
- **feature-name.hooks.ts**: Custom React hooks for the feature
  - Typically uses React Query for data fetching
  - Provides reusable logic for components
- **feature-name.types.ts**: TypeScript type definitions
  - Defines interfaces and types for the feature's data models
  - Ensures type safety across the feature
- **feature-name.utils.ts**: Utility functions for data manipulation
  - Pure functions with no side effects
  - Examples: data formatting, sorting, filtering
- **feature-name.consts.ts**: Constants used throughout the feature
  - Default values, configuration options, static data
  - Shared values that don't change frequently
- **feature-name.store.ts**: State management for the feature
  - Uses Zustand for client-side state management
  - Handles UI state that needs to persist across components

#### Example

- **Products Feature**:

  - `products.api.ts`: Functions to fetch products from the API
  - `products.hooks.tsx`: Custom hooks for product data fetching and caching
  - `products.types.ts`: Defines the Product interface and related types
  - `products.utils.ts`: Functions for sorting, filtering, and formatting products
  - `products.consts.ts`: Default values and skeleton data for loading states
  - `products.store.ts`: Zustand store for sorting preferences
  - `components/`: Product-specific UI components like ProductCard, ProductList

### File Organization

Each feature follows a consistent file organization pattern that maintains clear separation of concerns:

- Components specific to a feature are contained within the feature directory
- Shared components and utilities are placed in the `shared` directory
- Routing and layout concerns are handled in the `app` directory

## Icons

This project uses Octicons through `@expo/vector-icons` for all icon needs. Octicons is a scalable set of icons handcrafted by GitHub that provides clean, consistent icons for the application interface.

### Usage

```tsx
import { Octicons } from '@expo/vector-icons'

// In your component
;<Octicons name='search' size={24} color='#000' />
```

Octicons are available in different sizes (12px, 16px, 24px, 48px, and 96px) to meet various UI requirements.

For a complete list of available icons, visit [Primer Octicons](https://primer.style/octicons/).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

3. Run on your preferred platform

   ```bash
   # For iOS
   npx expo start --ios

   # For Android
   npx expo start --android
   ```

## API Integration

This app uses the [DummyJSON](https://dummyjson.com/) API to fetch product data. The following endpoints are used:

- `https://dummyjson.com/products` - Get all products
- `https://dummyjson.com/products/categories` - Get all categories
- `https://dummyjson.com/products/{id}` - Get product by ID
- `https://dummyjson.com/products/category/{category}` - Get products by category

## Development

The app is built using:

- **Expo Router**: For declarative routing and navigation
- **React Native**: For building the native mobile UI
- **TypeScript**: For type-safe development
- **TailwindCSS/NativeWind**: For styling components
- **React Query**: For server state management, caching, and data fetching
- **Zustand**: For client-state management including sort preferences
- **Animated API**: For smooth animations and transitions
- **@expo/vector-icons**: For icon system with Octicons

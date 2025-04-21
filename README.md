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
│   ├── configs/      # Global configurations
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

### File Organization

Each feature follows a consistent file organization pattern that maintains clear separation of concerns:

- Components specific to a feature are contained within the feature directory
- Shared components and utilities are placed in the `shared` directory
- Routing and layout concerns are handled in the `app` directory

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

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo


# Flutter App Code Standards & Best Practices

This document outlines the key resources, style guides, and best practices a Flutter app should follow to ensure high-quality, maintainable, and consistent code.

---

## 1. Official Flutter & Dart Style Guidelines

### Dart Style Guide (must-read)
- Effective Dart: Style Guide available at https://dart.dev/guides/language/effective-dart/style

### Flutter Code Style Guide (official reference)
- Flutter SDK source code on GitHub: https://github.com/flutter/flutter/tree/master/packages/flutter/lib/src

---

## 2. Clean Code Principles for Flutter

### Principles
- Small widgets & functions
- Single responsibility principle
- Avoid deeply nested builders
- Prefer StatelessWidget over StatefulWidget
- Keep business logic out of UI layer

### Resource
- Clean Architecture + Flutter tutorial by Reso Coder: https://resocoder.com/clean-architecture

---

## 3. Naming Conventions

| Element      | Convention        | Example                  |
|--------------|-------------------|--------------------------|
| Classes      | PascalCase        | `UserProfileWidget`      |
| Variables    | camelCase         | `isLoggedIn`             |
| Constants    | lowerCamelCase or UPPER_CASE | `appTitle`, `MAX_USERS` |
| Files        | snake_case.dart   | `login_screen.dart`      |
| Directories  | snake_case        | `user_profile/`          |

---

## 4. Project Structure Guidelines

```text
lib/
├── core/             # Constants, themes, utils
├── features/         # Feature-based separation
│   └── login/
│       ├── data/
│       ├── domain/
│       └── presentation/
├── shared/           # Shared widgets, models
└── main.dart
```

### Resource
- Very Good Ventures website: https://verygood.ventures

---

## 5. Linting & Static Analysis

### Tools

Use `flutter_lints` package for official lint rules.  
Alternatively, use `very_good_analysis` package for stricter rules.

Run analysis commands with:

```bash
flutter pub get
flutter analyze
```

---

## 6. Testing Best Practices

- Unit tests for logic
- Widget tests for UI
- Integration tests for end-to-end flows

### Resource
- Official Flutter Testing documentation: https://docs.flutter.dev/testing

---

## 7. Performance Best Practices

- Use `const` constructors where possible
- Minimize rebuilds with `const` widgets and selectors
- Avoid expensive operations in `build()`
- Profile with Flutter DevTools

### Resource
- Flutter Performance Tips: https://docs.flutter.dev/perf/best-practices

---

## 8. Code Documentation

Use Dart-style doc comments:

```dart
/// Fetches a list of users from the API.
Future<List<User>> getUsers() async {
  ...
}
```

Document all public classes, functions, and helpers.

---

## 9. Architecture Patterns

| Pattern     | When to Use               | Resource                             |
|-------------|---------------------------|--------------------------------------|
| Provider    | Small to medium apps      | https://pub.dev/packages/provider     |
| BLoC        | Complex apps, testability | https://bloclibrary.dev               |
| Riverpod    | Clean DI, testable state  | https://riverpod.dev                  |

---

## 10. UI/UX Consistency & Theming

- Use `ThemeData` and `ColorScheme` consistently
- Define styles in `theme.dart`
- Use `TextTheme`, `ButtonThemeData`, etc.

### Resource
- Theming in Flutter documentation: https://docs.flutter.dev/cookbook/design/themes

---

## Summary: Must-Have Resources

| Purpose             | Resource URL                                           |
|---------------------|--------------------------------------------------------|
| Style Guide         | https://dart.dev/guides/language/effective-dart/style  |
| Architecture        | https://resocoder.com/clean-architecture                |
| Project Structure   | https://verygood.ventures                               |
| Linting             | https://pub.dev/packages/flutter_lints, https://pub.dev/packages/very_good_analysis |
| State Management    | https://pub.dev/packages/provider, https://bloclibrary.dev, https://riverpod.dev |
| Testing             | https://docs.flutter.dev/testing                        |
| Performance         | https://docs.flutter.dev/perf/best-practices            |

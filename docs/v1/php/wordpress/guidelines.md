# 📘 WordPress Plugin Developer Rulesbook

A comprehensive guide for building high-quality, maintainable, and secure WordPress plugins.

---

## 🔧 1. **Code Structure and Organization**

### ✅ Follow the WordPress Plugin Boilerplate
Use a standardized, OOP-based boilerplate to structure your plugin code.

- https://github.com/DevinVinson/WordPress-Plugin-Boilerplate

**Rules:**
- Separate logic into admin, public, and core directories.
- Use `includes/` for class files and helper logic.
- Follow autoloading conventions using `spl_autoload_register()` or PSR-4 (via Composer).

---

## 🧱 2. **Object-Oriented Programming (OOP)**

### ✅ Use OOP Principles
Avoid procedural code in favor of well-structured classes.

**Rules:**
- Use Dependency Injection where applicable.
- Avoid God classes—follow the Single Responsibility Principle.
- Group related functionality into services.

📖 Learn more:
- https://www.php-fig.org/psr/psr-4/
- https://refactoring.guru/design-patterns

---

## 🎯 3. **Design Patterns to Use**

### ✅ Recommended Patterns:
- **Singleton Pattern** for main plugin loader (but consider alternatives for testability).
- **Factory Pattern** to create objects.
- **Service Container** (or simple Registry pattern) for managing dependencies.
- **Hooks Manager** to register all `add_action()` and `add_filter()` calls in one place.

📖 Design Pattern Guide:
- https://refactoring.guru/design-patterns/php

---

## 🧹 4. **Code Style and Standards**

### ✅ Use WordPress Coding Standards
Ensure code readability and community familiarity.

- PHP: https://developer.wordpress.org/coding-standards/wordpress-coding-standards/php/
- JS: https://developer.wordpress.org/coding-standards/wordpress-coding-standards/javascript/
- CSS: https://developer.wordpress.org/coding-standards/wordpress-coding-standards/css/

**Tools:**
- [PHP_CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer)
  - Ruleset: `WordPress`, `WordPress-Extra`

```bash
composer require --dev wp-coding-standards/wpcs
```

---

## 🛡️ 5. **Security Best Practices**

### ✅ Sanitize, Escape, and Validate
- **Sanitize** data on input.
- **Escape** data on output.
- **Validate** before processing.

📖 https://developer.wordpress.org/plugins/security/securing-input/

**Functions to use:**
- `sanitize_text_field()`
- `esc_html()`, `esc_attr()`, `esc_url()`
- `check_admin_referer()`, `wp_nonce_field()`

---

## 🔒 6. **File and Access Control**

### ✅ Restrict Direct Access
Always prevent direct access to plugin PHP files.

```php
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}
```

---

## 🔄 7. **Hooks and Filters Management**

### ✅ Use a Centralized Hooks Class
Manage all `add_action()` and `add_filter()` calls in one place for maintainability.

📖 Example: https://github.com/DevinVinson/WordPress-Plugin-Boilerplate/blob/master/includes/class-plugin-name-loader.php

---

## 📦 8. **Autoloading and Namespacing**

### ✅ Use Composer (when possible)
Composer + PSR-4 autoloading = scalable architecture.

📖 Composer Guide: https://getcomposer.org/doc/01-basic-usage.md

```json
"autoload": {
    "psr-4": {
        "MyPlugin\": "includes/"
    }
}
```

---

## 🧪 9. **Testing and Quality Assurance**

### ✅ Write Unit Tests
Use PHPUnit for logic tests and WP_UnitTestCase for integration with WordPress.

📖 https://make.wordpress.org/core/handbook/testing/automated-testing/phpunit/

- Set up CI with GitHub Actions or GitLab CI
- Use mocks for dependencies (e.g., WP_Mock or Mockery)

---

## 📝 10. **Documentation**

### ✅ Include:
- `README.md` with clear usage and installation instructions
- PHPDoc comments for all public methods
- Inline documentation for complex logic

📖 https://developer.wordpress.org/plugins/wordpress-org/how-your-readme-txt-works/

---

## 🌐 11. **Internationalization (i18n)**

### ✅ Make Plugin Translatable
Use `__()`, `_e()`, `esc_html__()`, etc. and generate `.pot` files.

📖 https://developer.wordpress.org/plugins/internationalization/

```php
__('My Text', 'my-plugin-slug');
```

---

## 📈 12. **Performance and Optimization**

### ✅ Enqueue Scripts and Styles Properly

Use `wp_enqueue_script()` and `wp_enqueue_style()` on appropriate hooks.

📖 https://developer.wordpress.org/themes/basics/including-css-javascript/

```php
add_action( 'wp_enqueue_scripts', 'my_plugin_enqueue_scripts' );
```

Avoid loading assets globally unless necessary.

---

## 🧼 13. **Uninstall Cleanly**

### ✅ Create `uninstall.php`
Remove all options, custom tables, and metadata on uninstall.

📖 https://developer.wordpress.org/plugins/plugin-basics/uninstall-methods/

---

## 📄 14. **Licensing and Compliance**

### ✅ Use a GPL-Compatible License
WordPress requires plugins to be GPL or GPL-compatible.

📖 https://developer.wordpress.org/plugins/wordpress-org/detailed-plugin-guidelines/

---

## 🧠 15. **Bonus: Use a Service Container (Advanced)**

Create a lightweight container for services (similar to Laravel's IOC container) to improve dependency management.

📖 Example (Pimple): https://github.com/silexphp/Pimple

---

## ✅ Final Checklist

| Feature                       | Status |
|------------------------------|--------|
| Follows WP coding standards  | ✅     |
| Uses OOP and namespaces      | ✅     |
| Composer-compatible          | ✅     |
| Secure input/output handling | ✅     |
| Readme and docs written      | ✅     |
| Autoloading implemented      | ✅     |
| Translatable strings         | ✅     |
| Clean uninstall process      | ✅     |

---

Feel free to copy, adapt or extend this rulesbook into your plugin repository as a `DEVELOPMENT.md` or `CONTRIBUTING.md` file.

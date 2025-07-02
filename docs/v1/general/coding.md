# General code instructions
- Use the tips and guidelines laid out in: Clean Code by Robert C. Martin
- Don't generate code comments above the methods or code blocks if they are obvious. Generate comments only for something that needs extra explanation for the reasons why that code was written
- When changing the code, don't comment it out, unless specifically instructed. Assume the old code will stay in Git history.

# Recommended Line Length for Backend Code (including class and method definitions)
## Keep lines ≤ 80–100 characters
This is the classic standard in many style guides (like Python’s PEP8, Java’s Google Style Guide, PHP-FIG PSR-12, etc.).
It prevents horizontal scrolling and improves readability.

## Class size (number of lines)
While no hard universal rule exists, maintainability improves if:
Classes are small and focused, ideally under 200-300 lines.
If a class grows bigger, consider splitting responsibilities into smaller classes or components.

## Method/function length
Keep methods focused and short, ideally under 20–40 lines. This makes them easier to read and test.

## Multilingual
Setup the system in a way that supports multilingual app. Do not use hardcoded text. Use key-value for text translations, whereby each language has its own translation files
In the code you use the key, and the language file specifies the content.
The default language is english

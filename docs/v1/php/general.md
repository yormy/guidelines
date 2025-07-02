
## Using PHP Services in Controllers

- If Service class is used only in ONE method of Controller, inject it directly into that method with type-hinting.
- If Service class is used in MULTIPLE methods of Controller, initialize it in Constructor.
- Use PHP 8 constructor property promotion. Don't create empty Constructor method if it doesn't have any parameters.

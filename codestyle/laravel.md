# Laravel & PHP Style Guide

- [About Laravel](#about-laravel)
- [General PHP Rules](#general-php-rules)
- [Class defaults](#class-defaults)
- [Typed properties](#typed-properties)
- [Docblocks](#docblocks)
- [Strings](#strings)
- [If statements](#if-statements)
- [Ternary operators](#ternary-operators)
- [Comments](#comments)
- [Configuration](#configuration)
- [Artisan commands](#artisan-commands)
- [Routing](#routing)
- [Controllers](#controllers)
- [Views](#views)
- [Validation](#validation)
- [Blade templates](#blade-templates)
- [Authorization](#authorization)
- [Translations](#translations)
- [Naming classes](#naming-classes)
- [Naming migrations](#naming-migrations)

Laravel & PHP
Artisanal baked code
# About Laravel
First and foremost, Laravel provides the most value when you write things the way Laravel intended you to write. If there's a documented way to achieve something, follow it. Whenever you do something differently, make sure you have a justification for why you didn't follow the defaults.

# General PHP Rules
Code style must follow PSR-1, PSR-2 and PSR-12. Generally speaking, everything string-like that's not public-facing should use camelCase. Detailed examples on these are spread throughout the guide in their relevant sections.

# CLASS DEFAULTS
By default, we don't use final. In our team, there aren't many benefits that final offers as we don't rely too much on inheritance. For our open source stuff, we assume that all our users know they are responsible for writing tests for any overwritten behaviour.

# NULLABLE AND UNION TYPES
Whenever possible use the short nullable notation of a type, instead of using a union of the type with null.
```
// in a class

// Good
public ?string $variable;

// Bad
public string | null $variable;
```

# VOID RETURN TYPES
If a method returns nothing, it should be indicated with void. This makes it more clear to the users of your code what your intention was when writing it.
```
// Good

// in a Laravel model
public function scopeArchived(Builder $query): void
{
  $query->
  ...
}
```

# Typed properties
You should type a property whenever possible. Don't use a docblock.

```
// Good
class Foo
{
  public string $bar;
}

// Bad
class Foo
{
  /** @var string */
  public $bar;
}
```

# Enums
Values in enums should use PascalCase.

```
enum Suit {  
  case Clubs;
  case Diamonds;
  case Hearts;
  case Spades;
}

Suit::Diamonds;
```


#Docblocks
Don't use docblocks for methods that can be fully type hinted (unless you need a description).

Only add a description when it provides more context than the method signature itself. Use full sentences for descriptions, including a period at the end.
```
// Good
class Url
{
  public static function fromString(string $url): Url
  {
    // ...
  }
}

// Bad: The description is redundant, and the method is fully type-hinted.
class Url
{
  /**
  * Create a url from a string.
  *
  * @param string $url
  *
  * @return \Spatie\Url\Url
  */
  public static function fromString(string $url): Url
  {
    // ...
  }
}

```

Always import the classnames in docblocks.

```
// Good
use \Spatie\Url\Url

/**
* @param string $foo
*
* @return Url
  */

// Bad

/**
* @param string $url
*
* @return \Spatie\Url\Url
  */
```

Using multiple lines for a docblock, might draw too much attention to it. When possible, docblocks should be written on one line.

```
// Good

/** @var string */
/** @test */

// Bad

/**
* @test
*/
  
```

If a variable has multiple types, the most common occurring type should be first.
```
// Good

/** @var \Illuminate\Support\Collection|\SomeWeirdVendor\Collection */

// Bad

/** @var \SomeWeirdVendor\Collection|\Illuminate\Support\Collection */
```
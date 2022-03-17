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


# Docblocks
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


# Docblocks for iterables
When your function gets passed an iterable, you should add a docblock to specify the type of key and value. This will greatly help static analysis tools understand the code, and IDEs to provide autocompletion.
```
/**
* @param $myArray array<int, MyObject>
*/
function someFunction(array $myArray) {
    //
}
```

In this example, typedArgument needs a docblock too:
```
/**
* @param $myArray array<int, MyObject>
* @param int $typedArgument
*/
function someFunction(array $myArray, int $typedArgument) {
    //
}
```
The keys and values of iterables that get returned should always be typed.
```
use \Illuminate\Support\Collection

/**
* @return \Illuminate\Support\Collection<int,SomeObject>
*/
function someFunction(): Collection {
    //
} 
```

If your array or collection has a few fixed keys, you can typehint them too using {} notation.
```
use \Illuminate\Support\Collection

/**
* @return array{old: SomeClass, new: SomeClass}
*/
function someFunction(): array {
    //
}
```

If there is only one docblock needed, you may use the short version.
```
use \Illuminate\Support\Collection

/** @return \Illuminate\Support\Collection<int,SomeObject> */
function someFunction(): Collection {
    //
}
```


# Constructor property promotion
Use constructor property promotion if all properties can be promoted. To make it readable, put each one on a line of its own. Use a comma after the last one.
```
// Good
class MyClass {
    public function __construct(
    protected string $firstArgument,
    protected string $secondArgument,
) {}
}

// Bad
class MyClass {
protected string $secondArgument

    public function __construct(protected string $firstArgument, string $secondArgument)
    {
        $this->secondArgument = $secondArgument;
    }
}
```


# Traits
Each applied trait should go on its own line, and the use keyword should be used for each of them. This will result in clean diffs when traits are added or removed.
```
// Good

class MyClass
{
  use TraitA;
  use TraitB;
}

// Bad

class MyClass
{
  use TraitA, TraitB;
}
```

# Strings
When possible prefer string interpolation above sprintf and the . operator.
```
// Good
$greeting = "Hi, I am {$name}.";

// Bad
$greeting = 'Hi, I am ' . $name . '.';
```

# Ternary operators
Every portion of a ternary expression should be on its own line unless it's a really short expression.
```
// Good
$name = $isFoo ? 'foo' : 'bar';

// Bad
$result = $object instanceof Model ?
$object->name :
'A default value';
```

# If statements
## BRACKET POSITION
Always use curly brackets.
```
// Good
if ($condition) {
  ...
}

// Bad
if ($condition) ...

```
## HAPPY PATH
Generally a function should have its unhappy path first and its happy path last. In most cases this will cause the happy path being in an unindented part of the function which makes it more readable.
```
// Good

if (! $goodCondition) {
  throw new Exception;
}

// do work

// Bad

if ($goodCondition) {
  // do work
}

throw new Exception;
```

# AVOID ELSE
In general, else should be avoided because it makes code less readable. In most cases it can be refactored using early returns. This will also cause the happy path to go last, which is desirable.

```
// Good

if (! $conditionA) {
  // condition A failed
  return;
}

if (! $conditionB) {
  // condition A passed, B failed
  
  return;
}

// condition A and B passed
// Bad

if ($conditionA) {
  if ($conditionB) {
    // condition A and B passed
  }
  else {
    // condition A passed, B failed
  }
}
else {
  // condition A failed
}
```

Another option to refactor an else away is using a ternary
```
// Good

$condition
? $this->doSomething();
: $this->doSomethingElse();

// Bad

if ($condition) {
  $this->doSomething();
}
else {
  $this->doSomethingElse();
}


```
# COMPOUND IFS
In general, separate if statements should be preferred over a compound condition. This makes debugging code easier.
```
// Good
if (! $conditionA) {
  return;
}

if (! $conditionB) {
  return;
}

if (! $conditionC) {
  return;
}

// do stuff

// Bad
if ($conditionA && $conditionB && $conditionC) {
  // do stuff
}
```


# Comments
Comments should be avoided as much as possible by writing expressive code. If you do need to use a comment, format it like this:
```
// There should be a space before a single line comment.
```

```
/*
* If you need to explain a lot you can use a comment block. Notice the
* single * on the first line. Comment blocks don't need to be three
* lines long or three characters shorter than the previous line.
*/
```

A possible strategy to refactor away a comment is to create a function with name that describes the comment
```
// Good
$this->calculateLoans();
  
// Bad

// Start calculating loans
```

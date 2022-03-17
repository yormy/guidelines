# Testing PHP Style Guide

- [Naming](#naming)
- [Helper classes](#test-classes)


#Naming
test function naming
test_<SystemState>_<SubjectUnderTest>_<ExpectedResult>

example
```
test_CustomerActive_MakeInactive_EmailSent
```

# Test classes
If you need a specific class for your test cases, you should keep them within the same test file when possible. When you want to reuse test classes throughout tests, it's fine to make a dedicated class instead. Here's an example of internal classes:
```
<?php

namespace Spatie\EventSourcing\Tests\AggregateRoots;

// …

class AggregateEntityTest extends TestCase
{
    /** @test */
    public function test_entities()
    {
        // …
    }
}

class ItemAdded extends ShouldBeStored
{
    public function __construct(
        public string $name
    ) {
    }
}

class CartCleared extends ShouldBeStored
{
}
```
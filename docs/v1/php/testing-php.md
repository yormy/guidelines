# Testing PHP Style Guide

- [Naming](#naming)
- [Helper classes](#test-classes)


#Naming
test function naming
test_{State}_{ActionBeingTested}_{ResultExpected}
example
```
test_CustomerActive_MakeInactive_EmailSent
```


or
{State}_{ActionBeingTested}_{ResultExpected}
example
```
UserBanned_Login_Failed
UserBanned_Login_AdminNotified
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

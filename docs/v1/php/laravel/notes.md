## Controllers
Step 1, validate all input
get values with ->validated() this will ensure that all passed in data is acutally validated
validation is to ensure that the data is valid  

step 2, policy
Authorization, can the user do this action
Can the system accept this change

Collection of notes
* always use repositories for database/ model abstractions
This will make your code easier to follow and easier to re-use database queries
* Use scopes as often as possible

Naming of repository functions
get<...> will return an model or collection
``` php
function getUser() // will return a user
```

builderUser()
will return an eloquent builder
``` php
function builderUser() // will return a builder
{
}

$repository->builderUser()->get() // you need to attach get() to get the model(s)

```


Suffix all files except models

userRule
userController
userResource
userResourceCollection
userBannedEvent
sendUserEmailListener


# Domain folder stucture

- Domain
  - Campains
    - Models
    - ...
- Http
  - Controllers
  - Requests
    - ?Resources ?

  

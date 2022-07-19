# Introduction : String based or Key Based translations
Laravel supports both key based (```_('app.page.hello')```) as wel as string based (```_('Hello and welcome')```) translations.
String based translations might look easier and more maintainable as the actual text being rendered in the root language is als readable in code. 
The big drawback is that to stay consistent for every change in the content to be displayed, the string-key needs to change. Hence only developers can change a text.

Key based translations are a little harder to maintain as you cannot really know what the text will be when you look at the code. 
But the actual rendered text can be changed without any code changes. An added benefit in using key based translations is when a key is not defined, the key will be rendered on the screen
and this makes it obvious that the key is not yet defined
``` app.page.hello to our platform``` is very clear that there is something wrong

We will be using only key based translations for this reason


## Laravel

Typically, translation strings are stored in files within the ```lang``` directory. Within this directory, 
there should be a subdirectory for each language supported by your application. 
This is the approach Laravel uses to manage translation strings for built-in Laravel features such as validation error messages:
```
/lang
    /en
        validation.php
    /nl
        validation.php
```

### Directory Names
For languages that differ by territory, you should name the language directories according to the ISO 15897.
For example, "en_GB" should be used for British English rather than "en-gb".

### Files

All language files return an array of keyed strings. For example:
```php
<?php
 
// lang/en/message.php
 
return [
    'welcome' => 'Welcome to our application!',
];
```

## Packages

Packages sometimes have their own baked in translations. These can be overridden so your app uses your own translations.
Samply create the same filename of the translation in the vendor directory ```lang/vendor/{package}/{locale} ``` of translations
```
/lang
    /en
        message.php
    /vendor
        {package}
            en
                message.php
        
```

So, for example, if you need to override the English translation strings in messages.php for a package named ```skyrim/hearthfire```, 
you should place a language file at: ```lang/vendor/hearthfire/en/message.php```. Within this file, 
you should **only define the translation strings you wish to override**. 
Any translation strings you don't override will still be loaded from the package's original language files.

**Package keys** are referred with their namespace and :: as in ```hearthfire::message.welcome```

## Example Laravel 9
To keep things separated and maintainable Laravel uses:
* Context files for different types of translations
* Nested arrays of keys
* singular file names

```php
// lang/en/validation.php : all types of validation errors

    'before_or_equal' => '...must be a date before or equal to :date.', // snake_case
    'between' => [
        'array' => 'The :attribute must have between :min and :max items.'

// lang/en/auth.php : Authentication messages
    'password' => 'The provided password is incorrect.',        
```

# KEY CONVENTIONS
In general more and smaller files with clear subsections makes the translations easier to manage. 20 files with 10 lines is more clear than 1 file with 200 lines 

## General
All files are:
* singular
* created in US English
* words are separated with underscore (snake_case)
* lowercase

All keys are:
* created in US English
* words are separated with underscore (snake_case)
* lowercase

All translations are:
* written and capatalized as on screen. (```'first_name' => 'Voornaam'```)
this will prevent parsing of all text to capatilize

Concatination
* never concatinate strings on the screen to display what you want. This leads to problems in some language where the order of wordings is different.

**BAD**:
```php
echo __('hello') . __('and welcome'); // Hello and welcome
// in other languages this might be wierd and you need to say something like 'Welcome and hello'
```

```php
echo __('hello') . $username; // Hello Dyale
// in other languages this might be wierd and you need to say something like 'Dayle, hello'
```

**GOOD**:
```php
echo __('hello_and_welcome'); // Hello and welcome
```

```php
'hello' => 'Hello :Name'

echo __('hello'); // Hello Dayle
```

# Abstractions
There are many different logical abstractions when you take a look at any application
* Standard laravel translations (ie ```validation.php``` and ```auth.php```)
* Packages (```permissions``` vs ```backup```)
* Request (```api``` vs ```screen```)
* Domain sections (```post``` vs ```parcel```)
* Pages (```dashboard``` vs ```settings```)
* Code logic (```validation``` vs ```auth```)


**File structure**
files 
```
/lang
    /en
        global.php
        action.php
        message.php
        /post
            general.php
        /parcel
            general.php            
            
    /vendor
        {package}
            en
                message.php
        
```

## Root
### global.php
Each language root directory contains a ```global.php``` file. This file contains translations that are globally for the entire application.
and all subsections

### general.php
Each domain contains a ```general.php```, for translations that are general to this domain only.
ie ```post.general.letter```

### action.php
This is for action button text.
By separating these translations we will generate a section that hardly ever changes once done.
```php
    // action.php
    'save' => 'Save'
    'update' => 'Update'
```

## Packages overrides
Packages overrides are always in the lang/vendor directory

## Requests
If there are api specific messages that can be seen as a subsection of the root language for global api calls
or as a subsection on the domain level on domain specific api calls
```
/lang
    /en
        /post
            general.php
            /api
                error.php         
        /parcel
            general.php
               
        /api
            error.php         
```



## Domains
When you can split the application is separate domains it is wise to reflect that domain separation in your language structure. 
This way you get clearer separation of translations

```
/lang
    /en
        ...
        /post
            general.php
        /parcel
            general.php   
```

your translations will then be something like
```__('post.general.letter')``` or ```__('parcel.general.box')```

## Pages
Creating a separate file for page translation makes keys easy to find and the size of the pages maintainable

```
/lang
    /en
        ...
        /post
            dashboard.php
```
your translations will then be something like
```__('post.dashboard.notifications')```

Within that translation file you should create separate sections to split even more.
```php
 // dashboard.php
 'notifications' => [
    'display' => [
        'all' => 'Display all notifications'
        'none' => 'Display no notifications at all'
    ],
    'settings' => [
        'enable_fax' => 'Send notifications to my fax'
    ]
 ]
```

## Html Attributes
Html attributes are sometimes translated and it makes it easier when they are logically connected to each other. 
So for example I want to display an email input field. This field has a label, description, placeholder, hint text, mouseover.
The proposed structure is

```php
 
 'email' => [
    'label' => 'Email',
    'description' => 'enter your email address',
    'placeholder' => 'joe@example.com',
    'hint' => 'This should be your real email address',
    'mouseover' => 'We need your email address to send you cool gifts'
 ]
```

When structuring it like this it is always clear how to structure a key and what to do when you need to add a placeholder or some other attribute to the field
This then will be referenced like

```html
<form action="/action_page.php">
  <label for="email">{{__('email.label')}}</label><br>
  <input type="email" name="email" placeholder="{{__('email.placeholder')}}"
  <small>{{__('email.hint')}}</small
  ...
</form> 
```

When you are only using the label and still use this same structure everything stays consistent and very easy and clear extendible.
```php
 'email' => [
    'label' => 'Email',
 ]
```

Even with new attributes or success & error messages
```php
 'email' => [
    'label' => 'Email',
    'success' => 'awesome done',
    'error' => 'oopsie, that email address is not valid',
 ]
```
When using attributes, use the exact same name as in the HTML specs, ie html attribute.
When setting the ```placeholder``` attribute, call it placeholder

**BAD**
```html
    <input ... placeholder="{{__('email.example')}}"
```

**GOOD**
```html
    <input ... placeholder="{{__('email.placeholder')}}"
```

### For Image tags
```html
    <img src="logo.jpg" title="{{__('logo.title')}}" alt="{{__('logo.alt')}}">
```
Alternative, as in many cases this might be the same, you can reuse one of the translations
```html
    <img src="logo.jpg" title="{{__('logo.title')}}" alt="{{__('logo.title')}}">
```


# Models
A large part of an application in the ability to create, show and list model data.
For example if we look at a user_registration table, represented in the UserRegistration model.
Then you quickly have the following pages
* lists all the data in a table with headings
* see a single registration
* create a new registration
* action to delete a registration

When we take REST namings we can a structure like this which keeps all the relevant translations close together
```php
// user_registration.php
[
        "index" => [
            "title" => "All registrations"
            "subtitle" => "the registrations and states of the registrations"
            "description" => ""
        ],
        "show" => [
            "title" => "Your registration"
            "subtitle" => "your information that you entered"
            "description" => ""
        ],
        "edit" => [
            "title" => "Your registration"
            "subtitle" => "your information that you entered"
            "description" => ""
        ],
        "delete" => [
            "confirm_message" => "Are you sure you want to delete this registration?"
        ],
            
        "field" => [
            "password" => [
                "label" => "Your password",
                "hint" => "must be 8 characters"
                "mouseover" => "This is additional explain info, usually in a popup"
                "error" => [
                    "incorrect_credentials" => "Does not match our system"
                ],
                
                "input" => [
                    "label" => "Create your password"
                    "hint" => "must be 8 characters"
                    "mouseover" => "This is additional explain info, usually in a popup"
                    "error" => [
                        "invalid_chars" => "incorrect number of characters, come up with a more complex"
                    ],
            ],
        ],
    ],
],
```

## Tips and Tricks

### Capitalization
The translation engine supports the capitalization of certain words really easy

```
'welcome' => 'Welcome, :name',

echo __('messages.welcome', ['name' => 'dayle']);
```

```
'welcome' => 'Welcome, :NAME', // Welcome, DAYLE
'welcome' => 'Welcome, :Name', // Welcome, Dayle
'welcome' => 'Welcome, :name', // Welcome, dayle
```

### Plurilization
There are many pluralization options to make your live as a developer easier
```
https://laravel.com/docs/9.x/localization#pluralization
```

### Currency
Take a look at php ```NumberFormatter::CURRENCY ```



# Resources
https://lokalise.com/blog/translation-keys-naming-and-organizing/
https://github.com/akaunting/akaunting/tree/master/resources/lang/en-US
https://lokalise.com/blog/laravel-localization-step-by-step/
## Package name

* [name]_laravel (powwow_laravel)
* [name]_vue (powwow_vue
  
  
  todo, spatie guidelines

Use config to make models dynamic

'models' => [
]

Use config to add resolvers to allow client to override certain functions
A resolver oes something and returs the result
Ie: encrypts/decrypts the value
gets the ip from the request

'resolvers' => [
    'encryptor' => ...
    'ip' => ...
]

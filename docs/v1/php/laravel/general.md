
## Use Laravel 11+ skeleton structure

- **Service Providers**: there are no other service providers except AppServiceProvider. Don't create new service providers unless absolutely necessary. Use Laravel 11+ new features, instead. Or, if you really need to create a new service provider, register it in `bootstrap/providers.php` and not `config/app.php` like it used to be before Laravel 11.
- **Event Listeners**: since Laravel 11, Listeners auto-listen for the events if they are type-hinted correctly.
- **Console Scheduler**: scheduled commands should be in `routes/console.php` and not `app/Console/Kernel.php` which doesn't exist since Laravel 11.
- **Middleware**: whenever possible, use Middleware by class name in the routes. But if you do need to register Middleware alias, it should be registered in `bootstrap/app.php` and not `app/Http/Kernel.php` which doesn't exist since Laravel 11.
- **Tailwind**: in new Blade pages, use Tailwind and not Bootstrap, unless instructed otherwise in the prompt. Tailwind is already pre-configured since Laravel 11, with Vite.
- **Faker**: in Factories, use `fake()` helper instead of `$this->faker`.
- **Policies**: Laravel automatically auto-discovers Policies, no need to register them in the Service Providers.

---

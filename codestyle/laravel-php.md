#Whitespace
Statements should be allowed to breathe. In general always add blank lines between statements, unless they're a sequence of single-line equivalent operations. This isn't something enforceable, it's a matter of what looks best in its context.

// Good
public function getPage($url)
{
    $page = $this->pages()->where('slug', $url)->first();

    if (! $page) {
        return null;
    }

    if ($page['private'] && ! Auth::check()) {
        return null;
    }

    return $page;
}

// Bad: Everything's cramped together.
public function getPage($url)
{
    $page = $this->pages()->where('slug', $url)->first();
    if (! $page) {
        return null;
    }
    if ($page['private'] && ! Auth::check()) {
        return null;
    }
    return $page;
}
// Good: A sequence of single-line equivalent operations.
public function up()
{
    Schema::create('users', function (Blueprint $table) {
        $table->increments('id');
        $table->string('name');
        $table->string('email')->unique();
        $table->string('password');
        $table->rememberToken();
        $table->timestamps();
    });
}
Don't add any extra empty lines between {} brackets.

// Good
if ($foo) {
    $this->foo = $foo;
}

// Bad
if ($foo) {

    $this->foo = $foo;

}
#Configuration
Configuration files must use kebab-case.

config/
  pdf-generator.php
Configuration keys must use snake_case.

// config/pdf-generator.php
return [
    'chrome_path' => env('CHROME_PATH'),
];
Avoid using the env helper outside of configuration files. Create a configuration value from the env variable like above.

When adding config values for a specific service, add them to the services config file. Do not create a new config file.

// Good: adding credentials to `config/services.php`
return [
    'ses' => [
        'key' => env('SES_AWS_ACCESS_KEY_ID'),
        'secret' => env('SES_AWS_SECRET_ACCESS_KEY'),
        'region' => env('SES_AWS_DEFAULT_REGION', 'us-east-1'),
    ],
    
    'github' => [
        'username' => env('GITHUB_USERNAME'),
        'token' => env('GITHUB_TOKEN'),
        'client_id' => env('GITHUB_CLIENT_ID'),
        'client_secret' => env('GITHUB_CLIENT_SECRET'),
        'redirect' => env('GITHUB_CALLBACK_URL'),
        'docs_access_token' => env('GITHUB_ACCESS_TOKEN'),
    ],
    
    'weyland_yutani' => [
        'token' => env('WEYLAND_YUTANI_TOKEN')
    ],   
];
// Bad: creating a new config file: `weyland-yutani.php`

return [
    'weyland_yutani' => [
        'token' => env('WEYLAND_YUTANI_TOKEN')
    ],  
]
#Artisan commands
The names given to artisan commands should all be kebab-cased.

# Good
php artisan delete-old-records

# Bad
php artisan deleteOldRecords
A command should always give some feedback on what the result is. Minimally you should let the handle method spit out a comment at the end indicating that all went well.

// in a Command
public function handle()
{
    // do some work

    $this->comment('All ok!');
}
When the main function of a result is processing items, consider adding output inside of the loop, so progress can be tracked. Put the output before the actual process. If something goes wrong, this makes it easy to know which item caused the error.

At the end of the command, provide a summary on how much processing was done.

// in a Command
public function handle()
{
    $this->comment("Start processing items...")

    // do some work
    $items->each(function(Item $item) {
        $this->info("Processing item id `{$item-id}`...")

        $this->processItem($item)
    });

    $this->comment("Processed {$item->count()} items.");
}
#Routing
Public-facing urls must use kebab-case.

https://spatie.be/open-source
https://spatie.be/jobs/front-end-developer
Prefer to use the route tuple notation when possible.

// Good
Route::get('open-source', [OpenSourceController::class, 'index']);

// Bad
Route::get('open-source', 'OpenSourceController@index');
<a href="{{ action([\App\Http\Controllers\OpenSourceController::class, 'index']) }}">
    Open Source
</a>
Route names must use camelCase.

// Good
Route::get('open-source', [OpenSourceController::class, 'index'])->name('openSource');

// Bad
Route::get('open-source', [OpenSourceController::class, 'index'])->name('open-source');
All routes have an http verb, that's why we like to put the verb first when defining a route. It makes a group of routes very readable. Any other route options should come after it.

// Good: all http verbs come first
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('open-source', [OpenSourceController::class, 'index'])->name('openSource');

// Bad: http verbs not easily scannable
Route::name('home')->get('/', [HomeController::class, 'index']);
Route::name('openSource')->get([OpenSourceController::class, 'index']);
Route parameters should use camelCase.

Route::get('news/{newsItem}', [NewsItemsController::class, 'index']);
A route url should not start with / unless the url would be an empty string.

// Good
Route::get('/', [HomeController::class, 'index']);
Route::get('open-source', [OpenSourceController::class, 'index']);

// Bad
Route::get('', [HomeController::class, 'index']);
Route::get('/open-source', [OpenSourceController::class, 'index']);
#Controllers
Controllers that control a resource must use the plural resource name.

class PostsController
{
    // ...
}
Try to keep controllers simple and stick to the default CRUD keywords (index, create, store, show, edit, update, destroy). Extract a new controller if you need other actions.

In the following example, we could have PostsController@favorite, and PostsController@unfavorite, or we could extract it to a separate FavoritePostsController.

class PostsController
{
    public function create()
    {
        // ...
    }

    // ...

    public function favorite(Post $post)
    {
        request()->user()->favorites()->attach($post);

        return response(null, 200);
    }

    public function unfavorite(Post $post)
    {
        request()->user()->favorites()->detach($post);

        return response(null, 200);
    }
}
Here we fall back to default CRUD words, store and destroy.

class FavoritePostsController
{
    public function store(Post $post)
    {
        request()->user()->favorites()->attach($post);

        return response(null, 200);
    }

    public function destroy(Post $post)
    {
        request()->user()->favorites()->detach($post);

        return response(null, 200);
    }
}
This is a loose guideline that doesn't need to be enforced.

#Views
View files must use camelCase.

resources/
  views/
    openSource.blade.php
class OpenSourceController
{
    public function index() {
        return view('openSource');
    }
}
#Validation
When using multiple rules for one field in a form request, avoid using |, always use array notation. Using an array notation will make it easier to apply custom rule classes to a field.

// Good
public function rules()
{
    return [
        'email' => ['required', 'email'],
    ];
}

// Bad
public function rules()
{
    return [
        'email' => 'required|email',
    ];
}
All custom validation rules must use snake_case:

Validator::extend('organisation_type', function ($attribute, $value) {
    return OrganisationType::isValid($value);
});
#Blade Templates
Indent using four spaces.

<a href="/open-source">
    Open Source
</a>
Don't add spaces after control structures.

@if($condition)
    Something
@endif
#Authorization
Policies must use camelCase.

Gate::define('editPost', function ($user, $post) {
    return $user->id == $post->user_id;
});
@can('editPost', $post)
    <a href="{{ route('posts.edit', $post) }}">
        Edit
    </a>
@endcan
Try to name abilities using default CRUD words. One exception: replace show with view. A server shows a resource, a user views it.

#Translations
Translations must be rendered with the __ function. We prefer using this over @lang in Blade views because __ can be used in both Blade views and regular PHP code. Here's an example:

<h2>{{ __('newsletter.form.title') }}</h2>

{!! __('newsletter.form.description') !!}
#Naming Classes
Naming things is often seen as one of the harder things in programming. That's why we've established some high level guidelines for naming classes.

#CONTROLLERS
Generally controllers are named by the plural form of their corresponding resource and a Controller suffix. This is to avoid naming collisions with models that are often equally named.

e.g. UsersController or EventDaysController

When writing non-resourceful controllers you might come across invokable controllers that perform a single action. These can be named by the action they perform again suffixed by Controller.

e.g. PerformCleanupController

#RESOURCES (AND TRANSFORMERS)
Both Eloquent resources and Fractal transformers are plural resources suffixed with Resource or Transformer accordingly. This is to avoid naming collisions with models.

#JOBS
A job's name should describe its action.

E.g. CreateUser or PerformDatabaseCleanup

#EVENTS
Events will often be fired before or after the actual event. This should be very clear by the tense used in their name.

E.g. ApprovingLoan before the action is completed and LoanApproved after the action is completed.

#LISTENERS
Listeners will perform an action based on an incoming event. Their name should reflect that action with a Listener suffix. This might seem strange at first but will avoid naming collisions with jobs.

E.g. SendInvitationMailListener

#COMMANDS
To avoid naming collisions we'll suffix commands with Command, so they are easiliy distinguisable from jobs.

e.g. PublishScheduledPostsCommand

#MAILABLES
Again to avoid naming collisions we'll suffix mailables with Mail, as they're often used to convey an event, action or question.

e.g. AccountActivatedMail or NewEventMail

# Naming Migrations
[table]_[action]_[details]
### creation of table
customers_create

### alter table
customers_alter_add_id

### seed data
customers_seed_add_test
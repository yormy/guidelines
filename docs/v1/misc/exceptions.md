## Exceptions
Exceptions happen when there are unexpected things happening in the system, or situations that simply should not happen.
The main goal of throwing an exception is to abort the request and notify the developers that something went wrong

There are a few different situations that might throw exceptions 


### Situations

#### User Input
The user can input data into the system through
Characteristics of these inputs is that there is a person on the computer seeing the result
- Web forms
- Upload of files
- Api calls
These situations should never lead to a exception, but input should be validated and presented to the user if the input is not valid or cannot be processed

### Api Calls
- Silent logging
- Report to user, but do not break the request
- ie if remote server is offline (first try again automatically, if fails again) notify the user that somethign is log and log
- ie if remote server is crifically down (500), then do not retry


### Examples
-When a charge is made that should not happen, then a hard exception is needed, as this is a situation that needs attention of the developer to fix the code
-Slow queries : soft logging, no notification to developers
- Model not found = hack / idor/ deleted model ?
- .. called on null = programatic error
- .. decrypt null = programatic error
- n+1 does not break the code, but there is a sentry notification.. how ?

### Exception logging:
- log exception, timestamp, serialized exception
- log with event LogException()
- ?? sentryExcption, does that break the request ?
- 



### Handling

#### Normal Handling
The default way of handling an exception is to 
1) Abort the request
2) Most often show the user "Something went wrong"
3) Notify the developers (ie through sentry)

### Soft Exceptions
1) Continue the request
2) Notify the developers (ie through sentry)

### Silent Exceptions
1) Continue the request
2) Do not notify developers
3) Log in database for analytics

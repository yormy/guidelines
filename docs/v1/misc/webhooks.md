## Webhooks
Static urls in server make it had to test your local server. 
Ie if you specify in the server the callback url, then you cannot test your local instance
Easier to define the callbacks in teh sending of the webhooks

# Passthrough data
Allow passthrough data, client encrypts the data, and server posts it back when needed.

# Security

Signatures
Tiemstamps
uuid
(see api laravel)


## Webhooks Sending
- locally record (posted date, timestamp, client response)
- retry strategy
- resend button in frontend
- uuid in request for resending and duplicate prevention


## Webhooks Receiving
- step 1 = log request , so it can be played back later
- mark if processed
- entire handling in transaction
- entire handing in job, so can be re-queued if failed


# examples
-Mollie
-Stripe

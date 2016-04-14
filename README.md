[![Ongair Logo](https://ongair.im/logo.png)](https://ongair.im/)

Fast, quick starter Node js project for integrating with Facebook Messenger bots

## Why do I need this?
The [Facebook technical documentation](https://developers.facebook.com/docs/messenger-platform/implementation) unfortunately has a few glaring gaps at launch due to some missing dependencies. This should get you up and running fast.
 
## Dependencies

It uses the following third-party libs:
- express
- body-parser
- request

## How to run

You can run it on localhost, but its recommended to deploy to heroku as your webhooks need to be publicly available.

```
    git clone https://github.com/ongair/ongea.git
    cd ongair
    npm install
    node index.js
```

## Deploying to Heroku

Create a heroku application from within the cloned directory. Add the Webhook token as an environment variable

```
    heroku config:add FB_VERIFICATION_TOKEN=my_token
    heroku config:add FB_PAGE_TOKEN=my_page_token
    heroku ps:scale web=1
    heroku open
```
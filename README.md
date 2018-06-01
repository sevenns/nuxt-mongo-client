### - Requirements

You need [nodejs](https://nodejs.org/en/) with npm (LTS version recommended)

### - Build Setup

``` bash
# install dependencies
$ npm install

# start mongodb service/daemon
# Note: Windows users must run from the administrator!
$ npm run db:start

# stop mongodb service/daemon
# Note: Windows users must run from the administrator!
#       Windows service will be deleted.
$ npm run db:stop

# serve with hot reload at localhost:8080
$ npm run dev

# craft svg icons (run once before npm run dev)
$ npm run icons

# build for production and launch server
$ npm run build
$ npm start
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://nuxtjs.org/guide) and [MongoDB docs](https://docs.mongodb.com/).

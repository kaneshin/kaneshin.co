# kaneshin.co

[My personal portfolio website](https://kaneshin.co) created by Gatsby.

- [![Build and Deploy to AWS S3](https://github.com/kaneshin/kaneshin.co/actions/workflows/deploy.yml/badge.svg)](https://github.com/kaneshin/kaneshin.co/actions/workflows/deploy.yml)

## Installation

```
$ npm install
```

### Set up of the needed content model and create a configuration file

To set up this project you need to provide your Space ID and the belonging API access tokens. You can find all the needed information in your Contentful space setting.

- `.env.production` for production build
- `.env.development` for development build

```
CONTENTFUL_SPACE_ID='[YOUR-CONTENTFUL-SPACE-ID]'
CONTENTFUL_ACCESS_TOKEN='[YOUR-CONTENTFUL-ACCESS-TOKEN]'
```

All environment variables will be sourced and made available to gatsby-config.js, gatsby-node.js, etc.

_NOTE: Do NOT commit this file to source control._

## Commands

### dev

Run the project locally with live reload in development mode.

If you want to change the host or/and the port number, assign options `-H 0.0.0.0` or/and `-p 8888`.

```
$ npm run dev -- -H 0.0.0.0 -p 8888
```

### build

Run a production build into `./public`. The result is ready to be put on any static hosting you prefer.

```
$ npm run build
```

### serve

Spin up a production-ready server with your blog. Don't forget to build your page beforehand.

If you want to change the environment to start server, set `NODE_ENV=production` to it.

```
$ NODE_ENV=production npm run serve
```

### clean

Clean the project's artifcats locally.

If you have any problem when `dev`, `build` or `serve`, run this command.

## Deploy

The repository uses GitHub Actions to upload its artifact to AWS S3

## Author

Shintaro Kaneko <kaneshin0120@gmail.com>

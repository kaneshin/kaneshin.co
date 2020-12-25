# kaneshin.co

## Powered By

- [Gatsby](http://gatsbyjs.com/)
- [Contentful](https://www.contentful.com)

## Getting started

See [the official Contentful getting started guide](https://www.contentful.com/developers/docs/tutorials/general/get-started/).

### Install dependencies

```
$ yarn install
```

### Set up of the needed content model and create a configuration file

This project comes with a Contentful setup command `yarn setup`.

This command will ask you for a space ID, and access tokens for the Contentful Management and Delivery API and then import the needed content model into the space you define and write a config file.

## Crucial Commands

### yarn dev

Run the project locally with live reload in development mode.

If you want to change the host or/and the port number, assign options `-H 0.0.0.0` or/and `-p 8888`.

```
$ yarn dev -H 0.0.0.0 -p 8888
```

### yarn build

Run a production build into `./public`. The result is ready to be put on any static hosting you prefer.

### yarn serve

Spin up a production-ready server with your blog. Don't forget to build your page beforehand.

If you want to change the environment to start server, set `NODE_ENV=production` to it.

```
$ NODE_ENV=production yarn serve
```

### yarn clean

Clean the project's artifcats locally.

If you have any problem when `dev`, `build` or `serve`, run this command.

## Author

Shintaro Kaneko <kaneshin0120@gmail.com>

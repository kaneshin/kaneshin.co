# kaneshin.co

[My personal portfolio website](https://kaneshin.co) created by Gatsby.

- ![Primary workflow - GitHub Actions](https://github.com/kaneshin/kaneshin.co/workflows/Build%20and%20Deploy/badge.svg)

## Installation

```
$ npm install
```

### Set up of the needed content model and create a configuration file

This project comes with a Contentful setup command `npm run setup`.

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

The repository uses GitHub Actions to upload its artifact to Google Cloud Storage.

## Author

Shintaro Kaneko <kaneshin0120@gmail.com>

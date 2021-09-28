# La French Tech Tokyo Website

## Quick Start

Clone the source files and navigate into the project's root directory. Run `npm install` and then run `npm start` which will open up a preview of the website in your default browser, watch for changes to core  files, and live reload the browser when changes are saved. You can view the `package.json` file to see which scripts are included.

## Usage

### npm Scripts

- `npm run build` builds the project - this builds assets, HTML, JS, and CSS into `dist`
- `npm run build:assets` copies the files in the `src/assets/` directory into `dist`
- `npm run build:pug` compiles the Pug located in the `src/pug/` directory into `dist`
- `npm run build:scripts` brings the `src/js/scripts.js` file into `dist`
- `npm run build:scss` compiles the SCSS files located in the `src/scss/` directory into `dist`
- `npm run clean` deletes the `dist` directory to prepare for rebuilding the project
- `npm run start:debug` runs the project in debug mode
- `npm start` or `npm run start` runs the project, launches a live preview in your default browser, and watches for changes made to files in `src`

You must have npm installed in order to use this build environment.

### Publish

```shell
npm run build
git add dist
git commit
git subtree push --prefix dist origin gh-pages
```

cf [belohlavek/gh-pages-deploy.md](https://gist.github.com/belohlavek/61dd16c08cd9c57a168408b9ac4121c2)

## Bugs and Issues

Have a bug or an issue with the website? [Open a new issue](https://github.com/LaFrenchTechJapan/lafrenchtechjapan.github.io/issues) here on GitHub or better [open a pull-request](https://github.com/LaFrenchTechJapan/lafrenchtechjapan.github.io/pulls).

## About

La French Tech Tokyo is the hub of the French Tech scene based in Tokyo and Japan, bringing together companies, startups, investors, events and organizations.

This website is based on [Start Bootstrap - Agency](https://startbootstrap.com/theme/agency) created by [Start Bootstrap](https://startbootstrap.com) which is itself based on the [Bootstrap](https://getbootstrap.com/) framework created by [Mark Otto](https://twitter.com/mdo) and [Jacob Thorton](https://twitter.com/fat).

## Copyright and License

Copyright 2021 La French Tech Tokyo. Code released under the [MIT](https://github.com/LaFrenchTechJapan/lafrenchtechjapan.github.io/blob/master/LICENSE) license.

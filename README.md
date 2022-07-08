## Software Designs and Algorithms

### Installation

You need to have [Node version](https://nodejs.org/en/) on your machine that matches [the requirements](node_modules/@docusaurus/core/package.json) of the `docusaurus` packages ("engines" field in package.json) that is used for building the documentation. Once you have it run the command below in your terminal to install project dependencies and build the project:

```
$ npm i
```

Once it is done start the project by running the command bellow:

```
$ npm run serve
```

That is it, enjoy the course by navigating to the [http://localhost:3000](http://localhost:3000) in your preferred browser.

## Deploy docusaurus documentation

To update docusaurus documentation execute below command from `master` branch.

```sh
USE_SSH=true GIT_USER=necrifede yarn deploy
```

Once command is executed after some time documentation should be updated on [https://necrifede.github.io/software-designs-and-algorithms/](https://necrifede.github.io/software-designs-and-algorithms/). This action could take until 20 minutes accorind github pages documentation

## versions

versions used to work on hometasks:

- *node:* v18.2.0
- *npm:* 8.9.0
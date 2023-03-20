# 🐻 Benefits Eligibility - Phase 4

[![Test](https://github.com/GSA/usagov-benefits-eligibility/actions/workflows/test.yml/badge.svg)](https://github.com/GSA/usagov-benefits-eligibility/actions/workflows/test.yml)
[![CodeQL](https://github.com/GSA/usagov-benefits-eligibility/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/GSA/usagov-benefits-eligibility/actions/workflows/codeql-analysis.yml)
[![MegaLinter](https://github.com/GSA/usagov-benefits-eligibility/actions/workflows/megalinter.yml/badge.svg)](https://github.com/GSA/usagov-benefits-eligibility/actions/workflows/megalinter.yml)
[![Semgrep](https://github.com/GSA/usagov-benefits-eligibility/actions/workflows/semgrep.yml/badge.svg)](https://github.com/GSA/usagov-benefits-eligibility/actions/workflows/semgrep.yml)
[![woke](https://github.com/GSA/usagov-benefits-eligibility/actions/workflows/woke.yml/badge.svg)](https://github.com/GSA/usagov-benefits-eligibility/actions/workflows/woke.yml)
[![Snyk Scan](https://github.com/GSA/usagov-benefits-eligibility/actions/workflows/snyk.yml/badge.svg)](https://github.com/GSA/usagov-benefits-eligibility/actions/workflows/snyk.yml)
[![OWASP ZAP Full Scan](https://github.com/GSA/usagov-benefits-eligibility/actions/workflows/owasp_zap_full.yml/badge.svg)](https://github.com/GSA/usagov-benefits-eligibility/actions/workflows/owasp_zap_full.yml)
[![pa11y tests](https://github.com/GSA/usagov-benefits-eligibility/actions/workflows/pa11y.yml/badge.svg)](https://github.com/GSA/usagov-benefits-eligibility/actions/workflows/pa11y.yml)
[![check_spelling](https://github.com/GSA/usagov-benefits-eligibility/actions/workflows/check_spelling.yml/badge.svg)](https://github.com/GSA/usagov-benefits-eligibility/actions/workflows/check_spelling.yml)


BEARS (Benefits Eligibility Awareness Resources)
will be a proactive notification service that provides
timely and personalized information about benefits
eligibility, contextualized by life events. Before we can
do notifications and potentially proactive notifications,
we need to be able to estimate eligibility and figure out a
way to get people to sign up and store their information.
We also need to establish relationships with benefits
programs so we can keep eligibility information up to date.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate

# federalist build
$ npm run federalist

# federalist local build
$ npm run federalist:local

# specs
$ npm run test
$ npm run test:watch

# you may want to look at additional scripts available in the package.json
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Local development tips

1. You can enable console.log by copying `.env.txt` and renaming it to `.env`. This file is already ignored in `.gitignore` so you do not need to worry about committing this.
2. Use the provided pre-commit hooks. To install, [see the documentation in this repo](docs/pre-commit.md).
3. When switching branches, it may be necessary at times to run `npm i` to ensure you get matching npms for the branch. The best way is to stop `npm run dev`, install and then start `npm run dev` again.

## Using Docker

If one does not wish to use / install the build requirements on their
local system, an alternative would be to use Docker. Docker is a
containerization tool that allows for fresh, repeatable builds on
a clean system. The artifact from a Docker build is an "image";
when that image is run, it starts a "container."

### Building with Docker

To build an image of the BEARS software, use the following command:

```bash
(
  cd "$(git rev-parse --show-toplevel)" \
  && bash build_docker_image.bash
)
```

This will create a Docker image named "bears" that may be run as a
container later.

### Running the BEARS Image

To run a container based on the BEARS Docker Image, the following
command may be used:

```bash
docker run \
  --rm \
  --interactive \
  --tty \
  --publish 3000:3000 \
  bears
```

This will run the container in the foreground (replace the `--interactive`
and `--tty` flags with `--detach` to have it run in the background). The
`--publish` flag makes it so that connection attempts to the port BEARS
runs on is accessible outside of the container (e.g., from a web browser
on the local system).

When the container is running, one may use a web browser to interact with
the BEARS application at:

<!-- markdown-link-check-disable -->

- [http://localhost:3000/](http://localhost:3000/)

<!-- markdown-link-check-enable -->

## Using Vagrant when Docker isn't Available

For systems where Docker is not installed, a Vagrantfile is provided
so that the [Vagrant](https://www.vagrantup.com/) tool may be used to
start a virtual machine (VM) that has Docker installed. Note: one
may need to install virtualization platform such as
[Virtualbox](https://www.virtualbox.org/).

### Starting a Vagrant Virtual Machine

To start Vagrant, use the following command:

```bash
vagrant up
```

This will start the virtual machine in the background. This virtual
machine will have the BEARS source code copied to it as a part of
the provisioning steps performed by `vagrant up`.

- note: the source code installed on the virtual machine is a copy
  of what's on the local filesystem. Any changes made on the
  virtual machine are not reflected on the local filesystem; any
  changes made on the local filesystem are not reflected on the
  virtual machine.

Once the virtual machine is running, one may connect to it using this
command:

```bash
vagrant ssh
```

Running this command is like using `ssh` to connect to a remote
system. To close the connection, use `exit` or `logout` normally.

Once connected to the virtual machine, use the steps listed previously
to build an image of the BEARS software and run it as a container.

```bash
docker build -t bears . \
&& docker run --rm -it -p 3000:3000 bears
```
### Spell Checking in both English and Spanish Languages

cSpell is set to check `/locales/` and `/content/` folders for both English and Spanish languages. If there are any words that need to be considered always `true`, they need to be added to the `word` list in the `cSpell.json` file in the root of the directory.


cSpell action is currently set to work only in PRs into `main` and when there is a `push` on the branches that starts with `content/**`.

### Pa11y testing locally

To implement the pa11y testing locally in a containerized environment, use the following command:

```bash
(
  cd "$(git rev-parse --show-toplevel)" \
  && docker compose up
)
```

You may use the following command to close the running containers:

```bash
(
  docker compose down
)

### Useful links

- [https://nuxtjs.org/](https://nuxtjs.org/)
- [https://webpack.js.org/](https://webpack.js.org)
- [https://jestjs.io/](https://jestjs.io/)
- [https://federalistapp.18f.gov/](https://federalistapp.18f.gov/)
- [https://federalist.18f.gov/documentation/](https://federalist.18f.gov/documentation/)

### Github Actions

- .github/workflows/main.yml - Builds, tests the BEARS site.
- .github/workflows/codeql-analysis.yml - Scans for code quality and security issues in the BEARS site and it's dependencies.

### Federalist builds

- [https://federalistapp.18f.gov/sites/983/builds](https://federalistapp.18f.gov/sites/983/builds)

## Design considerations

- Some items we only render client-side this is because the data
  relationships are not fully captured by [Nuxt.js](<(<https://nuxtjs.org>)>)
  and by moving them client-side [Vue.js](https://vuejs.org/)
  is able to track those relationships.
- The current print philosophy is that print is a different
  artifact than a web page, be sure to test printing after any
  website changes.
- There are some integration issues between
  [USWDS](https://designsystem.digital.gov/) components and
  [Vue.js](https://vuejs.org/). The current approach tries
  to use each framework by it's public API's as much as possible.

### Application Structure

As we move from phase 3 project to a production ready MVP in phase 4, we need
to think more about application structure as the application grows. Here are
some useful links on areas we can improve.

The first post is more useful for nuxt/vuex structure. The second link is
more general but also a decent read.

- <https://dykraf.com/blog/nuxtjs-static-content-using-vuex#using-store-in-pages-with-disp>
- <https://vueschool.io/articles/vuejs-tutorials/how-to-structure-a-large-scale-vue-js-application/>

Current todos as we are working in the code:

- Remove "API" or $content calls from vue components to API call to be
  loaded by store.
- Rename Components to be easier to follow.
- Revisit Vuex store to align with benefit cards vs criteria selections..
```

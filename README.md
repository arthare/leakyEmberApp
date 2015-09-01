# Leaky-app

This app seems to leak DOM nodes on every route transition, despite only being about 20 extra lines over the barebones ember-cli app.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200/route1](http://localhost:4200/route1).
* Open up chrome dev tools, go to the timeline view, and start recording
* Follow instructions at route1 to repro the bug (cycle between route1 and route2)

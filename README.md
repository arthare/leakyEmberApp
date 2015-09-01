# Leaky-app

This is an app that has been tested to leak DOM nodes in ember 1.13.5, 1.13.9, and 2.0.1.

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

## Purpose
* To demonstrate an odd memory leak that appears whenever a component contains a DOM element with an attribute like `my-attribute="value-{{expression}}"`

## Repro

1. `ember server`
2. Visit the app at [http://localhost:4200/route1](http://localhost:4200/route1).
3. Open chrome devtools, go to timeline view, pick memory, start recording.
4. Go from route1 to route2 and back a couple dozen times (doesn't seem to matter if you use the link or the back button)
5. Note that the DOM node count keeps climbing in chrome on each there-and-back
6. Now, go to components/leaky-component/template.hbs and change `fake-attrib="leaky-{{product.id}}"` to `fake-attrib="leaky-5"`
7. Do steps 4-5 again and note the leakiness.  Without the handlebars'd expression, it is not leaky.

## Extra Exercises
* Uncomment the #each in leaky-component's template to make the component much bigger, and watch the leaks-per-there-and-back go through the roof.

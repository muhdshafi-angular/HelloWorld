# first-app

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.3.

## Installation
* Install NodeJS
* Install Angular CLI

## Check versions

* `node -v`
* `npm -v`
* `ng v`

## Create Project

* `ng new \<project name\>`

## Start embeded web server

* `ng server  (ng s)`

## Components
Components are the most basic UI building block of an Angular app. An Angular app contains a tree of Angular components.

* `ng generate component <name>  (ng g c \<name\>)`

## Data binding
* Template - View Part of component, Support  HTML markup, ignore JavaScript

### Component to Template
* String Interpolation( `{{...}}` )  
`Welcome to {{ title }}!`  
  {{num + 100}}  
 The text between the braces is a template expression that Angular first evaluates and then converts to a string.
 

* Property binding

### Template to Component
* Event  
* Any event enclosed in () is an Angular event 
example: `<button  (click)="onclick($event)">Click</button>`  
Use `$event` for passing the event object to component  
### 2 way binding






## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

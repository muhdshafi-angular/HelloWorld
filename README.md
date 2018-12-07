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
`<input type="text" [value]="title">` value of the expression `title` is set to the property `value`.  
`<input type="text" value="title">` String value `title` is set to the property `value`.  

### Template to Component
* Event  
* Any event enclosed in () is an Angular event 
example: `<button  (click)="onclick($event)">Click</button>`  
Use the expression `$event` for passing the event object to component.  
Any event without enclosed in () is a normal browser event.  
### 2 way binding
**ngModel** is a directive in Angular 2 and above which provides the two way binding.  
Two-way data binding really just boils down to event binding and property binding.

* **\[value\]=”username”** - Binds the expression username to the input element’s value property  
* **(input)=”expression”** - Is a declarative way of binding an expression to the input element’s input event (yes there’s such event)  
* **username = $event.target.value** - The expression that gets executed when the input event is fired  
* **$event** - Is an expression exposed in event bindings by Angular, which has the value of the event’s payload  

**ngModel** provide an abstraction for the above steps.  
`<input [ngModel]="username" (ngModelChange)="username = $event">` without short hand syntax.  
`<input [(ngModel)]="username" >` without short hand syntax.  


## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

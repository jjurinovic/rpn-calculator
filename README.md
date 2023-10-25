# Reverse Polish Notation calculator

Simple angular aplication with 2 pages: Login and Calculator page. The application was created for a company during the interview process as a coding challenge.

More about notation: https://en.wikipedia.org/wiki/Reverse_Polish_notation

## Rules

- Operators: Multiplication (*), Division (/), Addition (+), Substraction (-)

- Numbers are wholer and/or decimal numbers

- Operators are evaluates from left to right

- Multiplication and Division are evaluated before Addition and Substraction

- Minus sign (-) for negative number is not separated by whitespace



## Example

- Input: tokens = ["2.1","1.7","+","3","*"]

- Output: 11.4

- Explanation: ((2.1+1.7)*3) =11.4

- Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]

- Output: 22

- Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5

- = ((10 * (6 / (12 * -11))) + 17) + 5

- = ((10 * (6 / -132)) + 17) + 5

- = ((10 * 0) + 17) + 5

- = (0 + 17) + 5
- = 17 + 5
- = 22

### Credentials
- username: demo

- password: 1234


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

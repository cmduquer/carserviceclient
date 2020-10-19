# Trabajo Angular -- Ingeniería Web 2020-01 -- Jhon Vásquez

Se han hecho modificaciones a los componenes ya existentes en el proyecto base (al cuál le hice fork) y se han creado otros. Los componentes que creé son:

- owner-list.component

- owner-edit.component

- inicio.component

Donde los dos primeros sirven para mostrar y editar la información referente a los propietarios de los carros. El inicio.component se ha creado para que sea la página de inicio y sea allí donde se muestra los carros con sus respectivos propietarios.

Además, se ha creado el servicio "owner.service", el cuál nos permite hacer las diferentes consultas a la API de "owners".

De la página de material.angular.io se han usado cinco componentes que son: una tabla, botón, panel expansivo, un menú y una toolbar. A continuación dejo los lins de lo que usé.

- https://material.angular.io/components/menu/overview

- https://material.angular.io/components/button/overview

- https://material.angular.io/components/table/overview

- https://material.angular.io/components/toolbar/overview

- https://material.angular.io/components/expansion/overview


La tabla se ha usado para mostrar los propietarios en el componente "owner-list" y en ese mismo componente se han agregado dos botones, los cuales sirven para agregar y borrar a los propietarios. Se pueden seleccionar varios propietarios en la tabla para borrar. Además, la tabla contiene un botón por cada propietario que nos permite modificarlo.










# CarServiceClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

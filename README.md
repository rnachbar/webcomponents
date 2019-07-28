# Aplicação de Web Components para testes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## First Runn

Execute o comando `npm install @angular/cli` para instalar o angular globalmente em sua máquina.  
Dentro da pasta raiz do projeto, execute o comando `npm install` para baixar todas as dependências necessárias.  

## Criando nova biblioteca

Execute o comando `ng generate library nome-da-biblioteca --prefix=nachbar` para criar a biblioteca. O comando `prefix` adiciona o valor informado antes do nome da biblioteca (nachbar-nome-da-biblioteca).  
Após isso a sua biblioteca será criada em /projects/nachbar-nome-da-biblioteca.  

## Publicando uma biblioteca JavaScript no NPM

Depois de criar e testar nossa biblioteca TypeScript / JavaScript, podemos publicá-la no NPM para uso em outros projetos. Em todas novas bibliotecas, precisamos adicionar um arquivo package.json para definir informações sobre o nome e a versão do nosso pacote. Para criar o arquivo package.json, execute o seguinte comando no diretório raiz da biblioteca criada.  

* `npm init`

Após informa os dados pedidos, execute o seguinte comando gerar o bild da biblioteca:  

* `ng build nachbar-nome-da-biblioteca`

Após isso, publique a biblioteca no npm:  

* `npm login`
* `npm publish`

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

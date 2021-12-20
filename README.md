<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework para a construção de aplicativos do lado do servidor eficientes e escalonáveis..</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Descrição

Repositorio de desenvolvimento de atividade de teste utilizando [Nest.js](https://github.com/nestjs/nest) framework.

A Api (/users-api) disponibiliza dos seguintes serviços:

- Criar novo usuário (/users-api/create)
Json:
```
{
	"name":"",
	"phone":"",
	"cpf":"",
	"cep":"",
	"logradouro":"",
	"city":"",
	"state":"",
	"password":"",
	"passwordConfirmation":""
}
```
<img src="https://github.com/AlexandreD3v/user-api/blob/387e873a3480fff9dbf6f31e11d5aa4630c65db1/img/create.png" alt="Create">

- Criar novo usuário com autentificação (/users-api/admin)
Json:
```
{
	"name":"",
	"cpf":"",
	"password":"",
	"passwordConfirmation":""
}
```
<img src="https://github.com/AlexandreD3v/user-api/blob/387e873a3480fff9dbf6f31e11d5aa4630c65db1/img/admin.png" alt="Create">

- Listagem de usuários (/users-api/list)
<img src="https://github.com/AlexandreD3v/user-api/blob/387e873a3480fff9dbf6f31e11d5aa4630c65db1/img/list.png" alt="list">

- Recuperar usuario por id (/users-api/find/:)id
<img src="https://github.com/AlexandreD3v/user-api/blob/387e873a3480fff9dbf6f31e11d5aa4630c65db1/img/listId.png" alt="listId">

- Editar usuário (/users-api/update/:id)
<img src="https://github.com/AlexandreD3v/user-api/blob/387e873a3480fff9dbf6f31e11d5aa4630c65db1/img/update.png" alt="update">

- Remover usuário (/users-api/delete/:id)
<img src="https://github.com/AlexandreD3v/user-api/blob/387e873a3480fff9dbf6f31e11d5aa4630c65db1/img/delete.png" alt="delete">

- Recuperar usuário por CPF (/users-api/listUserByCPF/:cpf)
<img src="https://github.com/AlexandreD3v/user-api/blob/387e873a3480fff9dbf6f31e11d5aa4630c65db1/img/listCPF.png" alt="listCPF">

- Recuperar endereço por CEP (/users-api/findAddress/:cep)
<img src="https://github.com/AlexandreD3v/user-api/blob/387e873a3480fff9dbf6f31e11d5aa4630c65db1/img/findAddress.png" alt="findAddress">

## Instalação

```bash
$ npm install
```

## Executando o app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Testes (Em implementação)

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Suporte

Nest é um projeto de código aberto licenciado pelo MIT. Pode crescer graças aos patrocinadores e soporte da comunidade incrível. Se você quer se juntar a eles, [leia mais aqui] (https://docs.nestjs.com/support).

## Contato

- Autor - [Alexandre J. Corrêa](https://github.com/AlexandreD3v)
- Website - [https://nestjs.com](https://nestjs.com/)

## Licença

Nest is [MIT licensed](LICENSE).

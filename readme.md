<div align=center>

[![install size](https://packagephobia.com/badge?p=orm-project)](https://packagephobia.com/result?p=orm-project)
[![npm version](https://badge.fury.io/js/orm-project.svg)](https://badge.fury.io/js/orm-project)
</br>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/Ts--node-3178C6?style=flat&logo=ts-node&logoColor=white"/>

</div>

# ORM-PROJECT

> It was created to create a project more conveniently than the TypeORM structure.

## NOTE

> This NPM Module is based on TypeORM.
> It will use TypeORM

Git : https://github.com/sun980120/orm-project </br>
Npm : https://www.npmjs.com/package/orm-project 

## INSTALL

* <b> npm i -g orm-project</b><br>

## USING

```sh
$ orm-project [ Options ] -n [ Path/DirName ]
$ cd [ Path/DirName ]
$ npm install OR yarn install
$ npm run start:dev OR yarn run start:dev
&&
$ npm run build OR yarn run build // Typescript build to Javascript
$ npm run start OR yarn run start // node start
&&
$ npm run start:nodemon OR yarn run start:nodemon // node start to Nodemon
```

## Directory Tree
> orm-project -n project
```
project
├── config
│   └── default.yaml
│   └── development.yaml
│   └── production.yaml
├── src
│   └── api
│   │   └── auth
│   │       └── dto
│   │       │   └── auth.dto.ts
│   │       ├── auth.controller.ts
│   │       ├── auth.entity.ts
│   │       ├── auth.repository.ts
│   │       └── auth.service.ts
│   ├── bin
│   │   └── www.ts
│   ├── common
│   │   ├── exceptions
│   │   │   ├── bad-request.exception.ts
│   │   │   └── http.exception.ts
│   │   └── interfaces
│   │       └── controller.interface.ts 
│   ├── config
│   ├── middlewares
│   │   ├── error.middleware.ts
│   │   └── request.handler.ts
│   ├── modules
│   ├── data-source.ts
│   └── index.ts
├── .env
├── .gitignore
├── package.json
└── tsconfig.json
```

## CODE FLOW
> Controller → Service → Repository

* /api/auth/auth.controller.ts
* /api/auth/auth.service.ts
* /api/auth/auth.repository.ts

## LOG

* 1.1.8 - Symbolic Link Edit
* 1.1.9 - Change import
* 1.1.10 - Change import
* 1.1.12 - package.json ADD dirName && Version -> 1.1.12
* 1.1.14 - Change Import & Edit Code
* 1.1.15 - Change license
* 1.1.16 - Delete scripts
* 1.1.17 - Edit .gitignroe
* 1.2.0 - ReadMe Update
* 1.2.1 - Build & yarn start Update
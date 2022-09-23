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
>It will use TypeORM

Git : https://github.com/sun980120/orm-project </br>
Npm : https://www.npmjs.com/package/orm-project 

## INSTALL

* <b> npm i -g orm-project</b><br>

## USING

```sh
$ orm-project [ Options ] -n [ Path/DirName ]
$ cd [ Path/DirName ]
$ npm install
$ npm run start:dev
&&
$ npm run build // Typescript build to Javascript
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

# NodeCourse Clean Architecture

This repository is a NodeJs project that implements the Clean Architecture using Typescript.
Where I learned the Clean Architecture using Typescript.

## Getting Started

You need copy env file and rename it to .env and fill the values.

### Prerequisites

NodeJs
MongoDB


### Installing

Download the project and install the dependencies

```
npm install
```

Run the project

```
npm run dev
```

Project structure
```
.
├── README.md
├── package-lock.json
├── package.json
├── src
│   ├── app.ts
│   ├── config
│   │   ├── bcrypt.adapter.ts
│   │   ├── jwt.adapter.ts
│   │   ├── regular-exp.ts
│   │   └── env.ts
│   ├── data
│   │   └── mongo
│   │       └── models
│   │           └── user.model.ts
│   ├── domain
│   │   ├── dtos
│   │   │   ├── auth
│   │   │   │   ├── login-user.dto.ts
│   │   │   │   └── register-user.dto.ts
│   │   │   └── user.dto.ts
│   │   ├── entities                    
│   │   │   └── user.entity.ts
│   │   ├── errors
│   │   │   └── custom.error.ts
│   │   └── usecases
│   │       └── auth.usecase.ts
│   ├── presentation
│   │   ├── auth
│   │   │   ├── controller.ts
│   │   │   └── service.ts
│   │   ├── services
│   │   │   └── auth.service.ts
│   │   └── usecases
│   │       └── auth.usecase.ts
│   └── index.ts
├── .env.Template
├── .gitignore
├── package-lock.json
├── package.json
└── tsconfig.json

```
## Deployment

This project is not ready to be deployed

## Built With

    - Typescript
    - NodeJs
    - MongoDB

## Authors

* **Froylan Calderon** - *Fullstack Developer* - [jFroylan-Cal](https://github.com/jFroylan-Cal)

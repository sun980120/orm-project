#!/usr/bin/env node
"use strict";

const { Command } = require('commander');
const program = new Command();
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');
const VERSION = require('../package.json').version

program
    .usage('express-orm [option] -n [Path/Dirname]')
    .requiredOption('-n, --name <name>', 'Input path/directory name')
    .option('s, --strict', 'use strict mode')
    .version(VERSION, '-V, --verion', 'output the current version')
    .showHelpAfterError()
    .parse();

// Get dir name
const dirName = program.opts().name;
try {
    /**
     * If file exists, throw error.
     * todo : overwite Y/N
     */
    if(fs.existsSync(dirName)){
        throw ("File already exists")
    } else {
        (async () => {
            // Create Directory
            await createDir(dirName)

            // Rendering EJS
            // Config area.
            await ejsRender("package", "/package.json", {projectName: "default"})
            await ejsRender("env", "/.env");
            await ejsRender("gitIgnore", "/.gitignore");
            await ejsRender("default", "/config/default.yaml")
            await ejsRender("development", "/config/development.yaml")
            await ejsRender("production", "/config/production.yaml")
            await ejsRender("tsconfig", "/tsconfig.json")
            await ejsRender("dataSource", "/src/data-source.ts")

            // Base area.
            await ejsRender("index", "/src/index.ts")
            await ejsRender("www", "/src/bin/www.ts")

            // API area.
            await ejsRender("authController", "/src/api/auth/auth.controller.ts")
            await ejsRender("authService", "/src/api/auth/auth.service.ts")
            await ejsRender("authEntity", "/src/api/auth/auth.entity.ts")
            await ejsRender("authRepository", "/src/api/auth/auth.repository.ts")
            await ejsRender("authDto", "/src/api/auth/dto/auth.dto.ts")

            // Middleware area.
            await ejsRender("errorMiddleware", "/src/middlewares/error.middleware.ts")
            await ejsRender("requestHandler", "/src/middlewares/request.handler.ts")
            
            // Common area.
            // exceptions
            await ejsRender("httpException", "/src/common/exceptions/http.exception.ts")
            await ejsRender("badRequestException", "/src/common/exceptions/bad-request.exception.ts")
            // interface
            await ejsRender("controllerInterface", "/src/common/interfaces/controller.interface.ts")
        })()
        .then(()=>{
            console.log(`Project Join : \x1b[31mcd ${dirName}\x1b[0m`);
            console.log("Project Install : \x1b[31mnpm install\x1b[0m");
            console.log("Project Start : \x1b[31mnpm run start:dev\x1b[0m");
            console.log("Check your browser! - \x1b[31mlocalhost:8080\x1b[0m\n\n");
            console.log("And, if you want connect DB or change Port,");
            console.log(`You check \x1b[31m'${dirName}/config/default.yaml\x1b[0m && \x1b[31m'${dirName}/config/development.yaml'/\x1b[0m file.\n\n`);
            console.log("Thank you for downloading!:)");
        })
    }
} catch (e) {
    
}

/**
 * 
 * @param {String} name now file exists ../templates/[filename]
 * @param {String} filePath project file will saved [dir/filename]
 */
async function ejsRender(name, filePath, rederOption = {}){
    // default setting
    rederOption.view = true;
    rederOption.strict = program.opts().strict;

    const target = path.join(__dirname, '..', 'lib',`${name}.ejs`);
    await ejs.renderFile(target, rederOption, "locals", (err, str) => {
        if(err != undefined) throw err;
        fs.writeFileSync(`${dirName}${filePath}`, str, 'utf8');
    })
}


/**
 * @param {String} dirName Root of the file to be created
 * Create Directory
 */
async function createDir(dirName){
    fs.mkdirSync(`${dirName}`);
    fs.mkdirSync(`${dirName}/config`);
    fs.mkdirSync(`${dirName}/src`);
    fs.mkdirSync(`${dirName}/src/api`);
    fs.mkdirSync(`${dirName}/src/api/auth`);
    fs.mkdirSync(`${dirName}/src/api/auth/dto`);
    fs.mkdirSync(`${dirName}/src/bin`);
    fs.mkdirSync(`${dirName}/src/common`);
    fs.mkdirSync(`${dirName}/src/common/exceptions`);
    fs.mkdirSync(`${dirName}/src/common/interfaces`);
    fs.mkdirSync(`${dirName}/src/config`);
    fs.mkdirSync(`${dirName}/src/middlewares`);
    fs.mkdirSync(`${dirName}/src/modules`);
}
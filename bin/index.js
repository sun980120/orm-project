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
            await ejsRender("data-source", "/src/data-source.ts")

            // Base area.
            await ejsRender("index", "/src/index.ts")
            await ejsRender("www", "/src/bin/www.ts")

            // API area.
            await ejsRender("auth.controller", "/src/api/auth/auth.controller.ts")
            await ejsRender("auth.service", "/src/api/auth/auth.service.ts")
            await ejsRender("auth.entity", "/src/api/auth/auth.entity.ts")
            await ejsRender("auth.repository", "/src/api/auth/auth.repository.ts")
            await ejsRender("authDto", "/src/api/auth/dto/auth.dto.ts")

            // Middleware area.
            await ejsRender("error.middleware", "/src/middlewares/error.middleware.ts")
            await ejsRender("request.handler", "/src/middlewares/request.handler.ts")
            
            // Common area.
            // exceptions
            await ejsRender("http.exception", "/src/common/exceptions/http.exception.ts")
            await ejsRender("bad-request.exception", "/src/common/exceptions/bad-request.exception.ts")
            // interface
            await ejsRender("controller.interface", "/src/common/interfaces/controller.interface.ts")
        })()
        .then(()=>{
            console.log("Project start : \x1b[31mnpm run start\x1b[0m");
            console.log("Check your browser! - \x1b[31mlocalhost:8080\x1b[0m\n\n");
            console.log("And, if you want connect DB or change Port,");
            console.log("You check \x1b[31mproject/.env\x1b[0m file.\n\n");
            console.log("And... Thank you for downloading! Happy Programming :)");
        })
    }
} catch (e) {
    
}

/**
 * 
 * @param {String} name now file exists ../templates/[filename]
 * @param {String} filePath project file will saved [dir/filename]
 */
const ejsRender = async (name, filePath, rederOption = {}) => {
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
const createDir = async (dirName) => {
    fs.mkdirSync(`${dirName}`);
    fs.mkdirSync(`${dirName}/config`);
    fs.mkdirSync(`${dirName}/src`);
    fs.mkdirSync(`${dirName}/src/api/auth`);
    fs.mkdirSync(`${dirName}/src/api/auth/dto`);
    fs.mkdirSync(`${dirName}/src/bin`);
    fs.mkdirSync(`${dirName}/src/common`);
    fs.mkdirSync(`${dirName}/src/common/exceptions`);
    fs.mkdirSync(`${dirName}/src/common/interfaces`);
    fs.mkdirSync(`${dirName}/src/config`);
    fs.mkdirSync(`${dirName}/src/middleware`);
    fs.mkdirSync(`${dirName}/src/modules`);
}
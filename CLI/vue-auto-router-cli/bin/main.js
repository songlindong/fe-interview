#!/usr/bin/env node
import { program } from 'commander'

import config from '../package.json' assert {type: 'json'}

import create from './create.js'

program.version(config.version)
program.command('create <name>')
       .description('😊😊😂 create a new project powered by vue-cli-service')
       // .action(name => {
       //  console.log('creat:' + name)
       // })
       .action(create)


program.parse(process.argv)




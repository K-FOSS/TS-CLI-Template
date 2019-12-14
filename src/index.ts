#!/usr/bin/env node
// src/index.ts
import program from 'commander';

program
  .version('0.0.1')
  .description('TypeScript Example CLI for usage in other projects');

program
  .command('start')
  .description('Start the CLI service')
  .action(async () => console.log('Starting'));

program
  .command('stop')
  .description('Stop the CLI service')
  .action(async () => console.log('Stopping'));

program.parse(process.argv);

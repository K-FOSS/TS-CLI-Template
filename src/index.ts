#!/usr/bin/env node
// src/index.ts
import program from 'commander';
import { actions } from './Actions';

program
  .version('0.0.1')
  .description('TypeScript Example CLI for usage in other projects');

for (const action of actions) {
  let depth = program;
  for (const [key, value] of Object.entries(action)) depth = depth[key](value);
}

program.parse(process.argv);

// src/Actions/index.ts
interface Action {
  command: string;
  description: string;
  action: (...args: any[]) => any;
}

export const actions: Action[] = [
  {
    command: 'start',
    description: 'Start CLI service',
    action: async () => console.log('Start command'),
  },
  {
    command: 'stop',
    description: 'Stop CLI service',
    action: () => console.log('Stop command'),
  },
];

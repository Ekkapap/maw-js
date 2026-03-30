module.exports = {
  apps: [
    {
      name: 'maw',
      script: 'src/server.ts',
      interpreter: '/Users/neo/.bun/bin/bun',
      watch: ['src'],
      watch_delay: 500,
      ignore_watch: ['node_modules', 'ui'],
      env: {
        MAW_HOST: 'local',
        MAW_PORT: '3456',
      },
    },
    {
      name: 'maw-boot',
      script: 'src/cli.ts',
      args: 'wake all --resume',
      interpreter: '/Users/neo/.bun/bin/bun',
      // One-shot: spawn fleet after server starts, don't restart
      autorestart: false,
      // Give maw server time to come up
      restart_delay: 5000,
    },
    {
      name: 'maw-ui',
      script: '/Users/neo/.bun/bin/bun',
      args: 'run dev',
      cwd: '/Users/neo/ghq/github.com/Ekkapap/maw-ui',
      autorestart: true,
      watch: false,
    },
    {
      name: 'oracle-studio',
      script: '/Users/neo/.bun/bin/bun',
      args: 'run dev',
      cwd: '/Users/neo/ghq/github.com/Ekkapap/arra-oracle-v2/frontend',
      autorestart: true,
      watch: false,
    },
    {
      name: 'maw-broker',
      script: '/Users/neo/.bun/bin/bun',
      args: 'run src/broker.ts',
      autorestart: true,
      watch: false,
      env: {
        MAW_BROKER: '1',
      },
    },
  ],
};

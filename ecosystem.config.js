module.exports = {
  apps: [
    {
      name: 'Backend',
      cwd: './Backend',
      script: 'npm',
      args: 'start',
      watch: true,
      env: {
        NODE_ENV: 'development',
      },
    },
    {
      name: 'Client',
      cwd: './Frontend/client',
      script: 'npm',
      args: 'start',
      watch: true,
      env: {
        NODE_ENV: 'development',
      },
    },
    {
      name: 'Admin',
      cwd: './Frontend/admin',
      script: 'npm',
      args: 'start',
      watch: true,
      env: {
        NODE_ENV: 'development',
      },
    },
  ],
};

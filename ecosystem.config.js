module.exports = {
  apps: [
    {
      name: "joka-life",
      script: "serve",
      args: "-s build",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env_production: {
        NODE_ENV: "production",
        PORT: 4000,
      },
    },
    {
      name: "joka-life",
      script: "npm",
      args: "start",
      instances: 1,
      autorestart: true,
      watch: true,
      max_memory_restart: "1G",
      env_development: {
        NODE_ENV: "development",
        PORT: 4000,
      },
    },
  ],
};

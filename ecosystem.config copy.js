module.exports = {
  apps: [
    {
      name: "joka-life",
      script: "npm",
      args: "start",
      instances: 1,
      autorestart: true,
      watch: true,
      max_memory_restart: "1G",
      env: {
        PORT: 4000,
      },
    },
  ],
};

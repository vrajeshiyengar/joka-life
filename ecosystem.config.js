module.exports = {
  apps: [
    {
      name: "joka-life",
      script: "npm",
      args: "start",
      watch: true,
      env: {
        NODE_ENV: "production",
        PORT: "4000",
      },
    },
  ],
};

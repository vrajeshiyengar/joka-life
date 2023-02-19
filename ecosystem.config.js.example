module.exports = {
  apps: [
    {
      name: "joka-life",
      script: "npm",
      args: "start",
      exp_backoff_restart_delay: 100,
      instances: 2,
      merge_logs: true,
      exec_mode: "cluster",
      /* All env values are read as string by node */
      env: {
        PORT: "4000",
      },
      watch: true,
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      time: true,
      ignore_watch: ["logs", "ecosystem.config.js", "package.json"],
      log_file: "./logs/joka-life-logs.txt",
    },
  ],
};

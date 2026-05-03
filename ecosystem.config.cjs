module.exports = {
  apps: [
    {
      name: "app",
      script: "dist/index.js",
      instances: 1,
      exec_mode: "fork",
    }
  ]
};
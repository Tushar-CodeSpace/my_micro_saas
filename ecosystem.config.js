module.exports = {
  apps: [
    {
      name: "Micro SaaS API",
      script: "dist/index.js",
      instances: 1,
      exec_mode: "fork",
    }
  ]
};
module.exports = {
  apps: [
    {
      name: "micro-saas-api",
      script: "dist/index.js",
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};
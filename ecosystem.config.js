module.exports = {
    apps: [{
      name: "exb-client",
      script: "./node_modules/webpack/bin/webpack.js",
      args: "--mode development --watch",
      cwd: "./",
      env: {
        NODE_ENV: "development"
      },
      watch: false,
      instances: 1,
      autorestart: true,
      max_memory_restart: "1G",
      interpreter: "node"
    }]
};
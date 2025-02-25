module.exports = {
  apps: [{
    name: "exb-client",
    script: "./node_modules/webpack/bin/webpack.js",
    args: "--mode development --watch",
    cwd: "./",
    env: {
      NODE_ENV: "development"
    },
    watch: true,
    watch_options: {
      followSymlinks: false,
      usePolling: true,
      interval: 100, 
      binaryInterval: 100, 
      paths: ["your-extensions"],
      awaitWriteFinish: {
        stabilityThreshold: 50, 
        pollInterval: 100 
      }
    },
    ignore_watch: [
      "node_modules",
      "dist",
      "*.log"
    ],
    instances: 1,
    autorestart: true,
    max_memory_restart: "1G",
    interpreter: "node"
  }]
};
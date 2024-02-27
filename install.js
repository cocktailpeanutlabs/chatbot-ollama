module.exports = async (kernel) => {
  return {
    "run": [{
      "method": "shell.run",
      "params": {
        "message": "git clone https://github.com/ivanfioravanti/chatbot-ollama app",
      }
    }, {
      "method": "shell.run",
      "params": {
        "path": "app",
        "message": [
          "npm ci",
          "npm run build"
        ]
      }
    }, {
      "method": "notify",
      "params": {
        "html": "Click the 'start' tab to get started!"
      }
    }]
  }
}

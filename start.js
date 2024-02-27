module.exports = async (kernel) => {
  return {
    daemon: true,
    run: [{
      "method": "modal",
      "params": {
        "title": "Ollama",
        "description": "Launch Ollama before proceeding.",
        "menu": [{
          "text": "Install Ollama",
          "href": "https://ollama.com/"
        }]
      }
    }, {
      "method": "shell.run",
      "params": {
        "path": "app",
        "message": [
          "npm start"
        ],
        "on": [{ "event": "/http:\/\/[^ ]+/", "done": true }]
      }
    }, {
      "method": "local.set",
      "params": {
        "url": "{{input.event[0]}}"
      }
    }, {
      "method": "proxy.start",
      "params": {
        "uri": "{{local.url}}",
        "name": "Local Sharing"
      }
    }]
  }
}

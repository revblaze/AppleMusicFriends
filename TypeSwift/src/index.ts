//var jsonTextEditor = ace.edit('source')
//var outputTextEditor = ace.edit('output');
var jsonTextEditor: any
var outputTextEditor: any

var outputStorage: string
var compareString: string
var counter = 0

function formatJSON(msg: string) {
  return JSON.stringify(msg)
}

function insertJSON(msg: string) {
  outputStorage = outputTextEditor.getSession().getValue().toString()
  var jsonString = formatJSON(msg)

  jsonTextEditor.getSession().setValue(jsonString)
  window.webkit.messageHandlers.eventListeners.postMessage("[ACE] Inserted JSON")

  getCode()
}

function getCode() {
  var outputString = outputTextEditor.getSession().getValue().toString()
  window.webkit.messageHandlers.eventListeners.postMessage(`Counter: ${counter}`)

  if (outputString.localeCompare(outputStorage) != 0) {
    window.webkit.messageHandlers.eventListeners.postMessage("[ACE] SUCCESS")
    window.webkit.messageHandlers.eventListeners.postMessage(outputString.toString())
    counter = 0
  } else if (counter <= 20) {
    if (counter >= 10 && [10, 15, 20].includes(counter)) {
      window.webkit.messageHandlers.eventListeners.postMessage("[ACE] BUFFER: Still searching...")
      window.webkit.messageHandlers.eventListeners.postMessage(outputString.toString());
    }
    counter++
    setTimeout(getCode, 300);
  } else {
    window.webkit.messageHandlers.eventListeners.postMessage("[ACE] ERROR: Could not retrieve output code.")
    counter = 0
  }
}



enum SourceType {
  JSON = "JSON",
  MultipleJSON = "Multiple JSON",
  TypeScript = "TypeScript",
  JSONSchema = "JSON Schema",
  Postman = "Postman v2.1"
}
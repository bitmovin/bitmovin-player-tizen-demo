var ws = new window.WebSocket('wss://17ffa477ce8b.ngrok.io');
ws.onclose = ws.onerror = function() {
  ws = null;
};

var replaceLogFunction = function(logMethodName) {
  var original = console[logMethodName];

  console[logMethodName] = function() {
    try {
      if (ws != null) {
        ws.send(prepareArguments(original, arguments));
      }
      original.apply(this, arguments);
    } catch (error) {
      ws.send(JSON.stringify(error.stack));
    }
  };
};

function webSocketInitComplete() {
  if (window.onWsOpen) {
    window.onWsOpen();
  }
  window.wsIsOpen = true;
}

ws.onopen = function() {
  ['debug', 'log', 'info', 'warn', 'error'].forEach(replaceLogFunction);
  webSocketInitComplete();
};

ws.onerror = function() {
  webSocketInitComplete();
};

function prepareArguments(logFunction, originalArguments) {
  var argsArray = [logFunction.name];
  for (var i = 0; i < originalArguments.length; i++) {
    argsArray.push(originalArguments[i]);
  }
  return JSON.stringify(argsArray);
}
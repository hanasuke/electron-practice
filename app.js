'use strict';

var app = require('app');
var BrowserWindw = require('browser-window');

var mainWindow = null;

app.on('window-all-closed', function(){
  if ( process.platform != 'darwin' )
    app.quit();
});

app.on('ready', function() {
  mainWindow = new BrowserWindw({width: 880, height:600});
  mainWindow.loadUrl('file://' + __dirname + '/index.html');

  mainWindow.on('closed', function(){
    mainWindow = null;
  })
});

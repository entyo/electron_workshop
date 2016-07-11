'use strict'; // strictモードを使用(https://developer.mozilla.org/ja/docs/Web/JavaScript/Strict_mode)

let BrowserWindow; // ウインドウオブジェクトはグローバル参照しておく

// electronやウインドウのインスタンスを生成
var electron = require('electron');
var app = electron.app;
BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

// ウインドウが全て閉じられた時のイベント
app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});

// Electronが初期化され、ウインドウを作成可能になった時のイベント
app.on('ready', function() {

  // Chromiumの起動, 初期画面のロード
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // ウインドウが閉じられた時のイベント
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});

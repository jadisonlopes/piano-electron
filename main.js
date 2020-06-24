const { app, BrowserWindow } = require("electron");

let win;

function createWindow() {
  win = new BrowserWindow({
    show: false,
    width: 700,
    minWidth: 700,
    height: 400,
    minHeight: 400,
    icon: __dirname + "/src/assets/icons/icon.png",
  });

  win.once("ready-to-show", () => {
    win.maximize();
    win.show();
  });

  win.setMenu(null);

  win.loadFile("index.html");

  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});

const { app, BrowserWindow, ipcMain } = require("electron/main");
const fs = require("node:fs");
const path = require("node:path");

const musicDir = path.join(__dirname, "..", "public", "musics");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: `${__dirname}/preload.js`,
    },
  });
  mainWindow.loadURL("http://localhost:3000");
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

ipcMain.on("music-upload", (event, fileObject) => {
  const filePath = path.join(musicDir, fileObject.name);

  fs.writeFile(filePath, fileObject.data, async (err) => {
    if (err) {
      mainWindow.webContents.send("toast:recieve", err.message);
    } else {
      sendUpdatedList();
      mainWindow.webContents.send(
        "toast:recieve",
        "File uploaded successfully"
      );
    }
  });
});

ipcMain.on("music-get", () => {
  sendUpdatedList();
});

async function sendUpdatedList() {
  const files = await fs.promises.readdir(musicDir);
  mainWindow.webContents.send("music-list", files);
}

ipcMain.on("music-delete", async (event, music) => {
  const filePath = path.join(musicDir, music);

  fs.unlink(filePath, async (err) => {
    if (err) {
      mainWindow.webContents.send("toast:recieve", err.message);
    } else {
      sendUpdatedList();
      mainWindow.webContents.send("toast:recieve", "File deleted successfully");
    }
  });
});

ipcMain.on("music-to-play", (event, music) => {
  mainWindow.webContents.send("playable-music", music);
});

const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
    })

    // win.loadFile('index.html')

    // 下面的url为自己启动vite项目的url。
    //   win.loadURL('http://127.0.0.1:5173/')
    win.loadURL('http://localhost:8080/')
    // mainWindow.setMenu(null)
    // 打开electron的开发者工具
    win.webContents.openDevTools({ mode: 'detach' })
    win.setMenu(null)
}


app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

const {Menu} = require('electron')
const electron = require('electron')
const app = electron.app

const template = [
    {
        label: 'Electron',
        submenu: [
            {
                label: 'About Electron',
                click: () => {
                    console.log('About Clicked');
                }
            }, {
                label: 'Quit',
                click: () => {
                    app.quit();
                }
            }
        ]
    }
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)
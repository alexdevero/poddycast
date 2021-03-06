'use strict'

const { app, Menu } = require('electron').remote

const template =
[
    {
        label: i18n.__('Edit'),
        submenu:
        [
            {
                label: i18n.__('Cut'),
                role: 'cut'
            },
            {
                label: i18n.__('Copy'),
                role: 'copy'
            },
            {
                label: i18n.__('Paste'),
                role: 'paste'
            }
        ]
    },
    {
        label: i18n.__('View'),
        submenu:
        [
            {
                label: i18n.__('Reload'),
                role: 'reload'
            },
            {type: 'separator'},
            {
                label: i18n.__('Reset Zoom'),
                role: 'resetzoom'
            },
            {
                label: i18n.__('Zoom In'),
                role: 'zoomin'
            },
            {
                label: i18n.__('Zoom Out'),
                role: 'zoomout'
            },
            {type: 'separator'},
            {
                accelerator: 'CommandOrControl+Alt+L',
                checked: getPreference('darkmode'),
                click() {
                    darkMode()
                },
                label: i18n.__('Dark Mode'),
                type: 'checkbox',
            },
            {role: 'togglefullscreen', label: i18n.__('Toggle Full Screen')}
        ]
    },
    {
        label: i18n.__('Player'),
        submenu:
        [
            {
                accelerator: 'Space',
                label: i18n.__('Play/Pause'),
                click() {
                    // NOTE: if focus is not in any input field (search, playlist)
                    if (document.activeElement.type === undefined) {
                        // console.log(document.activeElement);
                        // console.log(document.activeElement.type);
                        // console.log(Object.prototype.toString.call(document.activeElement));
                        playPause('play-pause')
                    }
                }
            },
            {type: 'separator'},
            {
                accelerator: 'Left',
                click() {
                    playReply()
                },
                label: i18n.__('30sec Reply')
            },
            {
                accelerator: 'Right',
                click() {
                    playForward()
                },
                label: i18n.__('30sec Forward')
            }
        ]
    },
    {
        label: i18n.__('Go To'),
        submenu:
        [
            {
                accelerator: 'CommandOrControl+F',
                click() {
                    focusTextField('search-input')
                },
                label: i18n.__('Search')
            },
            {type: 'separator'},
            {
                accelerator: 'CommandOrControl+1',
                click() {
                    selectMenuItem('menu-episodes'); showNewEpisodes()
                },
                label: i18n.__('New Episodes')
            },
            {
                accelerator: 'CommandOrControl+2',
                click() {
                    selectMenuItem('menu-favorites'); showFavorites()
                },
                label: i18n.__('Favorites')
            },
            {
                accelerator: 'CommandOrControl+3',
                click() {
                    selectMenuItem('menu-history'); showHistory()
                },
                label: i18n.__('History')
            },
            {
                accelerator: 'CommandOrControl+4',
                click() {
                    selectMenuItem('menu-statistics'); showStatistics()
                },
                label: i18n.__('Statistics')
            },
            {type: 'separator'},
            {
                accelerator: 'CommandOrControl+N',
                click() {
                    focusTextField('new_list-input')
                },
                label: i18n.__('New List')
            }
        ]
    },
    {
        label: i18n.__('Settings'),
        submenu:
        [
            {
                accelerator: 'CommandOrControl+Alt+P',
                checked: getPreference('proxymode'),
                click() {
                    setProxyMode()
                },
                label: i18n.__('Proxy Mode'),
                type: 'checkbox'
            },
            {
                accelerator: 'CommandOrControl+Alt+M',
                checked: getPreference('minimize'),
                click() {
                    setMinimize()
                },
                label: i18n.__('Minimize'),
                type: 'checkbox'
            },
            {type: 'separator'},
            {role: 'toggledevtools'}
        ]
    }
]

if (process.platform === 'darwin') {
    template.unshift({
        label: app.getName(),
        submenu:
        [
            {role: 'about'},
            {type: 'separator'},
            {role: 'services', submenu: []},
            {type: 'separator'},
            {role: 'hide'},
            {role: 'hideothers'},
            {role: 'unhide'},
            {type: 'separator'},
            {role: 'quit'}
        ]
    })
}

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)

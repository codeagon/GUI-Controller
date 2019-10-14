
let BadGui
const path = require('path');
const fs = require('fs');

try {
    BadGui = require('../badGui')
} catch (e) {
    try {
        BadGui = require('../badGui-master')
    } catch (e) {
        console.log(`[GUICI] - badGUI not installed, GUI functionality disabled, please see the readme for more information`)
    }
}

module.exports = function GUICI(mod) {

    const gui = new BadGui(mod)
    let savedSettings = []

    try {
        savedSettings = require('./settings.json');
    } catch (e) {
        savedSettings = []
        saveSettings()
    }

    function saveSettings() {
        fs.writeFile(path.join(__dirname, 'settings.json'), JSON.stringify(savedSettings, null, 4), (err) => {
            console.log('[GUICI] - Settings created');
        });
    }
    //////// UI Data
    let data = [ //very good format yes hehehxddd
        { text: `<font color="#dcc856" size="+26">Toggleable GUI Elements:<br><br><font color="#97f3ff" size="+18">` },
        { command: `guiChangeState CharacterWindow 1`, text: `[HP/MP Bar ON]&#09;&#09;` },
        { command: `guiChangeState CharacterWindow 0`, text: `[HP/MP Bar OFF]` },
        { text: `<font color="#FFD700">  [More options]</font><br>`, command: `gcw cwin` },

        { command: `guiChangeState Crosshair 1`, text: `[Crosshair ON]&#09;&#09;` },
        { command: `guiChangeState Crosshair 0`, text: `[Crosshair OFF]<br>` },

        { command: `guiChangeState QuestTaskInfo 1`, text: `[Quest Tracker ON]&#09;&#09;` },
        { command: `guiChangeState QuestTaskInfo 0`, text: `[Quest Tracker OFF]<br>` },

        { command: `guiChangeState Benefit 1`, text: `[VIP/Founder Badges ON]&#09;&#09;` },
        { command: `guiChangeState Benefit 0`, text: `[VIP/Founder Badges OFF]<br>` },

        { command: `guiChangeState ShortCut 1`, text: `[Main Skill Bar ON]&#09;&#09;` },
        { command: `guiChangeState ShortCut 0`, text: `[Main Skill Bar OFF]<br>` },

        { command: `guiChangeState ExtShortCut 1`, text: `[Extra Skill Bar 1 ON]&#09;&#09;` },
        { command: `guiChangeState ExtShortCut 0`, text: `[Extra Skill Bar2 OFF]<br>` },

        { command: `guiChangeState ExtShortCut2 1`, text: `[Extra Skill Bar 2 ON]&#09;&#09;` },
        { command: `guiChangeState ExtShortCut2 0`, text: `[Extra Skill Bar2 OFF]<br>` },

        { command: `guiChangeState SkillHotKey 1`, text: `[Skill Chain Popup ON]&#09;&#09;` },
        { command: `guiChangeState SkillHotKey 0`, text: `[Skill Chain Popup OFF]<br><font size="+12"> - NOTE: You can still activate skills with the key</font><br>` },

        { command: `guiChangeState MiniMap 1`, text: `[Compass ON]&#09;&#09;` },
        { command: `guiChangeState MiniMap 0`, text: `[Compass OFF]<br>` },

        { command: `guiChangeState OverlayMap2 1`, text: `[Minimap ON]&#09;&#09;` },
        { command: `guiChangeState OverlayMap2 0`, text: `[Minimap OFF]<br>` },

        { command: `guiChangeState Abnormality 1`, text: `[Buff bar ON]&#09;&#09;` },
        { command: `guiChangeState Abnormality 0`, text: `[Buff bar OFF]<br>` },

        { command: `guiChangeState MainMenu 1`, text: `[Menu Bar ON]&#09;&#09;` },
        { command: `guiChangeState MainMenu 0`, text: `[Menu Bar OFF]<br>` },

        { command: `guiChangeState PartyWindow 1`, text: `[Party UI ON]&#09;&#09;` },
        { command: `guiChangeState PartyWindow 0`, text: `[Party UI OFF]<br>` },

        { command: `guiChangeState PartyWindowRaidInfo 1`, text: `[Raid UI ON]&#09;&#09;` },
        { command: `guiChangeState PartyWindowRaidInfo 0`, text: `[Raid UI OFF]<br>` },

        { command: `guiChangeState ExpBar 1`, text: `[XP Bar ON]&#09;&#09;` },
        { command: `guiChangeState ExpBar 0`, text: `[XP Bar OFF]<br>` },

        { command: `guiChangeState GageBar 1`, text: `[Skill Charge Bar ON]&#09;&#09;` },
        { command: `guiChangeState GageBar 0`, text: `[Skill Charge Bar OFF]<br>` },

        { command: `guiChangeState GameStat 1`, text: `[Clock ON]&#09;&#09;` },
        { command: `guiChangeState GameStat 0`, text: `[Clock OFF]<br>` },

        { command: `guiChangeState EventSystemAlim 1`, text: `[Event Elin ON]&#09;&#09;` },
        { command: `guiChangeState EventSystemAlim 0`, text: `[Event Elin OFF]<br>` },

        { text: `<br><br><br><font color="#e6ee9c">Proof of concept/WIP module(s), feel free to make suggestions/add code on the github page! </font>` }
    ]

    let cwinData = [ //ideally you would put this in a json thing of somekind, this is mostly just code to demonstrate functionality
        { text: `<font color="#dcc856" size="+26">HP/MP Bar specific options:<br><br><font color="#97f3ff" size="+18">` },
        { text: `Click here to return to the main menu`, command: `gc` },
        { text: `<br>Laurel Level - <font color="#c7cdf9">` },
        { text: `[ 0 ] `, command: `guiChangeOption OnGame_CharacterWindow_AchievementRating 0` },
        { text: `[ 1 ] `, command: `guiChangeOption OnGame_CharacterWindow_AchievementRating 1` },
        { text: `[ 2 ] `, command: `guiChangeOption OnGame_CharacterWindow_AchievementRating 2` },
        { text: `[ 3 ] `, command: `guiChangeOption OnGame_CharacterWindow_AchievementRating 3` },
        { text: `[ 4 ] `, command: `guiChangeOption OnGame_CharacterWindow_AchievementRating 4` },
        { text: `[ 5 ]`, command: `guiChangeOption OnGame_CharacterWindow_AchievementRating 5` },
        { text: `</font><br><br>Chracter Class - <font color="#c7cdf9">` },
        { text: `[ Warrior ] `, command: `guiChangeOption OnGame_CharacterWindow_SetClass -1` },
        { text: `[ Lancer ] `, command: `guiChangeOption OnGame_CharacterWindow_SetClass 1` },
        { text: `[ Slayer ] `, command: `guiChangeOption OnGame_CharacterWindow_SetClass 2` },
        { text: `[ Zerk ] `, command: `guiChangeOption OnGame_CharacterWindow_SetClass 3` },
        { text: `[ Sorc ] `, command: `guiChangeOption OnGame_CharacterWindow_SetClass 4` },
        { text: `[ Archer ] `, command: `guiChangeOption OnGame_CharacterWindow_SetClass 5` },
        { text: `[ Priest ] `, command: `guiChangeOption OnGame_CharacterWindow_SetClass 6` },
        { text: `[ Mystic ] `, command: `guiChangeOption OnGame_CharacterWindow_SetClass 7` },
        { text: `[ Reaper ] `, command: `guiChangeOption OnGame_CharacterWindow_SetClass 8` },
        { text: `[ Gunner ] `, command: `guiChangeOption OnGame_CharacterWindow_SetClass 9` },
        { text: `[ Brawler ] `, command: `guiChangeOption OnGame_CharacterWindow_SetClass 10` },
        { text: `[ Ninja ] `, command: `guiChangeOption OnGame_CharacterWindow_SetClass 11` },
        { text: `[ Valk ] `, command: `guiChangeOption OnGame_CharacterWindow_SetClass 12` },
        { text: `[ Tank ] `, command: `guiChangeOption OnGame_CharacterWindow_SetClass 20` },
        { text: `[ Airship ] `, command: `guiChangeOption OnGame_CharacterWindow_SetClass 21` },
        { text: `[ Kuma ] `, command: `guiChangeOption OnGame_CharacterWindow_SetClass 22` },
        { text: `[ 0 ] `, command: `guiChangeOption OnGame_CharacterWindow_SetClass 0` },
        { text: `[ Empty ] `, command: `guiChangeOption OnGame_CharacterWindow_SetClass 23` },
        { text: `</font><br><br>Crown Thing - <font color="#c7cdf9">` },
        { text: `[ Off ] `, command: `guiChangeOption OnGameEventAmIPartyMaster 0` },
        { text: `[ 1 ] `, command: `guiChangeOption OnGameEventAmIPartyMaster 1` },
        { text: `[ 2 ] `, command: `guiChangeOption OnGameEventAmIPartyMaster 2` },
        { text: `<br><br><br><font color="#e6ee9c"> Chat commands: <br>/8 gc name <New name><br>gc lvl <New level><br>gc ilvl <New ilevel> (0 to hide)` }
    ]
    //////// UI Data end
    mod.game.on('leave_loading_screen', () => {
        setTimeout(() => {
            gui.parse([{ gpk: `${savedSettings.join(`|`)}` }], `GUI Controller Thing`) // We have to delimitate w/ | otherwise commands are tossed into the trash
        }, 1000)
    })

    mod.command.add('guiChangeState', (guiName, setting) => {
        gui.parse([{ gpk: `#OnGameEventShowUI,${guiName},${setting}` }], `GUI Controller Thing`)
        if (setting == 0) {
            savedSettings.push(`OnGameEventShowUI,${guiName},0`)
        }
        saveSettings()
    })

    mod.command.add('guiChangeOption', (command, option) => {
        gui.parse([{ gpk: `#${command},${option}` }], `GUI Controller Thing`)
        if (!savedSettings.includes(`${command},${option}`)) {
            savedSettings = savedSettings.filter((savedSettings) => !savedSettings.startsWith(`${command}`))
            savedSettings.push(`${command},${option}`)
        }
        saveSettings()
    })


    mod.command.add('gc', (command, arg1, arg2) => {
        switch (command) {
            case "level":
            case "lvl":
                gui.parse([{ gpk: `OnGameEventUpdateUserLevel,${arg1}` }], 'GUI Controller Thing')
                break
            case "ilvl":
            case "ilevel":
                gui.parse([{ gpk: `OnGame_CharacterWindow_SetEquipmentLevel,${arg1}` }], 'GUI Controller Thing')
                break
            case "name":
            case "username":
                gui.parse([{ gpk: `OnGameEventUpdateUserName,${arg1}` }], 'GUI Controller Thing')
                break
            default:
                gui.parse(data, 'GUI Controller Thing')

        }


    })
    mod.command.add('gct', () => {
        gui.parse([{ gpk: `${savedSettings.join(`|`)}` }], `GUI Controller Thing`)
    })
    mod.command.add('gcw', (winName) => {
        switch (winName) {
            case "cwin":
                gui.parse(cwinData, 'GUI Controller Thing')
                break
        }
    })

    this.destructor = () => {
        mod.command.remove('gc');
        mod.command.remove('gc2');
    };
}

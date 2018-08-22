
let BadGui
try {
    BadGui = require('badGui')
} catch (e) {
    try {
        BadGui = require('badGui-master')
    } catch (e) {
        console.log(`[GUICI] -- Could not be loaded due to badGui missing, please download it`)
    }
}


module.exports = function GUICI(mod) {

    const gui = new BadGui(mod)
    let data = [
        { text: `<font color="#dcc856" size="+26">Toggleable GUI Elements:<br><br><font color="#4dd0e1" size="+18">` },
        { text: `<a href='asfunction:_root.ShowUI,CharacterWindow'>[HP/MP Bar ON]</a>&#09;&#09;<a href='asfunction:_root.HideUI,CharacterWindow'>[HP/MP Bar OFF]</a><br>` },
        { text: `<a href='asfunction:_root.ShowUI,Crosshair'>[Crosshair ON] <a href='asfunction:_root.HideUI,Crosshair'>[Crosshair OFF]` },
        { text: `<a href='asfunction:_root.ShowUI,QuestTaskInfo'>[Quest Tracker ON]</a>&#09;&#09;<a href='asfunction:_root.HideUI,QuestTaskInfo'>[Quest Tracker OFF]</a><font size="+14"> - NOTE: Does not like to be hidden</font><br>` },
        { text: `<a href='asfunction:_root.ShowUI,Benefit'>[VIP/Founder Badges ON]</a>&#09;&#09;<a href='asfunction:_root.HideUI,Benefit'>[VIP/Founder Badges OFF]</a><br>` },
        { text: `<a href='asfunction:_root.ShowUI,ShortCut'>[Main Skill Bar ON]</a>&#09;&#09;<a href='asfunction:_root.HideUI,ShortCut'>[Main Skill Bar OFF]</a><br>` },
        { text: `<a href='asfunction:_root.ShowUI,ExtShortCut'>[Extra Skill Bar ON]</a>&#09;&#09;<a href='asfunction:_root.HideUI,ExtShortCut'>[Extra Skill Bar OFF]</a><br>` },
        { text: `<a href='asfunction:_root.ShowUI,MiniMap'>[Compass ON]</a>&#09;&#09;<a href='asfunction:_root.HideUI,MiniMap'>[Compass OFF]</a><br>` },
        { text: `<a href='asfunction:_root.UnLoadUI,OverlayMap2'>[Minimap ON]</a>&#09;&#09;<a href='asfunction:_root.HideUI,OverlayMap2'>[Minimap OFF]</a><br>` },
        { text: `<a href='asfunction:_root.ShowUI,Abnormality'>[Buff bar ON]</a>&#09;&#09;<a href='asfunction:_root.HideUI,Abnormality'>[Buff bar OFF]</a><br>` },
        { text: `<a href='asfunction:_root.ShowUI,MainMenu'>[Menu Bar ON]</a>&#09;&#09;<a href='asfunction:_root.HideUI,MainMenu'>[Menu Bar OFF]</a><br>` },
        { text: `<a href='asfunction:_root.ShowUI,PartyWindow'>[Party UI ON]</a>&#09;&#09;<a href='asfunction:_root.HideUI,PartyWindow'>[Party UI OFF]</a><br>` },
        { text: `<a href='asfunction:_root.ShowUI,PartyWindowRaidInfo'>[Raid UI ON]</a>&#09;&#09;<a href='asfunction:_root.HideUI,PartyWindowRaidInfo'>[Raid UI OFF]</a><br>` },
        { text: `<a href='asfunction:_root.ShowUI,ExpBar'>[XP Bar ON]</a>&#09;&#09;<a href='asfunction:_root.HideUI,ExpBar'>[XP Bar OFF]</a><br>` },
        { text: `<a href='asfunction:_root.ShowUI,GageBar'>[Skill Charge Bar ON]</a>&#09;&#09;<a href='asfunction:_root.HideUI,GageBar'>[Skill Charge Bar OFF]</a><br>` },
        { text: `<a href='asfunction:_root.ShowUI,SkillHotKey'>[Skill Chain Popup ON]</a>&#09;&#09;<a href='asfunction:_root.HideUI,SkillHotKey'>[Skill Chain Popup OFF]</a><font size="+14"> - NOTE: You can still activate them with the key</font><br>` },
        { text: `<br><br>Others + Unload List`, command: `gc2` },
        //
        { text: `<br><br><br><font color="#e6ee9c">Proof of concept module(s), feel free to make suggestions/add code on the github page! </font>` }
    ]
    let data2 = [//Data 2 the squeekquel
        { text: `<font color="#dcc856" size="+26">UNLOAD UI Elements:<br><font size="+14"> These may mess up the UI when toggled, or may not reappear at all, some may need to be clicked twice<br><font color="#4dd0e1" size="+18">` },
        { text: `<a href='asfunction:_root.ShowUI,Chat2'>[Chat ON]</a>&#09;&#09;<a href='asfunction:_root.UnLoadUI,Chat2'>[Chat OFF]</a><font size="+14">Glitches out and will not come back, do not recommend</font><br>` },
        { text: `<a href='asfunction:_root.ShowUI,GageBoss'>[Boss HP Bar ON]</a>&#09;&#09;<a href='asfunction:_root.UnLoadUI,GageBoss'>[Boss HP Bar OFF]</a><br>` },
        { text: `<a href='asfunction:_root.ShowUI,CharacterWindow'>[HP/MP Bar ON]</a>&#09;&#09;<a href='asfunction:_root.UnLoadUI,CharacterWindow'>[HP/MP Bar OFF]</a><br>` },
        { text: `<a href='asfunction:_root.ShowUI,QuestTaskInfo'>[Quest Tracker ON]</a>&#09;&#09;<a href='asfunction:_root.UnLoadUI,QuestTaskInfo'>[Quest Tracker OFF]</a><font size="+14"> - NOTE: Does not like to be hidden</font><br>` },
        { text: `<a href='asfunction:_root.ShowUI,Benefit'>[VIP/Founder Badges ON]</a>&#09;&#09;<a href='asfunction:_root.UnLoadUI,Benefit'>[VIP/Founder Badges OFF]</a><br>` },
        { text: `<a href='asfunction:_root.ShowUI,ShortCut'>[Main Skill Bar ON]</a>&#09;&#09;<a href='asfunction:_root.UnLoadUI,ShortCut'>[Main Skill Bar OFF]</a><br>` },
        { text: `<a href='asfunction:_root.ShowUI,ExtShortCut'>[Extra Skill Bar ON]</a>&#09;&#09;<a href='asfunction:_root.UnLoadUI,ExtShortCut'>[Extra Skill Bar OFF]</a><br>` },
        { text: `<a href='asfunction:_root.ShowUI,MiniMap'>[Compass ON]</a>&#09;&#09;<a href='asfunction:_root.UnLoadUI,MiniMap'>[Compass OFF]</a><br>` },
        { text: `<a href='asfunction:_root.ShowUI,OverlayMap2'>[Minimap ON]</a>&#09;&#09;<a href='asfunction:_root.UnLoadUI,OverlayMap2'>[Minimap OFF]</a><font size="+14"> - NOTE: Breaks minimap display until restart</font><br>` },
        { text: `<a href='asfunction:_root.ShowUI,Abnormality'>[Buff bar ON]</a>&#09;&#09;<a href='asfunction:_root.UnLoadUI,Abnormality'>[Buff bar OFF]</a><br>` },
        { text: `<a href='asfunction:_root.ShowUI,MainMenu'>[Menu Bar ON]</a>&#09;&#09;<a href='asfunction:_root.UnLoadUI,MainMenu'>[Menu Bar OFF]</a><br>` },
        { text: `<a href='asfunction:_root.ShowUI,PartyWindow'>[Party UI ON]</a>&#09;&#09;<a href='asfunction:_root.UnLoadUI,PartyWindow'>[Party UI OFF]</a><br>` },
        { text: `<a href='asfunction:_root.ShowUI,PartyWindowRaidInfo'>[Raid UI ON]</a>&#09;&#09;<a href='asfunction:_root.UnLoadUI,PartyWindowRaidInfo'>[Raid UI OFF]</a><br>` },
        { text: `<a href='asfunction:_root.ShowUI,ExpBar'>[XP Bar ON]</a>&#09;&#09;<a href='asfunction:_root.UnLoadUI,ExpBar'>[XP Bar OFF]</a><br>` },
        { text: `<a href='asfunction:_root.ShowUI,GageBar'>[Skill Charge Bar ON]</a>&#09;&#09;<a href='asfunction:_root.UnLoadUI,GageBar'>[Skill Charge Bar OFF]</a><br>` },
        { text: `<a href='asfunction:_root.ShowUI,SkillHotKey'>[Skill Chain Popup ON]</a>&#09;&#09;<a href='asfunction:_root.UnLoadUI,SkillHotKey'>[Skill Chain Popup OFF]</a><font size="+14"> - NOTE: You can still activate them with the key</font><br>` },
        { text: `<br>Back to main page`, command: `gc` },
        { text: `<br><font color="#e6ee9c">Proof of concept module(s), feel free to make suggestions/add code on the github page! </font>` }
    ]
    mod.command.add('gc', () => {
        gui.parse(data, 'GUI Controller Thing')
    })
    mod.command.add('gc2', () => {
        gui.parse(data2, 'GUI Controller Thing')
    })
    this.destructor = () => {
        mod.command.remove('gc');
        mod.command.remove('gc2');
    };
}

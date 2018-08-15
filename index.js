const BadGui = require('badGui')

module.exports = function (mod) {
	const gui = new BadGui(mod)
	let data = [
		{ text: `<font color="#dcc856" size="+26">Toggleable GUI Elements:<br><br><font color="#4dd0e1" size="+18">` },
		{ text: `<a href=\'asfunction:_root.LoadUI,CharacterWindow'>[HP/MP Bar ON]</a>&#09;&#09;<a href=\'asfunction:_root.UnLoadUI,CharacterWindow'>[HP/MP Bar OFF]</a><br>` },
		{ text: `<a href=\'asfunction:_root.ShowUI,QuestTaskInfo'>[Quest Tracker ON]</a>&#09;&#09;<a href=\'asfunction:_root.HideUI,QuestTaskInfo'>[Quest Tracker OFF]</a><br>` },
		{ text: `<a href=\'asfunction:_root.ShowUI,Benefit'>[VIP/Founder Badges ON]</a>&#09;&#09;<a href=\'asfunction:_root.HideUI,Benefit'>[VIP/Founder Badges OFF]</a><br>` },
		{ text: `<a href=\'asfunction:_root.ShowUI,ShortCut'>[Main Skill Bar ON]</a>&#09;&#09;<a href=\'asfunction:_root.HideUI,ShortCut'>[Main Skill Bar OFF]</a><br>` },
		{ text: `<a href=\'asfunction:_root.ShowUI,ExtShortCut'>[Extra Skill Bar ON]</a>&#09;&#09;<a href=\'asfunction:_root.HideUI,ExtShortCut'>[Extra Skill Bar OFF]</a><br>` },
		{ text: `<a href=\'asfunction:_root.ShowUI,MiniMap'>[Compass ON]</a>&#09;&#09;<a href=\'asfunction:_root.HideUI,MiniMap'>[Compass OFF]</a><br>` },
		{ text: `<a href=\'asfunction:_root.ShowUI,OverlayMap2'>[Minimap ON]</a>&#09;&#09;<a href=\'asfunction:_root.HideUI,OverlayMap2'>[Minimap OFF]</a><font size="+14"> - NOTE: Breaks minimap display until restart</font><br>` },
		{ text: `<a href=\'asfunction:_root.ShowUI,Abnormality'>[Buff bar ON]</a>&#09;&#09;<a href=\'asfunction:_root.HideUI,Abnormality'>[Buff bar OFF]</a><br>` },
		{ text: `<a href=\'asfunction:_root.ShowUI,MainMenu'>[Menu Bar ON]</a>&#09;&#09;<a href=\'asfunction:_root.HideUI,MainMenu'>[Menu Bar OFF]</a><br>` },
		{ text: `<a href=\'asfunction:_root.ShowUI,PartyWindow'>[Party UI ON]</a>&#09;&#09;<a href=\'asfunction:_root.HideUI,PartyWindow'>[Party UI OFF]</a><br>` },
		{ text: `<a href=\'asfunction:_root.ShowUI,PartyWindowRaidInfo'>[Raid UI ON]</a>&#09;&#09;<a href=\'asfunction:_root.HideUI,PartyWindowRaidInfo'>[Raid UI OFF]</a><br>` },
		{ text: `<a href=\'asfunction:_root.ShowUI,ExpBar'>[XP Bar ON]</a>&#09;&#09;<a href=\'asfunction:_root.HideUI,ExpBar'>[XP Bar OFF]</a><br>` },
		{ text: `<a href=\'asfunction:_root.ShowUI,GageBar'>[Skill Charge Bar ON]</a>&#09;&#09;<a href=\'asfunction:_root.HideUI,GageBar'>[Skill Charge Bar OFF]</a><br>` },
		{ text: `<a href=\'asfunction:_root.ShowUI,SkillHotKey'>[Skill Chain Popup ON]</a>&#09;&#09;<a href=\'asfunction:_root.HideUI,SkillHotKey'>[Skill Chain Popup OFF]</a><font size="+14"> - NOTE: You can still activate them with the key</font><br>` },
		{ text: `<br><br><br><font color="#e6ee9c">Proof of concept module(s), feel free to make suggestions/add code on the github page! </font>` },
		//{ text: `<a href=\'asfunction:_root.LoadUI,Chat2'>[Chat ON]</a>&#09;&#09;<a href=\'asfunction:_root.UnLoadUI,Chat2'>[Chat OFF]</a>Probably don't do this?<br>` },
	]
	mod.command.add('gc', () => {
		gui.parse(data, 'GUI Controller Thing')
	})
	this.destructor = () => {
		mod.command.remove('gc');
	};
}
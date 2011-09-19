let contextMenu = require("context-menu");
let tabs = require("tabs");
let selection = require("selection");

var MDNItem = contextMenu.Item({
	label: "MDN",
	data:"https://developer.mozilla.org/fr/search?q=",
});
var HMOItem = contextMenu.Item({
	label: "HMO",
	data:"http://hacks.mozilla.org/?s=",
});
var WMOItem = contextMenu.Item({
	label: "WMO",
	data:"https://wiki.mozilla.org/Special:Search?search=",
});

var MozSearch = contextMenu.Menu({
	label: "Search With Mozilla",
	context: contextMenu.SelectionContext(),
	contentScript: 'self.on("click", function(node, data){'+
			'var uri = data + window.getSelection().toString();'+
			'self.postMessage(uri);'+
			'});',
	items: [MDNItem, HMOItem, WMOItem],
	onMessage:function(uri){
		tabs.open(uri);
	}	
});

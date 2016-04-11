var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var button = buttons.ActionButton({
  id: "sprinkle",
  label: "sprinkle now!",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: sprinkle
});

tabs.on("ready", function(tab) { sprinkle(null); });

function sprinkle(state) {
  var script = '\
  var items = document.getElementsByTagName("*");\
  var searchMask = "europäische lösung|globale lösung";\
  var regEx = new RegExp(searchMask, "ig");\
  var replaceMask = "Salzlösung";\
  for (var i = items.length; i--;) {\
    for(var j = 0; j < items[i].childNodes.length; j++) {\
      if(items[i].childNodes[j].nodeType === 3){\
        items[i].childNodes[j].nodeValue=items[i].childNodes[j].nodeValue.replace(regEx, replaceMask);\
      }\
    }\
  };'
  require("sdk/tabs").activeTab.attach({
    contentScript: script
  });
}


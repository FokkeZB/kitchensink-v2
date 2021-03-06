var log = require("log");

/**
 * The scoped constructor of the controller.
 * @param args {Object} The arguments passed to initialize the controller.
 **/
(function constructor(args) {

})(arguments[0] || {});

function openComponent(e) {
    var identifier = "controls/views/" + e.section.getItemAt(e.itemIndex).properties.itemId;
    var component = Alloy.createController(identifier).getView();
    
    Alloy.CFG.tabGroup.getActiveTab().open(component);
    log.args('Ti.UI.TabGroup.activeTab.open', identifier);
}

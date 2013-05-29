//Form JS File
function frmSearchOption_button104271605982698_onClick_seq0(eventobject) {
    navToFrmCategory.call(this);
};

function frmSearchOption_button104271605982705_onClick_seq0(eventobject) {
    navToFrmKeyword.call(this);
};

function addWidgetsfrmSearchOption() {
    var button104271605982698 = new kony.ui.Button({
        "id": "button104271605982698",
        "isVisible": true,
        "text": "Search by Category",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmSearchOption_button104271605982698_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 10, 4, 5],
        "padding": [5, 5, 5, 5],
        "displayText": true,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {});
    var button104271605982705 = new kony.ui.Button({
        "id": "button104271605982705",
        "isVisible": true,
        "text": "Search by Keyword",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmSearchOption_button104271605982705_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 5, 4, 5],
        "padding": [5, 5, 5, 5],
        "displayText": true,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {});
    frmSearchOption.add(
    button104271605982698, button104271605982705);
};

function frmSearchOptionGlobals() {
    var MenuId = [];
    frmSearchOption = new kony.ui.Form2({
        "id": "frmSearchOption",
        "title": "HelpContent",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "frmNative",
        "addWidgets": addWidgetsfrmSearchOption
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "layout": constants.Vertical,
        "titleBar": true,
        "directChildrenIDs": ["button104271605982698", "button104271605982705"],
        "viewConfig": {
            "referenceHeight": 0,
            "referenceWidth": 0
        }
    });
};
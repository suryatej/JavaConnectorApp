//Form JS File
function popupSrch_hbxCateg_onClick_seq0(eventobject) {
    dismissPopUp.call(this);
    navToFrmCategory.call(this);
};

function popupSrch_hbxKey_onClick_seq0(eventobject) {
    dismissPopUp.call(this);
    frmKeywords.show();
};

function addWidgetspopupSrch() {
    var lblCatge = new kony.ui.Label({
        "id": "lblCatge",
        "isVisible": true,
        "text": "Search by Category",
        "skin": "lblPopup"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbxCateg = new kony.ui.Box({
        "id": "hbxCateg",
        "isVisible": true,
        "skin": "hbxWhite",
        "onClick": popupSrch_hbxCateg_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 51,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxCateg.add(
    lblCatge);
    var line121135654664262 = new kony.ui.Line({
        "id": "line121135654664262",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblKey = new kony.ui.Label({
        "id": "lblKey",
        "isVisible": true,
        "text": "Search by Keyword",
        "skin": "lblPopup"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbxKey = new kony.ui.Box({
        "id": "hbxKey",
        "isVisible": true,
        "skin": "hbxWhite",
        "onClick": popupSrch_hbxKey_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 46,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxKey.add(
    lblKey);
    var vbox121135654664235 = new kony.ui.Box({
        "id": "vbox121135654664235",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox121135654664235.add(
    hbxCateg, line121135654664262, hbxKey);
    var hbox121135654664176 = new kony.ui.Box({
        "id": "hbox121135654664176",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 22,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox121135654664176.add(
    vbox121135654664235);
    popupSrch.add(
    hbox121135654664176);
};

function popupSrchGlobals() {
    popupSrch = new kony.ui.Popup({
        "id": "popupSrch",
        "title": null,
        "transparencyBehindThePopup": 30,
        "skin": "popupWhite",
        "isModal": false,
        "addWidgets": addWidgetspopupSrch
    }, {
        "padding": [0, 0, 0, 0],
        "containerWeight": 50,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "popupStyle": constants.POPUP_TYPE_NATIVE_STYLE,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        }
    });
};
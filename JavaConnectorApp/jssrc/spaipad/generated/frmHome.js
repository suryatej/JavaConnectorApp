//Form JS File
function frmHome_frmHome_preshow_seq0(eventobject, neworientation) {
    channel = "tablet";
    popupSrch.hbxCateg.setEnabled(true);
    popupSrch.hbxKey.setEnabled(true);
    popupSrch.lblCatge.skin = "lblPopup";
    popupSrch.lblKey.skin = "lblPopup";
};

function frmHome_btnSearch1_onClick_seq0(eventobject) {
    navPopupSrch.call(this);
};

function frmHome_btnSearch_onClick_seq0(eventobject) {
    navPopupSrch.call(this);
};

function frmHome_btnHome_onClick_seq0(eventobject) {
    navPopupSrch.call(this);
};

function addWidgetsfrmHome() {
    var image2120775183569060 = new kony.ui.Image2({
        "id": "image2120775183569060",
        "isVisible": true,
        "src": "javalogo.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 87
    }, {});
    var btnSearch1 = new kony.ui.Button({
        "id": "btnSearch1",
        "isVisible": true,
        "text": "Search",
        "skin": "btnSrch",
        "focusSkin": "btnSrchFocus",
        "onClick": frmHome_btnSearch1_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 6, 0, 6],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 13
    }, {});
    var hbox120775183569059 = new kony.ui.Box({
        "id": "hbox120775183569059",
        "isVisible": false,
        "position": constants.BOX_POSITION_AS_HEADER,
        "skin": "hbxtitle",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 7,
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
    hbox120775183569059.add(
    image2120775183569060, btnSearch1);
    var label120775183569156 = new kony.ui.Label({
        "id": "label120775183569156",
        "isVisible": true,
        "text": "Java Connector",
        "skin": "lblTitleWhite"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 87
    }, {});
    var btnSearch = new kony.ui.Button({
        "id": "btnSearch",
        "isVisible": true,
        "text": "Search",
        "skin": "btnSrch",
        "focusSkin": "btnSrchFocus",
        "onClick": frmHome_btnSearch_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 6, 0, 6],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 13
    }, {});
    var hbox1209479713408 = new kony.ui.Box({
        "id": "hbox1209479713408",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hbxtitle",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 7,
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
    hbox1209479713408.add(
    label120775183569156, btnSearch);
    var label104271605983344 = new kony.ui.Label({
        "id": "label104271605983344",
        "isVisible": true,
        "text": "This application will showcase the following features of the Java Service:",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var image2120855619261943 = new kony.ui.Image2({
        "id": "image2120855619261943",
        "isVisible": true,
        "src": "bullet.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 2, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 7
    }, {});
    var label104271605983345 = new kony.ui.Label({
        "id": "label104271605983345",
        "isVisible": true,
        "text": "Parsing properties file/XML ",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 93
    }, {});
    var hbox120965845962421 = new kony.ui.Box({
        "id": "hbox120965845962421",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 9,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 0],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox120965845962421.add(
    image2120855619261943, label104271605983345);
    var image2120965845962454 = new kony.ui.Image2({
        "id": "image2120965845962454",
        "isVisible": true,
        "src": "bullet.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 2, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 7
    }, {});
    var label104271605983346 = new kony.ui.Label({
        "id": "label104271605983346",
        "isVisible": true,
        "text": "Retrieve help content for SQL based by Category & Keyword",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 93
    }, {});
    var hbox120965845962436 = new kony.ui.Box({
        "id": "hbox120965845962436",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 7,
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
    hbox120965845962436.add(
    image2120965845962454, label104271605983346);
    var btnHome = new kony.ui.Button({
        "id": "btnHome",
        "isVisible": false,
        "text": "Continue",
        "skin": "sknBtnNormalSampleApp",
        "focusSkin": "sknBtnFocusSampleApp",
        "onClick": frmHome_btnHome_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 8, 4, 0],
        "padding": [0, 2, 0, 2],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    frmHome.add(
    hbox120775183569059, hbox1209479713408, label104271605983344, hbox120965845962421, hbox120965845962436, btnHome);
};

function frmHomeGlobals() {
    var MenuId = [];
    frmHome = new kony.ui.Form2({
        "id": "frmHome",
        "title": "MYSQL",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmFormBgImg",
        "preShow": frmHome_frmHome_preshow_seq0,
        "addWidgets": addWidgetsfrmHome
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "inTransitionConfig": {
            "formTransition": "None"
        },
        "outTransitionConfig": {
            "formTransition": "None"
        }
    });
};
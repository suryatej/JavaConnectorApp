//Template File
function keywordPageFooter_vbxLeftFooter_onClick_seq0(eventobject) {
    paginationPrevious.call(this);
};

function keywordPageFooter_vbxRightFooter_onClick_seq0(eventobject) {
    paginationNext.call(this);
};

function initializekeywordPageFooter() {
    var imgLeftfooter = new kony.ui.Image2({
        "id": "imgLeftfooter",
        "isVisible": true,
        "src": "arwleftd.png",
        "imageWhenFailed": "arwleftd.png",
        "imageWhileDownloading": "trans1.png"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "referenceWidth": 40,
        "referenceHeight": 25,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var hbxLeftFooter = new kony.ui.Box({
        "id": "hbxLeftFooter",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 100,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxLeftFooter.add(
    imgLeftfooter);
    var vbxLeftFooter = new kony.ui.Box({
        "id": "vbxLeftFooter",
        "isVisible": true,
        "skin": "vbxTransperent",
        "onClick": keywordPageFooter_vbxLeftFooter_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 35,
        "margin": [4, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "hExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxLeftFooter.add(
    hbxLeftFooter);
    var lblFrom = new kony.ui.Label({
        "id": "lblFrom",
        "isVisible": true,
        "text": null,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 39
    }, {});
    var lblOf = new kony.ui.Label({
        "id": "lblOf",
        "isVisible": true,
        "text": "of",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 22
    }, {});
    var lblTo = new kony.ui.Label({
        "id": "lblTo",
        "isVisible": true,
        "text": null,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 38
    }, {});
    var hbxIndexFooter = new kony.ui.Box({
        "id": "hbxIndexFooter",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 100,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxIndexFooter.add(
    lblFrom, lblOf, lblTo);
    var vbxIndexFooter = new kony.ui.Box({
        "id": "vbxIndexFooter",
        "isVisible": true,
        "skin": "vbxTransperent",
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 29,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxIndexFooter.add(
    hbxIndexFooter);
    var imgRightfooter = new kony.ui.Image2({
        "id": "imgRightfooter",
        "isVisible": true,
        "src": "arwrightd.png",
        "imageWhenFailed": "trans1.png",
        "imageWhileDownloading": "trans1.png"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var hbxRightFooter = new kony.ui.Box({
        "id": "hbxRightFooter",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 100,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxRightFooter.add(
    imgRightfooter);
    var vbxRightFooter = new kony.ui.Box({
        "id": "vbxRightFooter",
        "isVisible": true,
        "skin": "vbxTransperent",
        "onClick": keywordPageFooter_vbxRightFooter_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 36,
        "margin": [0, 0, 4, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "hExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxRightFooter.add(
    hbxRightFooter);
    hbxFooterPage = new kony.ui.Box({
        "id": "hbxFooterPage",
        "isVisible": true,
        "skin": "hbxFooterSkin",
        "focusSkin": "hbxFooterSkin",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 2, 0, 2],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxFooterPage.add(
    vbxLeftFooter, vbxIndexFooter, vbxRightFooter);
};
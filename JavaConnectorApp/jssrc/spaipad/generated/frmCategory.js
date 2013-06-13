//Form JS File
function frmCategory_frmCategory_init_seq0(eventobject, neworientation) {
    searchByHelpCategory.call(this);
};

function frmCategory_frmCategory_preshow_seq0(eventobject, neworientation) {
    popupSrch.hbxCateg.setEnabled(false);
    popupSrch.lblCatge.skin = "lblTest";
    popupSrch.hbxKey.setEnabled(true);
    popupSrch.lblKey.skin = "lblPopup";
    frmCategory.segHelpCategory.widgetSkin = "sknSeg2NormalSampleApp";
    frmCategory.segHelptopic.widgetSkin = "SegRoundWhite";
};

function frmCategory_btnSearch_onClick_seq0(eventobject) {
    navPopupSrch.call(this);
};

function frmCategory_segHelpCategory_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    helpTopicDetails.call(this);
};

function frmCategory_segHelptopic_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    topicDescription.call(this);
};

function addWidgetsfrmCategory() {
    var label120775183569156 = new kony.ui.Label({
        "id": "label120775183569156",
        "isVisible": true,
        "text": " Category",
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
        "onClick": frmCategory_btnSearch_onClick_seq0
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
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox120775183569059.add(
    label120775183569156, btnSearch);
    var lblInfo1 = new kony.ui.Label({
        "id": "lblInfo1",
        "isVisible": false,
        "text": "Select a category for respective HelpTopics:",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 2, 4, 1],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var segHelpCategorybox = new kony.ui.Box({
        "id": "segHelpCategorybox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 60
    }, {});
    var segHelpCategory = new kony.ui.SegmentedUI2({
        "id": "segHelpCategory",
        "isVisible": true,
        "retainSelection": true,
        "widgetDataMap": {
            "hc_id": "hc_id",
            "hbox121135654665132": "hbox121135654665132",
            "lblHelpCategory": "lblHelpCategory",
            "arrImg": "arrImg"
        },
        "rowTemplate": segHelpCategorybox,
        "widgetSkin": "sknSeg2NormalSampleApp",
        "rowSkin": "seg2Normal",
        "rowFocusSkin": "seg2Focus",
        "sectionHeaderSkin": "seg2Header",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "60606000",
        "showScrollbars": true,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "groupCells": false,
        "screenLevelWidget": false,
        "onRowClick": frmCategory_segHelpCategory_onRowClick_seq0,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR
    }, {
        "margin": [0, 1, 0, 0],
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 60
    }, {});
    var lblHelpCategory = new kony.ui.Label({
        "id": "lblHelpCategory",
        "isVisible": true,
        "skin": "lblSkin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [2, 2, 0, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 93
    }, {
        "renderAsAnchor": false
    });
    var arrImg = new kony.ui.Image2({
        "id": "arrImg",
        "isVisible": true,
        "imageWhenFailed": null,
        "imageWhileDownloading": null,
        "src": "arrow.png"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 7
    }, {});
    var hbox121135654665132 = new kony.ui.Box({
        "id": "hbox121135654665132",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 99,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox121135654665132.add(
    lblHelpCategory, arrImg);
    segHelpCategorybox.add(
    hbox121135654665132);
    var scrollbox121135654664768 = new kony.ui.ScrollBox({
        "id": "scrollbox121135654664768",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_VERTICAL,
        "showScrollbars": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "enableScrollByPage": false,
        "skin": "scrollbxSkin"
    }, {
        "percent": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "containerHeight": 95,
        "containerHeightReference": constants.SCROLLBOX_HEIGHT_BY_FORM_REFERENCE,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "scrollArrowConfig": ["", "", "", ""]
    });
    scrollbox121135654664768.add(
    segHelpCategory);
    var hbox121135654664762 = new kony.ui.Box({
        "id": "hbox121135654664762",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 100,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox121135654664762.add(
    scrollbox121135654664768);
    var vbox121135654664679 = new kony.ui.Box({
        "id": "vbox121135654664679",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 40,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "hExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox121135654664679.add(
    hbox121135654664762);
    var lblInfo = new kony.ui.Label({
        "id": "lblInfo",
        "isVisible": false,
        "text": null,
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
        "containerWeight": 19
    }, {});
    var segHelptopicbox = new kony.ui.Box({
        "id": "segHelptopicbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 85
    }, {});
    var segHelptopic = new kony.ui.SegmentedUI2({
        "id": "segHelptopic",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lblHTUrl": "lblHTUrl",
            "lblHTName": "lblHTName"
        },
        "rowTemplate": segHelptopicbox,
        "widgetSkin": "SegRoundWhite",
        "rowSkin": "seg2Normal",
        "rowFocusSkin": "seg2Focus",
        "sectionHeaderSkin": "seg2Header",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646446",
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "groupCells": false,
        "screenLevelWidget": false,
        "onRowClick": frmCategory_segHelptopic_onRowClick_seq0,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR
    }, {
        "margin": [2, 1, 4, 5],
        "padding": [0, 1, 0, 1],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 85
    }, {});
    var lblHTName = new kony.ui.Label({
        "id": "lblHTName",
        "isVisible": true,
        "skin": "lblWhite"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 26
    }, {
        "renderAsAnchor": false
    });
    var lblHTUrl = new kony.ui.Label({
        "id": "lblHTUrl",
        "isVisible": true,
        "skin": "lblUrlSkin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 26
    }, {
        "renderAsAnchor": false
    });
    segHelptopicbox.add(
    lblHTName, lblHTUrl);
    var scrollbox121135654665108 = new kony.ui.ScrollBox({
        "id": "scrollbox121135654665108",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_VERTICAL,
        "showScrollbars": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "enableScrollByPage": false
    }, {
        "percent": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "containerHeight": 92,
        "containerHeightReference": constants.SCROLLBOX_HEIGHT_BY_FORM_REFERENCE,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "scrollArrowConfig": ["", "", "", ""]
    });
    scrollbox121135654665108.add(
    lblInfo, segHelptopic);
    var hbox121135654665107 = new kony.ui.Box({
        "id": "hbox121135654665107",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 100,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [1, 0, 1, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox121135654665107.add(
    scrollbox121135654665108);
    var vbox121135654664680 = new kony.ui.Box({
        "id": "vbox121135654664680",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 60,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "hExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox121135654664680.add(
    hbox121135654665107);
    var hbox121135654664678 = new kony.ui.Box({
        "id": "hbox121135654664678",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 30,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox121135654664678.add(
    vbox121135654664679, vbox121135654664680);
    frmCategory.add(
    hbox120775183569059, lblInfo1, hbox121135654664678);
};

function frmCategoryGlobals() {
    var MenuId = [];
    frmCategory = new kony.ui.Form2({
        "id": "frmCategory",
        "title": "Search by category",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmFormBgImg",
        "init": frmCategory_frmCategory_init_seq0,
        "preShow": frmCategory_frmCategory_preshow_seq0,
        "addWidgets": addWidgetsfrmCategory
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
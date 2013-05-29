//Form JS File
function frmKeywords_frmKeywords_init_seq0(eventobject, neworientation) {
    searchByHelpKeyword.call(this);
};

function frmKeywords_segHelpKeyword_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    serviceHelpRelation.call(this);
};

function addWidgetsfrmKeywords() {
    var lblInfo = new kony.ui.Label({
        "id": "lblInfo",
        "isVisible": true,
        "text": "Select keyword for help topic : ",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 2, 4, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "containerWeight": 6
    }, {});
    var segHelpKeywordbox = new kony.ui.Box({
        "id": "segHelpKeywordbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 45
    }, {});
    var segHelpKeyword = new kony.ui.SegmentedUI2({
        "id": "segHelpKeyword",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lblHelpKeyword": "lblHelpKeyword",
            "hk_id": "hk_id"
        },
        "rowTemplate": segHelpKeywordbox,
        "widgetSkin": "segSkin",
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
        "onRowClick": frmKeywords_segHelpKeyword_onRowClick_seq0,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR
    }, {
        "margin": [4, 2, 4, 2],
        "padding": [0, 2, 0, 2],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 45
    }, {});
    var lblHelpKeyword = new kony.ui.Label({
        "id": "lblHelpKeyword",
        "isVisible": true,
        "skin": "lblSkin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 13
    }, {
        "renderAsAnchor": false
    });
    segHelpKeywordbox.add(
    lblHelpKeyword);
    frmKeywords.add(
    lblInfo, segHelpKeyword);
};

function frmKeywordsGlobals() {
    var MenuId = [];
    frmKeywords = new kony.ui.Form2({
        "id": "frmKeywords",
        "title": "Keyword",
        "needAppMenu": true,
        "footers": [hbxFooterPage],
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "frmNative",
        "init": frmKeywords_frmKeywords_init_seq0,
        "addWidgets": addWidgetsfrmKeywords
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
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
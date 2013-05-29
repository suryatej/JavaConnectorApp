//Form JS File
function frmSearchOption_segHelpKeyword_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    serachOption.call(this);
};

function addWidgetsfrmSearchOption() {
    var segHelpKeywordbox = new kony.ui.Box({
        "id": "segHelpKeywordbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 13
    }, {});
    var segHelpKeyword = new kony.ui.SegmentedUI2({
        "id": "segHelpKeyword",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lblHelpKeyword": "lblHelpKeyword"
        },
        "data": [{
            "lblHelpKeyword": "Search by Category"
        }, {
            "lblHelpKeyword": "Search by Keyword"
        }],
        "rowTemplate": segHelpKeywordbox,
        "widgetSkin": "sknSeg2NormalSampleApp",
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
        "onRowClick": frmSearchOption_segHelpKeyword_onRowClick_seq0,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR
    }, {
        "margin": [4, 2, 4, 2],
        "padding": [0, 2, 0, 2],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 13
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
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "containerWeight": 46
    }, {});
    segHelpKeywordbox.add(
    lblHelpKeyword);
    frmSearchOption.add(
    segHelpKeyword);
};

function frmSearchOptionGlobals() {
    var MenuId = [];
    frmSearchOption = new kony.ui.Form2({
        "id": "frmSearchOption",
        "title": "Help Content",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmFormBgImg",
        "addWidgets": addWidgetsfrmSearchOption
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "titleBarSkin": "titleBar",
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};
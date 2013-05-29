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
            "image2120855619259932": "image2120855619259932",
            "lblHelpKeyword": "lblHelpKeyword",
            "hbox120855619259931": "hbox120855619259931"
        },
        "data": [{
            "image2120855619259932": "arrow.png",
            "lblHelpKeyword": "Search by Category"
        }, {
            "image2120855619259932": "arrow.png",
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
        "groupCells": false,
        "screenLevelWidget": false,
        "onRowClick": frmSearchOption_segHelpKeyword_onRowClick_seq0,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW
    }, {
        "margin": [4, 10, 4, 2],
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 13
    }, {
        "indicator": constants.SEGUI_ROW_SELECT,
        "enableDictionary": false,
        "showProgressIndicator": true,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "bounces": false,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE
    });
    var lblHelpKeyword = new kony.ui.Label({
        "id": "lblHelpKeyword",
        "isVisible": true,
        "skin": "lblSkin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [6, 10, 6, 10],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 93
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbox120855619259931 = new kony.ui.Box({
        "id": "hbox120855619259931",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 79,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox120855619259931.add(
    lblHelpKeyword);
    segHelpKeywordbox.add(
    hbox120855619259931);
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
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "needsIndicatorDuringPostShow": true,
        "formTransparencyDuringPostShow": "100",
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "titleBar": true,
        "titleBarSkin": "sknTitleBarSampleApp",
        "titleBarConfig": {
            "renderTitleText": true,
            "prevFormTitle": false,
            "titleBarLeftSideView": "title",
            "labelLeftSideView": "Back"
        },
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
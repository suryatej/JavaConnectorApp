//Form JS File
function frmCategory_frmCategory_init_seq0(eventobject, neworientation) {
    searchByHelpCategory.call(this);
};

function frmCategory_segHelpCategory_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    helpTopicDetails.call(this);
};

function addWidgetsfrmCategory() {
    var lblInfo = new kony.ui.Label({
        "id": "lblInfo",
        "isVisible": true,
        "text": "Select a category for respective HelpTopics:",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 1],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var line120855619259804 = new kony.ui.Line({
        "id": "line120855619259804",
        "isVisible": true,
        "skin": "konyline"
    }, {
        "thickness": 2,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var segHelpCategorybox = new kony.ui.Box({
        "id": "segHelpCategorybox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 45
    }, {});
    var segHelpCategory = new kony.ui.SegmentedUI2({
        "id": "segHelpCategory",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "hc_id": "hc_id",
            "lblHelpCategory": "lblHelpCategory"
        },
        "rowTemplate": segHelpCategorybox,
        "widgetSkin": "sknSeg2NormalSampleApp",
        "rowSkin": "seg2Normal",
        "rowFocusSkin": "seg2Focus",
        "sectionHeaderSkin": "seg2Header",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646446",
        "showScrollbars": true,
        "groupCells": false,
        "screenLevelWidget": true,
        "onRowClick": frmCategory_segHelpCategory_onRowClick_seq0,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW
    }, {
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 45
    }, {
        "dockSectionHeaders": false
    });
    var lblHelpCategory = new kony.ui.Label({
        "id": "lblHelpCategory",
        "isVisible": true,
        "skin": "lblSkin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 13
    }, {});
    segHelpCategorybox.add(
    lblHelpCategory);
    frmCategory.add(
    lblInfo, line120855619259804, segHelpCategory);
};

function frmCategoryGlobals() {
    var MenuId = [];
    frmCategory = new kony.ui.Form2({
        "id": "frmCategory",
        "title": "Category",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "frm",
        "init": frmCategory_frmCategory_init_seq0,
        "addWidgets": addWidgetsfrmCategory
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "titleBarSkin": "sknTitleBarSampleApp",
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
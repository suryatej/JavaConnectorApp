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
        "containerWeight": 17
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
        "widgetSkin": "segSkin",
        "rowSkin": "seg2Normal",
        "rowFocusSkin": "seg2Focus",
        "sectionHeaderSkin": "seg2Header",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646446",
        "showScrollbars": true,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "groupCells": false,
        "screenLevelWidget": false,
        "onRowClick": frmCategory_segHelpCategory_onRowClick_seq0,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR
    }, {
        "margin": [4, 2, 4, 5],
        "padding": [0, 2, 0, 2],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 17
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
        "padding": [0, 2, 0, 2],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 49
    }, {
        "renderAsAnchor": false
    });
    segHelpCategorybox.add(
    lblHelpCategory);
    frmCategory.add(
    lblInfo, segHelpCategory);
};

function frmCategoryGlobals() {
    var MenuId = [];
    frmCategory = new kony.ui.Form2({
        "id": "frmCategory",
        "title": "Category",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "frmNative",
        "init": frmCategory_frmCategory_init_seq0,
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
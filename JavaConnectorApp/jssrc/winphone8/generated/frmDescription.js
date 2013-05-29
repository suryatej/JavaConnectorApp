//Form JS File
function addWidgetsfrmDescription() {
    var brwserDesc = new kony.ui.Browser({
        "id": "brwserDesc",
        "text": "Browser",
        "isVisible": true,
        "detectTelNumber": true,
        "screenLevelWidget": true
    }, {
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 89
    }, {});
    frmDescription.add(
    brwserDesc);
};

function frmDescriptionGlobals() {
    var MenuId = [];
    frmDescription = new kony.ui.Form2({
        "id": "frmDescription",
        "title": "Description",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "frm",
        "addWidgets": addWidgetsfrmDescription
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "animateHeaderFooter": false,
        "inTransitionConfig": {
            "inTransition": "Slide",
            "transitionMode": "Parallel",
            "transitionSpeed": "0"
        },
        "outTransitionConfig": {
            "outTransition": "Slide",
            "transitionMode": "Parallel",
            "transitionSpeed": "0"
        },
        "directChildrenIDs": ["brwserDesc"]
    });
};
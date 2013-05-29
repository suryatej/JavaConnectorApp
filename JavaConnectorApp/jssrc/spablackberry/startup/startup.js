//startup.js file
var appConfig = {
    appId: "javaconnector",
    appName: "JavaConnector",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "sampleapps.konylabs.net",
    serverPort: null,
    secureServerPort: null,
    middlewareContext: "middleware"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializekeywordPageFooter();
    kony.application.setAppFooters([hbxFooterPage]);
    frmCategoryGlobals();
    frmDescriptionGlobals();
    frmHomeGlobals();
    frmKeywordsGlobals();
    frmSearchOptionGlobals();
    frmTopicGlobals();
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmHome.show();
        }
    });
};

function loadResources() {
    kony.theme.packagedthemes(
    ["default"]);
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: true
    })
    //If default locale is specified. This is set even before any other app life cycle event is called.
    loadResources();
};

function sessionDeepLink(deeplinkContext) {
    var startupform = frmHome;
    frmHome.show();
};
kony.print = function() {
    return;
};
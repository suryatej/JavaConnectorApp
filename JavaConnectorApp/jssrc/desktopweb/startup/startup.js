//startup.js file
var appConfig = {
    appId: "javaconnector",
    appName: "JavaConnector",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "sampleapps.konylabs.net",
    serverPort: null,
    secureServerPort: null,
    url: "http://sampleapps.konylabs.net:/middleware/MWServlet",
    secureurl: "http://sampleapps.konylabs.net:/middleware/MWServlet",
    middlewareContext: "middleware"
};
sessionID = "";
channel = "mobile";

function appInit(params) {
    skinsInit();
    initializehdrDesktopWeb();
    initializekeywordPageFooter();
    frmCategoryGlobals();
    frmHomeGlobals();
    frmKeywordsGlobals();
    frmSearchOptionGlobals();
    frmTopicGlobals();
    popupSrchGlobals();
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
        applyMarginPaddingInBCGMode: false
    })
    //If default locale is specified. This is set even before any other app life cycle event is called.
    loadResources();
};
kony.print = function() {
    return;
};
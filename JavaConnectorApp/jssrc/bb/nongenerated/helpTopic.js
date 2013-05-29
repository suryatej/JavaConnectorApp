//Service helpTopic 
function helpTopicDetails() {
    var mysqlhelptopic_inputparam = {};
    mysqlhelptopic_inputparam["serviceID"] = "helptopic_mysql";
    mysqlhelptopic_inputparam["id"] = frmCategory["segHelpCategory"]["selectedItems"][0]["hc_id"];
    mysqlhelptopic_inputparam["httpheaders"] = {};
    mysqlhelptopic_inputparam["httpconfigs"] = {};
    var mysqlhelptopic = appmiddlewareinvokerasync(mysqlhelptopic_inputparam, helpTopicCallback);
};

function helpTopicCallback(status, mysqlHelpTopicData) {
    frmTopic.lblInfo.setVisibility(false);
    if (status == 400) {
        if (mysqlHelpTopicData["opstatus"] == 0) {
            if (mysqlHelpTopicData != null && mysqlHelpTopicData != undefined && mysqlHelpTopicData["helpTopic"] != null && mysqlHelpTopicData["helpTopic"] != undefined) {
                var htArray = [];
                if (mysqlHelpTopicData["helpTopic"].length == 0) {
                    frmTopic.lblInfo.setVisibility(true);
                    frmTopic.lblInfo.text = "Topic detail is not available."
                }
                for (var i = 0; i < mysqlHelpTopicData["helpTopic"].length; i++) {
                    htArray.push({
                        "lblHTName": mysqlHelpTopicData["helpTopic"][i]["name"],
                        "lblHTUrl": mysqlHelpTopicData["helpTopic"][i]["url"]
                    })
                }
                frmTopic.segHelptopic.setData(htArray);
            }
            frmTopic.show();
        }
    }
}

function topicDescription() {
    var URL = frmTopic.segHelptopic.selectedItems[0].lblHTUrl;
    frmDescription.brwserDesc.requestURLConfig = {
        "URL": URL,
        "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
    };
    //kony.application.openURL(URL);
    frmDescription.show();
}
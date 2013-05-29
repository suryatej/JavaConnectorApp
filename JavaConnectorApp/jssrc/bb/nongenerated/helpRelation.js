//Service helpRelation 
function serviceHelpRelation() {
    var mysqlhelprelation_inputparam = {};
    mysqlhelprelation_inputparam["serviceID"] = "helprelation_mysql";
    mysqlhelprelation_inputparam["id"] = frmKeywords["segHelpKeyword"]["selectedItems"][0]["hk_id"];
    mysqlhelprelation_inputparam["httpheaders"] = {};
    mysqlhelprelation_inputparam["httpconfigs"] = {};
    var mysqlhelprelation = appmiddlewareinvokerasync(mysqlhelprelation_inputparam, helpRelationCallback);
};

function helpRelationCallback(status, mysqlHelpRelationData) {
    if (status == 400) {
        if (mysqlHelpRelationData["opstatus"] == 0) {
            if (mysqlHelpRelationData != null && mysqlHelpRelationData != undefined && mysqlHelpRelationData["helpRelation"] != null && mysqlHelpRelationData["helpRelation"] != undefined) {
                var hlArray = [];
                for (var i = 0; i < mysqlHelpRelationData["helpRelation"].length; i++) {
                    hlArray.push({
                        "lblHTName": mysqlHelpRelationData["helpRelation"][i]["name"],
                        "lblHTUrl": mysqlHelpRelationData["helpRelation"][i]["url"]
                    })
                }
                frmTopic.segHelptopic.setData(hlArray);
            }
            frmTopic.show();
        }
    }
}
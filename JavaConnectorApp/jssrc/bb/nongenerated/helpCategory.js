//Service helpCategory
function searchByHelpCategory() {
    var mysqlhelpcategory_inputparam = {};
    mysqlhelpcategory_inputparam["serviceID"] = "helpcategory_mysql";
    mysqlhelpcategory_inputparam["httpheaders"] = {};
    mysqlhelpcategory_inputparam["httpconfigs"] = {};
    var mysqlhelpcategory = appmiddlewareinvokerasync(mysqlhelpcategory_inputparam, helpCategoryCallback);
}

function helpCategoryCallback(status, mysqlHelpCategoryData) {
    if (status == 400) {
        if (mysqlHelpCategoryData["opstatus"] == 0) {
            if (mysqlHelpCategoryData != null && mysqlHelpCategoryData != undefined && mysqlHelpCategoryData["helpCategory"] != null && mysqlHelpCategoryData["helpCategory"] != undefined) {
                var hcArray = [];
                for (var i = 0; i < mysqlHelpCategoryData["helpCategory"].length; i++) {
                    hcArray.push({
                        "hc_id": mysqlHelpCategoryData["helpCategory"][i]["hcid"],
                        "lblHelpCategory": mysqlHelpCategoryData["helpCategory"][i]["hcname"]
                    })
                }
                frmCategory.segHelpCategory.setData(hcArray);
            }
            frmCategory.show();
        }
    }
}
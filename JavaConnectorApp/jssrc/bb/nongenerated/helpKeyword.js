//Global variable
//Service helpKeyword
function searchByHelpKeyword() {
    gNoOfRows = 0;
    gPageno = 0;
    gFromRow = 0;
    var mysqlhelpkeyword_inputparam = {};
    mysqlhelpkeyword_inputparam["serviceID"] = "helpkeyword_mysql";
    mysqlhelpkeyword_inputparam["httpheaders"] = {};
    mysqlhelpkeyword_inputparam["httpconfigs"] = {};
    var mysqlhelpkeyword = appmiddlewareinvokerasync(mysqlhelpkeyword_inputparam, helpKeywordCallback);
};

function helpKeywordCallback(status, mysqlHelpKeywordData) {
    if (status == 400) {
        if (mysqlHelpKeywordData["opstatus"] == 0) {
            if (mysqlHelpKeywordData != null && mysqlHelpKeywordData != undefined && mysqlHelpKeywordData["helpKeyword"] != null && mysqlHelpKeywordData["helpKeyword"] != undefined) {
                ghkData = [];
                for (var i = 0; i < mysqlHelpKeywordData["helpKeyword"].length; i++) {
                    ghkData.push({
                        "hk_id": mysqlHelpKeywordData["helpKeyword"][i]["hkid"],
                        "lblHelpKeyword": mysqlHelpKeywordData["helpKeyword"][i]["hkname"]
                    })
                }
                gNoOfPages = Math.ceil((ghkData.length) / 8);
                gFromRow = 0;
                paginationNext();
            }
        }
    }
}

function paginationNext() {
    //frmKeywords.segHelpKeyword.removeAll();		
    hbxFooterPage.vbxRightFooter.setVisibility(true);
    hbxFooterPage.vbxLeftFooter.setVisibility(true);
    hbxFooterPage.imgLeftfooter.src = "arwleftd.png";
    hbxFooterPage.imgRightfooter.src = "arwrightd.png";
    gNoOfRows = gNoOfRows + 8;
    gPageno = gPageno + 1;
    var absPageno = Math.abs(gPageno);
    var absNoofRows = Math.abs(gNoOfRows);
    var absNoOfPages = Math.abs(gNoOfPages);
    if (absPageno > absNoOfPages) return;
    if (absPageno == absNoOfPages) {
        hbxFooterPage.imgRightfooter.src = "";
        //hbxFooterPage.vbxRightFooter.setVisibility(false);		
    }
    if (absPageno == 1) hbxFooterPage.imgLeftfooter.src = "";
    else gFromRow = gFromRow + 8;
    hbxFooterPage.lblFrom.text = absPageno;
    hbxFooterPage.lblTo.text = absNoOfPages;
    var nextHelpKeywordData = [];
    for (var i = gFromRow; i < gNoOfRows; i++) {
        nextHelpKeywordData.push(ghkData[i]);
    }
    frmKeywords.segHelpKeyword.setData(nextHelpKeywordData);
    frmKeywords.show();
}

function paginationPrevious() {
    //frmKeywords.segHelpKeyword.removeAll();
    gPageno = gPageno - 1;
    hbxFooterPage.imgLeftfooter.src = "arwleftd.png";
    hbxFooterPage.imgRightfooter.src = "arwrightd.png";
    var absPageno = Math.abs(gPageno);
    if (absPageno < 1) return;
    if (absPageno == 1) hbxFooterPage.imgLeftfooter.src = "";
    hbxFooterPage.lblFrom.text = absPageno;
    gFromRow = gFromRow - 8;
    gNoOfRows = gNoOfRows - 8;
    var preHelpKeywordData = [];
    for (var i = gFromRow; i < gNoOfRows; i++) {
        preHelpKeywordData.push(ghkData[i]);
    }
    frmKeywords.segHelpKeyword.setData(preHelpKeywordData);
    frmKeywords.show();
}
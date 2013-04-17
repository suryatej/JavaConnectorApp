
/*
****************************************************************
*	Name    : serviceHelpRelation
*	Author  : Kony Solutions
*	Purpose : This function is used to invoke the helprelation_mysql javaservice using appmiddlewareinvokerasync method  .
****************************************************************
*/

	function serviceHelpRelation() {
	
		var KeywordID = null;
		//#ifdef desktopweb
			KeywordID = frmSearchOption["segHelpKeyword"]["selectedItems"][0]["hk_id"];
		//#else
			KeywordID = frmKeywords["segHelpKeyword"]["selectedItems"][0]["hk_id"];
		//#endif
		
	    var mysqlhelprelation_inputparam = {};
	    mysqlhelprelation_inputparam["serviceID"] = "helprelation_mysql";
	    mysqlhelprelation_inputparam["id"] = KeywordID;
	    mysqlhelprelation_inputparam["httpheaders"] = {};
	    mysqlhelprelation_inputparam["httpconfigs"] = {};
	    kony.application.showLoadingScreen("loadskin","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true,true,null);
	    var mysqlhelprelation = appmiddlewareinvokerasync(mysqlhelprelation_inputparam, helpRelationCallback);
	};

/*
****************************************************************
*	Name    : helpRelationCallback
*	Author  : Kony Solutions
*	Purpose : This function is used to get parameters status & resultTable i.e. called when appmiddlewareinvokerasync method executes.
****************************************************************
*/
	
	function helpRelationCallback(status, mysqlHelpRelationData){
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
	            }
	            //#ifdef desktopweb
	            	frmSearchOption.segHelptopic.setData(hlArray);
	            	frmSearchOption.lblInfo.setVisibility(false);
	            	frmSearchOption.show();
	            //#else
		            frmTopic.segHelptopic.setData(hlArray);
		            frmTopic.show();	            	
	            //#endif
	            
	            kony.application.dismissLoadingScreen();
	        }
			else{
					alert("Cannot find host on this network connection,Please check network & try again.");					       	
		           	kony.application.dismissLoadingScreen();
		           	return;
				}	        
	    }
	
	}
	


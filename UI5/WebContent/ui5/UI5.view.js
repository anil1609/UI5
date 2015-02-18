sap.ui.jsview("ui5.UI5", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf ui5.UI5
	*/ 
	getControllerName : function() {
		return "ui5.UI5";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf ui5.UI5
	*/ 
	createContent : function(oController) {

		//Create a panel instance
		var oPanel = new sap.ui.commons.Panel({
			
			text :"Panel UI",
	//	    showCollapseIcon: FALSE	
		});
		
		//oPanel.placeAt("sample1");
		var oLayoutMatrix = new sap.ui.commons.layout.MatrixLayout({
			
			id: "matrix1",
			width: "60%",
			widths : ["5%","30%","30%"]
		});
		//Add something to the panel's content area
		//oPanel.addContent(new sap.ui.commons.TextView({text: "Here comes the content ..."}));
		//Attach the panel to the page
		var oMatnrLabel = new sap.ui.commons.Label("idMatnrLabel");			
			//	{text: "Material Number"}
		oMatnrLabel.setText("Material Number");	
		
		var oMatnrInput = new sap.ui.commons.ValueHelpField("idMatnrInput", {
			
			valueHelpRequest:function(oEvent){
				// add pop up screen
				
				var oValueHelpDialog = new sap.ui.ux3.ToolPopup({
						 modal: true,
	                     inverted: false,                          // disable color inversion
	                     title: "Select Material Number",
	                     opener:  "idMatnrInput",             // locate dialog next to this field 
	                     closed: function (oEvent) {
	                    	 
	                    	 var oCore = sap.ui.getCore();
	                         var oMatnrInput = oCore.byId("idMatnrInput");
	                         var oContext = oHelpTable.getContextByIndex(oHelpTable.getSelectedIndex());
	                         if (oContext) {
	                               var oSel = oContext.getModel().getProperty(oContext.getPath());
	                               oMatnrInput.setValue(oSel["Matnr"]);
	                         };
	                    	 
	                    	 
	                     }
			}) ;
				
				var oOkButton = new sap.ui.commons.Button({
                    text: "OK",
                    press: function (oEvent) {
                               oEvent.getSource().getParent().close();
                    }
        });
				
				
				oValueHelpDialog.addButton(oOkButton);
				
				var oHelpTable = new sap.ui.table.Table({
			        selectionMode: sap.ui.table.SelectionMode.Single,
			        visibleRowCount: 7,
			        width: "300pt"
			  });
			 
			  oHelpTable.addColumn(
			        new sap.ui.table.Column({
			                label: new sap.ui.commons.Label({text: "Material Number"}),
			                template: new sap.ui.commons.TextView().bindProperty("text", "Matnr"),
			                sortProperty: "Matnr",
			                filterProperty: "Matnr",
			        })
			  );
			 
			  oHelpTable.addColumn(
			        new sap.ui.table.Column({
			                label: new sap.ui.commons.Label({text: "Description"}),
			                template: new sap.ui.commons.TextView().bindProperty("text", "Descr"),
			                sortProperty: "Descr",
			                filterProperty: "Descr",
			        })
			  );			
				
// ADD JSON DATA			  
			  var oHelpModel = new sap.ui.model.json.JSONModel();
			  
			  oHelpData =
	          {"d":{"results":[
	                        {"Matnr":"4711","Descr":"Snowboard"},
	                        {"Matnr":"4712","Descr":"Mountain Ski"},
	                        {"Matnr":"4713","Descr":"Backcountry Ski"},
	                        {"Matnr":"4714","Descr":"Freeride Ski"},
	                        {"Matnr":"2011001","Descr":"Ski Boots"},
	                        {"Matnr":"2011002","Descr":"Ski Poles"},
	                        {"Matnr":"2011003","Descr":"Rucksack"},
	                        {"Matnr":"5550001","Descr":"Ski Googles"},
	                        {"Matnr":"5550002","Descr":"Ski Helmet"},
	                        {"Matnr":"5550007","Descr":"GPS Unit"}
	      ]}};
	      oHelpModel.setData(oHelpData);
	      oHelpTable.setModel(oHelpModel);
	      oHelpTable.bindAggregation("rows", "/d/results");
			  
			  
			  oValueHelpDialog.addContent(oHelpTable);
			  oValueHelpDialog.open();
		
				
			}
		
		
		});
		
		oLayoutMatrix.createRow(oMatnrLabel,oMatnrInput);
		//oLayoutMatrix.placeAt("sample1");
		oPanel.addContent(oLayoutMatrix);
		oPanel.placeAt("sample1");
	
	
		
		
		
		
		
		
		
		
		
		
		
		
		
		//Create a panel instance
		var oPanel = new sap.ui.commons.Panel({
			
			text :"Panel UI2",
	//	    showCollapseIcon: FALSE	
		});
		
		
		
		
		
		
		
		oPanel.placeAt("panel");
	
	
	}
});



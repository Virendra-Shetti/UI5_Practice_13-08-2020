sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("UGB.UI5_Git_Basics.controller.View1", {
		onInit: function () {

		},
		onClick:function(){
			sap.m.MessageToast.show("hi veirendra");
				sap.m.MessageToast.show("hi user virendra");
		}
	});
});
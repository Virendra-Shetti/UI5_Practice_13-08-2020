/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"UGB/UI5_Git_Basics/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
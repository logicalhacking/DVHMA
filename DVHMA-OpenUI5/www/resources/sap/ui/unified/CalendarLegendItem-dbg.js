/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides control sap.ui.unified.CalendarLegendItem.
sap.ui.define(['jquery.sap.global', 'sap/ui/core/Element', './library'],
	function(jQuery, Element, library) {
	"use strict";


	
	/**
	 * Constructor for a new CalendarLegendItem.
	 *
	 * @param {string} [sId] id for the new control, generated automatically if no id is given 
	 * @param {object} [mSettings] initial settings for the new control
	 *
	 * @class
	 * Item to be displayed in a CalendarLegend.
	 * @extends sap.ui.core.Element
	 * @version 1.28.5
	 *
	 * @constructor
	 * @public
	 * @alias sap.ui.unified.CalendarLegendItem
	 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
	 */
	var CalendarLegendItem = Element.extend("sap.ui.unified.CalendarLegendItem", /** @lends sap.ui.unified.CalendarLegendItem.prototype */ { metadata : {
	
		library : "sap.ui.unified",
		properties : {
	
			/**
			 * Text to be displayed for the item.
			 */
			text : {type : "string", group : "Misc", defaultValue : null}
		}
	}});
	
	///**
	// * This file defines behavior for the control,
	// */
	//sap.ui.unified.CalendarLegendItem.prototype.init = function(){
	//   // do something for initialization...
	//};
	

	return CalendarLegendItem;

}, /* bExport= */ true);

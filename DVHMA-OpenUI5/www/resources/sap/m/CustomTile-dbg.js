/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides control sap.m.CustomTile.
sap.ui.define(['jquery.sap.global', './Tile', './library'],
	function(jQuery, Tile, library) {
	"use strict";


	
	/**
	 * Constructor for a new CustomTile.
	 *
	 * @param {string} [sId] id for the new control, generated automatically if no id is given 
	 * @param {object} [mSettings] initial settings for the new control
	 *
	 * @class
	 * Use the Custom Tile to show a application specific content in the tile.
	 * The tile width is 8.5em and height is 10em
	 * @extends sap.m.Tile
	 * @version 1.28.5
	 *
	 * @constructor
	 * @public
	 * @since 1.12
	 * @alias sap.m.CustomTile
	 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
	 */
	var CustomTile = Tile.extend("sap.m.CustomTile", /** @lends sap.m.CustomTile.prototype */ { metadata : {
	
		library : "sap.m",
		defaultAggregation : "content",
		aggregations : {
	
			/**
			 * Defines the Content of the CustomTile
			 */
			content : {type : "sap.ui.core.Control", multiple : false}
		}
	}});
	
	
	

	return CustomTile;

}, /* bExport= */ true);

/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides control sap.m.SegmentedButtonItem.
sap.ui.define(['jquery.sap.global', './library', 'sap/ui/core/Item'],
	function(jQuery, library, Item) {
		"use strict";



		/**
		 * Constructor for a new SegmentedButtonItem.
		 *
		 * @param {string} [sId] id for the new control, generated automatically if no id is given
		 * @param {object} [mSettings] initial settings for the new control
		 *
		 * @class
		 * SegmentedButtonItem is used for creating buttons for the sap.m.SegmentedButton.
		 * It is derived from a core sap.ui.core.Item
		 * @extends sap.ui.core.Item
		 *
		 * @author SAP SE
		 * @version 1.28.5
		 *
		 * @constructor
		 * @public
		 * @since 1.28
		 * @alias sap.m.SegmentedButtonItem
		 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
		 */
		var SegmentedButtonItem = Item.extend("sap.m.SegmentedButtonItem", /** @lends sap.m.SegmentedButtonItem.prototype */ { metadata : {

			library : "sap.m",
			properties : {

				/**
				 * The icon belonging to the button.
				 * This can be an URI to an image or an icon font URI.
				 */
				icon : {type : "string", group : "Appearance", defaultValue : null},

				/**
				 * Sets the width of the buttons.
				 */
				width : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null}

			},
			events: {

				/**
				 * Event is fired when the user clicks on a individual button.
				 */
				press : {}
			}

		}});

		return SegmentedButtonItem;

	}, /* bExport= */ true);

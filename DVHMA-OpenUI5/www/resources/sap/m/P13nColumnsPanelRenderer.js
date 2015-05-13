/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global'],function(q){"use strict";var P={};P.render=function(r,c){r.write("<div");r.writeControlData(c);r.addClass("sapMP13nColumnsPanel");r.writeClasses();r.write(">");r.renderControl(c._oToolbar);r.renderControl(c._oScrollContainer);r.write("</div>");};return P;},true);

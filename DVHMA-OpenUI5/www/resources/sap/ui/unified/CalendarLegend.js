/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/core/Control','./library'],function(q,C,l){"use strict";var a=C.extend("sap.ui.unified.CalendarLegend",{metadata:{library:"sap.ui.unified",properties:{columnWidth:{type:"sap.ui.core.CSSSize",group:"Misc",defaultValue:'120px'}},aggregations:{items:{type:"sap.ui.unified.CalendarLegendItem",multiple:true,singularName:"item"}}}});a.prototype.onAfterRendering=function(){if(sap.ui.Device.browser.msie){if(sap.ui.Device.browser.version<10){q(".sapUiUnifiedLegendItem").css("width",this.getColumnWidth()+4+"px").css("display","inline-block");}}};return a;},true);

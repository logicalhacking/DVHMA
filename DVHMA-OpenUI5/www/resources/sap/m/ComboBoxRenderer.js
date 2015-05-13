/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','./ComboBoxBaseRenderer','sap/ui/core/Renderer'],function(q,C,R){"use strict";var a=R.extend(sap.m.ComboBoxBaseRenderer);a.CSS_CLASS="sapMComboBox";a.addOuterClasses=function(r,c){var b=a.CSS_CLASS,v=c.getValueState();sap.m.ComboBoxBaseRenderer.addOuterClasses.apply(this,arguments);r.addClass(b);r.addClass(b+"Input");if(v!==sap.ui.core.ValueState.None){r.addClass(b+"State");r.addClass(b+v);}};a.addInnerClasses=function(r,c){sap.m.ComboBoxBaseRenderer.addInnerClasses.apply(this,arguments);r.addClass(a.CSS_CLASS+"InputInner");};a.addButtonClasses=function(r,c){sap.m.ComboBoxBaseRenderer.addButtonClasses.apply(this,arguments);r.addClass(a.CSS_CLASS+"Arrow");};return a;},true);

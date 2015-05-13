/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','./InputBaseRenderer','sap/ui/core/Renderer','sap/ui/core/ValueStateSupport'],function(q,I,R,V){"use strict";var M=R.extend(sap.m.ComboBoxBaseRenderer);M.CSS_CLASS="sapMMultiComboBox";M.DOT_CSS_CLASS=".sapMMultiComboBox";M.addOuterClasses=function(r,c){sap.m.ComboBoxBaseRenderer.addOuterClasses.apply(this,arguments);r.addClass(M.CSS_CLASS);};M.addInnerClasses=function(r,c){sap.m.ComboBoxBaseRenderer.addInnerClasses.apply(this,arguments);r.addClass(M.CSS_CLASS+"InputInner");};M.openInputTag=function(r,c){r.write('<div class="sapMMultiComboBoxBorder"');r.writeAttribute("id",c.getId()+"-border");r.write(">");r.renderControl(c._oTokenizer);r.write("<div class=\"sapMMultiComboBoxInputContainer\">");I.openInputTag.call(this,r,c);};M.closeInputTag=function(r,c){I.closeInputTag.call(this,r,c);r.write("</div>");r.write("</div>");r.write("<div class=\"sapMMultiComboBoxShadowDiv\"/>");};return M;},true);

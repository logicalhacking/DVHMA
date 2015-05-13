/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/core/Renderer','./InputBaseRenderer'],function(q,R,I){"use strict";var T={};var T=R.extend(I);T.addOuterClasses=function(r,c){r.addClass("sapMTextArea");};T.addOuterStyles=function(r,c){c.getHeight()&&r.addStyle("height",c.getHeight());};T.openInputTag=function(r,c){r.write("<textarea");};T.closeInputTag=function(r,c){r.write("</textarea>");};T.writeInnerValue=function(){};T.writeInnerContent=function(r,c){r.writeEscaped(c.getValue());};T.addInnerClasses=function(r,c){r.addClass("sapMTextAreaInner");};T.writeAccessibilityState=function(r,c){I.writeAccessibilityState.apply(this,arguments);r.writeAccessibilityState(c,{role:"textbox",multiline:true});};T.writeInnerAttributes=function(r,c){if(c.getWrapping()&&c.getWrapping()!="None"){r.writeAttribute("wrap",c.getWrapping());}r.writeAttribute("rows",c.getRows());r.writeAttribute("cols",c.getCols());};return T;},true);

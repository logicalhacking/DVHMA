/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','./ListItemBaseRenderer','sap/ui/core/Renderer'],function(q,L,R){"use strict";var I=R.extend(L);I.renderLIAttributes=function(r,l){r.addClass("sapMILI");};I.renderLIContent=function(r,l){var s=l.getLabel();if(s){r.write("<label for='"+l.getId()+"-content' class='sapMILILabel'>");r.writeEscaped(l.getLabel());r.write("</label>");}r.write("<div class='sapMILIDiv sapMILI-CTX'>");var c=l.getContent();var a=c.length;for(var i=0;i<a;i++){r.renderControl(c[i]);}r.write("</div>");};return I;},true);

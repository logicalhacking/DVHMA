/*
 * @copyright
 */
sap.ui.define(['jquery.sap.global','./ListItemBaseRenderer','sap/ui/core/Renderer'],function(q,L,R){"use strict";var F=R.extend(L);F.renderLIContent=function(r,c){r.write("<div");if(c.getParent()&&c.getParent().getWordWrap()){r.addClass("sapMFFLITitleWrap");}else{r.addClass("sapMFFLITitle");}r.writeClasses();r.write(">");r.writeEscaped(c.getText());r.write("</div>");};return F;},true);

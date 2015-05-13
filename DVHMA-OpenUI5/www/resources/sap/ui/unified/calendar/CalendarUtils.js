/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global'],function(q){"use strict";var C={};C._createLocalDate=function(d){var l;if(d){l=new Date(d.getTime()+d.getTimezoneOffset()*60000);}return l;};C._createUTCDate=function(d){var u;if(d){u=new Date(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate()));if(d.getFullYear()<1000){u.setUTCFullYear(d.getFullYear());}}return u;};C.calculateWeekNumber=function(d,y,l,L){var w=0;var W=0;var f=L.getFirstDayOfWeek();if(l=="en-US"){var j=new Date(d.getTime());j.setUTCFullYear(y,0,1);W=j.getUTCDay();var c=new Date(d.getTime());c.setUTCDate(c.getUTCDate()-c.getUTCDay()+W);w=Math.round((c.getTime()-j.getTime())/86400000/7)+1;}else{var t=new Date(d.getTime());t.setUTCDate(t.getUTCDate()-f);W=t.getUTCDay();t.setUTCDate(t.getUTCDate()-W+4);var F=new Date(t.getTime());F.setUTCMonth(0,1);W=F.getUTCDay();var a=0;if(W>4){a=7;}var o=new Date(F.getTime());o.setUTCDate(1-W+4+a);w=Math.round((t.getTime()-o.getTime())/86400000/7)+1;}return w;};return C;},true);

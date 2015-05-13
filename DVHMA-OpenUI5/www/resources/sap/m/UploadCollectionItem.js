/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','./library','sap/ui/core/Element'],function(q,l,E){"use strict";var U=E.extend("sap.m.UploadCollectionItem",{metadata:{library:"sap.m",properties:{contributor:{type:"string",group:"Data",defaultValue:null},documentId:{type:"string",group:"Misc",defaultValue:null},fileName:{type:"string",group:"Misc",defaultValue:null},fileSize:{type:"float",group:"Misc",defaultValue:null},mimeType:{type:"string",group:"Misc",defaultValue:null},thumbnailUrl:{type:"string",group:"Misc",defaultValue:null},uploadedDate:{type:"string",group:"Misc",defaultValue:null},url:{type:"string",group:"Misc",defaultValue:null},enableEdit:{type:"boolean",group:"Behavior",defaultValue:true},enableDelete:{type:"boolean",group:"Behavior",defaultValue:true},visibleEdit:{type:"boolean",group:"Behavior",defaultValue:true},visibleDelete:{type:"boolean",group:"Behavior",defaultValue:true}}}});return U;},true);

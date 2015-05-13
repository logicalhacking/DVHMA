/*  Copyright 2015 SAP SE
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 *     http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var app;

function onDeviceReady() {

	var list = new sap.m.List({
		noDataText: "Click 'New Todo Item' to start"
	});

	// bind the List items to the data collection
	list.bindItems({
		path : "/todos",
		template : new sap.m.CustomListItem({
			content : [ new sap.m.Panel({
				expandable : true,
				headerToolbar : new sap.m.Toolbar({
					height : "auto",
					content : [ new sap.m.Text({
						text : "{title}"
					}), new sap.m.ToolbarSpacer(), new sap.m.Button({
						text : "Edit",
						type: sap.m.ButtonType.Emphasized,
						press : function() {
							this.data("id", "{id}");
							onEditItem(this.data("id"));
						}
					}), new sap.m.Button({
						text : "Remove",
						type : sap.m.ButtonType.Reject,
						press : function() {
							this.data("id", "{id}");
							window.todo.delete([this.data("id")], reloadItems, console.log);
						}
					}) ]
				}),
				expand : function(evt) {
					if (evt.getParameters().expand) {
						this.addContent(new sap.ui.core.HTML({
							content : "<div>{content}</div>"
						}));
					} else {
						this.removeAllContent();
					}
				}
			}) ]
		})
	});

	var page = new sap.m.Page({
		title : "Todo List",
		content : list,
		footer : new sap.m.Toolbar({
			content : [ new sap.m.Button({
				width : "100%",
				text : "New Todo Item",
				press : function() {
					window.todo.create([{"title" : "NewTitle", "content" : "New Content"}], reloadItems, console.log);
				}
			}) ]
		})
	});

	app = new sap.m.App({
		title : "Todo List"
	}).addPage(page).placeAt("content");

	checkForExtraText();
}


function onEditItem(id) {
	window.todo.get(function(items) {
		var oldTitle = items[id]["title"];
		var oldContent = items[id]["content"];
		var newTitle = prompt("Enter title", oldTitle);
		if (newTitle == null) {
			newTitle = oldTitle;
		}
		var newContent = prompt("Enter content", oldContent);
		if (newContent == null) {
			newContent = oldContent;
		}
		window.todo.edit([id, {"title" : newTitle, "content" : newContent}], reloadItems, console.log);
	}, alert);
}

function checkForExtraText() {
	window.plugins.webintent.hasExtra(window.plugins.webintent.EXTRA_TEXT, function(hasExtra) {
		if (hasExtra) {
			window.plugins.webintent.getExtra(window.plugins.webintent.EXTRA_TEXT, function(content) {
				window.plugins.webintent.hasExtra(window.plugins.webintent.EXTRA_SUBJECT, function(hasSubjectExtra) {
					if (hasSubjectExtra) {
						window.plugins.webintent.getExtra(window.plugins.webintent.EXTRA_SUBJECT, function(title) {
							window.todo.create([{"title" : title, "content" : content}], reloadItems, console.log);
						}, console.log);
					} else {
						window.todo.create([{"title" : "NewTitle", "content" : content}], reloadItems, console.log);
					}
				}, console.log);
			}, console.log);
		} else {
			window.todo.get(reloadItems, console.log);
		}
	}, console.log);
}

function reloadItems(items) {
	for (var i = 0; i < items.length; i++) {
		items[i]["id"] = i;
	}
	
	var data = {"todos" : items};

	var model = new sap.ui.model.json.JSONModel();
	model.setData(data);
	app.setModel(model);
}

document.addEventListener("deviceready", onDeviceReady);

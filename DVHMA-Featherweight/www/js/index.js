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

function onDeviceReady() {
	checkForExtraText();
}

function checkForExtraText() {
	window.plugins.webintent.hasExtra(window.plugins.webintent.EXTRA_TEXT, function(hasExtra) {
		if (hasExtra) {
			window.plugins.webintent.getExtra(window.plugins.webintent.EXTRA_TEXT, function(content) {
				window.plugins.webintent.hasExtra(window.plugins.webintent.EXTRA_SUBJECT, function(hasSubjectExtra) {
					if (hasSubjectExtra) {
						window.plugins.webintent.getExtra(window.plugins.webintent.EXTRA_SUBJECT, function(title) {
							var param = {};
							param.title = title;
							param.content = content;
							window.todo.create([param], reloadItems, console.log);
						}, console.log);
					} else {
						var param = {};
						param.title = "NewTitle";
						param.content = content;
						window.todo.create([param], reloadItems, console.log);
					}
				}, console.log);
			}, console.log);
		} else {
			window.todo.get(reloadItems, console.log);
		}
	}, console.log);
}

function onRemoveItem(e) {
	window.todo.delete([e.target.parentNode.parentNode.dataset.id], reloadItems, console.log);
}

function onEditItem(e) {
	var id = e.target.parentNode.parentNode.dataset.id;
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

function onLoadContent(e) {
	var contentDiv = e.target.parentNode.parentNode.parentNode.getElementsByClassName("content")[0];
	if (contentDiv.dataset.loaded == "true") {
		contentDiv.innerHTML = '';
		contentDiv.dataset.loaded = false;
		contentDiv.parentNode.getElementsByTagName("img")[0].src = "img/ic_action_expand.png";
	} else {
		window.todo.get(function(items) {
			var id = e.target.parentNode.parentNode.dataset.id;
			contentDiv.parentNode.getElementsByTagName("img")[0].src = "img/ic_action_collapse.png";
			contentDiv.innerHTML = items[id]["content"];
			contentDiv.dataset.loaded = true;
		}, console.log);
	}
}

function reloadItems(items) {
	var itemsDiv = document.getElementById("items");
	while (itemsDiv.hasChildNodes()) {
		itemsDiv.removeChild(itemsDiv.firstChild);
	}
	
	for (i = 0; i < items.length; i++) {
		var entry = items[i]["title"];
	
		var div = document.createElement("div");
		
		var headDiv = document.createElement("div");
		headDiv.setAttribute("data-id", i);
		headDiv.className = "title";
		
		var span = document.createElement("span");
		var img = document.createElement("img");
		img.src = "img/ic_action_expand.png";
		img.addEventListener("click", onLoadContent);
		span.appendChild(img);
		headDiv.appendChild(span);
		
		var p = document.createElement("p");
		p.innerHTML = entry;
		headDiv.appendChild(p);
		
		var buttonDiv = document.createElement("div");
		buttonDiv.className = "editRemoveButtons";
		
		var editButton = document.createElement("button");
		editButton.innerHTML = "Edit";
		editButton.addEventListener("click", onEditItem);
		buttonDiv.appendChild(editButton);
		
		var removeButton = document.createElement("button");
		removeButton.innerHTML = "Remove";
		removeButton.addEventListener("click", onRemoveItem);
		buttonDiv.appendChild(removeButton);
		headDiv.appendChild(buttonDiv);
		
		div.appendChild(headDiv);
		
		var contentDiv = document.createElement("div");
		contentDiv.className = "content";
		contentDiv.dataset.loaded = false;
		div.appendChild(contentDiv);
		
		itemsDiv.appendChild(div);
	}
}

function onNewItemClick() {
	window.todo.create([{"title" : "NewTitle", "content" : "New Content"}], reloadItems, console.log);
}

document.addEventListener("deviceready", onDeviceReady);

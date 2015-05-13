/* Copyright 2015 SAP SE
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package de.zertapps.dvhma.plugins.storage;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaArgs;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;

public class DVHMAStorage extends CordovaPlugin {

    private DVHMAStorageDbHelper mDbHelper;

    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);

        mDbHelper = new DVHMAStorageDbHelper(webView.getContext());
    }

    @Override
    public boolean execute(String action, CordovaArgs args, CallbackContext callbackContext) {
        if ("create".equals(action)) {
            create(args, callbackContext);
            return true;
        } else if ("delete".equals(action)) {
            delete(args, callbackContext);
            return true;
        } else if ("get".equals(action)) {
            get(args, callbackContext);
            return true;
        } else if ("edit".equals(action)) {
            edit(args, callbackContext);
            return true;
        } else {
            callbackContext.error("Unknown action!");
            return false;
        }
    }

    private void edit(CordovaArgs args, CallbackContext callbackContext) {
        int index;
        String newTitle;
        String newContent;
        try {
            index = args.getInt(0);
            newTitle = args.getJSONObject(1).getString("title");
            newContent = args.getJSONObject(1).getString("content");
        } catch (JSONException e) {
            e.printStackTrace();
            return;
        }

        SQLiteDatabase db = mDbHelper.getWritableDatabase();
        Cursor c = db.rawQuery("SELECT * FROM " + DVHMAStorageDbHelper.TABLE_NAME + ";", null);
        c.moveToPosition(index);
        db.execSQL("UPDATE " + DVHMAStorageDbHelper.TABLE_NAME + " SET title='" + newTitle + "',content='" + newContent + "' WHERE id=" + c.getInt(c.getColumnIndex("id")) + ";");
        db.close();

        get(null, callbackContext);
    }

    private void get(CordovaArgs args, CallbackContext callbackContext) {
        SQLiteDatabase db = mDbHelper.getWritableDatabase();
        JSONArray array = new JSONArray();
        Cursor c = db.rawQuery("SELECT * FROM " + DVHMAStorageDbHelper.TABLE_NAME + ";", null);
        while (c.moveToNext()) {
            String title = c.getString(c.getColumnIndex("title"));
            String content = c.getString(c.getColumnIndex("content"));
            try {
                JSONObject obj = new JSONObject();
                obj.put("title", title);
                obj.put("content", content);
                array.put(obj);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
        c.close();
        db.close();
        callbackContext.success(array);
    }

    private void delete(CordovaArgs args, CallbackContext callbackContext) {
        int index;
        try {
            index = args.getInt(0);
        } catch (JSONException e) {
            e.printStackTrace();
            return;
        }

        SQLiteDatabase db = mDbHelper.getWritableDatabase();
        Cursor c = db.rawQuery("SELECT * FROM " + DVHMAStorageDbHelper.TABLE_NAME + ";", null);
        c.moveToPosition(index);
        db.execSQL("DELETE FROM " + DVHMAStorageDbHelper.TABLE_NAME + " WHERE id=" + c.getInt(c.getColumnIndex("id")));
        c.close();
        db.close();

        get(null, callbackContext);
    }

    private void create(CordovaArgs args, CallbackContext callbackContext) {
        String newTitle;
        String newContent;
        try {
            newTitle = args.getJSONObject(0).getString("title");
            newContent = args.getJSONObject(0).getString("content");
        } catch (JSONException e) {
            e.printStackTrace();
            return;
        }

        SQLiteDatabase db = mDbHelper.getWritableDatabase();
        db.execSQL("INSERT INTO " + DVHMAStorageDbHelper.TABLE_NAME + " (title,content) VALUES('" + newTitle + "','" + newContent + "');");
        db.close();

        get(null, callbackContext);
    }
}

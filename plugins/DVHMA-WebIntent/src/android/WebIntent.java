package com.borismus.webintent;

import org.apache.cordova.CordovaActivity;
import org.json.JSONArray;
import org.json.JSONException;

import android.content.Intent;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;

/**
 * WebIntent is a PhoneGap plugin that bridges Android intents and web applications:
 * 
 * 1. web apps can spawn intents that call native Android applications. 2. (after setting up correct
 * intent filters for PhoneGap applications), Android intents can be handled by PhoneGap web
 * applications.
 * 
 * @author boris@borismus.com
 * 
 */
public class WebIntent extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) {
        try {
            if (action.equals("getExtra")) {
                return getExtra(args, callbackContext);
            }
            callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.INVALID_ACTION));
            return false;
        } catch (JSONException e) {
            e.printStackTrace();
            String errorMessage = e.getMessage();
            callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.JSON_EXCEPTION, errorMessage));
            return false;
        }
    }

    boolean getExtra(JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (args.length() != 1) {
            callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.INVALID_ACTION));
            return false;
        }
        Intent i = ((CordovaActivity) this.cordova.getActivity()).getIntent();
        String extraName = args.getString(0);
        if (i.hasExtra(extraName)) {
            callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK, i.getStringExtra(extraName)));
            return true;
        } else {
            callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR));
            return false;
        }
    }
}

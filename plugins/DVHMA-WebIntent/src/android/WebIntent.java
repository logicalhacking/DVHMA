package com.borismus.webintent;

import java.util.HashMap;
import java.util.Map;

import org.apache.cordova.CordovaActivity;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.content.Intent;
import android.net.Uri;
import android.text.Html;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaResourceApi;
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

    private CallbackContext onNewIntentCallbackContext = null;

    // public boolean execute(String action, JSONArray args, String callbackId) {
    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) {
        try {

            if (action.equals("hasExtra")) {
                return hasExtra(args, callbackContext);
            } else if (action.equals("getExtra")) {
                return getExtra(args, callbackContext);
            }
            // return new PluginResult(PluginResult.Status.INVALID_ACTION);
            callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.INVALID_ACTION));
            return false;
        } catch (JSONException e) {
            e.printStackTrace();
            String errorMessage = e.getMessage();
            // return new PluginResult(PluginResult.Status.JSON_EXCEPTION);
            callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.JSON_EXCEPTION, errorMessage));
            return false;
        }
    }

    boolean hasExtra(JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (args.length() != 1) {
            // return new PluginResult(PluginResult.Status.INVALID_ACTION);
            callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.INVALID_ACTION));
            return false;
        }
        Intent i = ((CordovaActivity) this.cordova.getActivity()).getIntent();
        String extraName = args.getString(0);
        // return new PluginResult(PluginResult.Status.OK, i.hasExtra(extraName));
        callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK, i.hasExtra(extraName)));
        return true;
    }

    boolean getExtra(JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (args.length() != 1) {
            // return new PluginResult(PluginResult.Status.INVALID_ACTION);
            callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.INVALID_ACTION));
            return false;
        }
        Intent i = ((CordovaActivity) this.cordova.getActivity()).getIntent();
        String extraName = args.getString(0);
        if (i.hasExtra(extraName)) {
            // return new PluginResult(PluginResult.Status.OK, i.getStringExtra(extraName));
            callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK, i.getStringExtra(extraName)));
            return true;
        } else {
            // return new PluginResult(PluginResult.Status.ERROR);
            callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR));
            return false;
        }
    }

    @Override
    public void onNewIntent(Intent intent) {

        if (this.onNewIntentCallbackContext != null) {
            PluginResult result = new PluginResult(PluginResult.Status.OK, intent.getDataString());
            result.setKeepCallback(true);
            this.onNewIntentCallbackContext.sendPluginResult(result);
        }
    }
}

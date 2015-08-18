/**
 * cordova Web Intent plugin
 * Copyright (c) Boris Smus 2010
 *
 */
module.exports = function(params, success, fail) {
	return cordova.exec(success, fail, 'WebIntent', 'getExtra', [params]);
};

module.exports.ACTION_SEND = "android.intent.action.SEND";
module.exports.ACTION_VIEW= "android.intent.action.VIEW";
module.exports.EXTRA_TEXT = "android.intent.extra.TEXT";
module.exports.EXTRA_SUBJECT = "android.intent.extra.SUBJECT";
module.exports.EXTRA_STREAM = "android.intent.extra.STREAM";
module.exports.EXTRA_EMAIL = "android.intent.extra.EMAIL";
module.exports.ACTION_CALL = "android.intent.action.CALL";
module.exports.ACTION_SENDTO = "android.intent.action.SENDTO";
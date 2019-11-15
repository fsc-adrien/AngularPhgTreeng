const functions = require('firebase-functions');

exports.function3 = functions.storage.object().onArchive();
exports.function4 = functions.analytics.event('in_app_purchase').onLog();

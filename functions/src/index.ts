import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as twitter from "twit";

admin.initializeApp({
  credential: admin.credential.applicationDefault()
});

var client = new twitter({
  consumer_key: functions.config().twitter.consumer_key,
  consumer_secret: functions.config().twitter.consumer_secret,
  access_token: functions.config().twitter.access_token,
  access_token_secret: functions.config().twitter.access_token_secret
});

export const fetch = functions.https.onRequest((request, response) => {
  client.get(
    "statuses/user_timeline",
    { screen_name: "Jesse0Michael" },
    function(err, data, resp) {
      response.send(data);
    }
  );
});

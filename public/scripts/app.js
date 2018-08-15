/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Simulated database

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  },
  
];

// Calaculates time elapsed since (from Stackoverflow)

function timeSince(date) {

  let seconds = Math.floor((new Date() - date) / 1000);

  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " years";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}


$(function() {

// Render tweets to the browser

function renderTweets(tweets) {
    return tweets.forEach(t => {
      return $('#tweets-container').append(createTweetElement(t));
    })
}

// Turns JSON object from database into html

function createTweetElement(tweetObject) {
  let $tweet = $("<article>").addClass("tweet");
  let $header = $("<header>");
  let $avatar = $("<img>").attr("src", tweetObject.user.avatars.small);
  $header.append($avatar);
  let $accName = $("<h3>").addClass("account-name").html(tweetObject.user.name);
  $header.append($accName);
  let $handle = $("<span>").addClass("handle").html(tweetObject.user.handle);
  $header.append($handle);
  $tweet.append($header);
  let $body = $("<p>").addClass("body").html(tweetObject.content.text);
  $tweet.append($body);
  let $footer = $("<footer>");
  let $createdAt = $("<span>").addClass("created-at").html(timeSince(tweetObject.created_at));
  $footer.append($createdAt);
  let $icons = $("<span>").addClass("icons")
  let $flag = $("<i>").addClass("material-icons").html("flag");
  $icons.append($flag);  
  let $repeat = $("<i>").addClass("material-icons").html("repeat");
  $icons.append($repeat);
  let $favorite = $("<i>").addClass("material-icons").html("favorite");
  $icons.append($favorite);
  $footer.append($icons);
  $tweet.append($footer);
  return $tweet;
}

renderTweets(data);

})
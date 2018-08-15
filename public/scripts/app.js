/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Simulated database

$(function() {

// Turns JSON object from database into html

function addElement(tag, className, content) {
   return $(tag).addClass(className).text(content);
}

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

function createHeader(tweetObject) {
  let $header = $("<header>");
  let $avatar = $("<img>").attr("src", tweetObject.user.avatars.small);
  $header.append($avatar);
  let $accName = addElement("<h3>", "account-name", tweetObject.user.name);
  $header.append($accName);
  let $handle = addElement("<span>", "handle", tweetObject.user.handle);

  $header.append($handle);
  return $header;
}

function createBody(tweetObject) {
  return addElement("<p>", "body", tweetObject.content.text);

}

function createFooter(tweetObject) {
  let $footer = $("<footer>");
  let $createdAt = addElement("<span>", "created-at", timeSince(tweetObject.created_at));
  
  $footer.append($createdAt);
  let $icons = addElement("<span>", "icons");

  let $flag = addElement("<i>", "material-icons", "flag");
  $icons.append($flag);  
  let $repeat = addElement("<i>", "material-icons", "repeat");
  $icons.append($repeat);
  let $favorite = addElement("<i>", "material-icons", "favorite");

  $icons.append($favorite);
  $footer.append($icons);
  return $footer;
}

function createTweetElement(tweetObject) {
  
  let $tweet = $("<article>").addClass("tweet");

  $tweet.append(createHeader(tweetObject));
  $tweet.append(createBody(tweetObject));
  $tweet.append(createFooter(tweetObject));

  return $tweet;
}

// Render tweets to the browser

function renderTweets(tweets) {
  tweets = tweets.reverse();
  return tweets.forEach(t => {
    return $('#tweets-container').append(createTweetElement(t));
  })
}

// Fetch tweets with Ajax

function loadTweets() {
  $.get("/tweets", function (tweets) {
    renderTweets(tweets);
  }, "json")
}

function formValidation(content) {
  if (content.length > 140) {
    alert("Tweets cannot be longer than 140 characters!");
    return false;
    // Check if the content is empty or only white spaces
  } else if (!content.match(/\S+/)) {
    alert("The text area is empty!");
    return false;
  }
  return content;
}

// Form submission with Ajax

$("form").on("submit", function (event) {
  event.preventDefault();
  let newTweet = $(this).serialize();
  validContent = formValidation($(this).find("textarea[name='text']").val());
  if(validContent) {
    $.post("/tweets", newTweet).done(function(response) {
      $("#tweets-container").empty();
      loadTweets();
      $("textarea[name='text']").val('');
    })
  }
})

loadTweets();

// renderTweets(data);

})
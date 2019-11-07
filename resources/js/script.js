var showRotateMessage = false;
var sneakPeekImages = new Array();

//this function is used to append the JSON script to the body, and calls a function to parse through the data *contributed by other developer*
function getJSONP(url, cb_name, cb) {
  var existing_cb = window[cb_name] || function() {};
  window[cb_name] = function() {
    try {
      cb.apply(this, arguments);
    } catch (err) {}
    existing_cb.apply(this, arguments);
  };
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = url;
  document.body.appendChild(script);
}

//this function parses through the JSON data and sets the HTML contents of all selectors to the relevant data properties
function displayAssets() {
  var json_url =
      "//subscription-assets.timeinc.com/prod/assets/themes/magazines/default/template-resources/js/selfpublishing/PE/this-week-issue-mobile/this-week-issue-mobile-v2.js",
    img_url =
      "//subscription-assets.timeinc.com/prod/assets/themes/magazines/default/template-resources/images/selfpublishing/generic/";

  getJSONP(json_url, "tcm_onThisWeekIssueMobileDataReady", function(data) {
    $("#headline").html(data.content[0].headline);
    $(".cvr,.cvrClipped").attr("src", img_url + data.content[0].images[0].url);
    $(".cvr,.cvrClipped").css("display", "block");
    $("#page1").html(data.content[0].highlights[0].description);
    $("#page2").html(data.content[0].highlights[1].description);
    $("#page3").html(data.content[0].highlights[2].description);
    $("#pageNum1").html(data.content[0].highlights[0].page);
    $("#pageNum2").html(data.content[0].highlights[1].page);
    $("#pageNum3").html(data.content[0].highlights[2].page);
    for (var i = 0; i < 6; i++) {
      sneakPeekImages[i] = img_url + data.content[0].images[i + 1].url;
    }
    if (window.innerHeight > window.innerWidth) displayPortraitImages();
    else displayLandscapeImages();
  });
}

//this function sets the background images of the selectors specified to portrait sized images
function displayPortraitImages() {
  $("#starTracks").css("background-image", "url(" + sneakPeekImages[0] + ")");
  $("#feature").css("background-image", "url(" + sneakPeekImages[1] + ")");
  $("#greatIdeas").css("background-image", "url(" + sneakPeekImages[2] + ")");
}

//this function sets the background images of the selectors specified to landscape sized images
function displayLandscapeImages() {
  $("#starTracks").css("background-image", "url(" + sneakPeekImages[3] + ")");
  $("#feature").css("background-image", "url(" + sneakPeekImages[4] + ")");
  $("#greatIdeas").css("background-image", "url(" + sneakPeekImages[5] + ")");
}

//this function scrolls up the page to the anchor tag specified
function scrollToAnchor(aid) {
  var aTag = $("a[name='" + aid + "']");
  $("html,body").animate({ scrollTop: aTag.offset().top }, "slow");
}

//this function toggles an element's display between none and block
function toggleMe(x) {
  var elem = document.getElementById(x);
  elem.style.display = elem.style.display == "block" ? "none" : "block";
}

//this function changes the order of the element specified to be the first element of the parent
function rearrange(x) {
  var content = "#" + x;
  $(content)
    .parent()
    .prepend($(content));
}

//this function is used to display the sneak peek images
function sneakPeekShow(x) {
  sneakPeekPixels();
  rearrange(x + "Div");
  toggleMe(x);
  scrollToAnchor("sneakpeek");
}

//when the DOM is ready bind all events
$(document).ready(function() {
  displayAssets();
  $(window).on("orientationchange", function(event) {
    if (event.orientation == "portrait") displayPortraitImages();
    else displayLandscapeImages();
  });
  $("#starTracksDiv, #featureDiv, #greatIdeasDiv").click(function() {
    if (
      $(this)
        .children(".rtIcon")
        .attr("src") == "resources/images/icn-arrow-pink-dwn.png"
    ) {
      $(this)
        .children(".rtIcon")
        .attr("src", "resources/images/icn-arrow-pink-rgt.png");
      $(this)
        .children(".rotateText")
        .css("display", "none");
    } else if (
      $(this)
        .children(".rtIcon")
        .attr("src") == "resources/images/icn-arrow-pink-rgt.png"
    ) {
      $(this)
        .children(".rtIcon")
        .attr("src", "resources/images/icn-arrow-pink-dwn.png");
      $(this)
        .children(".rotateText")
        .css("display", "block");
    }
  });
  $("#buyNow").click(function() {
    buyNowPixels();
  });
  $("#coupon").click(function() {
    couponPixels();
  });
  $("#twitter").click(function() {
    twitterPixels();
  });
  $("#facebook").click(function() {
    facebookPixels();
  });
  $("#pinterest").click(function() {
    pinterestPixels();
  });
  //Waypoints is a jQuery plugin that allows a custom event, called a waypoint, which executes a function whenever you scroll to an element.

  $("#screen2").waypoint(
    function(direction) {
      if (direction == "down") {
        $("#nextScreen2").css("visibility", "hidden");
      } else {
        $("#nextScreen2").css("visibility", "visible");
      }
    },
    { offset: "90%" }
  );
});

//create random number object to set random number values in pixels
function pixelSetup(divId) {
  var pixels = $(divId).html();

  pixels = $(divId).html() != "" ? "" : pixels;

  var axel = Math.random() + "";
  var a = axel * 10000000000000;
  var axel2 = Math.random() + "";
  var a2 = axel2 * 10000000000000;

  var randomNumbers = {
    standard: a,
    unique: a2
  };
  return randomNumbers;
}

//all of the following functions set the HTML contents of the selector specified to the tracking pixel specified

function twitterPixels() {
  /*
	Start of DoubleClick Floodlight Tag: Please do not remove
	Activity name of this tag: People_Thisweekspeopleissue_Landing Page_Mobile-Twitter-Standard, People_Thisweekspeopleissue_Landing Page_Mobile-Twitter-Unique
	URL of the webpage where the tag is expected to be placed: http://subscription-assets.people.com/prod/assets/themes/magazines/SUBS/templates/velocity/site/pe-twr-dsktp/lpm.html
	This tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.
	Creation Date: 06/16/2014
	*/

  var randomNumbers = pixelSetup("#twitterPixels");

  $("#twitterPixels").html(
    '<iframe src="https://3980839.fls.doubleclick.net/activityi;src=3980839;type=peopl017;cat=peoMTwiS;ord=' +
      randomNumbers.standard +
      '?" width="1" height="1" frameborder="0" style="display:none"></iframe><iframe src="https://3980839.fls.doubleclick.net/activityi;src=3980839;type=peopl017;cat=peoMTwiU;ord=1;num=' +
      randomNumbers.unique +
      '?" width="1" height="1" frameborder="0" style="display:none"></iframe>'
  );
}
function facebookPixels() {
  /*
	Start of DoubleClick Floodlight Tag: Please do not remove
	Activity name of this tag: People_Thisweekspeopleissue_Landing Page_Mobile-Facebook-Standard, People_Thisweekspeopleissue_Landing Page_Mobile-Facebook-Unique
	URL of the webpage where the tag is expected to be placed: http://subscription-assets.people.com/prod/assets/themes/magazines/SUBS/templates/velocity/site/pe-twr-dsktp/lpm.html
	This tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.
	Creation Date: 06/16/2014
	*/
  var randomNumbers = pixelSetup("#facebookPixels");

  $("#facebookPixels").html(
    '<iframe src="https://3980839.fls.doubleclick.net/activityi;src=3980839;type=peopl017;cat=peoMFacS;ord' +
      randomNumbers.standard +
      '?" width="1" height="1" frameborder="0" style="display:none"></iframe><iframe src="https://3980839.fls.doubleclick.net/activityi;src=3980839;type=peopl017;cat=peoMFacU;ord=1;num=' +
      randomNumbers.unique +
      '?" width="1" height="1" frameborder="0" style="display:none"></iframe>'
  );
}
function pinterestPixels() {
  /*
	Start of DoubleClick Floodlight Tag: Please do not remove
	Activity name of this tag:  People_Thisweekspeopleissue_Landing Page_Mobile-Pinterest-Standard, People_Thisweekspeopleissue_Landing Page_Mobile-Pinterest-Unique
	URL of the webpage where the tag is expected to be placed: http://subscription-assets.people.com/prod/assets/themes/magazines/SUBS/templates/velocity/site/pe-twr-dsktp/lpm.html
	This tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.
	Creation Date: 06/16/2014
	*/
  var randomNumbers = pixelSetup("#pinterestPixels");

  $("#pinterestPixels").html(
    '<iframe src="https://3980839.fls.doubleclick.net/activityi;src=3980839;type=peopl017;cat=peoMPinS;ord=' +
      randomNumbers.standard +
      '?" width="1" height="1" frameborder="0" style="display:none"></iframe><iframe src="https://3980839.fls.doubleclick.net/activityi;src=3980839;type=peopl017;cat=peoMPinU;ord=1;num=' +
      randomNumbers.unique +
      '?" width="1" height="1" frameborder="0" style="display:none"></iframe>'
  );
}
function sneakPeekPixels() {
  /*
	Start of DoubleClick Floodlight Tag: Please do not remove
	Activity name of this tag: People_Thisweekspeopleissue_Landing Page_Mobile-Sneak Peak-Standard, People_Thisweekspeopleissue_Landing Page_Mobile-Sneak Peak-Unique
	URL of the webpage where the tag is expected to be placed: http://subscription-assets.people.com/prod/assets/themes/magazines/SUBS/templates/velocity/site/pe-twr-dsktp/lpm.html
	This tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.
	Creation Date: 06/16/2014
	   */
  var randomNumbers = pixelSetup("#sneakPeekPixels");

  $("#sneakPeekPixels").html(
    '<iframe src="https://3980839.fls.doubleclick.net/activityi;src=3980839;type=peopl017;cat=peoMSPS;ord=' +
      randomNumbers.standard +
      '?" width="1" height="1" frameborder="0" style="display:none"></iframe><iframe src="https://3980839.fls.doubleclick.net/activityi;src=3980839;type=peopl017;cat=peoMSPU;ord=1;num=' +
      randomNumbers.unique +
      '?" width="1" height="1" frameborder="0" style="display:none"></iframe>'
  );
}

function buyNowPixels() {
  /*
	Start of DoubleClick Floodlight Tag: Please do not remove
	Activity name of this tag: People_Thisweekspeopleissue_Landing Page_Mobile-Buy Now-Standard,  People_Thisweekspeopleissue_Landing Page_Mobile-Buy Now-Unique
	URL of the webpage where the tag is expected to be placed: http://subscription-assets.people.com/prod/assets/themes/magazines/SUBS/templates/velocity/site/pe-twr-dsktp/lpm.html
	This tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.
	Creation Date: 06/16/2014
	   */
  var randomNumbers = pixelSetup("#buyNowPixels");

  $("#buyNowPixels").html(
    '<iframe src="https://3980839.fls.doubleclick.net/activityi;src=3980839;type=peopl017;cat=peoMBNS;ord=' +
      randomNumbers.standard +
      '?" width="1" height="1" frameborder="0" style="display:none"></iframe><iframe src="https://3980839.fls.doubleclick.net/activityi;src=3980839;type=peopl017;cat=peoMBNU;ord=1;num=' +
      randomNumbers.unique +
      '?" width="1" height="1" frameborder="0" style="display:none"></iframe>'
  );
}

function couponPixels() {
  /*Start of DoubleClick Floodlight Tag: Please do not remove
	Activity name of this tag:  People_Thisweekspeopleissue_Landing Page_Mobile-Save $1 Button-Standard, People_Thisweekspeopleissue_Landing Page_Mobile-Save $1 Button-Unique
	URL of the webpage where the tag is expected to be placed: http://subscription-assets.people.com/prod/assets/themes/magazines/SUBS/templates/velocity/site/pe-twr-dsktp/lpm.html
	This tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.
	Creation Date: 06/16/2014
	*/

  var randomNumbers = pixelSetup("#couponPixels");

  $("#couponPixels").html(
    '<iframe src="https://3980839.fls.doubleclick.net/activityi;src=3980839;type=peopl017;cat=peoMSavS;ord' +
      randomNumbers.standard +
      '?" width="1" height="1" frameborder="0" style="display:none"></iframe><iframe src="https://3980839.fls.doubleclick.net/activityi;src=3980839;type=peopl017;cat=peoMSavU;ord=1;num=' +
      randomNumbers.unique +
      '?" width="1" height="1" frameborder="0" style="display:none"></iframe>'
  );
}

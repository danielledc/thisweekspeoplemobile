thisweekspeoplemobile
=====================
*NOTE: The description and source code in this repository reflects the status of this project as of 2014. Code on the live site may have changed since then.

The People this Week's Issue mobile page is a page promoting each week's People Magazine. This single page application is developed for mobile display, and pulls in json data reflecting the new issue, specifically three page highlights and seven images (three for portrait display, three for landscape display, and the cover image). This data is updated weekly through a separate internal tool. 

My role on this was as lead developer, developing all HTML, CSS, and Javascript. Note: The getJSON function ONLY was contributed previously by another developer

DEMO

The page can be viewed at http://subscription-assets.people.com/prod/assets/themes/magazines/SUBS/templates/velocity/site/pe-twr-dsktp/lpm.html, and is best viewed on an Android or iPhone mobile device

RELEVANT FILES

lpm.html - HTML single page application

resources/js/script.js - javascript code to get json data, bind event handlers, and handle orientation change of page

resources/css/styles-mobile.css - all css, including media queries

Please view the source of these files in the repository for additional comments added where necessary.

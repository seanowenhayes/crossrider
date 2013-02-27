/************************************************************************************
  This is your background code.
  For more information please visit our wiki site:
  http://docs.crossrider.com/#!/guide/background_scope
*************************************************************************************/


// Place your code here (ideal for handling browser button, global timers, etc.)
appAPI.ready(function($) {

    // Add a semi-transparent badge
    //
    // NOTE: Call the setBadgeUpdate method again to update the badge
    appAPI.browserAction.setBadgeText('extn', [255,0,0,125]);

    // Add the icon from the Resources folder
    // See the note following this code.
    appAPI.browserAction.setResourceIcon('img/icon.png');

    // Add a tooltip
    appAPI.browserAction.setTitle('Top Tag');

    // Set the popup html path.
    appAPI.browserAction.setPopup({resourcePath:'popup.html'});

});
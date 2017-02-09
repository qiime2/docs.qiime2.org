(function($) {
  var defaultText = 'This document reflects an older version of QIIME 2 that is no longer supported. Please consider upgrading to a newer release!';
  var versions = {
    "2017.2": {
      "name": "2017.2",
      "deprecated": false
    },
    "2.0.6": {
      "name": "2.0.6",
      "deprecated": true
    }
  };

  var activeVersion = window.location.pathname.split('/')[1];
  $.each(versions, function(key, data) {
    $('<li/>', {
      "html": $('<a/>', {
        "href": "/" + key + "/" + window.location.pathname.split('/').slice(2).join('/'),
        "text": data.name
      })
    }).appendTo('#version-list')

    if (key == activeVersion) {
      $('#version-div button').html('Version: ' + data.name + ' <span class="caret"></span>');
      if (data.deprecated) {
        $('<div/>', {
          "text": defaultText,
          "class": "alert alert-warning text-center",
        }).prependTo($('#content'))
      }
    }
  });

})(window.jQuery)

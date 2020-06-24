(function($) {
  var defaultText = 'This document reflects an older version of QIIME 2 that is no longer supported. Please consider upgrading to a newer release!';
  var versions = {
    "2020.2": {
      "name": "2020.2",
      "deprecated": false
    },
    "2019.10": {
      "name": "2019.10",
      "deprecated": false
    },
    "2019.7": {
      "name": "2019.7",
      "deprecated": true
    },
    "2019.4": {
      "name": "2019.4",
      "deprecated": true
    },
    "2019.1": {
      "name": "2019.1",
      "deprecated": true
    },
    "2018.11": {
      "name": "2018.11",
      "deprecated": true
    },
    "2018.8": {
      "name": "2018.8",
      "deprecated": true
    },
    "2018.6": {
      "name": "2018.6",
      "deprecated": true
    },
    "2018.4": {
      "name": "2018.4",
      "deprecated": true
    },
    "2018.2": {
      "name": "2018.2",
      "deprecated": true
    },
    "2017.12": {
      "name": "2017.12",
      "deprecated": true
    },
    "2017.11": {
      "name": "2017.11",
      "deprecated": true
    },
    "2017.10": {
      "name": "2017.10",
      "deprecated": true
    },
    "2017.9": {
      "name": "2017.9",
      "deprecated": true
    },
    "2017.8": {
      "name": "2017.8",
      "deprecated": true
    },
    "2017.7": {
      "name": "2017.7",
      "deprecated": true
    },
    "2017.6": {
      "name": "2017.6",
      "deprecated": true
    },
    "2017.5": {
      "name": "2017.5",
      "deprecated": true
    },
    "2017.4": {
      "name": "2017.4",
      "deprecated": true
    },
    "2017.2": {
      "name": "2017.2",
      "deprecated": true
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
        var content = $('#content');
        var hideableContent = content.children();
        hideableContent.hide();
        var warningDiv = $('<div/>', {
          class: 'alert alert-warning text-center',
        });
        $('<p/>', { text: defaultText }).appendTo(warningDiv);
        var buttonGroup = $('<div/>', { class: 'btn-group' });
        buttonGroup.appendTo(warningDiv);
        var latestLink = $('<a>', {
          class: 'btn btn-success',
          html: 'Latest Docs',
          href: 'https://docs.qiime2.org/',
        });
        latestLink.appendTo(buttonGroup);
        var showContent = $('<button>', {
          class: 'btn btn-danger',
          html: 'Show me the content on this page',
        });
        showContent.on('click', function() {
          hideableContent.show();
          buttonGroup.remove();
        });
        showContent.appendTo(buttonGroup);
        warningDiv.prependTo(content);
      }
    }
  });

})(window.jQuery)

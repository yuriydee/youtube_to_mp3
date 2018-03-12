/**
 * Plugin: jquery.zRSSFeed
 * 
 * Version: 1.1.3
 * (c) Copyright 2010-2011, Zazar Ltd
 * 
 * Description: jQuery plugin for display of RSS feeds via Google Feed API
 *              (Based on original plugin jGFeed by jQuery HowTo. Filesize function by Cary Dunn.)
 * 
 * History:
 * 1.1.3 - Check for valid published date
 * 1.1.2 - Added user callback function due to issue with ajaxStop after jQuery 1.4.2
 * 1.1.1 - Correction to null xml entries and support for media with jQuery < 1.5
 * 1.1.0 - Added support for media in enclosure tags
 * 1.0.3 - Added feed link target
 * 1.0.2 - Fixed issue with GET parameters (Seb Dangerfield) and SSL option
 * 1.0.1 - Corrected issue with multiple instances
 *
 **/

(function($){

	$.fn.rssfeed = function(url, options, method, fn) {	
	
		// Set plugin defaults
		var defaults = {
			limit: 10,
			header: true,
			titletag: 'h4',
			date: true,
			content: true,
			snippet: true,
			showerror: true,
			errormsg: '',
			key: null,
			ssl: false,
			linktarget: '_self'
		};  
		var options = $.extend(defaults, options); 
		
		// Functions
		return this.each(function(i, e) {
			var $e = $(e);
			var s = '';

			// Check for SSL protocol
			if (options.ssl) s = 's';
			
			// Add feed class to user div
			if (!$e.hasClass('rssFeed')) $e.addClass('rssFeed');
			
			// Check for valid url
			if(url == null) return false;
			
			// Create Google Feed API address
			var api = "http"+ s +"://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q=" + encodeURIComponent(url);
			if (options.limit != null) api += "&num=" + options.limit;
			if (options.key != null) api += "&key=" + options.key;
			api += "&output=json_xml"

			// Send request
			$.ajax({
        url: api,
        type: 'GET',
        dataType: 'jsonp',
        success: function(data) { 
					// Process the feeds
					_process(e, data.responseData, options, method);

					// Optional user callback function
					if ($.isFunction(fn)) fn.call(this,$e);
        },
        error: function(data) {
				  if (options.showerror)
				    if (options.errormsg != '') {
				  	  var msg = options.errormsg;
				  	} else {
				  		var msg = data.responseDetails;
				  };
				  $(e).html('<div class="rssError"><p>'+ msg +'</p></div>');
          },
      });
		});
	};
	
	// Function to create HTML result
	var _process = function(e, data, options, method) {

		// Get JSON feed data
		var feeds = data.feed;
		if (!feeds) {
			return false;
		}
		var html = '';	
		var row = 'odd';

		// Get XML data for media (parseXML not used as requires 1.5+)
		var xml = getXMLDocument(data.xmlString);
		var xmlEntries = xml.getElementsByTagName('item');
		
		// Add header if required
		if (options.header)
			/* html +=	'<div class="rssHeader">' +
				'<a href="'+feeds.link+'" title="'+ feeds.description +'">'+ feeds.title +'</a>' +
				'</div>'; */
			
		// Add body
		//html += '<div class="rssBody">' +
			'<ul>';
		if(method == 'utube')
		{
			html =  '<a target="_blank" title="YouTube" href="http://www.youtube.com/TheScholasticChannel"><b>Follow the Scholastic Channel on YouTube</b></a><br /><br />';
		}
		var splitup;
		// Add feeds
		for (var i=0; i<feeds.entries.length; i++) {
			
			// Get individual feed
			var entry = feeds.entries[i];
			//console.log(entry);
			var pubDate;

			// Format published date
			if (entry.publishedDate) {
				var entryDate = new Date(entry.publishedDate);
				var pubDate = entryDate.toLocaleDateString() + ' ' + entryDate.toLocaleTimeString();
			}
			
			// Add feed row
			/*html += '<li class="rssRow '+row+'">' + 
				'<'+ options.titletag +'><a href="'+ entry.link +'" title="View this feed at '+ feeds.title +'" target="'+ options.linktarget +'">'+ entry.title +'</a></'+ options.titletag +'>'
			*/
			
			//if (options.date && pubDate) html += '<div>'+ pubDate +'</div>'
			/* if (options.content) {
			
				// Use feed snippet if available and optioned
				if (options.snippet && entry.contentSnippet != '') {
					var content = entry.contentSnippet;
				} else {
					var content = entry.content;
				}
				html += entry.content+'</p>';
				//html += '<p>'+ content +'</p>'
			} */
			if(method == 'blog')
			{
				html += '<p class="news news'+[i]+'"><a class="newsLink" href="'+entry.link+'" >'+entry.title+'</a>';
				html += entry.contentSnippet+' <a href="'+entry.link+'" class="read-more">Read More</a></p>';			
			}
			else if(method == 'utube')
			{
				splitup = entry.link.split('?v=');
				var tmp = splitup[1];
				splitup = tmp.split('&feature=');				
				html += '<a target="_blank" href="'+entry.link+'"><img border="0" src="//i3.ytimg.com/vi/'+splitup[0]+'/default.jpg"></a>';
			}
			else if(method == 'rss')
			{
				html += '<p class="news"><a class="newsLink" href="'+entry.link+'" >'+entry.title+'</a>';
				html += entry.contentSnippet+' <a href="'+entry.link+'" class="read-more">Read More</a></p>';			
			}
			
			// Alternate row classes
			if (row == 'odd') {
				row = 'even';
			} else {
				row = 'odd';
			}			
		}
		
		/*html += '</ul>' +
			'</div>' */
		
		$(e).html(html);
	};
	
	function formatFilesize(bytes) {
		var s = ['bytes', 'kb', 'MB', 'GB', 'TB', 'PB'];
		var e = Math.floor(Math.log(bytes)/Math.log(1024));
		return (bytes/Math.pow(1024, Math.floor(e))).toFixed(2)+" "+s[e];
	}

	function getXMLDocument(string) {
		var browser = navigator.appName;
		var xml;
		if (browser == 'Microsoft Internet Explorer') {
			xml = new ActiveXObject('Microsoft.XMLDOM');
			xml.async = 'false'
			xml.loadXML(string);
		} else {
			xml = (new DOMParser()).parseFromString(string, 'text/xml');
		}
		return xml;
	}


})(jQuery);

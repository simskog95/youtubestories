$(document).ready(function() {
	$.getJSON("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=5&playlistId=UUyQb1TTrfRzQZmEfsx770qw&key=AIzaSyDYDShU3i731fR0CmQiHpeGmXWQbEb0INQ", 
			function(data) {
				$.each(data.items, function(i, item) {
						var video = "<article>";
						videoTitle = item.snippet.title;
						videoId = item.snippet.resourceId.videoId;

						video += "<p>"+videoTitle+"</p>"+'<iframe src=\"//www.youtube.com/embed/'+videoId+'\"></iframe>';
						video += "</article>";

				$("#latest").append(video);
				});
			});
	});



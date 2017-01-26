$(document).ready(function() {
	$.getJSON("https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCyQb1TTrfRzQZmEfsx770qw&maxResults=1&order=date&type=video&key=AIzaSyDYDShU3i731fR0CmQiHpeGmXWQbEb0INQ",
			function(data) {
				$.each(data.items, function(i, item) {
						var latestVideo = "<article>";
						videoDate = item.snippet.publishedAt;
						videoId = item.id.videoId;

						latestVideo += "<p>"+videoDate+"</p>"+'<iframe class="embed-responsive-item" width="560" height="315" src=\"//www.youtube.com/embed/'+videoId+'\"></iframe>'; // embed-responsive-item för att filmerna ska bli responsiva
						latestVideo += "</article>";

				$("#latestJon").append(latestVideo); // Vi lägger in Jons senaste film i div-taggen latestJon
				});
			});
	});
	
$(document).ready(function() {
	$.getJSON("https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCtinbF-Q-fVthA0qrFQTgXQ&maxResults=1&order=date&type=video&key=AIzaSyDYDShU3i731fR0CmQiHpeGmXWQbEb0INQ",
			function(data) {
				$.each(data.items, function(i, item) {
						var latestVideo = "<article>";
						videoDate = item.snippet.publishedAt;
						videoId = item.id.videoId;

						latestVideo += "<p>"+videoDate+"</p>"+'<iframe class="embed-responsive-item" src=\"//www.youtube.com/embed/'+videoId+'\"></iframe>'; // embed-responsive-item för att filmerna ska bli responsiva
						latestVideo += "</article>";
						latestVideo += "<br>";

				$("#latestCasey").append(latestVideo); // Vi lägger in Caseys senaste film i div-taggen latestCasey
				});
			});
	});
	
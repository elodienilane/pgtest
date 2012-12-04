// JavaScript Document

//Initialise video controls for video content
function initVideoControls(videoID){
	if(videoID != undefined){
		$("#progressbar"+videoID).width(window.innerWidth-51-10);
		
		var video=document.getElementById('player'+videoID);
		if(video != null){
			
			video.pause();
			video.addEventListener('timeupdate',function(e) {
				var s=e.target.currentTime;
				var t=e.target.duration;
				$("#seeker"+videoID).width(s/t*100+"%");
			}, true);
			
			video.addEventListener('ended',function(e) {
				document.getElementById('player'+videoID).currentTime = 0;
				$("#play"+videoID).fadeIn();
				$("#footerplay"+videoID).fadeIn();
				$("#footerpause"+videoID).fadeOut();
			}, true);
			
			video.addEventListener('play',function(e) {
				$("#play"+videoID).fadeOut();
				$("#footerplay"+videoID).fadeOut();
				$("#footerpause"+videoID).fadeIn();
			}, true);
			
			video.addEventListener('pause',function(e) {
				$("#play"+videoID).fadeIn();
				$("#footerplay"+videoID).fadeIn();
				$("#footerpause"+videoID).fadeOut();
			}, true);
			
			$("#progressbar"+videoID).bind('click',function(e){
				var x = e.pageX - this.offsetLeft;
				var y = e.pageY - this.offsetTop;
				var percentage = x/$("#progressbar"+videoID).width() * video.duration;
				document.getElementById('player'+videoID).currentTime = percentage;
			});
			$("#play"+videoID).bind('click',function(){
				document.getElementById('player'+videoID).play();
			});
			$("#footerplay"+videoID).bind('click',function(){
				document.getElementById('player'+videoID).play();
			});
			$("#footerpause"+videoID).bind('click',function(){
				document.getElementById('player'+videoID).pause();
			});
			$(window).bind('orientationchange',function(){
				$("#progressbar"+videoID).width(window.innerWidth-51-10);
			});
		}
	}
}

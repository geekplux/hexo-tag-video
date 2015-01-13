/**
* video tag
*
* Syntax:
*   {% video video_site video_id %}
*
* Sample:
*   {% video youku XNTkyMTM0MzY4 %}
*
*/

hexo.extend.tag.register('video', function(args, content, options){
  var videoSite = args[0];
  var videoId = args[1];

  if (videoSite === "youku")
    return '<div class="video-container"><iframe height=498 width=510 src="http://player.youku.com/embed/' + videoId + '" frameborder=0 allowfullscreen></iframe></div>';
});
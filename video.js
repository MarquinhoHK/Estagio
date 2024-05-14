$(document).ready(function(){
    $('#thumbnail').click(function() {
        Video();
    });
});

function Video() {
    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/vhII1qlcZ4E';

    var video = document.querySelector('#video');
    var thumbnail = document.querySelector('#thumbnail');
    var thumbnailWidth = thumbnail.offsetWidth;
    var thumbnailHeight = thumbnail.offsetHeight;

    thumbnail.remove();
    video.appendChild(iframe);
    iframe.style.width = thumbnailWidth + 'px';
    iframe.style.height = thumbnailHeight + 'px';
}
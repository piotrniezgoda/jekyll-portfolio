(() => {

  const fbButton = document.querySelector('#fb-share-button');
  const twitterShare = document.querySelector('#twitter-share-button');
  const linkedinbutton = document.querySelector('#linkedin-share-button');
  const url = window.location.href;

fbButton.addEventListener('click', function() {
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url,
        'facebook-share-dialog',
        'width=800,height=600'
    );
    return false;
});

twitterShare.addEventListener('click', () => {
  window.open('https://twitter.com/share?url=' + url, 'twitter-popup', 'height=350,width=600');
    return false;
});

linkedinbutton.addEventListener('click', () => {
  window.open('https://www.linkedin.com/shareArticle?mini=true&url=' + url, 'linkedin-share', 'height=350,width=600');
  return false;
});
})()
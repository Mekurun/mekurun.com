---
---
function setsrc() {
  var images = document.getElementsByTagName('img');
  for (var i = 0; i < images.length; i++) {
    if(images[i].dataset.srcpath){
      if('{{ site.url }}' != 'https://mekurun.com') {
        images[i].src = '{{ site.url }}' + images[i].dataset.srcpath;
      }else{
        var display = images[i].style.display;
        if(display == "none") images[i].style.display = "block";
        if (images[i].dataset.width) {
          images[i].src = "https://res.cloudinary.com/nztm/image/fetch/" + "w_" + images[i].dataset.width + ",c_fit,q_auto,f_auto/dpr_"+ window.devicePixelRatio + ".0/" + '{{ site.url }}' + images[i].dataset.srcpath;
        }else {
          images[i].src = "https://res.cloudinary.com/nztm/image/fetch/c_fit,q_auto,f_auto/" + '{{ site.url }}' + images[i].dataset.srcpath;
        }
        images[i].style.display = display;
      }
    }
  }
}

window.addEventListener('load', setsrc)

---
---
function setsrc() {
    var images = document.getElementsByTagName('img');
    for (var i = 0; i < images.length; i++) {
      if(images[i].dataset.src){
        if('{{ site.url }}' == 'http://localhost:4000') {
          images[i].src = images[i].dataset.src;
        }else{
          var display = images[i].style.display;
          if(display == "none") images[i].style.display = "block";
          var w = images[i].clientWidth;
          var h = images[i].clientHeight;
          images[i].src = "https://res.cloudinary.com/yuki384/image/fetch/" + "w_" + w + ",h_" + h + ",c_fit,q_auto,f_auto/" + images[i].dataset.src;
          images[i].style.display = display;
        }
      }
    }
}

window.onload = setsrc;

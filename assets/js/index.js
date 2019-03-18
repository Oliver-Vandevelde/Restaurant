let bar = document.getElementById('smooth');
let size = (window.innerWidth /8);

window.onscroll = function(){
     if (document.body.scrollTop > size || document.documentElement.scrollTop > size) {
          bar.className = "navbar navbar-expand-lg backgroundOn";
     }
     else{
          bar.className = "navbar navbar-expand-lg backgroundOff";
     }
};
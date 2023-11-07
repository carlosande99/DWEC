window.addEventListener('load',() =>{
    move();
})
var i = 0;
    function move() {
      if (i == 0) {
        i = 1;
        const elem4 = document.querySelector('.barraFront');
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
          if (width >= 100) {
            clearInterval(id);
            i = 0;
          } else {
            width++;
            document.querySelector('.contador').innerHTML = width + "%";
            elem4.style.width = width + "%";
          }
        }
      }
    }



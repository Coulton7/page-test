document.addEventListener("DOMContentLoaded", function() {
    var x = document.getElementById('myNav');
    var y = document.getElementById('searchOverlay');
    var s = document.getElementById('shareOverlay');
    document.querySelector("#overlay-btn").addEventListener('click', 
      function navBtn() {
        document.getElementById('overlay-btn').classList.toggle("change");
        if (x.style.height === "100%") {
          x.style.height = "1px";
          x.style.bottom = "-1px";
          document.querySelector("html").classList.remove('noscroll');
          document.querySelector("body").classList.remove('noscroll');
          document.querySelector(".dialog-off-canvas-main-canvas").classList.remove('noscroll');
          document.querySelector('#overlay-btn').classList.add('overlay-btn');
          } else {
            x.style.height = "100%";
            x.style.bottom = "0";
            if (y.style.height == "100%") {
              y.style.height = "1px";
              y.style.bottom = "-1px";
              document.querySelector('#overlay-search').classList.remove('change');
              document.querySelector('#overlay-search').classList.add('search-btn')
            } else if (s.style.height == "100%") {
              s.style.height = "1px";
              s.style.bottom = "-1px";
              document.querySelector('#overlay-share').classList.remove('change');
              document.querySelector('#overlay-share').classList.add('share-btn')
            }
            document.querySelector("html").classList.add('noscroll');
            document.querySelector("body").classList.add('noscroll');
            document.querySelector(".dialog-off-canvas-main-canvas").classList.add('noscroll');
            document.querySelector('#overlay-btn').classList.remove('overlay-btn');
          }
      });

      document.querySelector('#overlay-search').addEventListener('click', 
        function searchBtn(){
          document.getElementById('overlay-search').classList.toggle('change');
          if (y.style.height === "100%") {
            y.style.height = "1px";
            y.style.bottom = "-1px";
            document.querySelector("html").classList.remove('noscroll');
            document.querySelector("body").classList.remove('noscroll');
            document.querySelector(".dialog-off-canvas-main-canvas").classList.remove('noscroll');
            document.querySelector('#overlay-search').classList.add('search-btn');
          } else {
            y.style.height = "100%";
            y.style.bottom = "0";
            if (x.style.height == "100%") {
              x.style.height = "1px";
              x.style.bottom = "-1px";
              document.querySelector('#overlay-search').classList.remove('change');
              document.querySelector('#overlay-search').classList.add('overlay-btn')
            } else if (s.style.height == "100%") {
              s.style.height = "1px";
              s.style.bottom = "-1px";
              document.querySelector('#overlay-share').classList.remove('change');
              document.querySelector('#overlay-share').classList.add('share-btn')
            }
            document.querySelector("html").classList.add('noscroll');
            document.querySelector("body").classList.add('noscroll');
            document.querySelector(".dialog-off-canvas-main-canvas").classList.add('noscroll');
            document.querySelector('#overlay-search').classList.remove('search-btn');
          }

        });

        document.querySelector('#overlay-share').addEventListener('click', 
        function shareBtn(){
          document.getElementById('overlay-share').classList.toggle('change');
          if (s.style.height === "100%") {
            s.style.height = "1px";
            s.style.bottom = "-1px";
            document.querySelector("html").classList.remove('noscroll');
            document.querySelector("body").classList.remove('noscroll');
            document.querySelector(".dialog-off-canvas-main-canvas").classList.remove('noscroll');
            document.querySelector('#overlay-share').classList.add('share-btn');
          } else {
            s.style.height = "100%";
            s.style.bottom = "0";
            if (y.style.height == "100%") {
              y.style.height = "1px";
              y.style.bottom = "-1px";
              document.querySelector('#overlay-search').classList.remove('change');
              document.querySelector('#overlay-search').classList.add('search-btn')
            } else if (s.style.height == "100%") {
              x.style.height = "1px";
              x.style.bottom = "-1px";
              document.querySelector('#overlay-btn').classList.remove('change');
              document.querySelector('#overlay-btn').classList.add('overlay-btn')
            }
            document.querySelector("html").classList.add('noscroll');
            document.querySelector("body").classList.add('noscroll');
            document.querySelector(".dialog-off-canvas-main-canvas").classList.add('noscroll');
            document.querySelector('#overlay-share').classList.remove('share-btn');
          }

        });

      var tabletOverlayBtn = document.querySelector("#tablet-overlay-btn");

      if(tabletOverlayBtn !=null ) {
        document.querySelector("#tablet-overlay-btn").addEventListener('click',
        function navBtn() {
          document.getElementById('tablet-overlay-btn').classList.toggle("change");
          if (x.style.height === "100%") {
              x.style.height = "0%";
              document.querySelector("body").classList.remove('noscroll');
              document.querySelector('#overlay-btn').classList.add('overlay-btn');
              document.querySelector('.navigation_col').classList.remove('overlay-menu');
            } else {
              x.style.height = "100%";
              document.querySelector("body").classList.add('noscroll');
              document.querySelector('#overlay-btn').classList.remove('overlay-btn');
              document.querySelector('.navigation_col').classList.add('overlay-menu');
            }
        });
      }
      else {
        return false;
      }
  });
  
function autocollapse() {
    var navbar = document.getElementById('autocollapse');
    navbar.classList.remove('collapsed');
    if(navbar.innerHeight > 100) {
      navbar.classList.add('collapsed');
      document.getElementById('overlay-btn').classList.add('display-none-important');
    } else {
      navbar.classList.remove('collapsed');
      document.getElementById('overlay-btn').classList.remove('display-none-important');
    }
  }
  
  function menuItemOverlay() {
  
    if(window.innerWidth > 992) {
      let overlayBtn = document.querySelector('.overlay-btn').getBoundingClientRect();
      let overlayBtnLeft = overlayBtn.left;
      let menuItem = document.querySelector('.desktop-last').getBoundingClientRect();
      let menuItemRight = menuItem.right;
  
      if ((menuItemRight > overlayBtnLeft)) {
        document.getElementById('overlay-btn').classList.add('display-none-important');
      }
      else {
        document.getElementById('overlay-btn').classList.remove('display-none-important');
      }
    }
  }
  
  document.addEventListener("DOMContentLoaded", autocollapse);
  document.addEventListener("DOMContentLoaded", menuItemOverlay);
  window.addEventListener('resize', function() {
    if(document.getElementById("overlay-btn").classList.contains("change")) {
      return;
    } else {
      autocollapse();
    }
  });
  window.addEventListener('resize', function() {
    if(this.document.getElementById("overlay-btn").classList.contains("change")) {
      return;
    } else {
      menuItemOverlay();
    }
  });
  
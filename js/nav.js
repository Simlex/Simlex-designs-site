/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */


function btnFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.header-icon')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  /*
  const menuToggle = document.querySelector('.toggle')
  const showcase = document.querySelector('.showcase')

  menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active')
      showcase.classList.toggle('active')
  })
  */
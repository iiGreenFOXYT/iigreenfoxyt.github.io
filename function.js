(function($) { 
    $(function() { 
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.nav-dropdown').toggle();
        $('.dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
      });
      $('html').click(function() {
        $('.nav-dropdown').hide();
      });
      $('#nav-toggle').click(function() {
        $('nav ul').slideToggle();
      });
      $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
      });
    }); 
  })(jQuery);



  window.addEventListener('scroll', function() {
    var header = document.querySelector('.nav-bar');
    var brand = document.querySelector('.brand');
  
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
  
      // Modify the brand styles here
      brand.style.backgroundColor = 'transparent';
      brand.style.borderBottomLeftRadius = '0';
      brand.style.borderBottomRightRadius = '0';
  
    } else {
      header.classList.remove('scrolled');
  
      // Restore the original brand styles here
      brand.style.backgroundColor = '#b4b4b4';
      brand.style.borderBottomLeftRadius = '22px';
      brand.style.borderBottomRightRadius = '22px';
    }
  });
  


 

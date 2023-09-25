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
  


 
// Function to calculate reading progress
function updateReadingProgress() {
  const post = document.querySelector(".blogpost"); // Adjust the selector to match your blog post container
  const progressBar = document.getElementById("reading-progress-bar");

  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollHeight = post.clientHeight - window.innerHeight;
  const progress = (scrollTop / scrollHeight) * 100;

  progressBar.style.width = progress + "%";
}

// Add an event listener to update the progress as the user scrolls
window.addEventListener("scroll", updateReadingProgress);



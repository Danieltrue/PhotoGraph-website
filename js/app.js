//hover over image to get transition
document.querySelectorAll('.parther img').forEach(function(imag) {
  imag.addEventListener('mouseenter',function () {
    imag.classList.remove('hover-class')
  })
  imag.addEventListener('mouseleave',function () {
    imag.classList.add('hover-class')
  })
})
const highlight = document.querySelector('.highlight-img img');
const previews = document.querySelectorAll('.small-image img');
document.querySelectorAll('.small-image img').forEach(function(images){
  images.addEventListener('click',function() {
    //
    smallSrc = images.src;
    //
    bigSrc = highlight.src;
    //
    const sourc = smallSrc.replace('small','big');
    //
    highlight.src = sourc;
    //
    previews.forEach(function(preview) {
      preview.classList.remove('small-active')
    })
    images.classList.add('small-active')
  })
})

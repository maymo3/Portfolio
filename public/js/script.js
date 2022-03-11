(function() {
    const image = document.querySelectorAll('.anmt');
  
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add('anmt-on');
        } else {
          entry.target.classList.remove('anmt-on');
        }
      });
    });
  
    Array.prototype.forEach.call(image, function(img) {
      observer.observe(img);
    });
})();
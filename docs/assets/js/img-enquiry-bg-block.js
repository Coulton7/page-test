document.addEventListener('DOMContentLoaded', function(){
    var imgSrc =  document.querySelector('.field-product-image .flexslider .slides li:nth-child(1) img').getAttribute('src');
    document.querySelector('.block-productenquiry').style.backgroundImage =   'url(' + imgSrc + ')';
  });

  document.addEventListener('DOMContentLoaded', function(){
    var indImg =  docuemtn.querySelector('.views-field-field-industry-image .field-content img').getAttribute('src');
    docuemtn.querySelector('.block-solutionsenquiry').style.backgroundImage =  'url(' + indImg + ')';
  });


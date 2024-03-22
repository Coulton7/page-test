document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#block-block-166').style.display = "none";
    document.querySelector('.field-thumbnail').style.display = "none";
  
    if (document.querySelector('.field-hubspot-form').length > 0) {
      document.querySelector('.field-api-stream').style.display = "none";
      document.querySelector('.field-thumbnail').style.display = "block";
    }
  
    function getUrlVars()
      {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for(var i = 0; i < hashes.length; i++)
        {
          hash = hashes[i].split('=');
          vars.push(hash[0]);
          vars[hash[0]] = hash[1];
        }
        return vars;
      }
  
    var submitString = getUrlVars()["fs"];
    if(submitString=='y'){
      document.querySelector('.oembed').style.display = "block";
      document.querySelector('.field-thumbnail').style.display = "none";
      document.querySelector('.field-hubspot-form').style.display = "none";
      document.querySelector('#block-sharethis-sharethis-block').style.display = "none";
      docuemnt.querySelector('.field-label').style.display = "none";
      document.querySelector('#block-block-166').style.display = "block";
    }
  });
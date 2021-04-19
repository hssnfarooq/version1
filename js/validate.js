function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  const form = document.querySelector('form');
  const latitudeError = document.getElementById('latitudeerror');
  const longitudeError = document.getElementById('longitudeerror');
  event.preventDefault();
  const latitude = document.getElementById('latitude');
  const longitude = document.getElementById('longitude');
  let flag1 = true;
  let flag2 = true;
  
  if (!(latitude.value >= -90 && latitude.value <= 90)){
    latitudeError.style.display='inline-block';
    flag1 = false;
  }else{
    latitudeError.style.display='none';
    // flag1 = true;
  }
  if (!(longitude.value >= -180 && longitude.value <= 180)){
    longitudeError.style.display='inline-block';
    flag2 = false;
  }else{
    longitudeError.style.display='none';
    // flag2 = true;
  }
  if(flag1 && flag2){
    setTimeout(function(){
      form.submit();
    }, 2000);
  }
  

  // &&   
  // console.log('TODO - validate the longitude, latitude values before submitting');
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};

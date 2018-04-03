let json = require('./dog.json');

let dog = document.getElementById('frank_option'),
    bun = document.getElementById('bun_option'),
    cond = document.getElementById('condiments_option'),
    btn1 = document.getElementById("DY"),
    btn2 = document.getElementById("SD"),
    dy_dog = json["dog"]["dy"],
    dy_bun = json["bun"]["dy"],
    dy_cond = json["condiment"]["dy"],
    sd_dog = json["dog"]["sd"],
    sd_bun = json["bun"]["sd"],
    sd_cond = json["condiment"]["sd"],
    ny_dog = json["dog"]["ny"],
    ny_bun = json["bun"]["ny"],
    ny_cond = json["condiment"]["ny"];


const CreateForm = function(array, select){
    for( var i = 0; i < array.length; i++) {
      var option = document.createElement("option");
      option.value = array[i];
      option.text = array[i];
      select.appendChild(option);
    }
  }

  const clearForm = function(){
    dog.options.length = 0;
    bun.options.length = 0;
    cond.options.length = 0;
  }

  const radFunc = function() {
    if ( btn1.checked ) {
        clearForm();
        CreateForm(dy_dog, dog);
        CreateForm(dy_bun, bun);
        CreateForm(dy_cond, cond);
    } else if ( btn2.checked ){ 
        clearForm();
        CreateForm(sd_dog, dog);
        CreateForm(sd_bun, bun);
        CreateForm(sd_cond, cond);
    } else { 
        clearForm();
        CreateForm(ny_dog, dog);
        CreateForm(ny_bun, bun);
        CreateForm(ny_cond, cond);
    } 
  }

  export const radioBtns = function() {
    let rad = document.querySelectorAll("input[type='radio']");
    rad.forEach(function(e) {
      e.addEventListener('change', radFunc);
    })
  }

  
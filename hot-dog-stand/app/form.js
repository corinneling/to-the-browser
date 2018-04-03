let json = require('./dog.json');

let dog = document.getElementById('frank_option'),
    bun = document.getElementById('bun_option'),
    cond = document.getElementById('condiments_option'),
    btn1 = document.getElementById("DY"),
    btn2 = document.getElementById("SD");


const CreateForm = function(array, select){
      for( var i = 0; i < array.length; i++ ) {
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
        CreateForm(json["dog"]["dy"], dog);
        CreateForm(json["bun"]["dy"], bun);
        CreateForm(json["condiment"]["dy"], cond);
    } else if ( btn2.checked ){ 
        clearForm();
        CreateForm(json["dog"]["sd"], dog);
        CreateForm(json["bun"]["sd"], bun);
        CreateForm(json["condiment"]["sd"], cond);
    } else { 
        clearForm();
        CreateForm(json["dog"]["ny"], dog);
        CreateForm(json["bun"]["ny"], bun);
        CreateForm(json["condiment"]["ny"], cond);
    } 
  }

  export const radioBtns = function() {
    let rad = document.querySelectorAll("input[type='radio']");
    rad.forEach(function(e) {
      e.addEventListener('change', radFunc);
    })
  }

  
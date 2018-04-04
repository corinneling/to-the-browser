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
        CreateForm(json["dy"]["dog"], dog);
        CreateForm(json["dy"]["bun"], bun);
        CreateForm(json["dy"]["cond"], cond);
    } else if ( btn2.checked ){ 
        clearForm();
        CreateForm(json["sd"]["dog"], dog);
        CreateForm(json["sd"]["bun"], bun);
        CreateForm(json["sd"]["cond"], cond);
    } else { 
        clearForm();
        CreateForm(json["ny"]["dog"], dog);
        CreateForm(json["ny"]["bun"], bun);
        CreateForm(json["ny"]["cond"], cond);
    } 
  }

  export const createOptions = function() {
    let rad = document.querySelectorAll("input[type='radio']");
    rad.forEach(function(e) {
      e.addEventListener('change', radFunc);
    })
  }

  
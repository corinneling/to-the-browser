
export const CreateForm = function(array, select){
    for( var i = 0; i < array.length; i++) {
      var option = document.createElement("option");
      option.value = array[i];
      option.text = array[i];
      select.appendChild(option);
    }
  }


  
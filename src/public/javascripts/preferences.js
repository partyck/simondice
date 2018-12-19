function removeFood() {
  var select = document.getElementById("foodUser");
  //var options=document.getElementsByTagName("option");
  console.log(select.value);
}
function categorySelected() {
  var idCategory = document.getElementById("category").value;
  var preferenceCombobox = document.getElementById("preference");
  preferenceCombobox.disabled = false;
  preferenceCombobox.innerHTML = '<option value="">Escoge una Preferencia</option>';
  var localObj = JSON.parse($("#myLocalDataObj").val());
  localObj.forEach(preference => {
    if(preference.idCategory === idCategory){
      var option = document.createElement('option');
      option.value = preference._id;
      option.text = preference.name;
      careerCombobox.add(option);
    }
  });
}

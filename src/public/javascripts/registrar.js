function facultySelected() {
  var idFaculty = document.getElementById("faculty").value;
  console.log(idFaculty);
  var careerCombobox = document.getElementById("career");
  careerCombobox.disabled = false;
  careerCombobox.innerHTML = '<option value="">Escoge una Carrera</option>';
  // var careers = document.getElementById('carreras1').value;
  // console.log(careers);
  var localObj = JSON.parse($("#myLocalDataObj").val());
  localObj.forEach(career => {
    console.log(career.idFaculty);
    console.log(idFaculty);
    if(career.idFaculty === idFaculty){
      var option = document.createElement('option');
      option.value = career._id;
      option.text = career.name;
      careerCombobox.add(option);
    }
  });
}

// $.get("/getvar", function(data){
//   var careers = data.careers;
//   console.log(careers);
// });
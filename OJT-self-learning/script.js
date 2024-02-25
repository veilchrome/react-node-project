// Validasi apakah user menginput value
function validateForm() {
  var inputs = document.querySelectorAll("input[required]");
  var isValid = true;

  inputs.forEach(function (input) {
    if (input.value.trim() === "") {
      isValid = false;
      alert("Please fill in all required fields.");
    }
  });

  return isValid;
}

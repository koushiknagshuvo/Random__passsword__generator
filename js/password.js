function getpassword() {
  var chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  var passwordlenth = 16;
  var password = '';
  for (var i = 0; i < passwordlenth; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById('password').value = password;
}

const reloadtButton = document.querySelector('#reload');
// Reload everything:
function reload() {
  reload = location.reload();
}
// Event listeners for reload
reloadButton.addEventListener('click', reload, true);

$(function() {

  var age = parseInt(prompt('What is your age?'));
  alert(age);

  if(age<17){
    $('#under-age').show()
  }else {
    $('#of-age').show()
  }

});

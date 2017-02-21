// alert qui demande bien des nombres décimaux
alert('Merci de rentrer un chiffre décimal pour chaque champs');

//fonction qui rend le reste de la division des deux données en rendant au préalable le premier nombre en entier
function validate(){
  var first_number = document.getElementById('premier_nombre').value;
  var second_number = document.getElementById('deuxieme_nombre').value;
  if (isNaN(first_number) == true || isNaN(second_number) == true) {
    alert('Attention vous essayez de rentrer autre chose qu\'un nombre !')
    // Vérifie que la value donnée dans l'input est bien un number
  } else if (first_number == 0 || second_number == 0) {
    alert('Attention un zéro a été saisi !')
    // Vérifie qu'il n'y a pas de division par zéro
  } else {
    var Whole_number = parseInt(first_number, 10);
    alert('Voici le reste de la division des deux nombres en supprimant la valeur décimale du premier: '+Whole_number % second_number);}
    // Affiche mon résultat après avoir transformé ma première variable en nombre entier
  }

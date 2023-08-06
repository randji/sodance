document.getElementById('madiv').addEventListener('click', function() {
    var maison = document.getElementById('maison');
    var adresse = document.getElementById('adress');
  
    // Rotation de l'icône
    maison.classList.add('rotate');
  
    // Après que l'animation de rotation soit terminée, cachez l'icône et affichez le texte
    setTimeout(function() {
      maison.style.display = 'none';
      adresse.classList.add('show');
    }, 2000); // 1000 ms = 1s, qui est la durée de l'animation de rotation
  });
  
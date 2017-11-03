// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son image
var listeLiens = [
    {
        titre: "Menu burger animé javascript",
        url: "images/work/menu_burger/index.html",
        image: "images/work/menu_burger280.png"
    }
];


/* TODO : compléter ce fichier pour ajouter les liens à la page web */

//on parcours le tableau et on récupère chaque objet dans 'lien'
/*listeLiens.each(function(lien))
{
            $('#work-perso').append($('<li><h2></h2></li>'))
                }*/

listeLiens.forEach(function(lien) {
    //création des éléments
    var liElt = document.createElement('li');
    var h2Elt = document.createElement('h2');
    h2Elt.textContent = lien.titre;
    var aElt = document.createElement("a");
    aElt.href = lien.url;
    
    //création d'une image
    var img = new Image();
    img.onload = function() {
    aElt.appendChild(img);
    };
    img.src = lien.image;
    
    //ajout des éléments
    liElt.appendChild(h2Elt);
    liElt.appendChild(aElt);
    document.getElementById('work-perso').insertBefore(liElt, document.getElementById('respdesign'));
    

    //ajout des éléments
    /*spanElt.appendChild(strong);
    spanElt.appendChild(aElt);
    divElt.appendChild(spanElt);
    divElt.appendChild(brElt);
    divElt.appendChild(spanAuteurElt);
    document.getElementById('contenu').appendChild(divElt);*/
});

    /* Flêche pour le scroll */
    $(function() {
        $('#main-menu li a').bind('click',function(event){
            var $anchor = $(this);

            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500,'easeInOutExpo');

            event.preventDefault();
        });
    });

    /* Effet au survol photo */
     $(document).ready(function(){
    $("a[rel^='prettyPhoto']").prettyPhoto({social_tools:false, deeplinking: false});
    });

    /* Wow settings */
    wow = new WOW(
          {
            animateClass: 'animated',
            offset:       200,
            callback:     function(box) {
              console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
            }
          }
        );
    wow.init();
    document.getElementById('moar').onclick = function() {
      var section = document.createElement('section');
      section.className = 'section--purple wow fadeInDown';
      this.parentNode.insertBefore(section, this);
    };

var article1 = new Article('Pantalon', 40)

document.getElementById("produit").innerHTML = article1.produit
document.getElementById("prixHT").innerHTML = article1.prix + " €"
document.getElementById("prixTTC").innerHTML = article1.calculerPrix() + " €"



function afficher(){
    let aff = document.getElementById("produitSaisi").value
    alert(aff)
    document.getElementById("afficher").innerHTML = aff
}

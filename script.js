var article1 = new Article('Pantalon', 40)

document.getElementById("produit").innerHTML = article1.produit
document.getElementById("prixHT").innerHTML = article1.prix + " €"
document.getElementById("prixTTC").innerHTML = article1.calculerPrix() + " €"

// console.log("article 1 : " + article1.produit)
// console.log("article 1 : " + article1.prix)
// console.log("prix TTC :" + article1.calculerPrix())
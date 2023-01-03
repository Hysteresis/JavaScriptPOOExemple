class Article {

    constructor(produit, prix) {
        this.produit = produit;
        this.prix = prix;
    }

    calculerPrix() {
        const TVA = 20;
        return this.prix * TVA/100 + this.prix
    }

}

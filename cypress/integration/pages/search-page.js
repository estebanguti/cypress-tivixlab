import BasePage from "./base-page";

class SearchPage extends BasePage {

    constructor() {
        super('#search_form');
    }

    selectCountry(country) {
        cy.get('#country').select(country);
    }

    selectCity(city) {
        cy.get('#city').select(city);
    }

    fillModel(model) {
        cy.get('#model').type(model);
    }

    fillPickupDate(pickupDate) {
        cy.get('#pickup').type(pickupDate);
    }

    fillDropOffDate(dropOffDate) {
        cy.get('#dropoff').type(dropOffDate);
    }

    getResults() {
        cy.get('#search-results', { timeout: 3000 }).should('be.visible');
        return cy.get('#search-results tbody tr');
    }

    getResultCount() {
        return this.getResults().then((elements) => elements.length);
    }

    selectCar(numberCar) {
        this.getResults().then((elements) => {
            let car = elements[numberCar-1];
            car.querySelector('a').click();
        });
    }

}

export default SearchPage;
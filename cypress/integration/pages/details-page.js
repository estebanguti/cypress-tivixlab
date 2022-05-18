import BasePage from "./base-page";

class DetailsPage extends BasePage {

    constructor() {
        super('#content .card');
    }

    getCarTitle() {
        return cy.get('.card-header').invoke('text').then((text) => {
            return text.trim();
        });
    }

    getCompany() {
        return cy.get('.card-title').invoke('text').then((text) => {
            return text.trim();
        });
    }

    getPrice() {
        return cy.get('.card-text').then((elements) => {
            return elements[0].textContent;
        });
    }

    getLocation() {
        return cy.get('.card-text').then((elements) => {
            return elements[1].textContent;
        });
    }

    getLicense() {
        return cy.get('.card-text').then((elements) => {
            return elements[2].textContent;
        });
    }

    getPickupDate() {
        return cy.get('.row h6').then((elements) => {
            return elements[0].textContent;
        });
    }

    getDropOffDate() {
        return cy.get('.row h6').then((elements) => {
            return elements[1].textContent;
        });
    }

}

export default DetailsPage;
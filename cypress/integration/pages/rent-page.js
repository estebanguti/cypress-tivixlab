import BasePage from "./base-page"

class RentPage extends BasePage {
    
    constructor() {
        super('#rent_form');
    }

    fillName(name) {
        cy.get('#name').type(name);
    }

    fillLastName(lastName) {
        cy.get('#last_name').type(lastName);
    }

    fillCard(card) {
        cy.get('#card_number').type(card);
    }

    fillEmail(email) {
        cy.get('#email').type(email);
    }

}

export default RentPage;
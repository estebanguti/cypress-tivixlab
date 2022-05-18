import { When} from "cypress-cucumber-preprocessor/steps";
import RentPage from "../pages/rent-page";

const rentPage = new RentPage();

When('I fill and submit the rent form:', (datatable) => {
    rentPage.waitUntilPageIsLoaded();
    datatable.hashes().forEach((element) => {
        rentPage.fillName(element.name);
        rentPage.fillLastName(element.lastName);
        rentPage.fillCard(element.card);
        rentPage.fillEmail(element.email);
    });
    cy.intercept('http://qalab.pl.tivixlabs.com/rent/11').as('postRentCar');
    rentPage.submit();
})

Then('The API status code should be {int}', (statusCode) => {
    cy.wait('@postRentCar').its('response.statusCode').should('eq', statusCode);
})
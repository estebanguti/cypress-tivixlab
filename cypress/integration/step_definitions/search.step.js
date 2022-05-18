import { Given , When, Then} from "cypress-cucumber-preprocessor/steps";
import SearchPage from "../pages/search-page";

const searchPage = new SearchPage();


Given('I go to search page', () => {
    searchPage.goToPage(Cypress.env('url'));
    searchPage.waitUntilPageIsLoaded();
})

When('I search the rent car with the next values:', (datatable) => {
    datatable.hashes().forEach((element) => {
        searchPage.selectCountry(element.country);
        searchPage.selectCity(element.city);
        searchPage.fillModel(element.model);
        searchPage.fillPickupDate(element.pickupDate);
        searchPage.fillDropOffDate(element.dropOffDate);
        searchPage.submit();
    });
})

When('I select the car {int}', (numberCar) => {
    searchPage.selectCar(numberCar);
})

Then('I should see the results displayed', () => {
    searchPage.getResultCount().should('be.greaterThan', 0);
})
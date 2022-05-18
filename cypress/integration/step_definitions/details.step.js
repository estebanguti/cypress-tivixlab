import { When, Then} from "cypress-cucumber-preprocessor/steps";
import DetailsPage from "../pages/details-page";

const detailsPage = new DetailsPage();

When('I click on rent', () => {
    detailsPage.submit();
})

Then('The user should see car details', (datatable) => {
    detailsPage.waitUntilPageIsLoaded()
    datatable.hashes().forEach((element) => {
        detailsPage.getCarTitle().should('eq', element.title);
        detailsPage.getCompany().should('contain',element.company);
        detailsPage.getLocation().should('contain',element.location);
        detailsPage.getPrice().should('contain',element.price);
        detailsPage.getLicense().should('contain',element.license);
        detailsPage.getPickupDate().should('contain',element.pickupDate);
        detailsPage.getDropOffDate().should('contain',element.dropOffDate);
    });
})
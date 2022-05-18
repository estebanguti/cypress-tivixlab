
class BasePage {

    constructor(pageLocator) {
        this.pageLocator = pageLocator;
    }

    goToPage(url) {
        cy.visit(url);
    }

    waitUntilPageIsLoaded() {
        cy.get(this.pageLocator, { timeout: 3000 }).should('be.visible');
    }

    submit() {
        cy.get('.btn-primary').click();
    }

}

export default BasePage;
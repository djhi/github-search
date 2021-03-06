/* global cy */
describe('Search', () => {
	it('Allows to search for users', () => {
		cy.visit('/');
		cy.findByLabelText('Search for users').type('djhi{enter}');
		cy.findAllByRole('listitem').should('have.length', 10);
		cy.findByText('Load more').click();
		cy.findAllByRole('listitem').should('have.length', 20);
	});
});

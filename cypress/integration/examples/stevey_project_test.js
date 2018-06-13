it('Steve Cypress - Test Condo Selection Changes Choose Btn', () => {
    cy.visit('https://pinetreeclone.stevecodes.com')
    cy.get('button')
        .contains('CHOOSE')
        .click()
        cy.get('section')
            .contains('Ortensia Love')
            .click()
            cy.get('button')
                .contains('Ortensia Love')
})
it('Steve Cypress - Test AM Shows Bougie', () => {
    cy.visit('https://pinetreeclone.stevecodes.com')
    cy.get('button')
        .contains('AM')
        .click()
        cy.get('h1')
            .contains('Bougie')
})
it('Steve Cypress - Test EU Shows Boutique', () => {
    cy.visit('https://pinetreeclone.stevecodes.com')
    cy.get('button')
    .contains('AM')
    .click()
        cy.get('button')
            .contains('EU')
            .click()
            cy.get('h1')
                .contains('Boutique')
})
it('Steve Cypress - Current Date = Arrival Date', () => {
    let dayNow = new Date()
    let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
    cy.visit('https://pinetreeclone.stevecodes.com')
    cy.get('.arrival-date .day')
        .contains(`${dayNow.getDay()}`)
    cy.get('.arrival-date .month')
        .contains(months[dayNow.getMonth()])
})
it('Steve Cypress - Check for Disabled Span on Inquire Btn', () => {
    cy.visit('https://pinetreeclone.stevecodes.com')
    cy.get('.inquire-now').siblings('.disabled-display').children('.disabled-span')
        .contains('CHOOSE')
    cy.get('button.choose-apt')
        .click()
    cy.get('section')
        .contains('Ortensia Love')
        .click()
    cy.get('FIRST CHOOSE').should('not.exist')
})
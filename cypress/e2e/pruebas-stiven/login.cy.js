describe('template spec', () => {
    it('pruebalogin', function () {
        cy.visit('https://demo.dolibarr.org/public/demo/index.php')
        cy.get('#a1profmanufacture img.demothumb').click();
        cy.get('[name="username"]').clear();
        cy.get('[name="username"]').type('demo');
        cy.get('[name="password"]').clear();
        cy.get('[name="password"]').type('demo');
        cy.get('#login-submit-wrapper input.button').click();
        cy.get('#id-left a[title="Mi panel de control"]').should('have.text', 'Mi panel de control');

    });

    it('pruebalogin-Uservacio', function () {
        cy.visit('https://demo.dolibarr.org/public/demo/index.php')
        cy.get('#a1profmanufacture img.demothumb').click();
        cy.get('[name="username"]').clear();
        cy.get('[name="username"]').type('');
        cy.get('[name="password"]').clear();
        cy.get('[name="password"]').type('demo');
        cy.get('#login-submit-wrapper input.button').click();
        cy.get('#id-left a[title="Mi panel de control"]').should('have.text', 'Mi panel de control');
        cy.contains('Identificadores de usuario o contraseña incorrectos').should('be.visible')

    });

    it('pruebalogin-userincorrecto', function () {
        cy.visit('https://demo.dolibarr.org/public/demo/index.php')
        cy.get('#a1profmanufacture img.demothumb').click();
        cy.get('[name="username"]').clear();
        cy.get('[name="username"]').type('prueba');
        cy.get('[name="password"]').clear();
        cy.get('[name="password"]').type('demo');
        cy.get('#login-submit-wrapper input.button').click();
        cy.get('#id-left a[title="Mi panel de control"]').should('have.text', 'Mi panel de control');
        cy.contains('Identificadores de usuario o contraseña incorrectos').should('be.visible')

    });


    it('pruebalogin-passwordvacia', function () {
        cy.visit('https://demo.dolibarr.org/public/demo/index.php')
        cy.get('#a1profmanufacture img.demothumb').click();
        cy.get('[name="username"]').clear();
        cy.get('[name="username"]').type('demo');
        cy.get('[name="password"]').clear();
        cy.get('[name="password"]').type('');
        cy.get('#login-submit-wrapper input.button').click();
        cy.get('#id-left a[title="Mi panel de control"]').should('have.text', 'Mi panel de control');

    });


    it('pruebalogin-incorrectpassword', function () {
        cy.visit('https://demo.dolibarr.org/public/demo/index.php')
        cy.get('#a1profmanufacture img.demothumb').click();
        cy.get('[name="username"]').clear();
        cy.get('[name="username"]').type('demo');
        cy.get('[name="password"]').clear();
        cy.get('[name="password"]').type('demodemo');
        cy.get('#login-submit-wrapper input.button').click();
        cy.get('#id-left a[title="Mi panel de control"]').should('have.text', 'Mi panel de control');

    });


});


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('loginToDolibarr', () => {
    cy.session('dolibarr-demo', () => {
        cy.visit('https://demo.dolibarr.org/public/demo/index.php');

        // Esperar a que la página cargue completamente
        cy.get('body', { timeout: 10000 }).should('be.visible');

        // Hacer click en el thumbnail de demo
        cy.get('#a1profmanufacture img.demothumb', { timeout: 10000 })
            .should('be.visible')
            .click();

        // Esperar a que el formulario de login esté visible
        cy.get('#login_line1', { timeout: 10000 }).should('be.visible').click();

        // Llenar contraseña
        cy.get('[name="password"]', { timeout: 10000 })
            .should('be.visible')
            .clear()
            .type('demo', { delay: 100 });

        // Hacer login
        cy.get('#login-submit-wrapper input.button', { timeout: 10000 })
            .should('be.visible')
            .click();

        // Verificar que el login fue exitoso - esperar a redirección
        cy.url({ timeout: 15000 }).should('include', '/index.php');
        cy.get('body').should('not.contain', 'Login');
    });
});

Cypress.Commands.add('navigateToContactForm', () => {
    // Navegar al módulo de empresas
    cy.get('#mainmenutd_companies div.mainmenu', { timeout: 10000 })
        .should('be.visible')
        .click();

    // Click en el menú izquierdo
    cy.get('#id-left div.blockvmenuimpair', { timeout: 10000 })
        .should('be.visible')
        .click();

    // Click en nuevo contacto
    cy.get('#id-left a[title="Nuevo Contacto/Dirección"]', { timeout: 10000 })
        .should('be.visible')
        .click();

    // Esperar a que el formulario cargue
    cy.get('[name="lastname"]', { timeout: 10000 }).should('be.visible');
});

Cypress.Commands.add('fillContactForm', (overrides = {}) => {
    const defaults = {
        lastname: 'Gómez',
        firstname: 'Maria Fernanda',
        poste: 'Gerente',
        address: 'Calle 58 #44-89',
        phone_pro: '888855544',
        phone_perso: '45556884',
        phone_mobile: '16556889',
        fax: '5555',
        email: 'usuario@correo.com'
    };

    const fields = { ...defaults, ...overrides };

    // Llenar campos básicos con esperas explícitas
    cy.get('[name="lastname"]', { timeout: 10000 })
        .should('be.visible')
        .clear()
        .type(fields.lastname, { delay: 50 });

    cy.get('[name="firstname"]', { timeout: 10000 })
        .should('be.visible')
        .clear()
        .type(fields.firstname, { delay: 50 });

    // Seleccionar empresa con esperas para el dropdown
    cy.get('#select2-socid-container', { timeout: 10000 })
        .should('be.visible')
        .click();

    cy.get('.select2-search__field', { timeout: 10000 })
        .should('be.visible')
        .type('. Emma Simon - MediLife', { delay: 100 });

    cy.get('.select2-results__option--highlighted', { timeout: 10000 })
        .should('be.visible')
        .click();

    // Pequeña pausa entre interacciones
    cy.wait(500);

    // Seleccionar tratamiento
    cy.get('#select2-civility_code-container', { timeout: 10000 })
        .should('be.visible')
        .click();

    cy.get('.select2-search__field', { timeout: 10000 })
        .should('be.visible')
        .type('señora', { delay: 100 });

    cy.get('.select2-results__option--highlighted', { timeout: 10000 })
        .should('be.visible')
        .click();

    cy.wait(500);

    // Llenar puesto
    cy.get('[name="poste"]', { timeout: 10000 })
        .should('be.visible')
        .click();

    // Esperar a que se active el campo
    cy.get('[name="poste"]:focus', { timeout: 5000 }).should('exist');
    cy.get('[name="poste"]').clear().type(fields.poste, { delay: 50 });

    // Llenar dirección
    cy.get('[name="address"]', { timeout: 10000 })
        .should('be.visible')
        .clear()
        .type(fields.address, { delay: 50 });

    // Llenar teléfonos
    cy.get('[name="phone_pro"]', { timeout: 10000 })
        .should('be.visible')
        .clear()
        .type(fields.phone_pro, { delay: 50 });

    cy.get('[name="phone_perso"]', { timeout: 10000 })
        .should('be.visible')
        .clear()
        .type(fields.phone_perso, { delay: 50 });

    cy.get('[name="phone_mobile"]', { timeout: 10000 })
        .should('be.visible')
        .clear()
        .type(fields.phone_mobile, { delay: 50 });

    cy.get('[name="fax"]', { timeout: 10000 })
        .should('be.visible')
        .clear()
        .type(fields.fax, { delay: 50 });

    // Llenar email
    cy.get('[name="email"]', { timeout: 10000 })
        .should('be.visible')
        .clear()
        .type(fields.email, { delay: 50 });

    // Seleccionar idioma
    cy.get('#select2-default_lang-container', { timeout: 10000 })
        .should('be.visible')
        .click();

    cy.get('.select2-search__field', { timeout: 10000 })
        .should('be.visible')
        .type('Español (Colombia)', { delay: 100 });

    cy.get('.select2-results__option--highlighted', { timeout: 10000 })
        .should('be.visible')
        .click();

    // Pequeña pausa final antes de enviar
    cy.wait(1000);
});
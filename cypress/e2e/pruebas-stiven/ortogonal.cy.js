import { faker } from '@faker-js/faker';

/**
 * ═══════════════════════════════════════════════════════════════════════
 * PRUEBAS CON ARREGLOS ORTOGONALES - FORMULARIO NUEVO ALMACÉN
 * ═══════════════════════════════════════════════════════════════════════
 */

describe('Arreglos Ortogonales L9 - Nuevo Almacén Dolibarr', () => {

    // ═══════════════════════════════════════════════════════════════════════
    // FUNCIONES AUXILIARES
    // ═══════════════════════════════════════════════════════════════════════

    const login = () => {
        cy.visit('https://demo.dolibarr.org/public/demo/');
        cy.get('#a1profmanufacture img.demothumb').click();
        cy.get('[name="password"]').clear().type('demo');
        cy.get('#login-submit-wrapper input.button').click();
        cy.get('#mainmenutd_products div.mainmenu').click();
        cy.get('#id-left a[title="Nuevo almacén"]').click();
    };

    /**
     * Select2 robusto: selecciona la PRIMERA opción válida
     * (no depende de textos cambiantes del entorno demo)
     */
    const selectFirstOptionFromSelect2 = (containerSelector) => {
        cy.get(containerSelector)
            .should('be.visible')
            .click();

        cy.get('.select2-results__option')
            .should('be.visible')
            .not('.select2-results__option--disabled')
            .first()
            .click();
    };

    const fillCommonFields = () => {

        // Añadir en (almacén padre)
        selectFirstOptionFromSelect2('#select2-fk_parent-container');

        // Proyecto
        selectFirstOptionFromSelect2('#select2-projectid-container');

        // Dirección
        cy.get('#dragDropAreaTabBar [name="address"]')
            .clear()
            .type('cra45#30-20');

        // Código postal
        cy.get('[name="zipcode"]')
            .clear()
            .type('70068');

        // País
        selectFirstOptionFromSelect2('#select2-selectcountry_id-container');

        // Fax
        cy.get('#dragDropAreaTabBar [name="fax"]')
            .clear()
            .type('031456789');
    };

    // ═══════════════════════════════════════════════════════════════════════
    // TEST 1
    // ═══════════════════════════════════════════════════════════════════════
    it('OA_CP01: Caso óptimo', () => {
        login();

        cy.get('[name="libelle"]').type(`ALM-OA-${faker.number.int(9999)}`);
        cy.get('[name="lieu"]').type('Bodega Ortogonal Norte');

        fillCommonFields();

        cy.get('[name="town"]').type('Cali');
        cy.get('[name="phone"]').type('3004567890');

        cy.get('[name="add"]').click();
        cy.get('div.jnotify-message').should('be.visible');
    });

    // ═══════════════════════════════════════════════════════════════════════
    // TEST 2
    // ═══════════════════════════════════════════════════════════════════════
    it('OA_CP02: Nombre vacío + Tel inválido', () => {
        login();

        cy.get('[name="libelle"]').type(`ALM-OA-${faker.number.int(9999)}`);

        fillCommonFields();

        cy.get('[name="town"]').type('Bogotá');
        cy.get('[name="phone"]').type('30045678');

        cy.get('[name="add"]').click();
        cy.get('div.jnotify-message').should('be.visible');
    });

    // ═══════════════════════════════════════════════════════════════════════
    // TEST 3
    // ═══════════════════════════════════════════════════════════════════════
    it('OA_CP03: Nombre numérico + Tel letras', () => {
        login();

        cy.get('[name="libelle"]').type(`ALM-OA-${faker.number.int(9999)}`);
        cy.get('[name="lieu"]').type('123456');

        fillCommonFields();

        cy.get('[name="phone"]').type('ABC123');

        cy.get('[name="add"]').click();
        cy.get('div.jnotify-message').should('be.visible');
    });

    // ═══════════════════════════════════════════════════════════════════════
    // TEST 4
    // ═══════════════════════════════════════════════════════════════════════
    it('OA_CP04: Ref vacía + Tel largo', () => {
        login();

        cy.get('[name="lieu"]').type('Bodega Central');

        fillCommonFields();

        cy.get('[name="phone"]').type('30045678901234');

        cy.get('[name="add"]').click();
        cy.get('div.jnotify-message').should('be.visible');
    });

    // ═══════════════════════════════════════════════════════════════════════
    // TEST 5
    // ═══════════════════════════════════════════════════════════════════════
    it('OA_CP05: Ref y Nombre vacíos', () => {
        login();

        fillCommonFields();

        cy.get('[name="town"]').type('Medellín');
        cy.get('[name="phone"]').type('TELEFONO');

        cy.get('[name="add"]').click();
        cy.get('div.jnotify-message').should('be.visible');
    });

    // ═══════════════════════════════════════════════════════════════════════
    // TEST 6
    // ═══════════════════════════════════════════════════════════════════════
    it('OA_CP06: Ref vacía + Nombre numérico', () => {
        login();

        cy.get('[name="lieu"]').type('999888');

        fillCommonFields();

        cy.get('[name="town"]').type('Barranquilla');
        cy.get('[name="phone"]').type('3101234567');

        cy.get('[name="add"]').click();
        cy.get('div.jnotify-message').should('be.visible');
    });

    // ═══════════════════════════════════════════════════════════════════════
    // TEST 7
    // ═══════════════════════════════════════════════════════════════════════
    it('OA_CP07: XSS + Tel letras', () => {
        login();

        cy.get('[name="libelle"]').type('<script>alert(1)</script>');
        cy.get('[name="lieu"]').type('Bodega Segura');

        fillCommonFields();

        cy.get('[name="town"]').type('Cartagena');
        cy.get('[name="phone"]').type('NoEsNumero');

        cy.get('[name="add"]').click();
        cy.get('div.jnotify-message').should('be.visible');
    });

    // ═══════════════════════════════════════════════════════════════════════
    // TEST 8
    // ═══════════════════════════════════════════════════════════════════════
    it('OA_CP08: Ref símbolos + Nombre vacío', () => {
        login();

        cy.get('[name="libelle"]').type('@@##$$%%');

        fillCommonFields();

        cy.get('[name="phone"]').type('3201234567');

        cy.get('[name="add"]').click();
        cy.get('div.jnotify-message').should('be.visible');
    });

    // ═══════════════════════════════════════════════════════════════════════
    // TEST 9
    // ═══════════════════════════════════════════════════════════════════════
    it('OA_CP09: Ref larga + Tel corto', () => {
        login();

        cy.get('[name="libelle"]').type('A'.repeat(200));
        cy.get('[name="lieu"]').type('111222');

        fillCommonFields();

        cy.get('[name="town"]').type('Santa Marta');
        cy.get('[name="phone"]').type('123');

        cy.get('[name="add"]').click();
        cy.get('div.jnotify-message').should('be.visible');
    });

    // ═══════════════════════════════════════════════════════════════════════
    // TEST 10 - SQL Injection
    // ═══════════════════════════════════════════════════════════════════════
    it('OA_CP10: SQL Injection', () => {
        login();

        cy.get('[name="libelle"]').type(`ALM-${faker.number.int(9999)}`);
        cy.get('[name="lieu"]').type('Bodega SQL');

        fillCommonFields();

        cy.get('[name="town"]').type("Cali'; DROP TABLE entrepot;--");
        cy.get('[name="phone"]').type('3004567890');

        cy.get('[name="add"]').click();
        cy.get('div.jnotify-message').should('be.visible');
    });

    // ═══════════════════════════════════════════════════════════════════════
    // TEST 11 - Unicode
    // ═══════════════════════════════════════════════════════════════════════
    it('OA_CP11: Unicode', () => {
        login();

        cy.get('[name="libelle"]').type(`ALM-${faker.number.int(9999)}`);
        cy.get('[name="lieu"]').type('Bodega Internacional');

        fillCommonFields();

        cy.get('[name="town"]').type('北京 Tokyo 🏙️');
        cy.get('[name="phone"]').type('3004567890');

        cy.get('[name="add"]').click();
        cy.get('div.jnotify-message').should('be.visible');
    });

});

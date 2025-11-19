import { faker } from '@faker-js/faker';

describe('template spec', () => {
  it('referencia', function () {
    cy.visit('https://demo.dolibarr.org/public/demo/')
    cy.get('#a1profmanufacture img.demothumb').click();
    cy.get('[name="password"]').click();
    cy.get('[name="password"]').click()
    cy.get('[name="password"]').clear();
    cy.get('[name="password"]').type('demo');
    cy.get('#login-submit-wrapper input.button').click();
    cy.get('#mainmenutd_products div.mainmenu').click();
    cy.get('#id-left a[title="Nuevo almacén"]').click();
    cy.get('#dragDropAreaTabBar [name="libelle"]').type(faker.number.hex({ min: 0, max: 65535 }));
    cy.get('#select2-fk_parent-container').click();
    cy.get('#dragDropAreaTabBar [name="lieu"]').click();
    cy.get('#dragDropAreaTabBar [name="lieu"]').type('Bodega norte');
    cy.get('#select2-fk_parent-container').click();
    cy.get('#select2-projectid-container').click({ force: true });
    cy.get('#dragDropAreaTabBar tr:nth-child(6) td:nth-child(2)').click();
    cy.get('#dragDropAreaTabBar [name="address"]').click();
    cy.get('#dragDropAreaTabBar [name="address"]').type('cra45#30-20');
    cy.get('#select2-selectcountry_id-container').click();
    cy.get('#dragDropAreaTabBar tr:nth-child(8) td:nth-child(1)').click();
    cy.get('#dragDropAreaTabBar tr:nth-child(7) td:nth-child(1)').click();
    cy.get('[name="zipcode"]').click();
    cy.get('[name="zipcode"]').type('70068');
    cy.get('[name="town"]').click();
    cy.get('[name="town"]').type('Cali');
    cy.get('#select2-selectcountry_id-container').click();
    cy.get('#dragDropAreaTabBar [name="phone"]').click();
    cy.get('#dragDropAreaTabBar [name="fax"]').click();
    cy.get('#dragDropAreaTabBar [name="phone"]').click();
    cy.get('#dragDropAreaTabBar [name="phone"]').type('3004567890');
    cy.get('#dragDropAreaTabBar [name="fax"]').click();
    cy.get('#dragDropAreaTabBar [name="fax"]').type('031456789');
    cy.get('#dragDropAreaTabBar ul.select2-selection__rendered').click();
    cy.get('#id-right [name="add"]').click();
    cy.get('div.jnotify-message div').should('be.visible');

  });
  it('clase_invalida_ref("")', function () {
    cy.visit('https://demo.dolibarr.org/public/demo/')
    cy.get('#a1profmanufacture img.demothumb').click();
    cy.get('[name="password"]').click();
    cy.get('[name="password"]').clear();
    cy.get('[name="password"]').type('demo');
    cy.get('#login-submit-wrapper input.button').click();
    cy.get('#mainmenutd_products div.mainmenu').click();
    cy.get('#id-left a[title="Nuevo almacén"]').click();
    cy.get('#dragDropAreaTabBar [name="libelle"]').type(faker.number.hex({ min: 0, max: 65535 }));
    cy.get('#select2-fk_parent-container').click();
    cy.get('#dragDropAreaTabBar [name="lieu"]').click();
    cy.get('#dragDropAreaTabBar [name="lieu"]').type('Bodega norte');
    cy.get('#select2-fk_parent-container').click();
    cy.get('#select2-projectid-container').click({ force: true });
    cy.get('#dragDropAreaTabBar tr:nth-child(6) td:nth-child(2)').click();
    cy.get('#dragDropAreaTabBar [name="address"]').click();
    cy.get('#dragDropAreaTabBar [name="address"]').type('cra45#30-20');
    cy.get('#select2-selectcountry_id-container').click();
    cy.get('#dragDropAreaTabBar tr:nth-child(8) td:nth-child(1)').click();
    cy.get('#dragDropAreaTabBar tr:nth-child(7) td:nth-child(1)').click();
    cy.get('[name="zipcode"]').click();
    cy.get('[name="zipcode"]').type('70068');
    cy.get('[name="town"]').click();
    cy.get('[name="town"]').type('Cali');
    cy.get('#select2-selectcountry_id-container').click();
    cy.get('#dragDropAreaTabBar [name="phone"]').click();
    cy.get('#dragDropAreaTabBar [name="fax"]').click();
    cy.get('#dragDropAreaTabBar [name="phone"]').click();
    cy.get('#dragDropAreaTabBar [name="phone"]').type('3004567890');
    cy.get('#dragDropAreaTabBar [name="fax"]').click();
    cy.get('#dragDropAreaTabBar [name="fax"]').type('031456789');
    cy.get('#dragDropAreaTabBar ul.select2-selection__rendered').click();
    cy.get('#id-right [name="add"]').click();
    cy.get('div.jnotify-message div').should('be.visible');

    cy.contains('El codigo de referencia del almacén es obligatorio').should('be.visible')



  });
  it('nombre-ubicación', function () {
    cy.visit('https://demo.dolibarr.org/public/demo/')
    cy.get('#a1profmanufacture img.demothumb').click();
    cy.get('[name="password"]').click();
    cy.get('[name="password"]').click()
    cy.get('[name="password"]').clear();
    cy.get('[name="password"]').type('demo');
    cy.get('#login-submit-wrapper input.button').click();
    cy.get('#mainmenutd_products div.mainmenu').click();
    cy.get('#id-left a[title="Nuevo almacén"]').click();
    cy.get('#dragDropAreaTabBar [name="libelle"]').type(faker.number.hex({ min: 0, max: 65535 }));
    cy.get('#select2-fk_parent-container').click();
    cy.get('#dragDropAreaTabBar [name="lieu"]').click();
    cy.get('#dragDropAreaTabBar [name="lieu"]').type('Bodega norte');
    cy.get('#select2-fk_parent-container').click();
    cy.get('#select2-projectid-container').click({ force: true });
    cy.get('#dragDropAreaTabBar tr:nth-child(6) td:nth-child(2)').click();
    cy.get('#dragDropAreaTabBar [name="address"]').click();
    cy.get('#dragDropAreaTabBar [name="address"]').type('cra45#30-20');
    cy.get('#select2-selectcountry_id-container').click();
    cy.get('#dragDropAreaTabBar tr:nth-child(8) td:nth-child(1)').click();
    cy.get('#dragDropAreaTabBar tr:nth-child(7) td:nth-child(1)').click();
    cy.get('[name="zipcode"]').click();
    cy.get('[name="zipcode"]').type('70068');
    cy.get('[name="town"]').click();
    cy.get('[name="town"]').type('Cali');
    cy.get('#select2-selectcountry_id-container').click();
    cy.get('#dragDropAreaTabBar [name="phone"]').click();
    cy.get('#dragDropAreaTabBar [name="fax"]').click();
    cy.get('#dragDropAreaTabBar [name="phone"]').click();
    cy.get('#dragDropAreaTabBar [name="phone"]').type('3004567890');
    cy.get('#dragDropAreaTabBar [name="fax"]').click();
    cy.get('#dragDropAreaTabBar [name="fax"]').type('031456789');
    cy.get('#dragDropAreaTabBar ul.select2-selection__rendered').click();
    cy.get('#id-right [name="add"]').click();
    cy.get('div.jnotify-message div').should('be.visible');

  });

  it('clase-invalida-("")', function () {
    cy.visit('https://demo.dolibarr.org/public/demo/')
    cy.get('#a1profmanufacture img.demothumb').click();
    cy.get('[name="password"]').click();
    cy.get('[name="password"]').click()
    cy.get('[name="password"]').clear();
    cy.get('[name="password"]').type('demo');
    cy.get('#login-submit-wrapper input.button').click();
    cy.get('#mainmenutd_products div.mainmenu').click();
    cy.get('#id-left a[title="Nuevo almacén"]').click();
    cy.get('#dragDropAreaTabBar [name="libelle"]').type(faker.number.hex({ min: 0, max: 65535 }));
    cy.get('#select2-fk_parent-container').click();
    cy.get('#dragDropAreaTabBar [name="lieu"]').click();
    cy.get('#select2-fk_parent-container').click();
    cy.get('#select2-projectid-container').click({ force: true });
    cy.get('#dragDropAreaTabBar tr:nth-child(6) td:nth-child(2)').click();
    cy.get('#dragDropAreaTabBar [name="address"]').click();
    cy.get('#dragDropAreaTabBar [name="address"]').type('cra45#30-20');
    cy.get('#select2-selectcountry_id-container').click();
    cy.get('#dragDropAreaTabBar tr:nth-child(8) td:nth-child(1)').click();
    cy.get('#dragDropAreaTabBar tr:nth-child(7) td:nth-child(1)').click();
    cy.get('[name="zipcode"]').click();
    cy.get('[name="zipcode"]').type('70068');
    cy.get('[name="town"]').click();
    cy.get('[name="town"]').type('Cali');
    cy.get('#select2-selectcountry_id-container').click();
    cy.get('#dragDropAreaTabBar [name="phone"]').click();
    cy.get('#dragDropAreaTabBar [name="fax"]').click();
    cy.get('#dragDropAreaTabBar [name="phone"]').click();
    cy.get('#dragDropAreaTabBar [name="phone"]').type('3004567890');
    cy.get('#dragDropAreaTabBar [name="fax"]').click();
    cy.get('#dragDropAreaTabBar [name="fax"]').type('031456789');
    cy.get('#dragDropAreaTabBar ul.select2-selection__rendered').click();
    cy.get('#id-right [name="add"]').click();
    cy.get('div.jnotify-message div').should('be.visible');
    cy.contains('El campo Nombre corto es obligatorio').should('be.visible')

  });

  it('clase-invalida-espacios', function () {
    cy.visit('https://demo.dolibarr.org/public/demo/')
    cy.get('#a1profmanufacture img.demothumb').click();
    cy.get('[name="password"]').click();
    cy.get('[name="password"]').click()
    cy.get('[name="password"]').clear();
    cy.get('[name="password"]').type('demo');
    cy.get('#login-submit-wrapper input.button').click();
    cy.get('#mainmenutd_products div.mainmenu').click();
    cy.get('#id-left a[title="Nuevo almacén"]').click();
    cy.get('#dragDropAreaTabBar [name="libelle"]').type(faker.number.hex({ min: 0, max: 65535 }));
    cy.get('#select2-fk_parent-container').click();
    cy.get('#dragDropAreaTabBar [name="lieu"]').click();
    cy.get('#dragDropAreaTabBar [name="lieu"]').type('      ');
    cy.get('#select2-fk_parent-container').click();
    cy.get('#select2-projectid-container').click({ force: true });
    cy.get('#dragDropAreaTabBar tr:nth-child(6) td:nth-child(2)').click();
    cy.get('#dragDropAreaTabBar [name="address"]').click();
    cy.get('#dragDropAreaTabBar [name="address"]').type('cra45#30-20');
    cy.get('#select2-selectcountry_id-container').click();
    cy.get('#dragDropAreaTabBar tr:nth-child(8) td:nth-child(1)').click();
    cy.get('#dragDropAreaTabBar tr:nth-child(7) td:nth-child(1)').click();
    cy.get('[name="zipcode"]').click();
    cy.get('[name="zipcode"]').type('70068');
    cy.get('[name="town"]').click();
    cy.get('[name="town"]').type('Cali');
    cy.get('#select2-selectcountry_id-container').click();
    cy.get('#dragDropAreaTabBar [name="phone"]').click();
    cy.get('#dragDropAreaTabBar [name="fax"]').click();
    cy.get('#dragDropAreaTabBar [name="phone"]').click();
    cy.get('#dragDropAreaTabBar [name="phone"]').type('3004567890');
    cy.get('#dragDropAreaTabBar [name="fax"]').click();
    cy.get('#dragDropAreaTabBar [name="fax"]').type('031456789');
    cy.get('#dragDropAreaTabBar ul.select2-selection__rendered').click();
    cy.get('#id-right [name="add"]').click();
    cy.get('div.jnotify-message div').should('be.visible');
    cy.contains('El campo Nombre corto es obligatorio').should('be.visible')

  });

  it('clase-invalida-numerica', function () {
    cy.visit('https://demo.dolibarr.org/public/demo/')
    cy.get('#a1profmanufacture img.demothumb').click();
    cy.get('[name="password"]').click();
    cy.get('[name="password"]').click()
    cy.get('[name="password"]').clear();
    cy.get('[name="password"]').type('demo');
    cy.get('#login-submit-wrapper input.button').click();
    cy.get('#mainmenutd_products div.mainmenu').click();
    cy.get('#id-left a[title="Nuevo almacén"]').click();
    cy.get('#dragDropAreaTabBar [name="libelle"]').type(faker.number.hex({ min: 0, max: 65535 }));
    cy.get('#select2-fk_parent-container').click();
    cy.get('#dragDropAreaTabBar [name="lieu"]').click();
    cy.get('#dragDropAreaTabBar [name="lieu"]').type('123456');
    cy.get('#select2-fk_parent-container').click();
    cy.get('#select2-projectid-container').click({ force: true });
    cy.get('#dragDropAreaTabBar tr:nth-child(6) td:nth-child(2)').click();
    cy.get('#dragDropAreaTabBar [name="address"]').click();
    cy.get('#dragDropAreaTabBar [name="address"]').type('cra45#30-20');
    cy.get('#select2-selectcountry_id-container').click();
    cy.get('#dragDropAreaTabBar tr:nth-child(8) td:nth-child(1)').click();
    cy.get('#dragDropAreaTabBar tr:nth-child(7) td:nth-child(1)').click();
    cy.get('[name="zipcode"]').click();
    cy.get('[name="zipcode"]').type('70068');
    cy.get('[name="town"]').click();
    cy.get('[name="town"]').type('Cali');
    cy.get('#select2-selectcountry_id-container').click();
    cy.get('#dragDropAreaTabBar [name="phone"]').click();
    cy.get('#dragDropAreaTabBar [name="fax"]').click();
    cy.get('#dragDropAreaTabBar [name="phone"]').click();
    cy.get('#dragDropAreaTabBar [name="phone"]').type('3004567890');
    cy.get('#dragDropAreaTabBar [name="fax"]').click();
    cy.get('#dragDropAreaTabBar [name="fax"]').type('031456789');
    cy.get('#dragDropAreaTabBar ul.select2-selection__rendered').click();
    cy.get('#id-right [name="add"]').click();
    cy.get('div.jnotify-message div').should('be.visible');
    cy.contains('Formato no valido').should('be.visible')

  });

  it('clase-valida-lista', function () {
    cy.visit('https://demo.dolibarr.org/public/demo/')
    cy.get('#a1profmanufacture img.demothumb').click();
    cy.get('[name="password"]').click();
    cy.get('[name="password"]').click()
    cy.get('[name="password"]').clear();
    cy.get('[name="password"]').type('demo');
    cy.get('#login-submit-wrapper input.button').click();
    cy.get('#mainmenutd_products div.mainmenu').click();
    cy.get('#id-left a[title="Nuevo almacén"]').click();
    cy.get('#dragDropAreaTabBar [name="libelle"]').type(faker.number.hex({ min: 0, max: 65535 }));
    cy.get('#select2-fk_parent-container').click();
    cy.get('#dragDropAreaTabBar [name="lieu"]').click();
    cy.get('#dragDropAreaTabBar [name="lieu"]').type('123456');
    cy.get('#select2-fk_parent-container').click();
    cy.get('#select2-projectid-container').click({ force: true });
    cy.get('#dragDropAreaTabBar tr:nth-child(6) td:nth-child(2)').select('#01');
    cy.get('#dragDropAreaTabBar [name="address"]').click();
    cy.get('#dragDropAreaTabBar [name="address"]').type('cra45#30-20');
    cy.get('#select2-selectcountry_id-container').click();
    cy.get('#dragDropAreaTabBar tr:nth-child(8) td:nth-child(1)').click();
    cy.get('#dragDropAreaTabBar tr:nth-child(7) td:nth-child(1)').click();
    cy.get('[name="zipcode"]').click();
    cy.get('[name="zipcode"]').type('70068');
    cy.get('[name="town"]').click();
    cy.get('[name="town"]').type('Cali');
    cy.get('#select2-selectcountry_id-container').click();
    cy.get('#dragDropAreaTabBar [name="phone"]').click();
    cy.get('#dragDropAreaTabBar [name="fax"]').click();
    cy.get('#dragDropAreaTabBar [name="phone"]').click();
    cy.get('#dragDropAreaTabBar [name="phone"]').type('3004567890');
    cy.get('#dragDropAreaTabBar [name="fax"]').click();
    cy.get('#dragDropAreaTabBar [name="fax"]').type('031456789');
    cy.get('#dragDropAreaTabBar ul.select2-selection__rendered').click();
    cy.get('#id-right [name="add"]').click();
    cy.get('div.jnotify-message div').should('be.visible');

  });

  it('clase-invalida-lista', function () {
    cy.visit('https://demo.dolibarr.org/public/demo/')
    cy.get('#a1profmanufacture img.demothumb').click();
    cy.get('[name="password"]').click();
    cy.get('[name="password"]').click()
    cy.get('[name="password"]').clear();
    cy.get('[name="password"]').type('demo');
    cy.get('#login-submit-wrapper input.button').click();
    cy.get('#mainmenutd_products div.mainmenu').click();
    cy.get('#id-left a[title="Nuevo almacén"]').click();
    cy.get('#dragDropAreaTabBar [name="libelle"]').type(faker.number.hex({ min: 0, max: 65535 }));
    cy.get('#select2-fk_parent-container').click();
    cy.get('#dragDropAreaTabBar [name="lieu"]').click();
    cy.get('#dragDropAreaTabBar [name="lieu"]').type('123456');
    cy.get('#select2-fk_parent-container').click();
    cy.get('#select2-projectid-container').click({ force: true });
    cy.get('#dragDropAreaTabBar [name="address"]').click();
    cy.get('#dragDropAreaTabBar [name="address"]').type('cra45#30-20');
    cy.get('#select2-selectcountry_id-container').click();
    cy.get('#dragDropAreaTabBar tr:nth-child(8) td:nth-child(1)').click();
    cy.get('#dragDropAreaTabBar tr:nth-child(7) td:nth-child(1)').click();
    cy.get('[name="zipcode"]').click();
    cy.get('[name="zipcode"]').type('70068');
    cy.get('[name="town"]').click();
    cy.get('[name="town"]').type('Cali');
    cy.get('#select2-selectcountry_id-container').click();
    cy.get('#dragDropAreaTabBar [name="phone"]').click();
    cy.get('#dragDropAreaTabBar [name="fax"]').click();
    cy.get('#dragDropAreaTabBar [name="phone"]').click();
    cy.get('#dragDropAreaTabBar [name="phone"]').type('3004567890');
    cy.get('#dragDropAreaTabBar [name="fax"]').click();
    cy.get('#dragDropAreaTabBar [name="fax"]').type('031456789');
    cy.get('#dragDropAreaTabBar ul.select2-selection__rendered').click();
    cy.get('#id-right [name="add"]').click();
    cy.get('div.jnotify-message div').should('be.visible');
    cy.contains('Debe seleccionar una opción').should('be.visible')

  });

  it('clase-valida-telefono', function () {
    cy.visit('https://demo.dolibarr.org/public/demo/')
    cy.get('#a1profmanufacture img.demothumb').click();
    cy.get('[name="password"]').click();
    cy.get('[name="password"]').click()
    cy.get('[name="password"]').clear();
    cy.get('[name="password"]').type('demo');
    cy.get('#login-submit-wrapper input.button').click();
    cy.get('#mainmenutd_products div.mainmenu').click();
    cy.get('#id-left a[title="Nuevo almacén"]').click();
    cy.get('#dragDropAreaTabBar [name="libelle"]').type(faker.number.hex({ min: 0, max: 65535 }));
    cy.get('#select2-fk_parent-container').click();
    cy.get('#dragDropAreaTabBar [name="lieu"]').click();
    cy.get('#dragDropAreaTabBar [name="lieu"]').type('123456');
    cy.get('#select2-fk_parent-container').click();
    cy.get('#select2-projectid-container').click({ force: true });
    cy.get('#dragDropAreaTabBar tr:nth-child(6) td:nth-child(2)').click({ force: true });

    // Esperar y buscar con diferentes selectores
    cy.get('body').then($body => {
      if ($body.find('.select2-dropdown').length > 0) {
        cy.get('.select2-dropdown li').contains('#01').click();
      } else if ($body.find('.select2-results').length > 0) {
        cy.get('.select2-results li').contains('#01').click();
      }
    });
    cy.get('#dragDropAreaTabBar [name="address"]').type('cra45#30-20');
    cy.get('#select2-selectcountry_id-container').click();
    cy.get('#dragDropAreaTabBar tr:nth-child(8) td:nth-child(1)').click();
    cy.get('#dragDropAreaTabBar tr:nth-child(7) td:nth-child(1)').click();
    cy.get('[name="zipcode"]').click();
    cy.get('[name="zipcode"]').type('70068');
    cy.get('[name="town"]').click();
    cy.get('[name="town"]').type('Cali');
    cy.get('#select2-selectcountry_id-container').click();
    cy.get('#dragDropAreaTabBar [name="phone"]').click();
    cy.get('#dragDropAreaTabBar [name="fax"]').click();
    cy.get('#dragDropAreaTabBar [name="phone"]').click();
    cy.get('#dragDropAreaTabBar [name="phone"]').type('3004567890');
    cy.get('#dragDropAreaTabBar [name="fax"]').click();
    cy.get('#dragDropAreaTabBar [name="fax"]').type('031456789');
    cy.get('#dragDropAreaTabBar ul.select2-selection__rendered').click();
    cy.get('#id-right [name="add"]').click();
    cy.get('div.jnotify-message div').should('be.visible');

  });

  it('clase-invalida-"-0+digitos"', function () {
    cy.visit('https://demo.dolibarr.org/public/demo/')
    cy.get('#a1profmanufacture img.demothumb').click();
    cy.get('[name="password"]').click();
    cy.get('[name="password"]').click()
    cy.get('[name="password"]').clear();
    cy.get('[name="password"]').type('demo');
    cy.get('#login-submit-wrapper input.button').click();
    cy.get('#mainmenutd_products div.mainmenu').click();
    cy.get('#id-left a[title="Nuevo almacén"]').click();
    cy.get('#dragDropAreaTabBar [name="libelle"]').type(faker.number.hex({ min: 0, max: 65535 }));
    cy.get('#select2-fk_parent-container').click();
    cy.get('#dragDropAreaTabBar [name="lieu"]').click();
    cy.get('#dragDropAreaTabBar [name="lieu"]').type('123456');
    cy.get('#select2-fk_parent-container').click();
    cy.get('#select2-projectid-container').click({ force: true });
    cy.get('#dragDropAreaTabBar tr:nth-child(6) td:nth-child(2)').click({ force: true });

    // Esperar y buscar con diferentes selectores
    cy.get('body').then($body => {
      if ($body.find('.select2-dropdown').length > 0) {
        cy.get('.select2-dropdown li').contains('#01').click();
      } else if ($body.find('.select2-results').length > 0) {
        cy.get('.select2-results li').contains('#01').click();
      }
    });
    cy.get('#dragDropAreaTabBar [name="address"]').click();
    cy.get('#dragDropAreaTabBar [name="address"]').type('cra45#30-20');
    cy.get('#select2-selectcountry_id-container').click();
    cy.get('#dragDropAreaTabBar tr:nth-child(8) td:nth-child(1)').click();
    cy.get('#dragDropAreaTabBar tr:nth-child(7) td:nth-child(1)').click();
    cy.get('[name="zipcode"]').click();
    cy.get('[name="zipcode"]').type('70068');
    cy.get('[name="town"]').click();
    cy.get('[name="town"]').type('Cali');
    cy.get('#select2-selectcountry_id-container').click();
    cy.get('#dragDropAreaTabBar [name="phone"]').click();
    cy.get('#dragDropAreaTabBar [name="fax"]').click();
    cy.get('#dragDropAreaTabBar [name="phone"]').click();
    cy.get('#dragDropAreaTabBar [name="phone"]').type('3004567890456');
    cy.get('#dragDropAreaTabBar [name="fax"]').click();
    cy.get('#dragDropAreaTabBar [name="fax"]').type('031456789');
    cy.get('#dragDropAreaTabBar ul.select2-selection__rendered').click();
    cy.get('#id-right [name="add"]').click();
    cy.get('div.jnotify-message div').should('be.visible');
    cy.contains('El número de teléfono debe tener exactamente 10 dígitos').should('be.visible')

  });

  it('claseinvalida-no-numericos', function () {
    cy.visit('https://demo.dolibarr.org/public/demo/')
    cy.get('#a1profmanufacture img.demothumb').click();
    cy.get('[name="password"]').click();
    cy.get('[name="password"]').click()
    cy.get('[name="password"]').clear();
    cy.get('[name="password"]').type('demo');
    cy.get('#login-submit-wrapper input.button').click();
    cy.get('#mainmenutd_products div.mainmenu').click();
    cy.get('#id-left a[title="Nuevo almacén"]').click();
    cy.get('#dragDropAreaTabBar [name="libelle"]').type(faker.number.hex({ min: 0, max: 65535 }));
    cy.get('#select2-fk_parent-container').click();
    cy.get('#dragDropAreaTabBar [name="lieu"]').click();
    cy.get('#dragDropAreaTabBar [name="lieu"]').type('123456');
    cy.get('#select2-fk_parent-container').click();
    cy.get('#select2-projectid-container').click({ force: true });
    cy.get('#dragDropAreaTabBar tr:nth-child(6) td:nth-child(2)').click({ force: true });

    // Esperar y buscar con diferentes selectores
    cy.get('body').then($body => {
      if ($body.find('.select2-dropdown').length > 0) {
        cy.get('.select2-dropdown li').contains('#01').click();
      } else if ($body.find('.select2-results').length > 0) {
        cy.get('.select2-results li').contains('#01').click();
      }
    }); cy.get('#dragDropAreaTabBar [name="address"]').click();
    cy.get('#dragDropAreaTabBar [name="address"]').type('cra45#30-20');
    cy.get('#select2-selectcountry_id-container').click();
    cy.get('#dragDropAreaTabBar tr:nth-child(8) td:nth-child(1)').click();
    cy.get('#dragDropAreaTabBar tr:nth-child(7) td:nth-child(1)').click();
    cy.get('[name="zipcode"]').click();
    cy.get('[name="zipcode"]').type('70068');
    cy.get('[name="town"]').click();
    cy.get('[name="town"]').type('Cali');
    cy.get('#select2-selectcountry_id-container').click();
    cy.get('#dragDropAreaTabBar [name="phone"]').click();
    cy.get('#dragDropAreaTabBar [name="fax"]').click();
    cy.get('#dragDropAreaTabBar [name="phone"]').click();
    cy.get('#dragDropAreaTabBar [name="phone"]').type('Prueba##');
    cy.get('#dragDropAreaTabBar [name="fax"]').click();
    cy.get('#dragDropAreaTabBar [name="fax"]').type('031456789');
    cy.get('#dragDropAreaTabBar ul.select2-selection__rendered').click();
    cy.get('#id-right [name="add"]').click();
    cy.get('div.jnotify-message div').should('be.visible');
    cy.contains('El número de teléfono solo debe contener dígitos.').should('be.visible')

  });

  it('clase-valida-poblacion', function () {
    cy.visit('https://demo.dolibarr.org/public/demo/')
    cy.get('#a1profmanufacture img.demothumb').click();
    cy.get('[name="password"]').click();
    cy.get('[name="password"]').click()
    cy.get('[name="password"]').clear();
    cy.get('[name="password"]').type('demo');
    cy.get('#login-submit-wrapper input.button').click();
    cy.get('#mainmenutd_products div.mainmenu').click();
    cy.get('#id-left a[title="Nuevo almacén"]').click();
    cy.get('#dragDropAreaTabBar [name="libelle"]').type(faker.number.hex({ min: 0, max: 65535 }));
    cy.get('#select2-fk_parent-container').click();
    cy.get('#dragDropAreaTabBar [name="lieu"]').click();
    cy.get('#dragDropAreaTabBar [name="lieu"]').type('123456');
    cy.get('#select2-fk_parent-container').click();
    cy.get('#select2-projectid-container').click({ force: true });
    cy.get('#dragDropAreaTabBar tr:nth-child(6) td:nth-child(2)').click({ force: true });

    // Esperar y buscar con diferentes selectores
    cy.get('body').then($body => {
      if ($body.find('.select2-dropdown').length > 0) {
        cy.get('.select2-dropdown li').contains('#01').click();
      } else if ($body.find('.select2-results').length > 0) {
        cy.get('.select2-results li').contains('#01').click();
      }
    }); cy.get('#dragDropAreaTabBar [name="address"]').click();
    cy.get('#dragDropAreaTabBar [name="address"]').type('cra45#30-20');
    cy.get('#select2-selectcountry_id-container').click();
    cy.get('#dragDropAreaTabBar tr:nth-child(8) td:nth-child(1)').click();
    cy.get('#dragDropAreaTabBar tr:nth-child(7) td:nth-child(1)').click();
    cy.get('[name="zipcode"]').click();
    cy.get('[name="zipcode"]').type('70068');
    cy.get('[name="town"]').click();
    cy.get('[name="town"]').type('Cali');
    cy.get('#select2-selectcountry_id-container').click();
    cy.get('#dragDropAreaTabBar [name="phone"]').click();
    cy.get('#dragDropAreaTabBar [name="fax"]').click();
    cy.get('#dragDropAreaTabBar [name="phone"]').click();
    cy.get('#dragDropAreaTabBar [name="phone"]').type('3004567890');
    cy.get('#dragDropAreaTabBar [name="fax"]').click();
    cy.get('#dragDropAreaTabBar [name="fax"]').type('031456789');
    cy.get('#dragDropAreaTabBar ul.select2-selection__rendered').click();
    cy.get('#id-right [name="add"]').click();
    cy.get('div.jnotify-message div').should('be.visible');
    cy.contains('Debe seleccionar una opción').should('be.visible')


  });

  it('clase-invalida-poblacion', function () {
    cy.visit('https://demo.dolibarr.org/public/demo/')
    cy.get('#a1profmanufacture img.demothumb').click();
    cy.get('[name="password"]').click();
    cy.get('[name="password"]').click()
    cy.get('[name="password"]').clear();
    cy.get('[name="password"]').type('demo');
    cy.get('#login-submit-wrapper input.button').click();
    cy.get('#mainmenutd_products div.mainmenu').click();
    cy.get('#id-left a[title="Nuevo almacén"]').click();
    cy.get('#dragDropAreaTabBar [name="libelle"]').type(faker.number.hex({ min: 0, max: 65535 }));
    cy.get('#select2-fk_parent-container').click();
    cy.get('#dragDropAreaTabBar [name="lieu"]').click();
    cy.get('#dragDropAreaTabBar [name="lieu"]').type('123456');
    cy.get('#select2-fk_parent-container').click();
    cy.get('#select2-projectid-container').click({ force: true });
    cy.get('#dragDropAreaTabBar tr:nth-child(6) td:nth-child(2)').click({ force: true });

    // Esperar y buscar con diferentes selectores
    cy.get('body').then($body => {
      if ($body.find('.select2-dropdown').length > 0) {
        cy.get('.select2-dropdown li').contains('#01').click();
      } else if ($body.find('.select2-results').length > 0) {
        cy.get('.select2-results li').contains('#01').click();
      }
    }); cy.get('#dragDropAreaTabBar [name="address"]').click();
    cy.get('#dragDropAreaTabBar [name="address"]').type('cra45#30-20');
    cy.get('#select2-selectcountry_id-container').click();
    cy.get('#dragDropAreaTabBar tr:nth-child(8) td:nth-child(1)').click();
    cy.get('#dragDropAreaTabBar tr:nth-child(7) td:nth-child(1)').click();
    cy.get('[name="zipcode"]').click();
    cy.get('[name="zipcode"]').type('70068');
    cy.get('[name="town"]').click();
    cy.get('[name="town"]').type('cali512');
    cy.get('#select2-selectcountry_id-container').click();
    cy.get('#dragDropAreaTabBar [name="phone"]').click();
    cy.get('#dragDropAreaTabBar [name="fax"]').click();
    cy.get('#dragDropAreaTabBar [name="phone"]').click();
    cy.get('#dragDropAreaTabBar [name="phone"]').type('3004567890');
    cy.get('#dragDropAreaTabBar [name="fax"]').click();
    cy.get('#dragDropAreaTabBar [name="fax"]').type('031456789');
    cy.get('#dragDropAreaTabBar ul.select2-selection__rendered').click();
    cy.get('#id-right [name="add"]').click();
    cy.get('div.jnotify-message div').should('be.visible');
    cy.contains('El campo Población solo debe contener letras').should('be.visible')

  });

  it('clase-invalida-vacio', function () {
    cy.visit('https://demo.dolibarr.org/public/demo/')
    cy.get('#a1profmanufacture img.demothumb').click();
    cy.get('[name="password"]').click();
    cy.get('[name="password"]').click()
    cy.get('[name="password"]').clear();
    cy.get('[name="password"]').type('demo');
    cy.get('#login-submit-wrapper input.button').click();
    cy.get('#mainmenutd_products div.mainmenu').click();
    cy.get('#id-left a[title="Nuevo almacén"]').click();
    cy.get('#dragDropAreaTabBar [name="libelle"]').type(faker.number.hex({ min: 0, max: 65535 }));
    cy.get('#select2-fk_parent-container').click();
    cy.get('#dragDropAreaTabBar [name="lieu"]').click();
    cy.get('#dragDropAreaTabBar [name="lieu"]').type('123456');
    cy.get('#select2-fk_parent-container').click();
    cy.get('#select2-projectid-container').click({ force: true });
    cy.get('#dragDropAreaTabBar tr:nth-child(6) td:nth-child(2)').click({ force: true });

    // Esperar y buscar con diferentes selectores
    cy.get('body').then($body => {
      if ($body.find('.select2-dropdown').length > 0) {
        cy.get('.select2-dropdown li').contains('#01').click();
      } else if ($body.find('.select2-results').length > 0) {
        cy.get('.select2-results li').contains('#01').click();
      }
    }); cy.get('#dragDropAreaTabBar [name="address"]').click();
    cy.get('#dragDropAreaTabBar [name="address"]').type('cra45#30-20');
    cy.get('#select2-selectcountry_id-container').click();
    cy.get('#dragDropAreaTabBar tr:nth-child(8) td:nth-child(1)').click();
    cy.get('#dragDropAreaTabBar tr:nth-child(7) td:nth-child(1)').click();
    cy.get('[name="zipcode"]').click();
    cy.get('[name="zipcode"]').type('70068');
    cy.get('[name="town"]').click();
    cy.get('[name="town"]').type('');
    cy.get('#select2-selectcountry_id-container').click();
    cy.get('#dragDropAreaTabBar [name="phone"]').click();
    cy.get('#dragDropAreaTabBar [name="fax"]').click();
    cy.get('#dragDropAreaTabBar [name="phone"]').click();
    cy.get('#dragDropAreaTabBar [name="phone"]').type('3004567890');
    cy.get('#dragDropAreaTabBar [name="fax"]').click();
    cy.get('#dragDropAreaTabBar [name="fax"]').type('031456789');
    cy.get('#dragDropAreaTabBar ul.select2-selection__rendered').click();
    cy.get('#id-right [name="add"]').click();
    cy.get('div.jnotify-message div').should('be.visible');
    cy.contains('El campo poblacion no puede contener caracteres especiales').should('be.visible')

  });


  it('clase-valido-proyecto', function () {
    cy.visit('https://demo.dolibarr.org/public/demo/')
    cy.get('#a1profmanufacture img.demothumb').click();
    cy.get('[name="password"]').click();
    cy.get('[name="password"]').click()
    cy.get('[name="password"]').clear();
    cy.get('[name="password"]').type('demo');
    cy.get('#login-submit-wrapper input.button').click();
    cy.get('#mainmenutd_products div.mainmenu').click();
    cy.get('#id-left a[title="Nuevo almacén"]').click();
    cy.get('#dragDropAreaTabBar [name="libelle"]').type(faker.number.hex({ min: 0, max: 65535 }));
    cy.get('#select2-fk_parent-container').click();
    cy.get('#dragDropAreaTabBar [name="lieu"]').click();
    cy.get('#dragDropAreaTabBar [name="lieu"]').type('123456');
    cy.get('#select2-fk_parent-container').click();
    cy.get('#select2-projectid-container').click({ force: true });
    cy.get('#dragDropAreaTabBar tr:nth-child(6) td:nth-child(2)').click({ force: true });

    // Esperar y buscar con diferentes selectores
    cy.get('body').then($body => {
      if ($body.find('.select2-dropdown').length > 0) {
        cy.get('.select2-dropdown li').contains('#01').click();
      } else if ($body.find('.select2-results').length > 0) {
        cy.get('.select2-results li').contains('#01').click();
      }
    });
    cy.get('#dragDropAreaTabBar [name="address"]').click();
    cy.get('#dragDropAreaTabBar [name="address"]').type('cra45#30-20');
    cy.get('#select2-selectcountry_id-container').click();
    cy.get('#dragDropAreaTabBar tr:nth-child(8) td:nth-child(1)').click();
    cy.get('#dragDropAreaTabBar tr:nth-child(7) td:nth-child(1)').click();
    cy.get('[name="zipcode"]').click();
    cy.get('[name="zipcode"]').type('25000');
    cy.get('[name="town"]').click();
    cy.get('[name="town"]').type('besancon');
    cy.get('#select2-selectcountry_id-container').click();
    cy.get('#dragDropAreaTabBar [name="phone"]').click();
    cy.get('#dragDropAreaTabBar [name="fax"]').click();
    cy.get('#dragDropAreaTabBar [name="phone"]').click();
    cy.get('#dragDropAreaTabBar [name="phone"]').type('3004567890');
    cy.get('#dragDropAreaTabBar [name="fax"]').click();
    cy.get('#dragDropAreaTabBar [name="fax"]').type('031456789');
    cy.get('#dragDropAreaTabBar ul.select2-selection__rendered').click();
    cy.get('#id-right [name="add"]').click();
    cy.get('div.jnotify-message div').should('be.visible');
    cy.contains('El campo poblacion no puede contener caracteres especiales').should('be.visible')

  });

  it('clase-invalida-proyecto', function () {
    cy.visit('https://demo.dolibarr.org/public/demo/')
    cy.get('#a1profmanufacture img.demothumb').click();
    cy.get('[name="password"]').click();
    cy.get('[name="password"]').click()
    cy.get('[name="password"]').clear();
    cy.get('[name="password"]').type('demo');
    cy.get('#login-submit-wrapper input.button').click();
    cy.get('#mainmenutd_products div.mainmenu').click();
    cy.get('#id-left a[title="Nuevo almacén"]').click();
    cy.get('#dragDropAreaTabBar [name="libelle"]').type(faker.number.hex({ min: 0, max: 65535 }));
    cy.get('#select2-fk_parent-container').click();
    cy.get('#dragDropAreaTabBar [name="lieu"]').click();
    cy.get('#dragDropAreaTabBar [name="lieu"]').type('123456');
    cy.get('#select2-fk_parent-container').click();
    cy.get('#select2-projectid-container').click({ force: true });
    cy.get('#dragDropAreaTabBar tr:nth-child(6) td:nth-child(2)').click({ force: true });

    // Esperar y buscar con diferentes selectores
    cy.get('body').then($body => {
      if ($body.find('.select2-dropdown').length > 0) {
        cy.get('.select2-dropdown li').contains('#01').click();
      } else if ($body.find('.select2-results').length > 0) {
        cy.get('.select2-results li').contains('#01').click();
      }
    }); cy.get('#dragDropAreaTabBar [name="address"]').click();
    cy.get('#dragDropAreaTabBar [name="address"]').type('cra45#30-20');
    cy.get('#select2-selectcountry_id-container').click();
    cy.get('#dragDropAreaTabBar tr:nth-child(8) td:nth-child(1)').click();
    cy.get('#dragDropAreaTabBar tr:nth-child(7) td:nth-child(1)').click();
    cy.get('[name="zipcode"]').click();
    cy.get('[name="zipcode"]').type('70068');
    cy.get('[name="town"]').click();
    cy.get('[name="town"]').type('');
    cy.get('#select2-selectcountry_id-container').click();
    cy.get('#dragDropAreaTabBar [name="phone"]').click();
    cy.get('#dragDropAreaTabBar [name="fax"]').click();
    cy.get('#dragDropAreaTabBar [name="phone"]').click();
    cy.get('#dragDropAreaTabBar [name="phone"]').type('3004567890');
    cy.get('#dragDropAreaTabBar [name="fax"]').click();
    cy.get('#dragDropAreaTabBar [name="fax"]').type('031456789');
    cy.get('#dragDropAreaTabBar ul.select2-selection__rendered').click();
    cy.get('#id-right [name="add"]').click();
    cy.get('div.jnotify-message div').should('be.visible');
    cy.contains('El campo poblacion no puede contener caracteres especiales').should('be.visible')

  });




});
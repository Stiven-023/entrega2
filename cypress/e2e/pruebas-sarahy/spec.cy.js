describe('Pruebas de formulario de contacto Dolibarr', () => {
  beforeEach(() => {
    cy.visit('https://demo.dolibarr.org/public/demo/index.php');
    cy.get('#a1profmanufacture img.demothumb').click();
    cy.get('#login_line1').click();
    cy.get('[name="password"]').clear().type('demo');
    cy.get('#login-submit-wrapper input.button').click();
    cy.get('#mainmenutd_companies div.mainmenu').click();
    cy.get('#id-left div.blockvmenuimpair').click();
    cy.get('#id-left a[title="Nuevo Contacto/Dirección"]').click();
  });

  // Función para llenar campos básicos rápidamente
  const llenarCamposBasicos = () => {
    cy.get('[name="lastname"]').type('Gómez');
    cy.get('[name="firstname"]').type('Maria Fernanda');

    // Empresa
    cy.get('#select2-socid-container').click();
    cy.get('.select2-container--open .select2-search__field').first()
      .type('. Emma Simon - MediLife{enter}')

    // Tratamiento
    cy.get('#select2-civility_code-container').click();
    cy.get('.select2-container--open .select2-search__field').first()
      .type('señora{enter}');

    // Dirección y teléfonos
    cy.get('[name="address"]').type('Calle 58 #44-89');
    cy.get('[name="phone_pro"]').type('888855544');
    cy.get('[name="phone_perso"]').type('45556884');
    cy.get('[name="phone_mobile"]').type('16556889');
    cy.get('[name="fax"]').type('5555');
    cy.get('[name="email"]').type('usuario@correo.com');

    // Idioma
    cy.get('#select2-default_lang-container').click();
    cy.get('.select2-container--open .select2-search__field').first()
      .type('Español (Colombia){enter}');
  };

  // Función para manejar el campo puesto específicamente
  const llenarPuesto = (puesto) => {
    cy.get('[name="poste"]').click().clear();
    if (puesto && puesto.length > 0) {
      cy.get('[name="poste"]').type(puesto);
    }
  };

  it('prueba etiqueta válida', () => {
    llenarCamposBasicos();
    llenarPuesto('Gerente');
    cy.get('#id-right [name="add"]').click();
    cy.wait(3000);
  });

  it('prueba etiqueta inválida', () => {
    llenarCamposBasicos();
    llenarPuesto('Gerente');
    cy.get('[name="lastname"]').clear().type('5'.repeat(100));
    cy.get('#id-right [name="add"]').click();
    cy.wait(3000);
  });

  it('prueba etiqueta inválida2', () => {
    llenarCamposBasicos();
    llenarPuesto('Gerente');
    cy.get('[name="lastname"]').clear();
    cy.get('#id-right [name="add"]').click();
    cy.wait(3000);
  });

  it('prueba nombre inválido', () => {
    llenarCamposBasicos();
    llenarPuesto('Gerente');
    cy.get('[name="firstname"]').clear();
    cy.get('#id-right [name="add"]').click();
    cy.wait(3000);
  });

  it('prueba nombre inválido2', () => {
    llenarCamposBasicos();
    llenarPuesto('Gerente');
    cy.get('[name="firstname"]').clear().type('@'.repeat(50));
    cy.get('#id-right [name="add"]').click();
    cy.wait(3000);
  });

  it('prueba correo inválido', () => {
    llenarCamposBasicos();
    llenarPuesto('Gerente');
    cy.get('[name="email"]').clear().type('usuario');
    cy.get('#id-right [name="add"]').click();
    cy.wait(3000);
  });


  it('prueba puestoTrabajo inválido', () => {
    llenarCamposBasicos();

    // SOLUCIÓN: Manejo específico para el campo puesto problemático
    cy.get('[name="poste"]').then(($input) => {
      if ($input.is(':visible') && !$input.is(':disabled')) {
        cy.wrap($input).click().clear().type('A'.repeat(300), { delay: 0 });
      }
    });

    cy.get('#id-right [name="add"]').click();
    cy.wait(3000);
  });

  it('prueba puestoTrabajo inválido2', () => {
    llenarCamposBasicos();

    cy.get('[name="poste"]').clear({ force: true });
    cy.get('[name="poste"]').type('🫡', {
      force: true,
      delay: 0,
      timeout: 5000 // Timeout corto específico para este campo
    });

    cy.get('#id-right [name="add"]').click();
    cy.wait(5000);
  });

  it('prueba direccion inválida', () => {
    llenarCamposBasicos();
    llenarPuesto('Gerente');
    cy.get('[name="address"]').clear().type('a'.repeat(500));
    cy.get('#id-right [name="add"]').click();
    cy.wait(3000);
  });

  it('prueba direccion inválida2', () => {
    llenarCamposBasicos();
    llenarPuesto('Gerente');
    cy.get('[name="address"]').clear().type('😶‍🌫️');
    cy.get('#id-right [name="add"]').click();
    cy.wait(3000);
  });
});
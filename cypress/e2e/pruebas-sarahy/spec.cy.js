describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
});

it('prueba etiqueta válida', function() {
  cy.visit('https://demo.dolibarr.org/public/demo/index.php')
  cy.get('#a1profmanufacture img.demothumb').click();
  cy.get('#login_line1').click();
  cy.get('[name="password"]').clear();
  cy.get('[name="password"]').type('demo');
  cy.get('#login-submit-wrapper input.button').click();
  cy.get('#mainmenutd_companies div.mainmenu').click();
  cy.get('#id-left div.blockvmenuimpair').click();
  cy.get('#id-left a[title="Nuevo Contacto/Dirección"]').click();
  cy.get('[name="lastname"]').click();
  cy.get('[name="lastname"]').type('Gómez');
  cy.get('[name="firstname"]').click();
  cy.get('[name="firstname"]').type('Maria Fernanda');
  cy.get('#select2-socid-container span.placeholder').click();
  cy.get('#mainbody input[aria-controls="select2-socid-results"]').type('. Emma Simon - MediLife{enter}');
  cy.get('#select2-civility_code-container').click();
  cy.get('#mainbody input[aria-controls="select2-civility_code-results"]').type('señora{enter}');
  cy.get('[name="poste"]').click();
  cy.get('#dragDropAreaTabBar tr:nth-child(5)').click();
  cy.get('[name="poste"]').click();
  cy.get('[name="poste"]').type('Gerente');
  cy.get('[name="address"]').click();
  cy.get('[name="address"]').type('Calle 58 #44-89');
  cy.get('[name="phone_pro"]').click();
  cy.get('[name="phone_pro"]').type('888855544');
  cy.get('[name="phone_perso"]').click();
  cy.get('[name="phone_perso"]').type('45556884');
  cy.get('[name="phone_mobile"]').click();
  cy.get('[name="phone_mobile"]').type('16556889');
  cy.get('[name="fax"]').click();
  cy.get('[name="fax"]').type('5555');
  cy.get('[name="email"]').click();
  cy.get('[name="email"]').type('usuario@correo.com');
  cy.get('#select2-default_lang-container').click();
  cy.get('#mainbody input[aria-controls="select2-default_lang-results"]').type('Español (Colombia){enter}');
  cy.get('#id-right [name="add"]').click();
  
});

it('prueba etiqueta inválida', function() {
  cy.visit('https://demo.dolibarr.org/public/demo/index.php')
  cy.get('#a1profmanufacture img.demothumb').click();
  cy.get('#login_line1').click();
  cy.get('[name="password"]').clear();
  cy.get('[name="password"]').type('demo');
  cy.get('#login-submit-wrapper input.button').click();
  cy.get('#mainmenutd_companies div.mainmenu').click();
  cy.get('#id-left div.blockvmenuimpair').click();
  cy.get('#id-left a[title="Nuevo Contacto/Dirección"]').click();
  cy.get('[name="lastname"]').click();
  cy.get('[name="lastname"]').type('55555555555555555555555555555555555555555555555555555555555555555555555555555555');
  cy.get('[name="firstname"]').click();
  cy.get('[name="firstname"]').type('Maria Fernanda');
  cy.get('#select2-socid-container span.placeholder').click();
  cy.get('#mainbody input[aria-controls="select2-socid-results"]').type('. Emma Simon - MediLife{enter}');
  cy.get('#select2-civility_code-container').click();
  cy.get('#mainbody input[aria-controls="select2-civility_code-results"]').type('señora{enter}');
  cy.get('[name="poste"]').click();
  cy.get('#dragDropAreaTabBar tr:nth-child(5)').click();
  cy.get('[name="poste"]').click();
  cy.get('[name="poste"]').type('Gerente');
  cy.get('[name="address"]').click();
  cy.get('[name="address"]').type('Calle 58 #44-89');
  cy.get('[name="phone_pro"]').click();
  cy.get('[name="phone_pro"]').type('888855544');
  cy.get('[name="phone_perso"]').click();
  cy.get('[name="phone_perso"]').type('45556884');
  cy.get('[name="phone_mobile"]').click();
  cy.get('[name="phone_mobile"]').type('16556889');
  cy.get('[name="fax"]').click();
  cy.get('[name="fax"]').type('5555');
  cy.get('[name="email"]').click();
  cy.get('[name="email"]').type('usuario@correo.com');
  cy.get('#select2-default_lang-container').click();
  cy.get('#mainbody input[aria-controls="select2-default_lang-results"]').type('Español (Colombia){enter}');
  cy.get('#id-right [name="add"]').click();
  
});

it('prueba etiqueta inválida2', function() {
  cy.visit('https://demo.dolibarr.org/public/demo/index.php')
  cy.get('#a1profmanufacture img.demothumb').click();
  cy.get('#login_line1').click();
  cy.get('[name="password"]').clear();
  cy.get('[name="password"]').type('demo');
  cy.get('#login-submit-wrapper input.button').click();
  cy.get('#mainmenutd_companies div.mainmenu').click();
  cy.get('#id-left div.blockvmenuimpair').click();
  cy.get('#id-left a[title="Nuevo Contacto/Dirección"]').click();
  cy.get('[name="lastname"]').click();
  cy.get('[name="lastname"]').type('');
  cy.get('[name="firstname"]').click();
  cy.get('[name="firstname"]').type('Maria Fernanda');
  cy.get('#select2-socid-container span.placeholder').click();
  cy.get('#mainbody input[aria-controls="select2-socid-results"]').type('. Emma Simon - MediLife{enter}');
  cy.get('#select2-civility_code-container').click();
  cy.get('#mainbody input[aria-controls="select2-civility_code-results"]').type('señora{enter}');
  cy.get('[name="poste"]').click();
  cy.get('#dragDropAreaTabBar tr:nth-child(5)').click();
  cy.get('[name="poste"]').click();
  cy.get('[name="poste"]').type('Gerente');
  cy.get('[name="address"]').click();
  cy.get('[name="address"]').type('Calle 58 #44-89');
  cy.get('[name="phone_pro"]').click();
  cy.get('[name="phone_pro"]').type('888855544');
  cy.get('[name="phone_perso"]').click();
  cy.get('[name="phone_perso"]').type('45556884');
  cy.get('[name="phone_mobile"]').click();
  cy.get('[name="phone_mobile"]').type('16556889');
  cy.get('[name="fax"]').click();
  cy.get('[name="fax"]').type('5555');
  cy.get('[name="email"]').click();
  cy.get('[name="email"]').type('usuario@correo.com');
  cy.get('#select2-default_lang-container').click();
  cy.get('#mainbody input[aria-controls="select2-default_lang-results"]').type('Español (Colombia){enter}');
  cy.get('#id-right [name="add"]').click();
  
});

it('prueba nombre válido', function() {
  cy.visit('https://demo.dolibarr.org/public/demo/index.php')
  cy.get('#a1profmanufacture img.demothumb').click();
  cy.get('#login_line1').click();
  cy.get('[name="password"]').clear();
  cy.get('[name="password"]').type('demo');
  cy.get('#login-submit-wrapper input.button').click();
  cy.get('#mainmenutd_companies div.mainmenu').click();
  cy.get('#id-left div.blockvmenuimpair').click();
  cy.get('#id-left a[title="Nuevo Contacto/Dirección"]').click();
  cy.get('[name="lastname"]').click();
  cy.get('[name="lastname"]').type('Gómez');
  cy.get('[name="firstname"]').click();
  cy.get('[name="firstname"]').type('Maria Fernanda');
  cy.get('#select2-socid-container span.placeholder').click();
  cy.get('#mainbody input[aria-controls="select2-socid-results"]').type('. Emma Simon - MediLife{enter}');
  cy.get('#select2-civility_code-container').click();
  cy.get('#mainbody input[aria-controls="select2-civility_code-results"]').type('señora{enter}');
  cy.get('[name="poste"]').click();
  cy.get('#dragDropAreaTabBar tr:nth-child(5)').click();
  cy.get('[name="poste"]').click();
  cy.get('[name="poste"]').type('Gerente');
  cy.get('[name="address"]').click();
  cy.get('[name="address"]').type('Calle 58 #44-89');
  cy.get('[name="phone_pro"]').click();
  cy.get('[name="phone_pro"]').type('888855544');
  cy.get('[name="phone_perso"]').click();
  cy.get('[name="phone_perso"]').type('45556884');
  cy.get('[name="phone_mobile"]').click();
  cy.get('[name="phone_mobile"]').type('16556889');
  cy.get('[name="fax"]').click();
  cy.get('[name="fax"]').type('5555');
  cy.get('[name="email"]').click();
  cy.get('[name="email"]').type('usuario@correo.com');
  cy.get('#select2-default_lang-container').click();
  cy.get('#mainbody input[aria-controls="select2-default_lang-results"]').type('Español (Colombia){enter}');
  cy.get('#id-right [name="add"]').click();
  
});

it('prueba nombre inválido', function() {
  cy.visit('https://demo.dolibarr.org/public/demo/index.php')
  cy.get('#a1profmanufacture img.demothumb').click();
  cy.get('#login_line1').click();
  cy.get('[name="password"]').clear();
  cy.get('[name="password"]').type('demo');
  cy.get('#login-submit-wrapper input.button').click();
  cy.get('#mainmenutd_companies div.mainmenu').click();
  cy.get('#id-left div.blockvmenuimpair').click();
  cy.get('#id-left a[title="Nuevo Contacto/Dirección"]').click();
  cy.get('[name="lastname"]').click();
  cy.get('[name="lastname"]').type('Gómez');
  cy.get('[name="firstname"]').click();
  cy.get('[name="firstname"]').type('');
  cy.get('#select2-socid-container span.placeholder').click();
  cy.get('#mainbody input[aria-controls="select2-socid-results"]').type('. Emma Simon - MediLife{enter}');
  cy.get('#select2-civility_code-container').click();
  cy.get('#mainbody input[aria-controls="select2-civility_code-results"]').type('señora{enter}');
  cy.get('[name="poste"]').click();
  cy.get('#dragDropAreaTabBar tr:nth-child(5)').click();
  cy.get('[name="poste"]').click();
  cy.get('[name="poste"]').type('Gerente');
  cy.get('[name="address"]').click();
  cy.get('[name="address"]').type('Calle 58 #44-89');
  cy.get('[name="phone_pro"]').click();
  cy.get('[name="phone_pro"]').type('888855544');
  cy.get('[name="phone_perso"]').click();
  cy.get('[name="phone_perso"]').type('45556884');
  cy.get('[name="phone_mobile"]').click();
  cy.get('[name="phone_mobile"]').type('16556889');
  cy.get('[name="fax"]').click();
  cy.get('[name="fax"]').type('5555');
  cy.get('[name="email"]').click();
  cy.get('[name="email"]').type('usuario@correo.com');
  cy.get('#select2-default_lang-container').click();
  cy.get('#mainbody input[aria-controls="select2-default_lang-results"]').type('Español (Colombia){enter}');
  cy.get('#id-right [name="add"]').click();
  
});


it('prueba nombre inválido2', function() {
  cy.visit('https://demo.dolibarr.org/public/demo/index.php')
  cy.get('#a1profmanufacture img.demothumb').click();
  cy.get('#login_line1').click();
  cy.get('[name="password"]').clear();
  cy.get('[name="password"]').type('demo');
  cy.get('#login-submit-wrapper input.button').click();
  cy.get('#mainmenutd_companies div.mainmenu').click();
  cy.get('#id-left div.blockvmenuimpair').click();
  cy.get('#id-left a[title="Nuevo Contacto/Dirección"]').click();
  cy.get('[name="lastname"]').click();
  cy.get('[name="lastname"]').type('Gómez');
  cy.get('[name="firstname"]').click();
  cy.get('[name="firstname"]').type('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
  cy.get('#select2-socid-container span.placeholder').click();
  cy.get('#mainbody input[aria-controls="select2-socid-results"]').type('. Emma Simon - MediLife{enter}');
  cy.get('#select2-civility_code-container').click();
  cy.get('#mainbody input[aria-controls="select2-civility_code-results"]').type('señora{enter}');
  cy.get('[name="poste"]').click();
  cy.get('#dragDropAreaTabBar tr:nth-child(5)').click();
  cy.get('[name="poste"]').click();
  cy.get('[name="poste"]').type('Gerente');
  cy.get('[name="address"]').click();
  cy.get('[name="address"]').type('Calle 58 #44-89');
  cy.get('[name="phone_pro"]').click();
  cy.get('[name="phone_pro"]').type('888855544');
  cy.get('[name="phone_perso"]').click();
  cy.get('[name="phone_perso"]').type('45556884');
  cy.get('[name="phone_mobile"]').click();
  cy.get('[name="phone_mobile"]').type('16556889');
  cy.get('[name="fax"]').click();
  cy.get('[name="fax"]').type('5555');
  cy.get('[name="email"]').click();
  cy.get('[name="email"]').type('usuario@correo.com');
  cy.get('#select2-default_lang-container').click();
  cy.get('#mainbody input[aria-controls="select2-default_lang-results"]').type('Español (Colombia){enter}');
  cy.get('#id-right [name="add"]').click();
  
});


it('prueba correo válido', function() {
  cy.visit('https://demo.dolibarr.org/public/demo/index.php')
  cy.get('#a1profmanufacture img.demothumb').click();
  cy.get('#login_line1').click();
  cy.get('[name="password"]').clear();
  cy.get('[name="password"]').type('demo');
  cy.get('#login-submit-wrapper input.button').click();
  cy.get('#mainmenutd_companies div.mainmenu').click();
  cy.get('#id-left div.blockvmenuimpair').click();
  cy.get('#id-left a[title="Nuevo Contacto/Dirección"]').click();
  cy.get('[name="lastname"]').click();
  cy.get('[name="lastname"]').type('Gómez');
  cy.get('[name="firstname"]').click();
  cy.get('[name="firstname"]').type('Maria Fernanda');
  cy.get('#select2-socid-container span.placeholder').click();
  cy.get('#mainbody input[aria-controls="select2-socid-results"]').type('. Emma Simon - MediLife{enter}');
  cy.get('#select2-civility_code-container').click();
  cy.get('#mainbody input[aria-controls="select2-civility_code-results"]').type('señora{enter}');
  cy.get('[name="poste"]').click();
  cy.get('#dragDropAreaTabBar tr:nth-child(5)').click();
  cy.get('[name="poste"]').click();
  cy.get('[name="poste"]').type('Gerente');
  cy.get('[name="address"]').click();
  cy.get('[name="address"]').type('Calle 58 #44-89');
  cy.get('[name="phone_pro"]').click();
  cy.get('[name="phone_pro"]').type('888855544');
  cy.get('[name="phone_perso"]').click();
  cy.get('[name="phone_perso"]').type('45556884');
  cy.get('[name="phone_mobile"]').click();
  cy.get('[name="phone_mobile"]').type('16556889');
  cy.get('[name="fax"]').click();
  cy.get('[name="fax"]').type('5555');
  cy.get('[name="email"]').click();
  cy.get('[name="email"]').type('usuario@correo.com');
  cy.get('#select2-default_lang-container').click();
  cy.get('#mainbody input[aria-controls="select2-default_lang-results"]').type('Español (Colombia){enter}');
  cy.get('#id-right [name="add"]').click();
  
});


it('prueba correo inválido', function() {
  cy.visit('https://demo.dolibarr.org/public/demo/index.php')
  cy.get('#a1profmanufacture img.demothumb').click();
  cy.get('#login_line1').click();
  cy.get('[name="password"]').clear();
  cy.get('[name="password"]').type('demo');
  cy.get('#login-submit-wrapper input.button').click();
  cy.get('#mainmenutd_companies div.mainmenu').click();
  cy.get('#id-left div.blockvmenuimpair').click();
  cy.get('#id-left a[title="Nuevo Contacto/Dirección"]').click();
  cy.get('[name="lastname"]').click();
  cy.get('[name="lastname"]').type('Gómez');
  cy.get('[name="firstname"]').click();
  cy.get('[name="firstname"]').type('Maria Fernanda');
  cy.get('#select2-socid-container span.placeholder').click();
  cy.get('#mainbody input[aria-controls="select2-socid-results"]').type('. Emma Simon - MediLife{enter}');
  cy.get('#select2-civility_code-container').click();
  cy.get('#mainbody input[aria-controls="select2-civility_code-results"]').type('señora{enter}');
  cy.get('[name="poste"]').click();
  cy.get('#dragDropAreaTabBar tr:nth-child(5)').click();
  cy.get('[name="poste"]').click();
  cy.get('[name="poste"]').type('Gerente');
  cy.get('[name="address"]').click();
  cy.get('[name="address"]').type('Calle 58 #44-89');
  cy.get('[name="phone_pro"]').click();
  cy.get('[name="phone_pro"]').type('888855544');
  cy.get('[name="phone_perso"]').click();
  cy.get('[name="phone_perso"]').type('45556884');
  cy.get('[name="phone_mobile"]').click();
  cy.get('[name="phone_mobile"]').type('16556889');
  cy.get('[name="fax"]').click();
  cy.get('[name="fax"]').type('5555');
  cy.get('[name="email"]').click();
  cy.get('[name="email"]').type('usuario');
  cy.get('#select2-default_lang-container').click();
  cy.get('#mainbody input[aria-controls="select2-default_lang-results"]').type('Español (Colombia){enter}');
  cy.get('#id-right [name="add"]').click();
  
});


it('prueba correo inválido2', function() {
  cy.visit('https://demo.dolibarr.org/public/demo/index.php')
  cy.get('#a1profmanufacture img.demothumb').click();
  cy.get('#login_line1').click();
  cy.get('[name="password"]').clear();
  cy.get('[name="password"]').type('demo');
  cy.get('#login-submit-wrapper input.button').click();
  cy.get('#mainmenutd_companies div.mainmenu').click();
  cy.get('#id-left div.blockvmenuimpair').click();
  cy.get('#id-left a[title="Nuevo Contacto/Dirección"]').click();
  cy.get('[name="lastname"]').click();
  cy.get('[name="lastname"]').type('Gómez');
  cy.get('[name="firstname"]').click();
  cy.get('[name="firstname"]').type('Maria Fernanda');
  cy.get('#select2-socid-container span.placeholder').click();
  cy.get('#mainbody input[aria-controls="select2-socid-results"]').type('. Emma Simon - MediLife{enter}');
  cy.get('#select2-civility_code-container').click();
  cy.get('#mainbody input[aria-controls="select2-civility_code-results"]').type('señora{enter}');
  cy.get('[name="poste"]').click();
  cy.get('#dragDropAreaTabBar tr:nth-child(5)').click();
  cy.get('[name="poste"]').click();
  cy.get('[name="poste"]').type('Gerente');
  cy.get('[name="address"]').click();
  cy.get('[name="address"]').type('Calle 58 #44-89');
  cy.get('[name="phone_pro"]').click();
  cy.get('[name="phone_pro"]').type('888855544');
  cy.get('[name="phone_perso"]').click();
  cy.get('[name="phone_perso"]').type('45556884');
  cy.get('[name="phone_mobile"]').click();
  cy.get('[name="phone_mobile"]').type('16556889');
  cy.get('[name="fax"]').click();
  cy.get('[name="fax"]').type('5555');
  cy.get('[name="email"]').click();
  cy.get('[name="email"]').type('45');
  cy.get('#select2-default_lang-container').click();
  cy.get('#mainbody input[aria-controls="select2-default_lang-results"]').type('Español (Colombia){enter}');
  cy.get('#id-right [name="add"]').click();
  
});

it('prueba puestoTrabajo válido', function() {
  cy.visit('https://demo.dolibarr.org/public/demo/index.php')
  cy.get('#a1profmanufacture img.demothumb').click();
  cy.get('#login_line1').click();
  cy.get('[name="password"]').clear();
  cy.get('[name="password"]').type('demo');
  cy.get('#login-submit-wrapper input.button').click();
  cy.get('#mainmenutd_companies div.mainmenu').click();
  cy.get('#id-left div.blockvmenuimpair').click();
  cy.get('#id-left a[title="Nuevo Contacto/Dirección"]').click();
  cy.get('[name="lastname"]').click();
  cy.get('[name="lastname"]').type('Gómez');
  cy.get('[name="firstname"]').click();
  cy.get('[name="firstname"]').type('Maria Fernanda');
  cy.get('#select2-socid-container span.placeholder').click();
  cy.get('#mainbody input[aria-controls="select2-socid-results"]').type('. Emma Simon - MediLife{enter}');
  cy.get('#select2-civility_code-container').click();
  cy.get('#mainbody input[aria-controls="select2-civility_code-results"]').type('señora{enter}');
  cy.get('[name="poste"]').click();
  cy.get('#dragDropAreaTabBar tr:nth-child(5)').click();
  cy.get('[name="poste"]').click();
  cy.get('[name="poste"]').type('Gerente');
  cy.get('[name="address"]').click();
  cy.get('[name="address"]').type('Calle 58 #44-89');
  cy.get('[name="phone_pro"]').click();
  cy.get('[name="phone_pro"]').type('888855544');
  cy.get('[name="phone_perso"]').click();
  cy.get('[name="phone_perso"]').type('45556884');
  cy.get('[name="phone_mobile"]').click();
  cy.get('[name="phone_mobile"]').type('16556889');
  cy.get('[name="fax"]').click();
  cy.get('[name="fax"]').type('5555');
  cy.get('[name="email"]').click();
  cy.get('[name="email"]').type('usuario@correo.com');
  cy.get('#select2-default_lang-container').click();
  cy.get('#mainbody input[aria-controls="select2-default_lang-results"]').type('Español (Colombia){enter}');
  cy.get('#id-right [name="add"]').click();
  
});

it('prueba puestoTrabajo inválido', function() {
  cy.visit('https://demo.dolibarr.org/public/demo/index.php')
  cy.get('#a1profmanufacture img.demothumb').click();
  cy.get('#login_line1').click();
  cy.get('[name="password"]').clear();
  cy.get('[name="password"]').type('demo');
  cy.get('#login-submit-wrapper input.button').click();
  cy.get('#mainmenutd_companies div.mainmenu').click();
  cy.get('#id-left div.blockvmenuimpair').click();
  cy.get('#id-left a[title="Nuevo Contacto/Dirección"]').click();
  cy.get('[name="lastname"]').click();
  cy.get('[name="lastname"]').type('Gómez');
  cy.get('[name="firstname"]').click();
  cy.get('[name="firstname"]').type('Maria Fernanda');
  cy.get('#select2-socid-container span.placeholder').click();
  cy.get('#mainbody input[aria-controls="select2-socid-results"]').type('. Emma Simon - MediLife{enter}');
  cy.get('#select2-civility_code-container').click();
  cy.get('#mainbody input[aria-controls="select2-civility_code-results"]').type('señora{enter}');
  cy.get('[name="poste"]').click();
  cy.get('#dragDropAreaTabBar tr:nth-child(5)').click();
  cy.get('[name="poste"]').click();
  cy.get('[name="poste"]').type('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
  cy.get('[name="address"]').click();
  cy.get('[name="address"]').type('Calle 58 #44-89');
  cy.get('[name="phone_pro"]').click();
  cy.get('[name="phone_pro"]').type('888855544');
  cy.get('[name="phone_perso"]').click();
  cy.get('[name="phone_perso"]').type('45556884');
  cy.get('[name="phone_mobile"]').click();
  cy.get('[name="phone_mobile"]').type('16556889');
  cy.get('[name="fax"]').click();
  cy.get('[name="fax"]').type('5555');
  cy.get('[name="email"]').click();
  cy.get('[name="email"]').type('usuario@correo.com');
  cy.get('#select2-default_lang-container').click();
  cy.get('#mainbody input[aria-controls="select2-default_lang-results"]').type('Español (Colombia){enter}');
  cy.get('#id-right [name="add"]').click();
  
});


it('prueba puestoTrabajo inválido2', function() {
  cy.visit('https://demo.dolibarr.org/public/demo/index.php')
  cy.get('#a1profmanufacture img.demothumb').click();
  cy.get('#login_line1').click();
  cy.get('[name="password"]').clear();
  cy.get('[name="password"]').type('demo');
  cy.get('#login-submit-wrapper input.button').click();
  cy.get('#mainmenutd_companies div.mainmenu').click();
  cy.get('#id-left div.blockvmenuimpair').click();
  cy.get('#id-left a[title="Nuevo Contacto/Dirección"]').click();
  cy.get('[name="lastname"]').click();
  cy.get('[name="lastname"]').type('Gómez');
  cy.get('[name="firstname"]').click();
  cy.get('[name="firstname"]').type('Maria Fernanda');
  cy.get('#select2-socid-container span.placeholder').click();
  cy.get('#mainbody input[aria-controls="select2-socid-results"]').type('. Emma Simon - MediLife{enter}');
  cy.get('#select2-civility_code-container').click();
  cy.get('#mainbody input[aria-controls="select2-civility_code-results"]').type('señora{enter}');
  cy.get('[name="poste"]').click();
  cy.get('#dragDropAreaTabBar tr:nth-child(5)').click();
  cy.get('[name="poste"]').click();
  cy.get('[name="poste"]').type('🫡');
  cy.get('[name="address"]').click();
  cy.get('[name="address"]').type('Calle 58 #44-89');
  cy.get('[name="phone_pro"]').click();
  cy.get('[name="phone_pro"]').type('888855544');
  cy.get('[name="phone_perso"]').click();
  cy.get('[name="phone_perso"]').type('45556884');
  cy.get('[name="phone_mobile"]').click();
  cy.get('[name="phone_mobile"]').type('16556889');
  cy.get('[name="fax"]').click();
  cy.get('[name="fax"]').type('5555');
  cy.get('[name="email"]').click();
  cy.get('[name="email"]').type('usuario@correo.com');
  cy.get('#select2-default_lang-container').click();
  cy.get('#mainbody input[aria-controls="select2-default_lang-results"]').type('Español (Colombia){enter}');
  cy.get('#id-right [name="add"]').click();
  
});


it('prueba direccion válida', function() {
  cy.visit('https://demo.dolibarr.org/public/demo/index.php')
  cy.get('#a1profmanufacture img.demothumb').click();
  cy.get('#login_line1').click();
  cy.get('[name="password"]').clear();
  cy.get('[name="password"]').type('demo');
  cy.get('#login-submit-wrapper input.button').click();
  cy.get('#mainmenutd_companies div.mainmenu').click();
  cy.get('#id-left div.blockvmenuimpair').click();
  cy.get('#id-left a[title="Nuevo Contacto/Dirección"]').click();
  cy.get('[name="lastname"]').click();
  cy.get('[name="lastname"]').type('Gómez');
  cy.get('[name="firstname"]').click();
  cy.get('[name="firstname"]').type('Maria Fernanda');
  cy.get('#select2-socid-container span.placeholder').click();
  cy.get('#mainbody input[aria-controls="select2-socid-results"]').type('. Emma Simon - MediLife{enter}');
  cy.get('#select2-civility_code-container').click();
  cy.get('#mainbody input[aria-controls="select2-civility_code-results"]').type('señora{enter}');
  cy.get('[name="poste"]').click();
  cy.get('#dragDropAreaTabBar tr:nth-child(5)').click();
  cy.get('[name="poste"]').click();
  cy.get('[name="poste"]').type('Gerente');
  cy.get('[name="address"]').click();
  cy.get('[name="address"]').type('Calle 58 #44-89');
  cy.get('[name="phone_pro"]').click();
  cy.get('[name="phone_pro"]').type('888855544');
  cy.get('[name="phone_perso"]').click();
  cy.get('[name="phone_perso"]').type('45556884');
  cy.get('[name="phone_mobile"]').click();
  cy.get('[name="phone_mobile"]').type('16556889');
  cy.get('[name="fax"]').click();
  cy.get('[name="fax"]').type('5555');
  cy.get('[name="email"]').click();
  cy.get('[name="email"]').type('usuario@correo.com');
  cy.get('#select2-default_lang-container').click();
  cy.get('#mainbody input[aria-controls="select2-default_lang-results"]').type('Español (Colombia){enter}');
  cy.get('#id-right [name="add"]').click();
  
});

it('prueba direccion inválida', function() {
  cy.visit('https://demo.dolibarr.org/public/demo/index.php')
  cy.get('#a1profmanufacture img.demothumb').click();
  cy.get('#login_line1').click();
  cy.get('[name="password"]').clear();
  cy.get('[name="password"]').type('demo');
  cy.get('#login-submit-wrapper input.button').click();
  cy.get('#mainmenutd_companies div.mainmenu').click();
  cy.get('#id-left div.blockvmenuimpair').click();
  cy.get('#id-left a[title="Nuevo Contacto/Dirección"]').click();
  cy.get('[name="lastname"]').click();
  cy.get('[name="lastname"]').type('Gómez');
  cy.get('[name="firstname"]').click();
  cy.get('[name="firstname"]').type('Maria Fernanda');
  cy.get('#select2-socid-container span.placeholder').click();
  cy.get('#mainbody input[aria-controls="select2-socid-results"]').type('. Emma Simon - MediLife{enter}');
  cy.get('#select2-civility_code-container').click();
  cy.get('#mainbody input[aria-controls="select2-civility_code-results"]').type('señora{enter}');
  cy.get('[name="poste"]').click();
  cy.get('#dragDropAreaTabBar tr:nth-child(5)').click();
  cy.get('[name="poste"]').click();
  cy.get('[name="poste"]').type('Gerente');
  cy.get('[name="address"]').click();
  cy.get('[name="address"]').type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  cy.get('[name="phone_pro"]').click();
  cy.get('[name="phone_pro"]').type('888855544');
  cy.get('[name="phone_perso"]').click();
  cy.get('[name="phone_perso"]').type('45556884');
  cy.get('[name="phone_mobile"]').click();
  cy.get('[name="phone_mobile"]').type('16556889');
  cy.get('[name="fax"]').click();
  cy.get('[name="fax"]').type('5555');
  cy.get('[name="email"]').click();
  cy.get('[name="email"]').type('usuario@correo.com');
  cy.get('#select2-default_lang-container').click();
  cy.get('#mainbody input[aria-controls="select2-default_lang-results"]').type('Español (Colombia){enter}');
  cy.get('#id-right [name="add"]').click();
  
});


it('prueba direccion inválida2', function() {
  cy.visit('https://demo.dolibarr.org/public/demo/index.php')
  cy.get('#a1profmanufacture img.demothumb').click();
  cy.get('#login_line1').click();
  cy.get('[name="password"]').clear();
  cy.get('[name="password"]').type('demo');
  cy.get('#login-submit-wrapper input.button').click();
  cy.get('#mainmenutd_companies div.mainmenu').click();
  cy.get('#id-left div.blockvmenuimpair').click();
  cy.get('#id-left a[title="Nuevo Contacto/Dirección"]').click();
  cy.get('[name="lastname"]').click();
  cy.get('[name="lastname"]').type('Gómez');
  cy.get('[name="firstname"]').click();
  cy.get('[name="firstname"]').type('Maria Fernanda');
  cy.get('#select2-socid-container span.placeholder').click();
  cy.get('#mainbody input[aria-controls="select2-socid-results"]').type('. Emma Simon - MediLife{enter}');
  cy.get('#select2-civility_code-container').click();
  cy.get('#mainbody input[aria-controls="select2-civility_code-results"]').type('señora{enter}');
  cy.get('[name="poste"]').click();
  cy.get('#dragDropAreaTabBar tr:nth-child(5)').click();
  cy.get('[name="poste"]').click();
  cy.get('[name="poste"]').type('Gerente');
  cy.get('[name="address"]').click();
  cy.get('[name="address"]').type('😶‍🌫️');
  cy.get('[name="phone_pro"]').click();
  cy.get('[name="phone_pro"]').type('888855544');
  cy.get('[name="phone_perso"]').click();
  cy.get('[name="phone_perso"]').type('45556884');
  cy.get('[name="phone_mobile"]').click();
  cy.get('[name="phone_mobile"]').type('16556889');
  cy.get('[name="fax"]').click();
  cy.get('[name="fax"]').type('5555');
  cy.get('[name="email"]').click();
  cy.get('[name="email"]').type('usuario@correo.com');
  cy.get('#select2-default_lang-container').click();
  cy.get('#mainbody input[aria-controls="select2-default_lang-results"]').type('Español (Colombia){enter}');
  cy.get('#id-right [name="add"]').click();
  
});
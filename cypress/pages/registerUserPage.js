class registerUserPage{
    elements ={
        nombre : () => cy.get('#Name'),
        apellido : () => cy.get('#Surname'),
        fechaNacimiento : () => cy.get('#Birthday'),
        dni : () => cy.get('#ID_Number'),
        sexoBiologicoSelect : () => cy.get('#Gender'),
        generoSelect : () => cy.get('#IdentificationGenderType'),
        correo : () => cy.get('#txtEmail'),
        codArea : () => cy.get('#PhoneCode'),
        celular : () => cy.get('#PhoneNumber'),
        calle : () => cy.get('#Street'),
        numCalle : () => cy.get('#HouseNumber'),
        piso : () => cy.get('#Floor'),
        depto : () => cy.get('#Apartment'),
        codigoPostal : () => cy.get('#zipCode'),
        ciudad : () => cy.get('#btnSubmitHealthStep2'),
        btnSiguiente : () => cy.get('#btnRegister'),
    }

    //,correo,codArea,cel,calle,num,piso,detpo,codPostal,ciudad

    registerCliente(nombre,apellido,fechNaci,dni,sexoBio,genero,correo,codArea,celular,calle,numCalle,piso,detpo,codPostal,ciudad){
        this.elements.nombre().clear().type(nombre)
        this.elements.apellido().clear().type(apellido)
        this.elements.fechaNacimiento().clear().type(fechNaci)
        this.elements.dni().clear().type(dni)
        
        cy.get('#Gender')
        .select(sexoBio,{ force: true })

        cy.get('#IdentificationGenderType')
        .select(genero,{ force: true })
    
        this.elements.correo().clear().type(correo)
        this.elements.codArea().clear().type(codArea)
        this.elements.celular().clear().type(celular)
        this.elements.calle().clear().type(calle)
        this.elements.numCalle().clear().type(numCalle)
        this.elements.piso().clear().type(piso)
        this.elements.depto().clear().type(detpo)
        this.elements.codigoPostal().clear().type(codPostal)
        cy.contains(ciudad).should('exist')
        this.elements.btnSiguiente().click()

    }

}
export default registerUserPage;
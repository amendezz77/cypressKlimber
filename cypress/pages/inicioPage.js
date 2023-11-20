class inicioPage{

    elements ={
        titlePrecioPlan : () => cy.get('div.title.title-xl'),
        inputNombre : () => cy.get('#txtNameStep1'),
        inputNumero : () => cy.get('#PhoneNumberStep1'),
        btnCotiza : () => cy.get('#btnSubmitHealthStep1')
    }
    inputCliente(nombre, numero){
        this.elements.inputNombre().type(nombre)
        this.elements.inputNumero().type(numero)
        this.elements.btnCotiza().click()
    }

    viewTitle(title){
        cy.contains(title).should('exist')
    }
}
export default inicioPage;
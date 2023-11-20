class tarjetaCreditoPage{

    viewTitleTarjetCredito(title){
        cy.contains(title).should('exist')
    }
}
export default tarjetaCreditoPage
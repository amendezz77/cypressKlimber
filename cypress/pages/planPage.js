class planPage{
elements ={
    btnSiguente : () => cy.get('#btnSubmitHealthStep2')
}

clickBtnSiguiente(){
    this.elements.btnSiguente().click()
}
}
export default planPage;
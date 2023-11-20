import inicioPage from "../pages/inicioPage"
import planPage from "../pages/planPage"
import registerUserPage from "../pages/registerUserPage"
import tarjetaCreditoPage from "../pages/tarjetaCreditoPage"

describe("Emergencias",()=>{
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    it('Registro cliente',function(){
        cy.visit('/ar/Emergencias/Index')
        const inicioView = new inicioPage();
        inicioView.viewTitle("Conocé el precio de tu plan de salud en el próximo click!")
        inicioView.inputCliente('Ariel Mendez','54147007')
        
        const planView = new planPage();
        planView.clickBtnSiguiente();

        const registerUserView = new registerUserPage()
        registerUserView.registerCliente("Ariel","Mendez","21/09/1997", "40394194",'Masculino','Masculino',"mendez123arie@gmail.com","11","54147007","falsa","123","0","0","1768",'VILLA MADERO (GBA)')
        
        const tarjetaCreditoView = new tarjetaCreditoPage();
        tarjetaCreditoView.viewTitleTarjetCredito("Por favor, ingresá los datos de tu tarjeta de crédito")
    })
})
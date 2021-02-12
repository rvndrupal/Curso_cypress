cy.get("").first().then(($val)=>{
    const dato= $val.text()  //recupera el valor
    expect(dato.to.eq("texto a esperar"))
}).cy.console.log("Se encontro el texto ok ")



  // cy.get("#id_alert_warning").first().then(($val)=>{
        //     const dato= $val.text()  //recupera el valor
        //     cy.log(dato)
        //     //expect(dato.to.equal("La CURP no se encontró, capture la información de la persona."))
        //     expect(dato).to.be.equal("xLa CURP no se encontró, capture la información de la persona.\n")
        // }).log("Se encontro el texto ok ")

        const esta=cy.get("#id_alert_warning").should('be.visible')
        cy.log(esta)

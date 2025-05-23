sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], 
        /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */

    function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("com.training.exer3pebenito.controller.MainView", {
        onInit() {
        },

        onAddItem: function (){
            this.fnDisplayMsg("Add button pressed");
            var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
                var sMsg = oTextBundle.getText("addButtonMsg");
                this.fnDisplayMsg(sMsg);

        },

        fnDisplayMsg: function (sMsg){
            MessageToast.show(sMsg);
        },

        onChangeMOP: function (oEvent) {
            var sSelectedKey = oEvent.getParameter("selectedItem").getProperty("key");
            var oMobileLabel = this.getView().byId("idLblPhone");
            var oMobileInput = this.getView().byId("idInputPhone");
            var oCreditCardLabel = this.getView().byId("idLblCC");
            var oCreditCardInput = this.getView().byId("idInputCC");

            if (sSelectedKey === "GCASH"){
                // show the mobile field
                oMobileLabel.setVisible(true);
                oMobileInput.setVisible(true);
            } else {
                oMobileLabel.setVisible(false);
                oMobileInput.setVisible(false);
            }

            if (sSelectedKey === "CC"){
                // show the credit card field
                oCreditCardLabel.setVisible(true);
                oCreditCardInput.setVisible(true);
            } else {
                oCreditCardLabel.setVisible(false);
                oCreditCardInput.setVisible(false);
            }
        },

        onPressCheckout: function (){
            var oInputFNameValue = this.getView().byId("idInptFName").getValue();
            var oInputLNameValue = this.getView().byId("idInptLName").getValue();
            // Check if first name and last name is blank
            if (oInputFNameValue === "" || oInputLNameValue === ""){
                sap.m.MessageToast.show("Required Field is blank"); 
            }
        },


    });
});
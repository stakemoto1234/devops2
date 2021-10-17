sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,MessageToast) {
		"use strict";

		return Controller.extend("simpleui5.controller.View1", {
			onInit: function () {

            },
            onCallRest: function(){
                $.ajax({
                    method:"GET",
                    url:"https://yuytest1.f5.si:3002/test1",
                    dataType:"JSON"
                }).done(function(data,textStatus,jqXHR){

                    console.log("http status:" + jqXHR.status);
                    var jsonData = JSON.stringify(data);
                    MessageToast.show(jsonData);

                }).fail(function(jqXHR, textStatus, errorThrown){
                    console.log("http status:" + jqXHR.status);
                    console.log(textStatus);
                    console.log(errorThrown);
                });
            }
		});
	});

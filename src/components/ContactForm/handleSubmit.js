import React from "react";

const handleSubmit = (e) => {
    e.preventDefault();
    let data = new FormData(e.target);
    let params = {};
    data.forEach(function (value, key) {
      params[key] = value;
    });
    if (window.AMOCRM) {
        window.AMOCRM.forms.setMeta(params);
        window.AMOCRM.forms.submit({ id: "1113646" });
    } else {
        console.error("AMOCRM is not defined. Make sure the amoforms.js script is properly loaded.");
    }
};
  
export {handleSubmit};

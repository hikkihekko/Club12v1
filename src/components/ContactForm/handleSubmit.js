import React from "react";

const handleSubmit = (e) => {
    e.preventDefault();
    document.querySelector("#sub").value = "Submitting...";
    let data = new FormData(e.target);
    fetch('https://script.google.com/macros/s/AKfycbzqPaHWqJ1S0WMZNnnf96gU_23mb9WOs1K8GwOlYUnujNoPGW4HpTwLzxD0A1h9Qz4VOA/exec', {
      method: "POST",
      body: data
    })
      .then(res => res.text())
      .then(data => {
        document.querySelector("#msg").innerHTML = data;
        document.querySelector("#sub").value = "Submit"
      });
  };
  
  export {handleSubmit};
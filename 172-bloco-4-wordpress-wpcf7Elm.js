var wpcf7Elm = document.querySelector('.wpcf7');
wpcf7Elm.addEventListener('wpcf7mailsent', enviarDados);

function enviarDados() {
  let endpointHash = "https://app.pipe.run/webservice/integradorJson?hash=HASH_AQUI";

  let name = document.getElementById("idName").value;
  let company = document.getElementById("idCompany").value;
  let email = document.getElementById("idEmail").value;
  let assunto = document.getElementById("idAssunto").value;
  let mensagem = document.getElementById("idMsg").value;
       
  function configPost(method,body) {
    return {
      "method": method,
      "headers": { "Content-Type": "application/json"},
      "body": JSON.stringify(body)
    };
  }

  let rules = {
    "update": true,
    "status": "open",
    "equal_pipeline": true,
    "filter_status_update": "open"
  };

  let lead = [{
    "id": email,
    "title": assunto + " - " + name,
    "company": company,
    "name": name,
    "email": email,
    "notes": [
      "Mensagem: " + mensagem
    ]
  }];

  let dataToSend = {
    "rules": rules,
    "leads": lead
  };
        
  fetch(endpointHash, configPost("POST", dataToSend))
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
}

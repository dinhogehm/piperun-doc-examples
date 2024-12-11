// Integrador JSON PipeRun.

document.getElementById('button').onclick = function(event) {
    // ENDPOINT
    let endpoint = "https://app.pipe.run/webservice/integradorJson?hash=aaaa0000-0a00-0a0a-0000-0aa000a00aa0"

    // RULES
    let rules = {
        "update": true,
        "equal_pipeline": true,
        "filter_status_update": "open"
    }

    // LEAD
    let lead = [{
        "id": document.getElementsByName('email')[0].value,
        "title": "CRM PipeRun Landing Page",
        "user": "suporte@crmpiperun.com",
        "name": document.getElementsByName('name')[0].value,
        "email": document.getElementsByName('name')[0].value,
        "mobile_phone": document.getElementsByName('phone')[0].value,
        "last_conversion": {
            "source": "Site_CRMPipeRun"
        },
        "custom_fields": {
            "segmento": (document.getElementsByName('segmento')[0].value ? document.getElementsByName('segmento')[0].value : "Não Informado")
        },
        "tags": [
            "Contato"
        ],
        "notes": [
            "Contato enviado através do formulário de consultoria técnica do CRM PipeRun."
        ]
    }]

    // DATA
    let dataToSend = {
        "rules": rules,
        "leads": lead
    }

    // Requisição POST
    fetch(endpoint, {
        headers: {
            'Content-Type': 'text/plain'
        },
        method: "POST",
        body: JSON.stringify(dataToSend)
    }).then((response) => { 
        // Retorno do Ajax
        console.log(response);
        ga('send','event','form','contato','fale-consultor');
    }).catch((error) => { 
        console.log(error);
    });
};

// METODO PARA COLETAR DADOS DO FORMULARIO E ENVIAR PARA O PIPERUN, COM DADOS DE UTM.
// dependencia do google analytics.

// URL de referencia;
// https://crmpiperun.com/?utm_source=google&utm_medium=cpc&utm_campaign=institucional

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);

    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

// Função para formatação de data.
function formatDate(date) {
    return (date.getDate() < 10 ? '0' : '') + date.getDate()
    + '/' + 
    (date.getMonth() + 1)
    + '/' + 
    date.getFullYear() + ' ' +
    date.getHours() + ':' + date.getMinutes();
}

const form = document.getElementsByClassName('elementor-form')[0];
form.addEventListener('submit', enviarDados);

function enviarDados() {

    // ENDPOINT
    let endpoint = "https://app.pipe.run/webservice/integradorJson?hash=aaaa0000-0a00-0a0a-0000-0aa000a00aa0"

    let dataHora = formatDate(new Date());
    let name = jQuery('#form-field-nome').val();
    let email = jQuery('#form-field-email').val();
    let company = jQuery('#form-field-empresa').val();
    let phone = jQuery('#form-field-phone').val();
    let job_title = jQuery('#form-field-cargo').val();
    let message = jQuery('#form-field-message').val();
    
    let utm_source = getParameterByName('utm_source');
    let utm_medium = getParameterByName('utm_medium');
    let utm_campaign = getParameterByName('utm_campaign');
    let utm_term = getParameterByName('utm_term');
    let utm_content = getParameterByName('utm_content');
    let utm_position = getParameterByName('utm_position');
    let utm_device = getParameterByName('utm_device');
    let utm_match = getParameterByName('utm_match');
    let utm_creative = getParameterByName('utm_creative');

    // RULES
    let rules = {
        "update": true,
        "status": "open",
        "equal_pipeline": true,
        "filter_status_update": "open",
    }

    // LEAD
    let lead = [{
        "id": email,
        "title": dataHora + " " + company,
        "name": name,
        "email": email,
        "company": company,
        "mobile_phone": phone,
        "job_title": job_title,
        "last_conversion": {
            "source" : utm_source || "Site CRM PipeRun"
        },
        "custom_fields": {
            "url_conversao": location.href,
            "utm_source": utm_source,
            "utm_medium": utm_medium,
            "utm_campaign": utm_campaign,
            "utm_term": utm_term,
            "utm_content": utm_content,
            "utm_position": utm_position,
            "utm_device": utm_device,
            "utm_match": utm_match,
            "utm_creative": utm_creative
        },
        "notes" : [
            "Título: " + dataHora + " Fale com Consultor CRM</br>" +
            "E-mail: " + email + "</br>" +
            "Nome: " + name + "</br>" +
            "WhatsApp: " + phone + "</br>" +
            "Empresa: "  + company + "</br>" +
            "Mensagem: "  + message + "</br>" +
            "utm_source: " + utm_source + "</br>" +
            "utm_medium: " + utm_medium + "</br>" +
            "utm_campaign: " + utm_campaign + "</br>" +
            "utm_term: " + utm_term + "</br>" +
            "utm_content: " + utm_content + "</br>" +
            "utm_position: " + utm_position + "</br>" +
            "utm_device: " + utm_device + "</br>" +
            "utm_match: " + utm_match + "</br>" +
            "utm_creative: " + utm_creative
        ]
    }]

    jQuery.each(lead[0], function(index, value) {
        if (typeof value == 'string' && value == '') {
            delete lead[0][index]
        }
    }); 

    // DATA
    let dataToSend = {
        "rules": rules,
        "leads": lead
    }
    jQuery.ajax({
        type: "post",
        data: JSON.stringify(dataToSend),
        dataType: "json",
        url: endpoint, 
        success: function(data) {
            ga('send', 'event', 'form', 'contato', 'captura_lead_corporativo');
        }
    });
}

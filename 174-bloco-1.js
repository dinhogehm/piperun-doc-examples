document.getElementById('lp-pom-button-196').addEventListener('click', function () {
    enviarDados();
});

// sessionStart.min.js
function setCookie(name, value, exdays = 1) {
    var expires;
    var date;
    var value;
    date = new Date();
    date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000));
    expires = date.toUTCString();
    document.cookie = name + "=" + value + "; expires=" + expires + "; path=/"
}

function getCookie(name) {
    var c_name = document.cookie;
    if (c_name != undefined && c_name.length > 0) {
        var posCookie = c_name.indexOf(name);
        if (posCookie >= 0) {
            var hashOportunidade = '';
            var value = "; " + document.cookie;
            var parts = value.split("; " + name + "=");
            if (parts.length == 2) {
                hashOportunidade = parts.pop().split(";").shift()
            }
            return hashOportunidade
        } else {
            return !1
        }
    }
}

function eraseCookie(name) {
    setCookie(name, -1)
}

function getRequestURL(name) {
    if (name = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(location.search)) return decodeURIComponent(name[1])
}

function setSessionStart(sessionStartName, arTerms = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'utm_position', 'utm_device', 'utm_match', 'utm_creative', 'plano', 'tipo']) {
    arTerms.forEach(function (termo) {
        var nameTermo = sessionStartName + '_' + termo;
        sessionStartCookie[termo] = '';
        sessionStart[termo] = '';
        var termValue = ' ';
        var boSet = !1;
        if (getRequestURL(termo)) {
            termValue = getRequestURL(termo);
            boSet = !0
        }
        if (!getCookie(nameTermo)) {
            boSet = !0
        }
        if (boSet) {
            setCookie(nameTermo, termValue)
        }
        termValue = getCookie(nameTermo);
        if (termValue == '') {
            termValue = ' '
        }
        sessionStartCookie[termo] = termValue;
        sessionStart[termo] = termValue
    })
}

var sessionStartCookie = new Object();
var sessionStart = new Object();

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    if (sessionStart && sessionStart[name]) {
        return (sessionStart[name] === null || sessionStart[name] === "" || sessionStart[name] === " " || sessionStart[name] === undefined) ? "" : sessionStart[name];
    }

    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function datePrint() {
    let date = new Date();
    let day = (date.getDate() < 10 ? '0' : '') + date.getDate()
    let month = (date.getMonth() < 10 ? '0' : '') + parseInt(date.getMonth() + 1);
    let year = date.getFullYear();
    let hour = (date.getHours() < 10 ? '0' : '') + date.getHours();
    let minute = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    return day + '/' + month + '/' + year + ' ' + hour + ':' + minute;
}

function enviarDados() {
    // ENDPOINT
    let hashEtapaFunil = "XXXXXXX SUA HASH DE FUNIL AQUI XXXXXXXX";
    let endpoint = "https://app.pipe.run/webservice/integradorJson?hash=" + hashEtapaFunil;

    let dataHora = datePrint();
    let name = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('celular').value;
    phone = String(phone).replace(/\D/g, '');
    let segment = document.getElementById('segmento').value;
    let company = document.getElementById('empresa').value;
    let jobTitle = document.getElementById('cargo').value;
    let pretend = document.getElementById('voce_pretende').value;

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
        "equal_pipeline": false,
        "validate_cpf": false,
        "validate_cnpj": false,
        "situation": "unfreezed,undeleted",
        "status": "open",
        "filter_status_update": "open",
        "filter_situation_update": "freezed,unfreezed,undeleted"
    }

    // LEAD
    let lead = [{
        "id": email,
        "title": dataHora + " " + "Fale com um Consultor",
        "name": name,
        "email": email,
        "job_title": jobTitle,
        "company": company,
        "mobile_phone": phone,
        "last_conversion": {
            "source": utm_source || "Formulário >> Fale com um Consultor"
        },
        "custom_fields": {
            "URL Conversao": location.href,
            "Segmento": segment,
            "Você pretende": pretend,
            "Web Whatsapp - Pessoa": phone,
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
        "notes": [
            "Título: " + dataHora + " Fale com um Consultor</br>" +
            "E-mail: " + email + "</br>" +
            "Nome: " + name + "</br>" +
            "Celular: " + phone + "</br>" +
            "Segmento: " + segment + "</br>" +
            "Você pretende: " + pretend + "</br>" +
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
    }];

    Object.entries(lead[0]).map((index, value) => {
        if (typeof value === 'string' && value === '') {
            delete lead[0][index]
        }
    });

    // DATA
    let dataToSend = {
        "rules": rules,
        "leads": lead
    }

    fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }, body: JSON.stringify(dataToSend)
    });
}
</script>

{
    "rules": {
        "update": true,
        "equal_pipeline": false,
        "validate_cpf": true,
        "validate_cnpj": true,
        "situation": "freezed,undelete",
        "status": "open",
        "filter_status_update": "open",
        "filter_situation_update": "freezed"
    },
    "leads": [{
        "user": "user@teste.com",
        "id": "pessoa_email@email.com",
        "title": "Teste OP via Json",
        "name": "Pessoa 123",
        "email": "pessoa_email@email.com",
        "cpf": "0123456789",
        "person_phone_main": "(51) 33333334", 
        "personal_phone": "(51) 33333333",
        "mobile_phone": "(51) 999999999",
        "company": "Empresa 456",
        "cnpj": "9876543210",
        "company_phone_main": "(51) 33333334",
        "city_name": "Porto Alegre",
        "city_state": "RS",
        "last_conversion": {
            "source": "Formulário Site"
        },
        "custom_fields": {
            "Campo customizado teste 1": "Sim",
            "Campo customizado teste 2": "(51) 123456789"
        },
        "tags": [
            "Tag teste 1",
            "Tag teste 2"
        ],
        "notes": [
            "Lead obtido através da integração com o formulário XYZ do site ABC."
        ]
    }]
}

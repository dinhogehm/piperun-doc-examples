{
  "id": 1234, // ID da oportunidade
  "title": "Oportunidade Exemplo", // Título da oportunidade
  "created_at": "2021-01-01 14:48:02", // Data da criação da oportunidade
  "closed_at": null, // Data de fechamento da oportunidade
  "probably_closed_at": null, // Data de previsão de fechamento da oportunidade
  "last_contact": null, // Data de último contato da oportunidade
  "description": null, // Descrição da oportunidade
  "observation": null, // Observação da oportunidade
  "status": 0, // Status da oportunidade (0 = Aberto / 1 = Ganha / 3 = Perdida)
  "deleted": 0, // Situação Lixeira da oportunidade (0 = Fora da lixeira / 1 = Na lixeira)
  "freezed": 0, // Situação Congelada da oportunidade (0 = Não congelada / 1 = Congelada)
  "frozen_at": null, // Data em que a oportunidade foi congelada
  "value": "0.00", // Valor total da oportunidade em produtos e/ou serviços (P&S)
  "value_mrr": "0.00", // Valor total da oportunidade em recorrência (MRR)
  "hash": "abc123", // Hash da oportunidade (obtida através da exportação)
  "order": 1, // Ordem numérica na listagem da etapa do funil
  "probability": null, // Probabilidade de fechamento da oportunidade
  "updated_at": null, // Data da última alteração da oportunidade
  "stage_changed_at": null, // Data da última mudança de etapa da oportunidade
  "lead_time": null, // Lead time da oportunidade (tempo entre a criação da oportunidade e seu fechamento)
  "temperature": null, // Temperatura da oportunidade (1= Muito quente / 2= Quente / 3= Morna / 4= Fria)
  "lost_reason": { // Motivo de perda da oportunidade
  	"id": null, // ID do motivo de perda
    "name": null, // Nome do motivo de perda
    "description": null // Descrição do motivo de perda da oportunidade
  },
  "company": { // Array contendo dados da empresa da oportunidade
  	"id": 1234, // ID da empresa
    "ie": null, // Inscrição estadual da empresa
    "name":"abc123", // Nome fantasia da empresa
    "cnpj": null, // CNPJ da empresa
    "hash": "abc123", // Hash única da empresa
    "logo": null,  // Logo da empresa
    "open_at": "2000-01-01", // Data de fundação da empresa
    "country": null, // País da empresa
    "website": null, // Website da empresa
    "email_nf": null, // E-mail para envio de nota fiscal da empresa
    "created_at":"2017-01-01 22:11:59", // Data de cadastro da empresa
    "observation": null, // Observações da empresa
    "company_name": null,  // Razão social da empresa
    "address": { // Array contendo dados de endereço da empres
    	"street": null, // Nome da rua do endereço da empresa
      "postal_code": null, // CEP do endereço da empresa
      "number": null, // Número do endereço da empresa
      "complement": null, // Complemento do endereço da empresa
      "district": null // Bairro do endereço da empresa
    },
    "size": null, // Tamanho da empresa
    "cnae": "123", // Codigo do CNAE primário da empresa
    "facebook": null, // URL da página do Facebook da empresa
    "linkedin": null, // URL da página do Linkedin da empresa
    "status_touch": null, // Modelo touch da empresa (1= High touch / 2= Middle touch / 3= Low touch / 4= Tech touch / 5= Now touch)
    "company_situation": "null", // Situação da empresa (1= Lead / 2= Lead Suspect / 3= Lead Qualificado Marketing (MQL) / 4= Lead Qualificado Vendas (SQL) / 5= Lead Aceito Vendas (SAL) / 6= Lead Prospects (OPs) / 7= Cliente ativo / 8= Cliente inativo / 9= Cliente perdido (Churn))
    "city": { // Array contendo dados cidade e estado da empresa
      "id": 1234, // ID da cidade da empresa
      "name": "abc", // Nome da cidade da empresa
      "uf": "abc" // UF da cidade da empresa
    },
    "segment": { // Array contendo os dados do segmento da empresa
      "id": 1234, // ID do segmento da empresa
      "name": "abc", // Nome do segmento da empresa
      "sector": null // Setor do segmento da empresa
    },
    "user": { 
      "id":1234, // ID do usuário
      "name":"abc" // Nome do usuário
    },
    "cnaes": [{ // Array contendo os dados de CNAE da empresa
      "id": 1234, // ID do CNAE da empresa da oportunidade
      "code": "123", // Código do CNAE da empresa da oportunidade
      "description": "abc123" // Descrição do CNAE da empresa da oportunidade
    }],
    "contact_emails": [{ // Array contendo os dados de e-mail da empresa
      "id": 1234, // ID do e-mail de contato da empresa da oportunidade
      "address": "teste@email.com" // Endereço do e-mail de contato da empresa da oportunidade
    }],
    "contact_phones": [{ // Array contendo os dados de telefone da empresa
      "id": 1234, // ID do telefone de contato da empresa
      "number": "123" // Número do telefone de contato da empresa
    }],
    "economic_groups": [{ // Array contendo informações do grupo econômico vinculado à empresa
    "id": 123, // ID do grupo econômico vinculado à empresa
    "name": "abc123" // Nome do grupo econômico vinculado à empresa
    }],
    "fields": [{ // Array contendo informações dos campos customizados vinculados a empresa
      "id": 1234, // ID do campo customizado
      "nome": "abc123", // Nome do campo customizado
      "valor": null, // Valor do campo customizado
      "tipo": 1, // Tipo do campo customizado (1= Texto / 3= Única escolha / 5= Texto longo / 6= Múltipla escolha / 7= Chat do Skype / 8= Chamada do Skype / 9= Cadastro de link / 10= Data / 11= Número de WhatsApp / 12= Cidade / 13= Fórmula / 14= Numérico / 15= Upload de arquivo)
      "valores": null 
     }],
      "forms": [] // Formulários vinculados à empresa da oportunidade 
  },
  "person": {
    "id": 1234,  // ID da pessoa de contato vinculada a oportunidade
    "hash": "abc123", // Hash da pessoa vinculada a oportunidade
    "name": "abc123", // Nome da pessoa vinculada a oportunidade
    "cpf": null, // CPF da pessoa vinculada a oportunidade
    "job_title": "abc123", // Cargo da pessoa vinculada a oportunidade
    "rdstation": "URL public do rdstation",  // Link do RDStation da pessoa vinculada a oportunidade
    "birth_day": null, // Data de nascimento da pessoa vinculada a oportunidade
    "gender": null, // Gênero da pessoa vinculada a oportunidade
    "website": null, // URL do website da pessoa vinculada a oportunidade
    "facebook": null, // URL do perfil do Facebook da pessoa vinculada a oportunidade
    "linkedin": null, // URL do perfil do Linkedin da pessoa vinculada a oportunidade
    "avatar": null, // Avatar da pessoa vinculada a oportunidade
    "observation": null, // Observações da pessoa vinculada a oportunidade
    "address": { // Array contendo endereço da pessoa vinculada a oportunidade
      "street": null, // Nome da rua do endereço da pessoa vinculada a oportunidade
      "postal_code": null, // CEP do endereço da pessoa vinculada a oportunidade
      "number": null, // Número do endereço da pessoa vinculada a oportunidade
      "complement": null, // Complemento do endereço da pessoa vinculada a oportunidade
      "district": null // Bairro do endereço da pessoa vinculada a oportunidade
    },
    "company": { // Array contendo os dados da empresa vinculada à pessoa da oportunidade
      "id": 1234, // ID da empresa vinculada a pessoa da oportunidade
      "name": "123", // Nome da empresa vinculada a pessoa da oportunidade
      "cnae": "123", // CNAE da empresa vinculada a pessoa da oportunidade
    	"fields": [{ // Array contendo dados do campo customizado
      	"id": 1234, // ID do campo customizado
      	"nome": "abc123", // Nome do campo customizado
      	"valor": "abc123", // Valor do campo customizado
      	"tipo": 1, // Tipo do campo customizado (1= Texto / 3= Única escolha / 5= Texto longo / 6= Múltipla escolha / 7= Chat do Skype / 8= Chamada do Skype / 9= Cadastro de link / 10= Data / 11= Número de WhatsApp / 12= Cidade / 13= Fórmula / 14= Numérico / 15= Upload de arquivo)
      	"valores": null
      }]
    }
  },
  "tags":[{ // Arrays contendo informações sobre as tags da portunidade
         "id": 1223, // ID da tag
         "name": "abc123", // Nome da tag
         "color": "warning" // Cor da tag
      }
	],
  "stage": {
  	"id": 1234, // ID da etapa do funil da oportunidade
    "name": "abc123" // Nome da etapa do funil da oportunidade
  },
  "pipeline": {
    "id": 1234, // ID do unil em que se encontra a oportunidade
    "name":"abc123" // Nome do funil em que se encontra a oportunidade
  },
  "origin":{ 
    "id": 1234, // ID da origem da oportunidade
    "name": null, // Nome da origem da oportunidade
    "origin":{
      "id": null,  // ID da origem em caso de sub-origem da oportunidade
      "name": null  // Nome da sub-origem da oportunidade
    }
  },
  "user": { 
    "id": 1, // ID do usuário dono da oportunidade
      "name": "abc", // Nome do usuário dono da oportunidade
      "avatar": null // Foto do usuário dono da oportunidade
  },
  "city": {
    "id": null,  // ID da cidade da oportunidade
    "name": null,  // Nome da cidade da oportunidade
    "uf": null  // UF da cidade da oportunidade
  },
  "proposals": [{ // Array contendo informações da proposta
    "id": 123, // ID da proposta
    "hash": "123abc", // Hash da proposta
    "value": "00,00", // Valor da proposta em produtos e/ou serviços (P&S)
    "status": 0, // Status da proposta (0= Aberta / 1= Aprovada / 2= Negada / 3= Cancelada / 4= Aguardando assinatura / 5= Assinada)
    "created_at": "2021-07-14T14:32:39.000000Z", // Data de criação da proposta
    "valid_until": "2021-07-21", // Data de validade da proposta (formato YYYY-MM-DD)
    "payment_method_mrr": null, // Forma de pagamento recorrência (MRR)
    "value_mrr": "0.00", // Valor da proposta em recorrência (MRR)
    "due_date_mrr": null, // Data de vencimento da recorrência (MRR)
    "first_payment_mrr_date": null, // Data do primeiro pagamento da recorrência (MRR)
    "user":{ // Usuário responsável pela proposta
      "id": 1234, // ID do usuário responsável pela proposta
      "name":"xxxxxx" // Nome do usuário responsável pela proposta    
    },
    "shippingCompany": [], // Dados da transportadora
    "billingCompany": [], // Dados da empresa de faturamento
    "triangularCompany": [], // Empresa de entrega triangular
    "brand":{ // Dados da empresa (marca)
      "id":1, // ID da empresa (marca)
      "ie": null, // Inscrição estadual da empresa (marca)
      "name":"abc", // Nome fantasia da empresa (marca)
      "cnpj": null, // CNPJ da empresa (marca)
      "hash": "123abc", // Hash da empresa  (marca)
      "logo": null,  // Logo da empresa  (marca)
      "open_at": "2000-01-01", // Data de fundação da empresa  (marca)
      "website": null, // Website da empresa  (marca)
      "email_nf": null, // E-mail para envio da nota fiscal  (marca)
      "created_at": "2017-01-01 22:11:59", // Data de cadastro da empresa  (marca)
      "observation": null, // Observações da empresa  (marca)
      "company_name": null,  // Razão social da empresa (marca)
      "address":{ // Array contendo dados de endereço da empresa  (marca)
        "street": null, // Nome da rua do endereço da empresa  (marca)
        "postal_code": null, // CEP do endereço da empresa  (marca)
        "number": null, // Número do endereço da empresa  (marca)
        "complement": null, // Complemento do endereço da empresa  (marca)
        "district": null // Bairro do endereço da empresa  (marca)
      },
      "size": null, // Tamanho da empresa  (marca)
      "cnae": "123", // Código do CNAE primário da empresa  (marca)
      "facebook": null, // URL da página do Facebook da empresa  (marca)
      "linkedin": null, // URL da página do Linkedin da empresa  (marca)
      "status_touch": null, // Modelo touch da empresa  (marca) (1= High touch / 2= Middle touch / 3= Low touch / 4= Tech touch / 5= Now touch)
      "company_situation": "Cliente ativo" // Situação da empresa (marca)
    },
    "items": [{
      "id": 1234, // ID do item (P&S / MRR)
      "name": "abc123", // Nome do item (P&S / MRR)
      "reference": null, // Referência do item (P&S / MRR)
      "code": null, // Código do item (P&S / MRR)
      "category": null, // Categoria do item (P&S / MRR)
      "characteristics": [], // Caracteristicas do item (P&S / MRR) na proposta
      "type": 1, // Tipo de item (0= Produto / 1= MRR / 2= Serviço)
      "cost": null, // Custo do item (P&S / MRR) na proposta se não do cadastro
      "value": 1234, // Valor do item (P&S / MRR) na proposta
      "ipi_tax": 1234, // Taxa de IPI aplicada no item (P&S / MRR) na proposta
      "quantity": 1, // Quantidade de itens na proposta
      "discount": 1.5, // Desconto aplicado na proposta para o item (P&S / MRR)
      "commission_final_value": 0, // Valor total de comissão do item (P&S / MRR) na proposta
      "type_of_charge": 2, // Em caso de item do tipo recorrência (MRR), é o tipo de cobrança para pagamento
      "charge_name": "Mensal", // Nome do tipo de cobrança
      "duration": 12, // Em caso de item do tipo recorrência (MRR), duração do produto
      "contract_start_at": null, // Em caso de item do tipo recorrência (MRR), , data de início da duração do contrato
      "contract_end_at": null,// Em caso de item do tipo recorrência (MRR), data final da duração do contrato
      "comissao": null,
      "description": "abc123", // Descrição do item na proposta
      "discount_type": 0, // Tipo de desconto aplicado (0= Percentual / 1= Absoluto)
      "fix_commission_value": null, // Valor absoluto da comissão aplicada
      "commission_incidence_type": 1, // Em caso de item do tipo recorrência (MRR), tipo de incidencia de comissão (1= 1ª mensalidade / 2= 12 primeiras mensalidades / 3= 1ª e última mensalidade / 4= todas as mensalidades)
      "commission_incidence_name": "1ª mensalidade" // Em caso de item do tipo recorrência (MRR), nome de incidência de comissão
      }
    ],
    "parcels": [{ // Arrays contendo as informações das parcelas de produtos e serviços (P&S)
      "id": "00", // ID da parcela de P&S
      "value": "0.0000", // Valor da parcela  de P&S
      "parcel": "0", // Tipo de parcela  de P&S
      "discount": null, // Desconto  de P&S
      "commission_final_value": 0, // Valor total da comissão referente a parcela de P&S
      "due_date": "2018-01-01", // Data de vencimento da parcela  de P&S
      "account_id": "1", // ID da conta
      "proposal_id": "000", // ID da proposta
      "payment_method_type_id": { // ID do tipo de método de pagamento
        "id": "1", // ID do método de pagamento
        "name": "abc" // Nome do método de pagamento
    	}
     }],
    "parcels_mrr": [{ // // Arrays contendo as informações das parcelas de recorrência (MRR)
      "id": 894879, // ID da parcela de recorrência (MRR)
      "value": "51.2200", // Valor da parcela de recorrência (MRR)
      "parcel": "1", // Número da parcela de recorrência (MRR)
      "discount": null, // Desconto aplicado na parcela de recorrência (MRR)
      "commission_final_value": "0.00", // Valor real da comissão aplicada na parcela de recorrência (MRR)
      "due_date": "2022-07-28", // Data de vencimento da recorrência (MRR)
      "account_id": 9552, // ID da conta
      "proposal_id": 500597, // ID da proposta
      "payment_method_type_id": { // ID do tipo de método de pagamento
        "id": 11, // ID do método de pagamento
        "name": "PIX" //  Nome do método de pagamento
      }
    }]
  }],
  "activities": [], // Atividades que estão vinculadas a oportunidade
  "files": [],
  "fields": [{// Campos customizados da oportunidade
    "id": 1234, // ID do campo customizado da oportunidade
    "nome": "abc123", // Nome do campo customizado da oportunidade
    "valor": null, // Valor do campo customizado da oportunidade
    "tipo": 6, // Tipo de campo customizado
    "valores":"[\"abc123\",\"abc123\",\"abc123\"]" // Valores utilizados nos campos de seleção
  }],
  "forms": [], // Formulários vinculados com a oportunidade
  "action": { // Dados da ação automática do PipeRun
    "create": "2021-07-13T17:48:06.816034Z", // Data do disparo da ação automática
    "pipeline":"abc123", // Nome do funil que foi disparada a ação automática
    "stage": "Qualquer etapa", // Nome da(s) etapa(s) que foi disparada a ação automática
    "trigger_type": "Uma oportunidade entrar na etapa selecionada", // Tipo de gatilho da ação automática
    "user": null // Usuário que disparou a ação, caso tenha sito disparada manualmente
   }
}

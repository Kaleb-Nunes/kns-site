def gerar_diagnostico(respostas):
    """Analisa as dores do cliente com base no formulário KNS."""
    dores = []
    if respostas['possui_site'] == 'Não':
        dores.append("Perda de clientes que buscam no Google em Balneário Camboriú.")
    if 'Reduzir atendimento manual' in respostas['objetivos']:
        dores.append("Sobrecarga da equipe com perguntas repetitivas no WhatsApp.")
    return dores

def exibir_proposta(cliente, plano="PROFISSIONAL"):
    valor = "1.500,00" if plano == "PROFISSIONAL" else "800,00"
    print(f"\n--- PROPOSTA KNS PARA: {cliente} ---")
    print(f"Investimento: R$ {valor}")
    print("Condições: 50% entrada / 50% entrega")
    print("---------------------------------------")

# Teste rápido
cliente_teste = {'possui_site': 'Não', 'objetivos': ['Reduzir atendimento manual']}
print(gerar_diagnostico(cliente_teste))
exibir_proposta("Restaurante Exemplo")
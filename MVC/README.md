# Controle de Produtos - App MVC

Painel de gerenciamento de produtos desenvolvido em **ASP.NET Core MVC**, focado em segurança e uso de inteligência artificial.

## 🚀 Funcionalidades

- **Gerenciamento de Produtos:** Interface simplificada para registro e listagem de produtos.
- **Validação de Conteúdo com IA:** Integração com o SDK do Google GenAI (modelo Gemini) para realizar uma validação de segurança do conteúdo automatizada nos dados dos produtos (evitando textos inapropriados).
- **Segurança de API Key:** Configuração usando *.NET User Secrets* para gerenciar a chave de API de forma segura, evitando a exposição de dados sensíveis no controle de versão.

## 🛠️ Tecnologias Utilizadas

- .NET 8 (ASP.NET Core MVC)
- C#
- Google GenAI SDK

## ⚙️ Como Executar

1. **Clone o repositório e acesse a pasta:**
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd MVC
   ```

2. **Configure a chave da API do Google Gemini:**
   Para garantir a segurança, a chave da API não fica no `appsettings.json`. Você deve configurá-la localmente utilizando *User Secrets*:
   ```bash
   dotnet user-secrets init
   dotnet user-secrets set "Gemini:ApiKey" "COLOQUE_SUA_API_KEY_AQUI"
   ```

3. **Restaurar pacotes e iniciar o projeto:**
   ```bash
   dotnet restore
   dotnet run
   ```

4. **Visualizar:**
   Abra o navegador no endereço fornecido pelo console (tipicamente `http://localhost:5000` ou `https://localhost:5001`).

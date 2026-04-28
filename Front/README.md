# Gerenciamento de Produtos - Frontend

Esta é a aplicação frontend (Single Page Application) do sistema de Gerenciamento de Produtos, desenvolvida com React e TypeScript. A interface permite o cadastro, listagem, exclusão de produtos e alternância de temas (claro/escuro). Além disso, está integrada com a API do Google Gemini para validação de segurança de conteúdo das descrições dos produtos.

## 🚀 Tecnologias Utilizadas

- **[React 19](https://react.dev/)**: Biblioteca para criação de interfaces de usuário.
- **[TypeScript](https://www.typescriptlang.org/)**: Tipagem estática para maior segurança no código.
- **[Vite](https://vitejs.dev/)**: Ferramenta de build rápida e moderna.
- **[Google Generative AI](https://ai.google.dev/)**: Integração com Gemini AI para análise de texto.

## ⚙️ Pré-requisitos

Para rodar este projeto localmente, você precisa ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- `npm` (gerenciador de pacotes do Node)

## 🛠️ Como Executar

1. **Clone as dependências do projeto:**
   Na raiz deste diretório (onde está o `package.json`), abra o terminal e execute:
   ```bash
   npm install
   ```

2. **Configuração de Variáveis de Ambiente:**
   Crie um arquivo `.env.local` na raiz do projeto para adicionar a KEY do Gemini.
   Exemplo:
   ```env
   VITE_GEMINI_API_KEY=sua_chave_aqui
   ```

3. **Iniciando o servidor de desenvolvimento:**
   Execute o comando abaixo para iniciar o Vite:
   ```bash
   npm run dev
   ```

4. **Acessando a aplicação:**
   A aplicação estará disponível no navegador, geralmente no endereço: `http://localhost:5173`.

## 📦 Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Compila o projeto TypeScript e realiza o build de produção via Vite.
- `npm run lint`: Executa a verificação de código usando ESLint.
- `npm run preview`: Inicia um servidor local para visualizar as alterações de build antes de enviar para produção.

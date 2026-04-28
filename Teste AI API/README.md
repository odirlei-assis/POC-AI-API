# 🚀 Teste AI API

API em .NET para cadastro e moderação de comentários utilizando IA (Google Gemini).

---

## 📌 Objetivo

Esta API foi desenvolvida como uma **POC (Proof of Concept)** para:

* Validar conteúdo de texto usando IA
* Bloquear mensagens inadequadas
* Persistir dados em banco SQL Server
* Aplicar boas práticas de arquitetura (camadas + interfaces)

---

## 🧱 Arquitetura

A aplicação segue o padrão em camadas:

* **Controller** → entrada da API
* **Service** → regras de negócio
* **Repository** → acesso a dados
* **Context** → Entity Framework
* **DTOs** → comunicação externa

---

## 🗄️ Banco de Dados

### Tabelas:

```sql
Usuario (
    usuarioId INT PRIMARY KEY IDENTITY,
    nome VARCHAR(255) NOT NULL
)

Comentario (
    comentarioId INT PRIMARY KEY IDENTITY,
    usuarioId INT FOREIGN KEY REFERENCES Usuario(usuarioId),
    texto VARCHAR(MAX) NOT NULL
)
```

---

## ⚙️ Configuração

### 🔐 API Key (Gemini)

No `appsettings.json`:

```json
"Gemini": {
  "ApiKey": "SUA_API_KEY_AQUI"
}
```

Ou via variável de ambiente:

```bash
setx GEMINI_API_KEY "SUA_CHAVE"
```

---

### 🗃️ Connection String

No `Program.cs`:

```csharp
Server=(localdb)\\MSSQLLocalDB;
Database=Teste_AI_API;
Trusted_Connection=True;
TrustServerCertificate=True;
```

---

## ▶️ Como executar

```bash
dotnet restore
dotnet build
dotnet run
```

---

## 🌐 Swagger

A API inicia com Swagger na raiz:

```
https://localhost:{porta}/
```

---

## 📡 Endpoints

### 🔍 Listar comentários

```
GET /api/comentario
```

---

### ➕ Criar comentário

```
POST /api/comentario
```

Body:

```json
{
  "idUsuario": 1,
  "texto": "Comentário aqui"
}
```

---

### ❌ Remover comentário

```
DELETE /api/comentario/{id}
```

---

## 🤖 Moderação com IA

A API utiliza o modelo **Gemini** para validar conteúdo:

* Bloqueia palavrões e linguagem vulgar
* Impede conteúdo ofensivo ou inadequado
* Retorna erro caso o conteúdo seja reprovado

Exemplo:

```text
Entrada: "essa postagem ta do caralho"
Saída: INSEGURO: linguagem vulgar
```

---

## 🧠 Boas práticas aplicadas

* Injeção de dependência com interfaces
* Separação de responsabilidades
* DTOs para evitar exposição de entidades
* Tratamento de ciclo de serialização
* Configuração segura de API Key

---

## 🚀 Melhorias futuras

* Paginação de resultados
* Logs estruturados
* Cache de validação
* Autenticação (JWT)
* Testes unitários

---

## 📄 Licença

Projeto para fins de estudo e demonstração.

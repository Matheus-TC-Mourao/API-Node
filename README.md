# 📦 API de Gerenciamento de Estoque

Este é um projeto backend para gerenciamento de estoque de produtos, desenvolvido com foco em boas práticas de arquitetura, utilizando os princípios de **SOLID** e o padrão **MVC**. A API permite operações de listagem, compra e venda de produtos, garantindo um fluxo eficiente e organizado para o controle de estoque.

---

## 🛠 Tecnologias Utilizadas

- **Runtime:** [Node.js](https://nodejs.org/)
- **Framework:** [Express.js](https://expressjs.com/)
- **ORM:** [Prisma](https://www.prisma.io/)
- **Banco de Dados:** [SQLite](https://www.sqlite.org/)
- **Arquitetura:** Padrão **MVC** com princípios **SOLID**

---

## ✨ Funcionalidades

- **Listar Produtos:** Exibe todos os produtos disponíveis no estoque.
- **Comprar Produtos:** Atualiza o estoque ao adicionar novos itens.
- **Vender Produtos:** Reduz a quantidade de itens disponíveis no estoque.
- **Controle de Estoque:** Garante que as operações respeitem limites mínimos e máximos.

---

## 📂 Estrutura de Pastas

```bash
src/
├── api/                  # Rotas e controladores da aplicação
│   ├── express/          # Definição de endpoints
│       ├── controllers/  # Controladores que interagem com os serviços
├── entities/             # Entidades do projeto
├── repositories/         # Operações no banco de dados via Prisma
├── services/             # Lógica de negócios e validações
├── utils/                # Funções auxiliares e utilitárias
└── main.ts               # Configuração do servidor Express
```

---

## 🏗 Arquitetura e Princípios

### **Padrão MVC**
- **Model (repositories):** Gerencia a interação com o banco de dados.
- **View:** Não aplicável diretamente, já que é uma API. As respostas JSON substituem a camada de visualização.
- **Controller (api/controllers):** Interage com os serviços e responde às requisições.

### **Princípios SOLID**
- **Single Responsibility Principle (SRP):** Cada classe ou módulo possui uma única responsabilidade.
- **Open/Closed Principle (OCP):** Código é aberto para extensão, mas fechado para modificações.
- **Liskov Substitution Principle (LSP):** Substituições de dependências são possíveis sem alterar a funcionalidade.
- **Interface Segregation Principle (ISP):** Interfaces não têm métodos desnecessários, garantindo clareza.
- **Dependency Inversion Principle (DIP):** Serviços e repositórios dependem de abstrações, não implementações específicas.

---

## 🚀 Configuração do Ambiente de Desenvolvimento

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/Matheus-TC-Mourao/API-Node.git
   cd API-Node
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Inicie o servidor:**

   ```bash
   npm run dev
   ```

4. A API estará disponível em `http://localhost:8800`.

---

## 🧪 Endpoints da API

### **Produtos**

- **GET /products**
  - Lista todos os produtos do estoque.

- **POST /products/create**
  - Adiciona produtos.</br>
  **Body:**
  ```json
  {
    "name": "Produto test",
    "price": 11.11
  }
  ```

- **POST /products/{id}/buy**
  - Compra produtos para o estoque.</br>
  **Body:**
  ```json
  {
    "amount": 10
  }
  ```

- **POST /products/{id}/sell**
  - Vende produtos do estoque.</br>
  **Body:**
  ```json
  {
    "amount": 20
  }
  ```

---

## 🧩 Serviços e Regras de Negócio

### Serviços (services)
- **Gerenciamento de Estoque:**
  Valida a disponibilidade de produtos para venda e lança erros para estoques negativos.

### Regras de Negócio
1. Produtos não podem ter estoque negativo.
2. Compras devem informar uma quantidade positiva.
3. Não é possível vender mais produtos do que o disponível no estoque.

---

## 📖 Exemplo de Fluxo

1. Um cliente adiciona produtos ao estoque via endpoint **/products/{id}/buy**.
2. O estoque é atualizado no banco de dados através do repositório Prisma.
3. Um cliente realiza uma venda pelo endpoint **/products/{id}/sell**, reduzindo a quantidade disponível.

---

## 📌 Contribuindo

Contribuições são sempre bem-vindas! Siga os passos abaixo para colaborar:
1. Faça um fork do repositório.
2. Crie uma branch para sua funcionalidade (`git checkout -b feature/nova-funcionalidade`).
3. Envie suas alterações (`git push origin feature/nova-funcionalidade`).
4. Abra um Pull Request.

---

## 📞 Contato

Se tiver dúvidas ou sugestões, entre em contato:
**Email:** [matheusmouraotc@gmail.com](mailto:matheusmouraotc@gmail.com)
**GitHub:** [@Matheus-TC-Mourao](https://github.com/Matheus-TC-Mourao)

Contribuições são sempre bem-vindas! 🎉

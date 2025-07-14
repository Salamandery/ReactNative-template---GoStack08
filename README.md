<div align="center">

# 🛒 GoMarketplace

<img src="https://img.shields.io/badge/React%20Native-0.62.2-blue" />
<img src="https://img.shields.io/badge/TypeScript-3.8.3-blue" />
<img src="https://img.shields.io/badge/license-MIT-green" />
<img src="https://img.shields.io/badge/tests-passing-brightgreen" />

Aplicativo de e-commerce desenvolvido em React Native para o desafio GoStack da Rocketseat. Permite listar produtos, adicionar ao carrinho, ajustar quantidades e visualizar o total da compra. Projeto focado em boas práticas, arquitetura escalável e testes automatizados.

</div>

---

## 📑 Sumário
- [🚀 Funcionalidades](#-funcionalidades)
- [🛠️ Principais Tecnologias](#️-principais-tecnologias)
- [🏗️ Padrões e Arquitetura](#️-padrões-e-arquitetura)
- [⚙️ Setup e Instalação](#️-setup-e-instalação)
- [💻 Comandos Úteis](#-comandos-úteis)
- [🧪 Testes](#-testes)
- [📋 Observações](#-observações)
- [👤 Autor](#-autor)

---

## 🚀 Funcionalidades
- Listagem de produtos (consumindo API fake)
- Adição e remoção de produtos do carrinho
- Incremento e decremento de quantidades
- Persistência do carrinho com AsyncStorage
- Navegação entre Dashboard e Carrinho
- Cálculo automático de totais

---

## 🛠️ Principais Tecnologias
- **React Native**: Base do app mobile
- **TypeScript**: Tipagem estática
- **React Navigation**: Navegação entre telas
- **Styled-components**: Estilização com CSS-in-JS
- **Axios**: Requisições HTTP
- **AsyncStorage**: Persistência local
- **Jest & Testing Library**: Testes automatizados
- **json-server**: API fake para desenvolvimento

---

## 🏗️ Padrões e Arquitetura
- **Componentização**: Componentes reutilizáveis em `src/components`
- **Hooks customizados**: Gerenciamento de estado do carrinho via Context API em `src/hooks/cart.tsx`
- **Estilização**: Feita com styled-components (`.ts`/`.tsx`)
- **Serviços**: Comunicação com API centralizada em `src/services/api.ts`
- **Rotas**: Navegação stack em `src/routes/app.routes.tsx`
- **Testes**: Configurados com Jest e Testing Library

```
src/
  components/
  hooks/
  pages/
  routes/
  services/
  utils/
```

---

## ⚙️ Setup e Instalação
1. **Clone o repositório:**
   ```bash
   git clone <url-do-repo>
   cd ReactNative-template---GoStack08
   ```
2. **Instale as dependências:**
   ```bash
   yarn
   # ou
   npm install
   ```
3. **Inicie a API fake (json-server):**
   ```bash
   yarn json-server --watch server.json --port 3333
   # ou
   npx json-server --watch server.json --port 3333
   ```
4. **Execute o app:**
   - **Android:**
     ```bash
     yarn android
     ```
   - **iOS:**
     ```bash
     yarn ios
     ```

---

## 💻 Comandos Úteis
- `yarn start` — Inicia o Metro Bundler
- `yarn android` — Executa no Android
- `yarn ios` — Executa no iOS
- `yarn test` — Executa os testes automatizados
- `yarn lint` — Checa padrões de código

---

## 🧪 Testes
Os testes estão configurados com **Jest** e **@testing-library/react-native**. Para rodar:
```bash
yarn test
```

---

## 📋 Observações
- O carrinho é persistido localmente usando AsyncStorage.
- O backend fake (json-server) deve estar rodando na porta 3333.
- O app utiliza TypeScript com configurações estritas para maior robustez.
- Estilização moderna com styled-components.

---

<div align="center">

## 👤 Autor
by **Rodolfo M. F. Abreu**
<p align="center">
  <sub>Desenvolvido para o desafio GoStack 🚀</sub>
</p>

---

<p align="center">
  <img src="https://img.shields.io/badge/Feito%20com%20%E2%9D%A4%20por-Rocketseat-blueviolet" />
</p>



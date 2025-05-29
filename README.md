# Gemini Image Analyzer

## Descrição da estrutura do projeto

- `src/app/` - pasta principal da aplicação Next.js contendo as páginas o layout e a rota para a chama de api.
- `src/components/` - componentes reutilizáveis (Componente de Upload)
- `src/lib/` - função para a requisição API Gemini.
- `src/app/globals.css` - arquivos de estilos globais.

A aplicação é monolítica, com front-end e API rodando no mesmo projeto Next.js, utilizando rotas de API internas.

## Tecnologias usadas

- [Next.js](https://nextjs.org/)
- TypeScript
- Axios (para requisições HTTP)
- API Gemini da Google Generative AI

## Integração com Gemini API

A integração é feita através de uma rota API interna em Next.js (`/api/route.ts`), que recebe a imagem enviada pelo usuário. A imagem é convertida em base64 e enviada via requisição POST para a API Gemini usando Axios, junto com a chave de API.

A resposta da Gemini traz as 4 palavras-chave otimizadas para SEO, que são então exibidas para o usuário.

## Como rodar o projeto localmente

1. Clone o repositório:

```bash
git clone https://github.com/SirHenrique/analyze-gemini
cd analyze-gemini
```
2. Instale as Dependências
```
npm install
```

3. Rode a aplicação em modo de Desenvolvimento
```
npm run dev
```

4. Acesse o site <br>
http://localhost:3000


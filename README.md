# Ollama RAG App

A fullstack **Retrieval-Augmented Generation (RAG)** demo using:

- **NestJS** (backend, API, LangChain integration)
- **Ollama** (local LLM)
- **ChromaDB** (vector database for embeddings)
- **Next.js** (frontend for asking questions, displaying answers)
- **Yarn** (package manager)

---

## 🚀 Features

- Scrape and process documents into vector embeddings
- Store embeddings in **ChromaDB**
- Query embeddings + generate answers using **Ollama**
- Expose clean **NestJS API endpoints**
- **Next.js frontend** for interacting with the system

---

## 📂 Project Structure

```
ollama-rag-app/
│── backend/ # NestJS API (LangChain + Ollama + ChromaDB)
│── frontend/ # Next.js app (ask questions, display answers)
│── README.md

```
## ⚙️ Requirements

- [Node.js](https://nodejs.org/) >= 22.0
- [Yarn](https://yarnpkg.com/)
- [NestJS CLI](https://docs.nestjs.com/)
- [Ollama](https://ollama.ai/) installed and running locally
- [ChromaDB](https://www.trychroma.com/) (runs locally or via Docker)

---

## 🔧 Setup

### 1. Clone the repo
```bash
git clone https://github.com/khahantk/ollama-rag-app.git
cd ollama-rag-app
```
### 2. Start the backend (NestJS)
```bash
cd backend
yarn install
yarn start:dev
# Ingest docs into ChromaDB
yarn load:docs 


```
Backend will run at: 👉 http://localhost:3000

API Endpoints:
| Method | Endpoint      | Description                          |
| ------ | ------------- | ------------------------------------ |
| `POST` | `/rag/ask`  | Query docs + get AI-generated answer |

Example request:
```bash
curl -X POST http://localhost:3000/rag/ask \
  -H "Content-Type: application/json" \
  -d '{"question": "What is an AI agent?"}'

```

### 3. Start the frontend (Next.js)
```sh
cd frontend
yarn install
yarn dev

```
Frontend will run at: 👉 http://localhost:4000
### Screenshots
![RAG Demo](https://raw.githubusercontent.com/khahantk/ollama-rag-app/refs/heads/master/frontend/public/rag-demo.png)

## 📖 Roadmap
- Add authentication
- Chat history + memory
- Multi-document ingestion

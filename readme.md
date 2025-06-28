# 🎯 RandomQuoteAPI

> A minimalist, zero-dependency Node.js-powered REST API for delivering random inspirational quotes — self-contained, blazing fast, and Vercel-ready.

---

## ✨ Features

- 🧠 **Serve inspirational quotes** via a simple `/random` endpoint
- 📂 **Self-managed** `quotes.json` — no external API reliance
- ➕ **Easily extendable** — add/remove quotes manually
- ⚡ **Blazing fast** — built with Express.js
- 🔄 **CORS-enabled** — for frontend cross-origin use
- 🚀 **Deploy-ready** — Instant hosting on Vercel
- 🛠 **Plug & play utility** — originally built for [NoteSphere](https://github.com/VinayakGubber/NoteSphere)

---

## 📦 Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/VinayakGubber/RandomQuoteAPI.git
cd RandomQuoteAPI
npm install
```

---

## 🔧 Usage

Start the development server:

```bash
npm start
```

Test it locally in your browser or REST client:

- `http://localhost:3000/` → Welcome message
- `http://localhost:3000/random` → Returns a random quote as JSON

---

## 🌐 Live Deployment

Deploy your own version with Vercel (free and instant):

```
https://random-quote-api-yourname.vercel.app/
```

---

## 🧰 API Endpoints

| Method | Endpoint  | Description                          |
| ------ | --------- | ------------------------------------ |
| GET    | `/`       | Returns a welcome message            |
| GET    | `/random` | Returns one random quote from JSON   |
| GET    | `/quotes` | Returns all the quote in JSON format |

> Example response from `/random`:

```json
{
  "quote": "Stay hungry, stay foolish.",
  "author": "Steve Jobs"
}
```

---

## 🗃️ quotes.json

This API uses a local `quotes.json` file (no external quote APIs).

### Why?

- ✅ Full control over quote content
- ➕ Easy to update or customize
- 🛡️ No API limits or downtime

> Example `quotes.json` structure:

```json
[
  {
    "quote": "Life is short, and it's up to you to make it sweet.",
    "author": "Sarah Louise Delany"
  },
  {
    "quote": "You miss 100% of the shots you don't take.",
    "author": "Wayne Gretzky"
  }
]
```

---

## 🔨 Built For

Originally created as a utility backend service for:

👉 **NoteSphere** — a personal notes app designed to motivate, where each user session fetches a fresh inspirational quote.

---

## 📄 License

MIT — free to use, share, and modify.

---

## 💡 Why This Matters (Pitch)

> I built **RandomQuoteAPI** as a demonstration of developer-first tools: a lightweight backend utility that delivers consistent, fast responses with zero dependencies. Whether you're bootstrapping a frontend app or prototyping a motivation tool like **NoteSphere**, this API serves as a flexible foundation. It showcases clean API design, simple data control, and real-world deployment — without relying on external services.

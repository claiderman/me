# Claiderman Alexander Lozano Portfolio

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/claiderman-lozano)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/claiderman)

## About me

Backend Developer with more than 4 years of experience in software development. I have knowledge in Java, TypeScript, Python and cloud services (AWS, Azure). I have worked on REST APIs, database management and deployment of cloud solutions. I have contributed to projects for clients such as Bancolombia, Banistmo and Grupo Familia, and I currently work on backend development for video games and interactive applications at Polygonus.

- 🎮 Backend development for video games and interactive applications
- ☁️ Experience with cloud-native and serverless architectures (AWS)
- 🚀 Scalable microservices implementation
- 🔄 DevOps and CI/CD practices
- 📊 Database optimization and caching systems

## Tech Stack

### Languages
![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![C#](https://img.shields.io/badge/C%23-239120?style=flat-square&logo=c-sharp&logoColor=white)

### Frameworks
![Spring Framework](https://img.shields.io/badge/Spring-6DB33F?style=flat-square&logo=spring&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)
![Django](https://img.shields.io/badge/Django-092E20?style=flat-square&logo=django&logoColor=white)

### Databases
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat-square&logo=postgresql&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-00000F?style=flat-square&logo=mysql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat-square&logo=mongodb&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white)
![DynamoDB](https://img.shields.io/badge/DynamoDB-4053D6?style=flat-square&logo=amazon-dynamodb&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black)

### Cloud & DevOps
![AWS](https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=amazon-aws&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=github-actions&logoColor=white)

### Messaging
![RabbitMQ](https://img.shields.io/badge/RabbitMQ-FF6600?style=flat-square&logo=rabbitmq&logoColor=white)
![AWS SQS](https://img.shields.io/badge/AWS_SQS-FF4F8B?style=flat-square&logo=amazon-sqs&logoColor=white)

## Featured projects

### Gaming & Web3
- 🎮 [The Next Legends (TNL)](https://www.thenextlegends.xyz/) - Backend for a boxing game with AI and NFTs
- 🏎️ [Raicers](https://www.raicers.com/) - Backend for a racing game with AI and cryptocurrencies
- ⚽ [AI League FIFA](https://www.futureverse.com/ecosystem) - Backend for a football game with AI

### Fintech & Enterprise
- 🏦 Audit log system for Bancolombia
- 💳 Digital credit management for Banistmo
- 📱 V-App mobile application for Nosotras

## Interests

- 🎮 Backend development for video games
- 🌐 Cloud-native and serverless architectures
- 🤖 Artificial Intelligence
- ⛓️ Blockchain and Web3

## Contact

| Email | claiderman.lozano@gmail.com |
|------|----------------------------|
| LinkedIn | [Claiderman Alexander Lozano Cardona](https://www.linkedin.com/in/claiderman-lozano) |
| GitHub | [@claiderman](https://github.com/claiderman) |

---

# Portfolio project (English version)

This repository contains the multilingual professional portfolio with static routes for ES and EN. It is built with Astro and published under the `/me` base path.

## Main routes

- Home: `/me/`
- Español: `/me/es/`
- English: `/me/en/`
- ES CV: `/me/locales/es/cv.pdf`
- EN CV: `/me/locales/en/cv.pdf`

## Language and redirect behavior

The landing page detects the locale in this order:

1. `localStorage.locale`
2. browser language
3. fallback: `es`

Then it redirects to the corresponding route:

- `/me/es/`
- `/me/en/`

## CV updates

The CV files must be kept updated in these locations:

- `public/locales/es/cv.pdf`
- `public/locales/en/cv.pdf`
- `src/data/cv.json`
- `src/data/cv.en.json`

The CV download uses the current language to choose the correct resume.

## Commands

```bash
npm install
npm run start
npm run build
npm run preview
```

## Deployment

This project is ready for GitHub Pages with the config:

```js
site: "https://claiderman.github.io",
base: "/me"
```

## Note

The original personal content is preserved and the technical documentation for the multilingual site is added so that navigation and the PDF files correspond correctly to Spanish (ES) and English (EN).

---
⭐️ From [claiderman](https://github.com/claiderman)

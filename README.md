# GamePlay

<p align="center">
  <img src="https://raw.githubusercontent.com/Whuanderson/gameplay-nlw-rn/refs/heads/main/.github/Logo.png" alt="GamePlay logo" height="80">
</p>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/Whuanderson/gameplay-nlw-rn">
  <a href="https://www.linkedin.com/in/whuanderson-de-sousa-porto-marinho-a07204216/" target="_blank">
    <img alt="Made by Whuanderson" src="https://img.shields.io/badge/Made%20by-Whuanderson-blue">
  </a>
  <img alt="License" src="https://img.shields.io/badge/License-MIT-blue">
</p>

## ✨ Sobre

GamePlay é um aplicativo móvel que ajuda você a organizar partidas online com amigos. Conecte‑se usando sua conta Discord, crie grupos e agende sessões para seus jogos favoritos.

Projeto desenvolvido durante o **NLW Together** da [Rocketseat](https://rocketseat.com.br/).

## 🎥 Demonstração

| | | |
|---|---|---|
| ![gif1](https://raw.githubusercontent.com/Whuanderson/gameplay-nlw-rn/refs/heads/main/.github/gif1.gif) | ![gif2](https://raw.githubusercontent.com/Whuanderson/gameplay-nlw-rn/refs/heads/main/.github/gif2.gif) | ![gif3](https://raw.githubusercontent.com/Whuanderson/gameplay-nlw-rn/refs/heads/main/.github/gif3.gif) |

## 🔧 Funcionalidades

- Autenticação OAuth2 via Discord  
- Perfil do usuário (nome e avatar)  
- Listagem de servidores que o usuário participa  
- Agendamento de partidas  
- Filtro de partidas por categoria  
- Indicação de anfitrião ou convidado  
- Compartilhamento de convite do servidor  
- Acesso direto ao servidor do anfitrião  
- Logout

## 🚀 Tecnologias

- React Native + Expo  
- TypeScript  
- Context API  
- Async Storage  
- React Navigation Stack  
- React Native Gesture Handler  
- React Native SVG + SVGR  
- Expo Google Fonts  
- Vector Icons  
- Axios  
- Gradient Colors  
- OAuth2 Discord  
- Expo Authentication  
- React Native Share  
- Deep Link

## 🎨 Layout

O layout está disponível no Figma: [GamePlay – NLW Together](https://www.figma.com/file/0kv33XYjvOgvKGKHBaiR07/GamePlay-NLW-Together?node-id=58913%3A83).

## 📲 Instalação

```bash
# Clone o repositório
git clone https://github.com/Whuanderson/gameplay-nlw-rn
cd gameplay-nlw-rn

# Instale as dependências
yarn
# ou
npm install
```

```bash
# Inicie a aplicação
expo start
```

### 🔑 Configuração do Discord

Crie um *application* no [Discord Developer Portal](https://discord.com/developers/applications) e preencha o arquivo `.env`:

```env
REDIRECT_URI=
SCOPE=
RESPONSE_TYPE=
CLIENT_ID=
CDN_IMAGE=
```

## 📄 Licença

Publicado em 2021 sob a licença [MIT](./LICENSE).  
Feito por [Whuanderson Marinho](https://github.com/Whuanderson).

<div align="center">

# 💡 Lâmpada Funcional

**Da lógica de programação à luz.**

<img alt="PROJETO ACADÊMICO" src="https://img.shields.io/static/v1?label=&amp;message=PROJETO%20ACAD%C3%8AMICO&amp;color=202020&amp;style=for-the-badge">
<img alt="FRONT-END" src="https://img.shields.io/static/v1?label=&amp;message=FRONT-END&amp;color=2563EB&amp;style=for-the-badge">
<img alt="JAVASCRIPT PURO" src="https://img.shields.io/static/v1?label=&amp;message=JAVASCRIPT%20PURO&amp;color=F4C430&amp;style=for-the-badge&amp;logo=javascript&amp;logoColor=202020">

<a href="https://hildebertosampaiojr-bot.github.io/Lampada-Funcional/"><img alt="ACESSAR DEMONSTRAÇÃO" src="https://img.shields.io/static/v1?label=&amp;message=ACESSAR%20DEMONSTRA%C3%87%C3%83O&amp;color=2563EB&amp;style=for-the-badge&amp;logo=githubpages&amp;logoColor=white"></a>
<a href="#-como-executar-localmente"><img alt="EXECUTAR LOCALMENTE" src="https://img.shields.io/static/v1?label=&amp;message=EXECUTAR%20LOCALMENTE&amp;color=202020&amp;style=for-the-badge&amp;logo=visualstudiocode&amp;logoColor=white"></a>

</div>

---

Simulador de um interruptor de luz desenvolvido como trabalho acadêmico de JavaScript. O projeto demonstra como a lógica de programação pode controlar o comportamento e a aparência de uma interface web em tempo real.

## 🎯 Objetivo

Praticar estruturas condicionais, variáveis booleanas, eventos e manipulação do DOM, integrando HTML, CSS e JavaScript em uma aplicação simples e interativa.

## 🛠️ Tecnologias utilizadas

<div align="center">

<img alt="HTML5" src="https://img.shields.io/static/v1?label=&amp;message=HTML5&amp;color=E34F26&amp;style=flat-square&amp;logo=html5&amp;logoColor=white">
<img alt="CSS3" src="https://img.shields.io/static/v1?label=&amp;message=CSS3&amp;color=1572B6&amp;style=flat-square&amp;logo=css3&amp;logoColor=white">
<img alt="JavaScript" src="https://img.shields.io/static/v1?label=&amp;message=JavaScript&amp;color=F7DF1E&amp;style=flat-square&amp;logo=javascript&amp;logoColor=202020">
<img alt="DOM API" src="https://img.shields.io/static/v1?label=&amp;message=DOM%20API&amp;color=5965A9&amp;style=flat-square">
<img alt="Git" src="https://img.shields.io/static/v1?label=&amp;message=Git&amp;color=F05032&amp;style=flat-square&amp;logo=git&amp;logoColor=white">
<img alt="GitHub" src="https://img.shields.io/static/v1?label=&amp;message=GitHub&amp;color=24292F&amp;style=flat-square&amp;logo=github&amp;logoColor=white">
<img alt="GitHub Pages" src="https://img.shields.io/static/v1?label=&amp;message=GitHub%20Pages&amp;color=087F5B&amp;style=flat-square&amp;logo=githubpages&amp;logoColor=white">

</div>

| Tecnologia | Aplicação no projeto |
| --- | --- |
| **HTML5** | Estrutura da página, painel, interruptor e indicador de estado. |
| **CSS3** | CSS Grid, centralização, cores, filtros visuais, transformações e transições suaves. |
| **JavaScript (Vanilla JS)** | Controle do estado da lâmpada, eventos de clique e atualização dinâmica da interface. |
| **DOM API** | Seleção de elementos, alteração de classes, textos e atributos de acessibilidade. |
| **Git** | Controle de versões do código-fonte. |
| **GitHub** | Hospedagem e gerenciamento do repositório. |
| **GitHub Pages** | Publicação da aplicação na web. |

O projeto não depende de frameworks, bibliotecas externas, banco de dados ou servidor de aplicação.

## ⚙️ Funcionalidades

- Acender e apagar a lâmpada pelo interruptor.
- Alterar as cores de fundo e do texto conforme o estado da iluminação.
- Simular a iluminação por filtros e transformações CSS.
- Atualizar o texto do botão e a mensagem de estado.
- Atualizar o atributo `aria-label` para indicar se a lâmpada está acesa ou apagada.

## 🧠 Como funciona

<div align="center">

<img alt="● APAGADA" src="https://img.shields.io/static/v1?label=&amp;message=%E2%97%8F%20APAGADA&amp;color=202020&amp;style=for-the-badge">
&nbsp; ⇄ &nbsp;
<img alt="☀ ACESA" src="https://img.shields.io/static/v1?label=&amp;message=%E2%98%80%20ACESA&amp;color=F4C430&amp;style=for-the-badge">

</div>

A variável booleana `acesa` começa com o valor `false`. Um evento de clique no botão dispara uma estrutura condicional `if/else`, que alterna o estado da lâmpada.

| Estado | Interface | Ação disponível |
| --- | --- | --- |
| Apagada | Fundo escuro e lâmpada escurecida | Acender |
| Acesa | Fundo claro e lâmpada iluminada | Apagar |

O JavaScript modifica as classes CSS e o conteúdo dos elementos selecionados pelo DOM. O CSS realiza a mudança visual com transições de 0,3 segundo.

## 🔄 Fluxo do interruptor

```mermaid
flowchart TD
    A[Carregar a página] --> B[Lâmpada apagada]
    B --> C[Clique no interruptor]
    C --> D{Está acesa?}
    D -- Sim --> E[Apagar e escurecer]
    D -- Não --> F[Acender e iluminar]
    E --> C
    F --> C
    classDef action fill:#2563EB,stroke:#1D4ED8,color:#FFFFFF;
    classDef off fill:#202020,stroke:#64748B,color:#FFFFFF;
    classDef on fill:#FFF3B0,stroke:#D4A017,color:#202020;
    classDef decision fill:#DBEAFE,stroke:#2563EB,color:#172554;
    class A,C action;
    class B,E off;
    class F on;
    class D decision;
```

## 📁 Estrutura do projeto

```text
Lampada-Funcional/
├── index.html   # Estrutura da interface
├── estilo.css   # Identidade visual e transições
├── script.js    # Lógica do interruptor
└── README.md    # Documentação
```

## 🚀 Como executar localmente

```bash
git clone https://github.com/hildebertosampaiojr-bot/Lampada-Funcional.git
cd Lampada-Funcional
```

Abra o arquivo `index.html` em um navegador atualizado. Se preferir, utilize a extensão Live Server no Visual Studio Code.

## 📚 Conceitos praticados

- Declaração de constantes e variáveis com `const` e `let`.
- Tipos booleanos e estruturas condicionais.
- Eventos com `addEventListener`.
- Seleção de elementos com `getElementById`.
- Manipulação de `className`, `classList`, `textContent` e `setAttribute`.
- Separação entre estrutura, apresentação e comportamento.

## 🔗 Outro trabalho acadêmico

Conheça também o **[Oro Café](https://github.com/hildebertosampaiojr-bot/Cafeteria---Trabalho-javascript)**, uma aplicação de cafeteria com cardápio, carrinho, acompanhamento de pedidos e jogos interativos.

[Abrir Oro Café](https://hildebertosampaiojr-bot.github.io/Cafeteria---Trabalho-javascript/)

---

<div align="center">

<img alt="DESENVOLVIMENTO WEB" src="https://img.shields.io/static/v1?label=&amp;message=DESENVOLVIMENTO%20WEB&amp;color=2563EB&amp;style=flat-square"> <img alt="PROJETO EDUCACIONAL" src="https://img.shields.io/static/v1?label=&amp;message=PROJETO%20EDUCACIONAL&amp;color=202020&amp;style=flat-square">

**Desenvolvimento web front-end · Trabalho acadêmico**

[Voltar ao topo](#-lâmpada-funcional)

</div>

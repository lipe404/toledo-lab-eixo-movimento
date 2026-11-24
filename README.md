# Eixo Movimento

Landing page conceitual de portfólio para o segmento de **Fisioterapia**. Marca, serviços e dados são fictícios.

**Demonstração:** Seleção demonstrativa de caminhos de atendimento. Não há envio de dados pessoais, sistema de cadastro ou pagamento.

## Rodar localmente

Requisitos: Node.js 22+ e npm.

```sh
npm ci
npm run dev
```

Abra http://localhost:3000 para ver a landing page.

## Publicar

O projeto usa Next.js App Router, TypeScript e exportação estática. `npm run build` gera `out/`.
Para GitHub Pages, em **Settings → Pages**, selecione **GitHub Actions**, então execute o fluxo “Publicar demonstração no GitHub Pages”. O fluxo configura o caminho público do repositório automaticamente.
Para Vercel, importe o repositório como projeto Next.js sem definir `PAGES_BASE_PATH`.

Fotografia editorial: [Andrea Piacquadio, Pexels](https://www.pexels.com/photo/fit-runner-standing-on-racetrack-in-athletics-arena-3756165/), [licença](https://www.pexels.com/license/).

Fotografia secundária: [Andrew Durkin, Pexels](https://www.pexels.com/photo/close-up-of-marathon-runners-feet-in-motion-29596317/).

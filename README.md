# DoorCor — Site Institucional

Site em React + TypeScript + Tailwind CSS para a DoorCor (portas premium em
ACM), construído a partir do design system "arquitetura editorial" (fundo
escuro, tipografia oversized, grid estrutural, acentos dourados).

## Rodando localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview
```

## Estrutura

- `src/lib/content.ts` — todo o conteúdo textual (serviços, diferenciais,
  dados de contato, itens da galeria com seus caminhos de imagem). Edite
  aqui para atualizar textos ou trocar fotos da galeria sem mexer em JSX.
- `src/components/ProjectPhoto.tsx` — renderiza as fotos reais de projeto
  (`public/img/doorcor-*.jpg`) com overlay escuro para legibilidade do
  texto por cima.
- `public/img/` — fotos reais de obras DoorCor. Apenas uma parte das ~37
  fotos enviadas está em uso (hero, sobre, galeria); as demais ficam
  disponíveis para trocar itens da galeria ou adicionar novas seções.
- `src/components/` — uma seção por arquivo (Header, Hero, Marquee, About,
  Services, Gallery, Differentials, Contact, Footer).

## Pendências antes de publicar

- Confirmar telefone/WhatsApp e link de Instagram em `src/lib/content.ts`.
- O botão "Enviar pelo WhatsApp" do formulário de contato abre uma
  conversa no WhatsApp com os dados preenchidos — não há backend.

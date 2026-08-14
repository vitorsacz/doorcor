// Conteúdo centralizado do site — baseado nos dados públicos do perfil
// @doorcor.acm (Instagram) em 2026-08-13. Substitua pelos dados oficiais
// da empresa (endereço, CNPJ, textos definitivos) antes de publicar.

export const brand = {
  name: "DoorCor",
  suffix: "ACM",
  full: "DoorCor | Portas Premium em ACM",
  phoneDisplay: "+55 11 93215-2858",
  phoneWhatsapp: "5511932152858",
  instagramHandle: "@doorcor.acm",
  instagramUrl: "https://www.instagram.com/doorcor.acm/",
  threadsHandle: "@doorcor.acm",
};

export const whatsappMessages = {
  quote: "Olá! Gostaria de solicitar um orçamento para portas em ACM da DoorCor.",
  seeWork: "Olá! Quero ver os produtos em ACM da DoorCor.",
};

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${brand.phoneWhatsapp}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Produtos", href: "#produtos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
];

export const services = [
  {
    index: "01",
    title: "Portas Externas",
    description:
      "Portas de entrada e pivotantes em ACM alto padrão, dimensionadas sob medida para fachadas residenciais e corporativas.",
  },
  {
    index: "02",
    title: "Portas Internas",
    description:
      "Soluções em ACM e madeira laminada para ambientes internos que exigem acabamento impecável e silêncio de operação.",
  },
  {
    index: "03",
    title: "Tecnologia Embarcada",
    description:
      "Fechaduras eletrônicas, biometria e automação embutidas com precisão milimétrica, sem abrir mão da estética.",
  },
  {
    index: "04",
    title: "Fachadas em ACM",
    description:
      "Revestimento e fechamento de fachadas comerciais em ACM, com acabamento espelhado, fosco ou texturizado.",
  },
];

export const differentials = [
  {
    index: "01",
    title: "Alto Padrão",
    description:
      "Cada projeto é tratado como peça única, pensada para arquitetura residencial e corporativa de alto padrão.",
  },
  {
    index: "02",
    title: "Produção 100% Brasileira",
    description:
      "Fabricação nacional do início ao fim, com controle total sobre prazo, qualidade e acabamento.",
  },
  {
    index: "03",
    title: "Tecnologia Integrada",
    description:
      "Fechaduras eletrônicas e automação já pensadas no projeto, não como adaptação posterior.",
  },
  {
    index: "04",
    title: "Atendimento Direto",
    description:
      "Contato direto com quem executa o projeto, do orçamento à instalação final em obra.",
  },
];

export const aboutPhotos = [
  { src: "/img/doorcor-01.jpg", caption: "Porta pivotante — vista interna" },
  { src: "/img/doorcor-09.jpg", caption: "Painéis em ACM sob medida" },
  { src: "/img/doorcor-17.jpg", caption: "Fachada em pedra e ACM" },
];

export const galleryItems = [
  { index: "01", title: "Porta de Correr Espelhada", tag: "Interno", src: "/img/doorcor-02.jpg" },
  { index: "02", title: "Porta Alta em Closet", tag: "Interno", src: "/img/doorcor-07.jpg" },
  { index: "03", title: "Fechadura Eletrônica", tag: "Tecnologia", src: "/img/doorcor-08.jpg" },
  { index: "04", title: "Porta Embutida em ACM", tag: "Interno", src: "/img/doorcor-13.jpg" },
  { index: "05", title: "Fachada em Pedra e ACM", tag: "Residencial", src: "/img/doorcor-14.jpg" },
  { index: "06", title: "Porta Pivotante em Madeira", tag: "Residencial", src: "/img/doorcor-16.jpg" },
  { index: "07", title: "Fachada Externa em ACM", tag: "Residencial", src: "/img/doorcor-18.jpg" },
  { index: "08", title: "Porta com Puxador Cromado", tag: "Residencial", src: "/img/doorcor-20.jpg" },
];

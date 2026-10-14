# Design System: ParanáLEM Uniformes

**Project ID:** projeto local `cassoli23/primeiro-contato`; não há ID de projeto remoto no Stitch.

## 1. Visual Theme & Atmosphere

Catálogo editorial de uma fábrica familiar de uniformes em Luís Eduardo Magalhães. A identidade azul royal e dourada aparece nas grandes áreas de cor, nas fotografias ilustrativas e nos pontos de contato. A primeira tela apresenta os uniformes e oferece orçamento rápido. A vitrine combina imagens em tamanhos diferentes, sem repetir três caixas iguais.

A proposta preserva a ideia vencedora da arena: identidade da empresa aplicada às peças, escolha simples de linha e contato seguro mesmo quando um recurso externo falha. O cliente pode escolher a linha na vitrine; essa escolha já prepara a categoria no orçamento. Não se divulga pedido mínimo. Bordado, Silk Screen e DTF fazem parte do uniforme, sem uma oferta de serviço ou orçamento separados.

Direção tasteskill: The specimen catalogue, seed 810480687. Composição adaptada ao conteúdo real: vitrine com três linhas em painéis desiguais; apresentação da empresa sem retratos de equipe inexistentes; orçamento com os seis campos disponíveis. Essas adaptações evitam inventar pessoas ou retirar informações necessárias.

## 2. Color Palette & Roles

- **Azul royal profundo (#1943C8):** cor principal das grandes áreas de abertura e orçamento, links e ações sobre fundo claro. Tom escolhido para manter contraste forte com branco.
- **Dourado da identidade (#E8C77F):** cor secundária do orçamento principal e de um detalhe integrado às peças. Texto sobre dourado usa o azul escuro.
- **Azul de leitura (#142442):** textos sobre superfícies claras e fechamento com o nome da empresa.
- **Dourado de leitura (#785416):** pequenos detalhes e setas sobre fundo claro, com contraste adequado.
- **Branco (#FFFFFF):** leitura, campos e espaços abertos.
- **Cinza azulado claro (#EDF1F7):** separa superfícies de apoio sem bordas decorativas.
- **Verde de contato (#176D38):** reservado ao atalho do WhatsApp.

O logo original conserva suas cores próprias. Não usar gradientes, sombras decorativas ou novas cores de destaque.

## 3. Typography Rules

Plus Jakarta Sans, servida localmente com licença incluída. Texto corrente em tamanho confortável (16 px), notas a partir de 13 px, peso regular para leitura e semibold para títulos e ações. Títulos grandes têm espaçamento mais compacto e até duas linhas. Cabeçalhos em português seguem frase normal, sem letras maiúsculas decorativas ou rótulos minúsculos acima deles.

A hierarquia usa tamanho e espaço, sem palavras do título em cores diferentes. O nome ParanáLEM retorna em escala grande no rodapé, mantendo a identidade ao fechar a página.

## 4. Component Stylings

- **Buttons:** retângulos de cantos retos, preenchimento sólido e área confortável para toque. Ação principal dourada sobre royal; ações sobre branco usam royal. Interações respondem com deslocamento mínimo e cor, e têm foco visível.
- **Cards/Containers:** fotografias com cantos retos, espaços abertos e tamanhos variados. Conteúdo não usa caixas com bordas finas ou sombras. Um painel dourado pequeno integra as opções de marca aos uniformes.
- **Inputs/Forms:** campos claros com contorno legível, rótulos permanentes e erro junto do campo. Categorias têm controle e rótulo com a mesma área de toque. Sem envio automático: a mensagem é revisada no WhatsApp.
- **Images:** ativos locais WebP com dimensões declaradas e imagens secundárias carregadas sob demanda. São imagens geradas por IA e identificadas como ilustrativas; substituir por fotos reais quando disponíveis, sem representá-las como registros da fábrica.
- **Motion:** movimentos curtos de texto, fotografia e superfícies ao entrar na tela. Conteúdo nunca depende deles para aparecer. Apenas transformação e opacidade; suporte a movimento reduzido. Não há vídeos automáticos nem animações contínuas.

## 5. Layout Principles

Margens consistentes e largura máxima de leitura. No desktop, abertura com texto e mosaico fotográfico; vitrine com uma imagem maior e duas menores; atendimento com fotografia e dúvidas; orçamento em área royal com formulário claro; rodapé organizado em superfícies preenchidas. No celular, todos os blocos tornam-se uma coluna e os controles mantêm área ampla para toque.

Navegação por âncoras reais. Sem JavaScript, os links mobile e os CTAs específicos de WhatsApp continuam disponíveis. O formulário só é habilitado depois de instalar a validação; se o script falhar, um contato direto permanece visível. O CDN do Tailwind não bloqueia a interação local.

## Fonte e limitações

Documento produzido a partir dos arquivos e imagens locais, conforme o formato da skill oficial `design-md`. Não houve leitura, criação ou sincronização de um projeto remoto Stitch, pois o MCP não está conectado. O acesso direto à documentação indicada retornou HTTP 403. Não há fotos obtidas do Instagram nem dados comerciais inventados.

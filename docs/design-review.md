# Revisão do design — ParanáLEM

## Direção e continuidade

Foi preservada a base funcional de a003, vencedora da arena de 16 propostas e quatro rodadas: CTAs com mensagens nos próprios links, formulário habilitado somente após instalar validação, fallback sem JavaScript, foco com contraste e script local independente do CDN.

Direção da skill design-taste-frontend: **The specimen catalogue**, seed **810480687**, mantendo paleta e fontes da marca. A vitrine foi adaptada para três linhas reais em painéis desiguais; a apresentação da empresa usa fotografia e informações confirmadas, pois não existem retratos de equipe; o formulário usa a composição adequada aos campos solicitados. Essas mudanças foram registradas por `draw.mjs --redraw`.

Inventário: ParanáLEM, fábrica familiar, Luís Eduardo Magalhães, Rua Barbatimão 383, Jardim das Acácias, Bahia/Tocantins/Goiânia, atendimento Brasil, royal e dourado, três linhas de uniformes, opções de marca integradas às peças, horários e WhatsApp confirmados. Ideia: a identidade royal e dourada da ParanáLEM transforma o uniforme e seus detalhes em uma vitrine editorial. Elemento interativo: selecionar uma linha prepara a categoria no orçamento.

## Crítica visual

ROUND 1
Seen in one second: uniformes em campo azul royal e chamada de orçamento dourada.
Idea: a identidade da marca aparece nas peças e na composição de catálogo.
Live thing: escolha da linha prepara o orçamento e mantém navegação por link sem JavaScript.
Layout words by section: hero=mosaic / products=unequal-panels / branding=detail-band / service=photo-facts / quote=split-coupon / footer=tiles.
Top three problems: título com quatro linhas no tablet; texto branco sobre royal abaixo do alvo de contraste escolhido pela skill; legenda longa na vitrine. Corrigidos por largura maior no tablet, ajuste do royal para #1943C8 e limite de medida das legendas.

ROUND 2
Seen in one second: oferta de uniformes, com contraste claro entre imagem e ação.
Scores, autoavaliação: design 7.8 · usability 8.3 · creativity 6.9 · content 7.5 → overall 7.7.
Caps applied: criatividade limitada pela composição de catálogo conhecida e pelas imagens ilustrativas, que podem servir a outras fábricas. Não é uma avaliação externa nem alegação de prêmio.
Remaining limitations: imagens geradas por IA substituem fotos reais; não há vídeo real disponível da fábrica. Mantivemos animações curtas e finitas para favorecer desempenho e movimento reduzido.

## Checks

- Lint da skill: 0 FAIL / 0 WARN.
- Inspector em 1440, 768 e 390 px: 0 FAIL / 1 WARN (sem vídeo real; limitação aceita pelos motivos acima).
- 55 verificações funcionais passaram nos arquivos finais: telefone, quantidade opcional, categorias múltiplas, mensagens de WhatsApp, fallback de JavaScript, CDN bloqueado e pendente, reset tardio, foco e contraste.
- Playwright CLI usado para abrir o site, testar menu mobile, Escape e seleção de linha.
- Erros ficam junto aos campos e vinculados por aria-describedby; seleção do orçamento é anunciada com aria-live.
- CTAs reais por categoria, imagens com dimensões e alt, fontes locais, foco visível, labels e autocomplete. Sem transições de todas as propriedades, bloqueio de zoom ou dados armazenados.
- As navegações ao WhatsApp foram interceptadas: os testes não enviaram mensagens.

## Web Interface Guidelines

Revisão com a fonte atual de vercel-labs/web-interface-guidelines. Após os ajustes:

- index.html: pass — HTML semântico, headings, labels, imagens dimensionadas, metadados e fallback de contato.
- assets/css/styles.css: pass — foco, contraste, responsividade, alvos de toque e movimento reduzido.
- assets/js/main.js: pass — controles nativos, estados acessíveis, erros vinculados aos campos e ausência de armazenamento de leads.

A documentação não força Title Case inglês em textos pt-BR e não adiciona um aviso de abandono ao handoff solicitado para WhatsApp. O campo permanece disponível quando o usuário pode montar a mensagem; caso o script falhe, contatos diretos continuam disponíveis.

## Imagens e ferramentas

Quatro imagens locais geradas por IA: coleção de peças, costura, camisetas e detalhe de bordado. Nenhuma foto foi obtida de terceiros ou do Instagram; não são apresentados como catálogo ou registros reais. Logo original do usuário. Fontes locais com licença em assets/fonts/LICENSE.txt.

Skills instaladas: design-taste-frontend, web-design-guidelines, design-md e playwright-cli. O CLI está em /workspace/.tools/bin/playwright-cli. O site não exige essas ferramentas para funcionar ou publicar. O MCP Stitch não está configurado; DESIGN.md foi sintetizado dos ativos locais, sem inventar um Project ID remoto.

## Atualização: azul-marinho, dourado e branco

Nova direção: The split stage, seed 609361152. A abertura passa a ter fotografia dominante à esquerda e coluna de texto à direita; no celular, texto e CTA vêm antes da fotografia para facilitar contato. Os conteúdos e a base funcional da arena foram preservados. Seções de carta de fundador e contato por email sugeridas pela folha não foram adotadas: não há carta, retrato ou email fornecidos, e o contato solicitado é por formulário e WhatsApp.

Cor principal atual: #10213B; secundárias: #E8C77F e #FFFFFF. Tokens e metadados foram atualizados; o logo conserva a arte original. A imagem do uniforme permanece ilustrativa.

Crítica visual: abertura com fotografia grande em campo marinho; fundo claro na vitrine; dourado limitado às ações e detalhe de marca. Autoavaliação: design 8.0, usabilidade 8.3, criatividade 6.9, conteúdo 7.5; resultado 7.8. Limitação: as imagens ainda são ilustrativas e não há vídeo real da fábrica. Inspector atual: 0 FAIL, 1 WARN pela ausência desse vídeo.

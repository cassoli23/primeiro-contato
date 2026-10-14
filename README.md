# ParanáLEM Uniformes

Site institucional em uma página, em português brasileiro, com HTML5, Tailwind CSS via CDN, CSS local e JavaScript puro. Pronto para hospedagem estática na Vercel, sem build ou variáveis de ambiente obrigatórias.

## Executar

```sh
python3 -m http.server 8080
```

Abra o servidor no navegador. Imagens WebP, favicon e fontes Plus Jakarta Sans são locais. A licença das fontes está em `assets/fonts/LICENSE.txt`.

## Contato e orçamento

Os CTAs têm mensagens específicas para `https://wa.me/5577999741169`. A escolha de linha na vitrine prepara a categoria no formulário, que permite selecionar mais de uma opção. Nome, empresa e telefone com DDD são obrigatórios; cidade/UF e quantidade são opcionais. Não há mínimo comercial divulgado.

O visitante revisa e envia a mensagem no WhatsApp. O site não armazena leads nem envia mensagens automaticamente. Sem JavaScript, menu e contatos diretos permanecem disponíveis; os campos só são habilitados após a instalação da validação. O CDN do Tailwind carrega de forma independente do script local e seu reset não sobrescreve os estilos locais.

## Design e imagens

[DESIGN.md](DESIGN.md) descreve o sistema visual azul-marinho, dourado e branco. A implementação aproveita a validação e os mecanismos de contato da vencedora da arena de 16 propostas, com uma nova composição de catálogo editorial orientada pelas skills solicitadas.

O logo veio do PDF fornecido pela empresa. As quatro imagens editoriais foram geradas por IA e são identificadas como ilustrativas; não representam o catálogo ou a fábrica real. Substitua os WebP por fotos reais quando disponíveis. Não houve acesso aos posts do Instagram.

## Vercel e GitHub

Envie a branch `main` ao GitHub e importe o repositório na Vercel. Use **Framework Preset: Other**, diretório raiz, sem comando de build e diretório de saída `.`. Ao configurar domínio definitivo, acrescente URL canônica e URL absoluta para a imagem de compartilhamento. Evite divulgar uma URL de domínio fictícia.

## Ferramentas de revisão

As skills e ferramentas de ambiente são locais, sem dependências exigidas para publicar o site. Reproduza a instalação quando necessário:

```sh
npx skills add https://github.com/Leonxlnx/taste-skill --skill design-taste-frontend --yes
npx skills add https://github.com/vercel-labs/agent-skills --skill web-design-guidelines --yes
npx skills add https://github.com/google-labs-code/stitch-skills --skill design-md --yes
npm install -g @playwright/cli@latest
playwright-cli install --skills agents
playwright-cli --help
```

Neste ambiente, o CLI foi instalado com prefixo `/workspace/.tools`, cache em `/workspace/.tools/cache` e configuração local para o Chromium disponível. O DESIGN.md foi criado dos ativos locais; a integração remota do Stitch não está configurada.

## Validação

Revisar telas em 320, 390, 768 e 1440 px, mensagens específicas de WhatsApp, menu com teclado, seleção de linha, erros junto aos campos, múltiplas categorias, quantidade opcional e contatos sem JavaScript. As navegações ao WhatsApp nos testes são interceptadas, sem envio de mensagens. Movimento reduzido desativa animações; todo conteúdo fica acessível se elas falharem.

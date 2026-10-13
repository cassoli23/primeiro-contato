# ParanáLEM Uniformes

Site institucional estático, em português brasileiro, com HTML5, Tailwind CSS via CDN e JavaScript sem dependências de build. Os estilos locais também garantem o layout quando o CDN estiver indisponível.

## Executar localmente

Na raiz do repositório:

```sh
python3 -m http.server 8080
```

Abra o endereço local do servidor no navegador. Não é necessário instalar pacotes para executar o site. As fontes Plus Jakarta Sans são servidas localmente; sua licença está em `assets/fonts/LICENSE.txt`.

## Orçamentos

Todos os CTAs abrem o WhatsApp `5577999741169` com mensagens específicas. O formulário valida o telefone com DDD, ao menos uma categoria e, se informada, quantidade mínima de 12 peças. O cliente revisa e envia a mensagem no WhatsApp. Não existe envio automático, armazenamento de leads ou servidor de formulário.

## Imagens

O logo foi extraído do PDF fornecido pela empresa e otimizado em WebP. As imagens editoriais de produção, coleção, camisetas e bordado foram geradas por IA e identificadas como ilustrativas na página; não representam a fábrica ou o catálogo real. O acesso ao Instagram foi negado (HTTP 403). A composição usa como referência visual as polos e camisas sociais mostradas pelo usuário. Substitua os arquivos WebP por fotos reais quando disponíveis.

## Vercel

Após enviar os arquivos ao GitHub, importe o repositório na Vercel. Selecione **Other**, diretório raiz do projeto, sem comando de build e com diretório de saída `.` (raiz). Não há dependências ou variáveis de ambiente obrigatórias. A publicação deve ser feita separadamente da criação local dos arquivos.

Ao definir o domínio definitivo, configure URL canônica e metadados absolutos de imagem de compartilhamento. O Tailwind via CDN usa processamento no navegador; para uma futura otimização de produção, considere CSS Tailwind pré-compilado.

## Validação

Validar layout em 320, 390, 768 e 1440 pixels, navegação mobile, links de contato, formulário com múltiplas categorias e mensagens de erro. O envio final no WhatsApp requer interação do cliente.

## Redesign

Direção: vitrine editorial com fotos em tamanhos diferentes, azul royal, títulos maiores, fontes locais e animações leves com suporte a movimento reduzido. A seleção de linha na vitrine marca a categoria correspondente no formulário. Todo conteúdo permanece legível sem a animação ou sem o CDN.

# Validação da entrega

Verificação realizada em 4 de outubro de 2026, com Node.js 22.23.3 e Angular 20.3.

## Compilação e instalação

- `npm ci`: instalação limpa concluída.
- `npm run build`: compilação de produção concluída, sem erros.
- Auditoria do npm na instalação: nenhuma vulnerabilidade reportada.
- Dependência transitiva `piscina` atualizada por `overrides` para uma versão corrigida, mantendo Angular 20 e a arquitetura com `NgModule` exigida pela atividade.
- Componentes e serviços gerados com `--skip-tests`. As dependências de Karma/Jasmine não utilizadas foram removidas; a verificação funcional foi realizada no navegador e por execução direta dos serviços.

## Serviços

Verificações por asserções executadas contra as classes TypeScript:

- Três livros e três editoras iniciais.
- Busca do nome da editora pelo código e tratamento de código inexistente.
- Inclusão substitui o código recebido pelo maior código atual acrescido de um, inclusive quando há lacunas entre os códigos.
- Exclusão de código inexistente preserva os livros.
- Exclusão de todos os livros e nova inclusão funcionam; o primeiro código volta a 1.

## Navegador

- Acesso à raiz redireciona para `/lista`.
- Tabela exibe título, resumo, nome da editora e autores em uma lista.
- Menu **Novo** abre `/dados`; **Catálogo** retorna a `/lista`.
- Título vazio impede o envio e recebe o foco com a mensagem nativa do navegador.
- O formulário abre com “Selecione uma editora”; essa opção impede o envio e recebe o foco com a mensagem de validação HTML5.
- Cadastro com dois autores em linhas distintas inclui os dados e retorna à listagem.
- Editora escolhida no formulário é exibida corretamente na listagem.
- Exclusão remove apenas o livro selecionado.
- Catálogo vazio permite nova inclusão.
- Navegar entre as páginas preserva os dados em memória.
- Console sem erros ou avisos durante os testes funcionais.

As capturas em [capturas](capturas/) mostram as telas finais. Dados de teste não fazem parte do catálogo inicial.

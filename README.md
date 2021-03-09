![Easynvest](https://user-images.githubusercontent.com/8808895/46966234-81191d00-d083-11e8-8da3-63d1f12e4365.png)

## Teste Front-end Easynvest
Para o teste apresentado desenvolvi um app simples com 3 paginas, a index com apenas dois botões de redirecionamento para as paginas principais, a listagem de usuários e o form de cadastro de usuarios novos.

 - Funcionalidades da index.html
  * Quando não exitem usuarios cadastrados(sessionStorage) a pagina faz uma chamada a api de exemplo para buscar os usuarios iniciais
  * Pagina também limpa uma variavel de sessao adcional que criei para coordenar a edição de usuarios.

- Funcionalidades da Listagem de Usuarios
  * Listagem em tabela simples com duas colunas de operações, Excluir e Editar, representados por dois icones, a Lixeira e o Lapis respectivamente
  * Se clicar na lixeira o usuario e excluido da sessionStorage('users') e a tabela html tambem remove a linha.
  * Se clicar no lapis o usuario é redirecionado para a tela de 'cadastro' com o form ja preenchido, liberando para edição os campos nome, telefone e email. o campo cpf fica desabilitado para validação.

- Funcionalidade do formulario de cadastro.
  * Campos com validação
  * Validação do botao de submit para não deixar inserir cpf repetidos
  * apos cadastro o usuario e redirecionado para tela de listagem


** Use sua criatividade para criar a página para listar os dados cadastrados **

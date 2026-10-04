import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable()
export class ControleLivrosService {
  private livros: Array<Livro> = [
    {
      codigo: 1,
      codEditora: 3,
      titulo: 'Diario de um banana',
      resumo:
        'Conta a historia de Greg Heffley, um garoto que está prestes a entrar no ensino médio e que se vê diante de uma série de desafios e situações engraçadas.',
      autores: ['Jeff Kinney'],
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: 'Java, como Programar',
      resumo:
        'Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel.',
      autores: ['Paul Deitel', 'Harvey Deitel'],
    },
    {
      codigo: 3,
      codEditora: 1,
      titulo: 'O Senhor dos Anéis',
      resumo:
        'A história de Frodo Baggins, um hobbit que herda um anel mágico e deve destruí-lo para salvar a Terra Média.',
      autores: ['J.R.R. Tolkein'],
    },
  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    livro.codigo = Math.max(0, ...this.livros.map((item) => item.codigo)) + 1;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const indice = this.livros.findIndex((livro) => livro.codigo === codigo);
    if (indice !== -1) {
      this.livros.splice(indice, 1);
    }
  }
}

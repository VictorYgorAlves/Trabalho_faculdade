import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable()
export class ControleLivrosService {
  private livros: Array<Livro> = [
    {
      codigo: 1,
      codEditora: 3,
      titulo: 'Use a Cabeça: Java',
      resumo:
        'Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e Java.',
      autores: ['Bert Bates', 'Kathy Sierra'],
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
      titulo: 'The C++ Programming Language',
      resumo:
        'Uma apresentação da linguagem C++, com seus recursos, técnicas de programação e exemplos para o desenvolvimento de software.',
      autores: ['Bjarne Stroustrup'],
    },
  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    // O zero permite incluir o primeiro livro depois de esvaziar o catálogo.
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

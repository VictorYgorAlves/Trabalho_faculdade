import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable()
export class ControleEditoraService {
  private editoras: Array<Editora> = [
    { codEditora: 1, nome: 'Rocco' },
    { codEditora: 2, nome: 'Pearson' },
    { codEditora: 3, nome: 'Alta Books' },
  ];

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editoras = this.editoras.filter((editora) => editora.codEditora === codEditora);
    return editoras[0]?.nome ?? '';
  }
}

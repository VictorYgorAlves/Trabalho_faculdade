import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-dados',
  standalone: false,
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css'],
})
export class LivroDadosComponent implements OnInit, AfterViewInit {
  public livro: Livro = new Livro();
  public autoresForm: string = '';
  public editoras: Array<Editora> = [];
  @ViewChild('editoraSelect') private editoraSelect!: ElementRef<HTMLSelectElement>;

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
  }

  ngAfterViewInit(): void {
    this.validarEditora();
  }

  validarEditora = (codEditora: number = this.livro.codEditora): void => {
    this.editoraSelect.nativeElement.setCustomValidity(
      codEditora === 0 ? 'Selecione uma editora.' : '',
    );
  };

  incluir = (): void => {
    this.livro.autores = this.autoresForm
      .split(/\r?\n/)
      .map((autor) => autor.trim())
      .filter((autor) => autor.length > 0);
    this.servLivros.incluir(this.livro);
    void this.router.navigateByUrl('/lista');
  };
}

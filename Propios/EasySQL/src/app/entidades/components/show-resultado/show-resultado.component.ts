import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-resultado',
  templateUrl: './show-resultado.component.html',
  styleUrl: './show-resultado.component.css',
})
export class ShowResultadoComponent {
  @Input() sql: string = '';

  copyCode() {
    const copyDocument = document.createElement('textarea');
    copyDocument.value = this.sql;
    document.body.appendChild(copyDocument);
    copyDocument.select();

    document.execCommand('copy');

    document.body.removeChild(copyDocument);
  }

  downloadCode() {
    const blob = new Blob([this.sql], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const downloadDocument = document.createElement('a');

    downloadDocument.href = url;
    downloadDocument.download = 'resultado.sql';
    downloadDocument.click();
  }
}

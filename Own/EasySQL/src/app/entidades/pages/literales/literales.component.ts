import { Component } from '@angular/core';

@Component({
  selector: 'app-literales-page',
  templateUrl: './literales-page.component.html',
  styles: ``,
})
export class LiteralesPageComponent {
  public isLoading: boolean = false;
  public hasSendToGenerate: boolean = false;
  public sql: string = '';

  load(SQLStringContent: string) {
    this.isLoading = true;
    setTimeout(() => {
      this.generateSql(SQLStringContent);
      this.isLoading = false;
      this.hasSendToGenerate = true;
    }, 1000);
  }

  generateSql(SQLStringContent: string) {
    const columns = SQLStringContent.split(',');
    const tableName = columns[0];
    const tableDescription = columns[1];
    const currentDate = new Date().toLocaleDateString();

    this.sql = `
    -- =============================================
    -- NAME: ${tableName.toUpperCase()}
    -- AUTHOR: ?
    -- CREATION: ${currentDate}
    -- BBDD: CUSTOMER
    -- DESCRIPTION: ${tableDescription}
    -- =============================================
    IF NOT EXISTS (SELECT * FROM sys.objects WHERE name='${tableName.toUpperCase()}' AND type='U') 
    BEGIN
      CREATE TABLE [dbo].[${tableName.toUpperCase()}]
      (
        [IDIOMA] VARCHAR(5) NOT NULL,
    `;

    for (let i = 2; i < columns.length; i += 2) {
      const columnName = columns[i];
      if (!columnName) {
        break;
      }
      const columnType = 'VARCHAR(' + columns[i + 1] + ')';

      this.sql += `    [${columnName.toUpperCase()}] ${columnType}`;

      if (i < columns.length - 2) {
        this.sql += `,`;
      }

      this.sql += `\n`;
    }

    this.sql += `
      -- =============================================
      -- Generate primary and foreign keys
      -- =============================================
      CONSTRAINT [PK_${tableName.toUpperCase()}] PRIMARY KEY CLUSTERED ([IDIOMA] ASC)
      CONSTRAINT [FK_${tableName.toUpperCase()}_IDIOMAS] FOREIGN KEY([IDIOMA]) REFERENCES [dbo].[IDIOMAS] ([CODIGO])
      )
      ON [PRIMARY]
    `;
    this.sql += `END`;
  }
}

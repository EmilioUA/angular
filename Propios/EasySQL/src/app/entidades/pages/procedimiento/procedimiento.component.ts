import { Component } from '@angular/core';

@Component({
  selector: 'app-procedimiento-page',
  templateUrl: './procedimiento-page.component.html',
  styles: ``,
})
export class ProcedimientoPageComponent {
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
    const procName = columns[0];
    const procDescription = columns[1];
    const currentDate = new Date().toLocaleDateString();

    this.sql = `
    -- =============================================
    -- NAME: ${procName.toUpperCase()}
    -- AUTHOR:?
    -- CREATION: ${currentDate}
    -- BBDD: CUSTOMER
    -- DESCRIPTION: ${procDescription}
    -- PARAMETERS:	
    `;

    for (let i = 2; i < columns.length; i += 3) {
      const paramName = columns[i];
      const paramType = columns[i + 1];
      const paramDescription = columns[i + 2];

      this.sql += `   -- @${paramName} ${paramType} - ${paramDescription}\n`;
    }

    this.sql += `
    -- EXAMPLE:
    -- EXEC ${procName} . . .
    -- =============================================
    IF NOT EXISTS (SELECT TOP 1 1 FROM sys.objects where name = '${procName}' and type='P')
    BEGIN
      EXEC ('CREATE PROCEDURE [dbo].[${procName}] AS')
    END
    GO

    ALTER PROCEDURE [dbo].[${procName}]
  `;

    for (let i = 2; i < columns.length; i += 3) {
      const paramName = columns[i];
      const paramType = columns[i + 1];

      this.sql += `     @${paramName} ${paramType},\n`;
    }

    this.sql += `
    AS
    BEGIN
      --************************** 
      --##VERSION##: 1
      --************************** 

      --Body del procedimiento
      SELECT * FROM Table_1
    GO
  
    -- ===============================
    -- Extended properties definition
    -- ===============================
    DECLARE @procedureName VARCHAR(300)
    DECLARE @procedureDescription VARCHAR(300)
    DECLARE @unitName VARCHAR(300)
    DECLARE @version VARCHAR(3)
    DECLARE @parameterList TABLE ([IDX] INT IDENTITY(1,1), [NAME] VARCHAR(50), [DESC] VARCHAR(200))
    DECLARE @product VARCHAR(50)

    SET @procedureName = '${procName}';
    SET @procedureDescription = '${procDescription}';
    SET @unitName = 'everilion-loyalty-net-campaign-service';
    SET @product = 'PRODUCT';
    SET @version = '2';

    -- NULL if no description (use name)
    INSERT INTO @parameterList ([NAME], [DESC]) VALUES 
    `;

    for (let i = 2; i < columns.length; i += 3) {
      const paramName = columns[i];
      const paramDescription = columns[i + 2];

      this.sql += `     ('@${paramName}', '${paramDescription}'),\n`;
    }

    this.sql += `
    PRINT 'Updating extended properties of procedure ' + @procedureName
    PRINT ''

    -- Description of the elements
    IF EXISTS(SELECT 1 FROM SYS.FN_LISTEXTENDEDPROPERTY(N'MS_Description', N'SCHEMA', N'dbo', N'PROCEDURE', @procedureName, NULL, NULL))
    BEGIN
      EXEC SYS.SP_UPDATEEXTENDEDPROPERTY @NAME=N'MS_Description', @VALUE=@procedureDescription, @LEVEL0TYPE=N'SCHEMA', @level0name=N'DBO', @LEVEL1TYPE=N'PROCEDURE', @LEVEL1NAME=@procedureName
      PRINT N'Updated extended property MS_Description: "' + @procedureDescription + '"'
    END
    ELSE
    BEGIN
      EXEC SYS.SP_ADDEXTENDEDPROPERTY @NAME=N'MS_Description', @VALUE=@procedureDescription, @LEVEL0TYPE=N'SCHEMA', @level0name=N'DBO', @LEVEL1TYPE=N'PROCEDURE', @LEVEL1NAME=@procedureName
      PRINT N'Created extended property MS_Description: "' + @procedureDescription + '"'
    END

    -- Unit that manages the element
    IF EXISTS(SELECT 1 FROM SYS.FN_LISTEXTENDEDPROPERTY(N'Unit', N'SCHEMA', N'dbo', N'PROCEDURE', @procedureName, NULL, NULL))
    BEGIN
      EXEC SYS.SP_UPDATEEXTENDEDPROPERTY @NAME=N'Unit', @VALUE=@unitName, @LEVEL0TYPE=N'SCHEMA', @LEVEL0NAME=N'dbo', @LEVEL1TYPE=N'PROCEDURE',@LEVEL1NAME=@procedureName
      PRINT N'Updated extended property Unit:           "' + @unitName + '"'
    END
    ELSE
    BEGIN
      EXEC SYS.SP_ADDEXTENDEDPROPERTY @NAME=N'Unit', @VALUE=@unitName, @LEVEL0TYPE=N'SCHEMA', @LEVEL0NAME=N'dbo', @LEVEL1TYPE=N'PROCEDURE', @LEVEL1NAME=@procedureName
      PRINT N'Created extended property Unit:           "' + @unitName + '"'
    END

    -- Product to which the unit belongs
    IF EXISTS(SELECT 1 FROM SYS.FN_LISTEXTENDEDPROPERTY(N'Product', N'SCHEMA', N'dbo', N'PROCEDURE', @procedureName, NULL, NULL))
    BEGIN
      EXEC SYS.SP_UPDATEEXTENDEDPROPERTY @NAME=N'Product', @VALUE= @product, @LEVEL0TYPE=N'SCHEMA', @LEVEL0NAME=N'dbo', @LEVEL1TYPE=N'PROCEDURE', @LEVEL1NAME=@procedureName
      PRINT N'Updated extended property Product:        "' + @product + '"'
    END
    ELSE
    BEGIN
      EXEC sys.SP_ADDEXTENDEDPROPERTY @NAME=N'Product', @VALUE= @product, @LEVEL0TYPE=N'SCHEMA', @LEVEL0NAME=N'dbo', @LEVEL1TYPE=N'PROCEDURE', @LEVEL1NAME=@procedureName
      PRINT N'Created extended property Product:        "' + @product + '"'
    END

    -- Procedure version
    IF EXISTS(SELECT 1 FROM SYS.FN_LISTEXTENDEDPROPERTY(N'Version', N'SCHEMA', N'dbo', N'PROCEDURE', @procedureName, NULL, NULL))
    BEGIN
      EXEC SYS.SP_UPDATEEXTENDEDPROPERTY @NAME=N'Version', @VALUE=@version, @LEVEL0TYPE=N'SCHEMA', @LEVEL0NAME=N'dbo', @LEVEL1TYPE=N'PROCEDURE', @LEVEL1NAME=@procedureName
      PRINT N'Updated extended property Version:        "' + @version + '"'
    END
    ELSE
    BEGIN
      EXEC SYS.SP_ADDEXTENDEDPROPERTY @NAME=N'Version', @VALUE=@version, @LEVEL0TYPE=N'SCHEMA', @LEVEL0NAME=N'dbo', @LEVEL1TYPE=N'PROCEDURE', @LEVEL1NAME=@procedureName
      PRINT N'Created extended property Version:        "' + @version + '"'
    END

    -- Parameters
    DECLARE @counter INT
    SET @counter = 1

    DECLARE @paramName VARCHAR(50)
    DECLARE @paramDesc VARCHAR(200)
    DECLARE @max INT = (SELECT MAX(IDX) FROM @parameterList);

    WHILE(@counter <= @max)
    BEGIN
      SELECT @paramName = [NAME], @paramDesc = [DESC] FROM @parameterList WHERE idx = @counter

      IF @paramDesc IS NULL
      BEGIN
        SET @paramDesc = @paramName
      END

      IF EXISTS(SELECT 1 FROM SYS.FN_LISTEXTENDEDPROPERTY(N'MS_Description', N'SCHEMA', N'dbo', N'PROCEDURE', @procedureName, N'PARAMETER', @paramName))
      BEGIN
        EXEC SYS.SP_UPDATEEXTENDEDPROPERTY @NAME=N'MS_Description', @VALUE= @paramDesc, @LEVEL0TYPE=N'SCHEMA', @level0name=N'DBO', @LEVEL1TYPE=N'PROCEDURE', @LEVEL1NAME=@procedureName, @LEVEL2TYPE=N'PARAMETER', @LEVEL2NAME= @paramName
        PRINT N'Updated extended property MS_Description: "' + @paramDesc + '" of parameter ' + @paramName
      END
      ELSE
      BEGIN
        EXEC SYS.SP_ADDEXTENDEDPROPERTY @NAME=N'MS_Description', @VALUE= @paramDesc, @LEVEL0TYPE=N'SCHEMA', @LEVEL0NAME=N'DBO', @LEVEL1TYPE=N'PROCEDURE', @LEVEL1NAME=@procedureName, @LEVEL2TYPE=N'PARAMETER', @LEVEL2NAME=@paramName
        PRINT N'Created extended property MS_Description: "' + @paramDesc + '" of parameter ' + @paramName
      END

      SET @counter = @counter + 1
    END

    PRINT ''
    PRINT 'END Updating extended properties of procedure ' + @procedureName
    GO`;
  }
}

import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Statuses extends BaseSchema {
  protected tableName = 'statuses'

  public async up () {
    this.schema.alterTable('Users', (table) => {
      
      table.string("status").notNullable().defaultTo(1);
      
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
     // table.timestamp('created_at', { useTz: true })
      //table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

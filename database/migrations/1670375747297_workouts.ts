import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'workouts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.integer('owner_fk').unsigned().references('id').inTable('users')
      table.integer('day_of_the_week_fk').unsigned().references('id').inTable('days_of_the_week')
      table.integer('exercise_fk').unsigned().references('id').inTable('exercises')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

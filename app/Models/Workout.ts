import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany, hasOne, HasOne, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import { Exercise, User, DayOfTheWeek } from 'App/Models'

export default class Workout extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public ownerFk: number

  @belongsTo(() => User)
  public users: BelongsTo<typeof User>

  @column()
  public dayOfTheWeekFk: number

  @hasOne(() => DayOfTheWeek)
  public daysOfTheWeek: HasOne<typeof DayOfTheWeek>

  @column()
  public exerciseFk: number

  @hasMany(() => Exercise)
  public exercises: HasMany<typeof Exercise>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

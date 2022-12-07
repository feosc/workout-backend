import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne, belongsTo, BelongsTo} from '@ioc:Adonis/Lucid/Orm'
import { Category, Workout } from 'App/Models'

export default class Exercise extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public amountReps: number

  @column()
  public series: number

  @column()
  public hasWeight: boolean

  @column()
  public categoryFk: number

  @hasOne(() => Category)
  public categories: HasOne<typeof Category>

  @belongsTo(() => Workout)
  public workout: BelongsTo<typeof Workout>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}


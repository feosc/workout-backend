import { DateTime } from 'luxon'
import { BaseModel, column, BelongsTo, belongsTo} from '@ioc:Adonis/Lucid/Orm'
import { User } from 'App/Models'

export default class WorkoutDone extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public ownerFk: number

  @belongsTo(() => User)
  public users: BelongsTo<typeof User>

  @column()
  public amountExercises: number

  @column()
  public amountSeries: number

  @column()
  public amountReps: number

  @column()
  public amountWeigth: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

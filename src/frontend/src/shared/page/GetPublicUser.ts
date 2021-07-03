import { Expose } from 'class-transformer'
import { Length, Matches } from 'class-validator'

import { PublicUser } from '../user/PublicUser'

export class GetPublicUserInputs {
  @Expose()
  @Length(2, 20)
  @Matches(/^[a-zA-Z0-9_]*$/, { message: 'Username can only contain letters, numbers and underscores' })
  username!: string
}

export class GetPublicUserOutputs {
  @Expose()
  user!: PublicUser
}

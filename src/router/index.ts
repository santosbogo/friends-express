import { Router } from 'express'

import { friendsRouter } from '@modules/friends'

export const router = Router()

router.use('/friends', friendsRouter)
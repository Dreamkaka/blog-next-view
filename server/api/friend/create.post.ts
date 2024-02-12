import { FriendSchema } from '~/server/models/friend.schema'

export default defineEventHandler(async (event) => {
  console.warn(`request: ${event.path}`)
  try {
    const body = await readBody(event)
    return await new FriendSchema(body).save()
  }
  catch (error) {
    return error
  }
})
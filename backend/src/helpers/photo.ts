import { PhotoAccess } from './photoAcess'
import { createLogger } from '../utils/logger'
import { getAttachmentUrl } from './attachmentUtils'

const logger = createLogger('PhotoAccess')
const photoAccess = new PhotoAccess()

export const getPhtosForUser = async (userId: string) => {
  return photoAccess.getPhotos(userId)
}

export const addPhoto = async (userId: string, photoKey: string) => {
  logger.info(`adding a photo with key: ${photoKey}`)
  const photoUrl = getAttachmentUrl(photoKey)
  return photoAccess.savePhoto({ userId, photoKey, photoUrl })
}

export const editPhoto = async (
  userId: string,
  photoKey: string,
  photoName: string
) => {
  logger.info(`adding a photo with key: ${photoKey}`)
  return photoAccess.editPhoto({ userId, photoKey, photoName })
}

export const deleteTodo = async (userId: string, photoKey: string) => {
  return photoAccess.deleteTodo(userId, photoKey)
}

import { LOAD_PAGE, LOAD_PAGE_REQUEST } from './constants'
import Unsplash, { toJson } from 'unsplash-js'

const unsplash = new Unsplash({
  applicationId: '[APPLICATION_ID]',
  secret: '[SECRET]'
})

function loadPageRequest() {
  return {
    type: LOAD_PAGE_REQUEST
  }
}

function loadPage(page, photos) {
  return {
    type: LOAD_PAGE,
    payload: {
      page,
      photos
    }
  }
}

export default function (page) {
  return async (dispatch) => {
    dispatch(loadPageRequest())
    const photos = await unsplash.photos.listPhotos(page, 12, 'popular').then(toJson)
    dispatch(loadPage(page, photos))
  }
}

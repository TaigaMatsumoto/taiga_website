import {
  CHANGE_DATE_FOR_NEW_BLOG_POST,
  CHANGE_AUTHOR_FOR_NEW_BLOG_POST,
  CHANGE_TITLE_FOR_NEW_BLOG_POST,
  CHANGE_CONTENT_FOR_NEW_BLOG_POST,
  INITIALIZE_NEW_POST_FORM,
  SUBMIT_NEW_POST,
  CHANGE_PREVIEW_STATE,
  UPLOAD_THUMBNAIL_IMAGE,
  UPLOAD_THUMBNAIL_FILE_NAME,
} from '../constants/action-types'
import { combineReducers } from 'redux'

const initialState = {
  newPost: {
    date: '',
    author: '',
    title: '',
    content: '',
    preview: false,
    thumbnail: null,
    thumbnailFileName: null,
  },
}

const newPostReducer = (state = initialState.newPost, action) => {
  switch (action.type) {
    case CHANGE_DATE_FOR_NEW_BLOG_POST:
      // console.log(action.date)
      return { ...state, date: action.date }
    case CHANGE_AUTHOR_FOR_NEW_BLOG_POST:
      // console.log(action.author)
      return { ...state, author: action.author }
    case CHANGE_TITLE_FOR_NEW_BLOG_POST:
      return { ...state, title: action.title }
    case CHANGE_CONTENT_FOR_NEW_BLOG_POST:
      // console.log(action.content)
      return { ...state, content: action.content }
    case INITIALIZE_NEW_POST_FORM:
      return initialState.newPost
    case CHANGE_PREVIEW_STATE:
      return { ...state, preview: action.preview }
    case UPLOAD_THUMBNAIL_IMAGE:
      return { ...state, thumbnail: action.image }
    case UPLOAD_THUMBNAIL_FILE_NAME:
      return { ...state, thumbnailFileName: action.fileName }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  newPost: newPostReducer,
})

export default rootReducer

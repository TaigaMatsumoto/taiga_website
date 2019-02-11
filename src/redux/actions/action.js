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

export const changeDateForNewBlogPost = date => ({
  type: CHANGE_DATE_FOR_NEW_BLOG_POST,
  date,
})
export const changeAuthorForNewBlogPost = author => ({
  type: CHANGE_AUTHOR_FOR_NEW_BLOG_POST,
  author,
})
export const changeTitleForNewBlogPost = title => ({
  type: CHANGE_TITLE_FOR_NEW_BLOG_POST,
  title,
})
export const changeContentForNewBlogPost = content => ({
  type: CHANGE_CONTENT_FOR_NEW_BLOG_POST,
  content,
})
export const submitNewPost = post => ({
  type: SUBMIT_NEW_POST,
  post,
})
export const changePreviewState = preview => ({
  type: CHANGE_PREVIEW_STATE,
  preview,
})
export const initializeNewPostForm = () => ({
  type: INITIALIZE_NEW_POST_FORM,
})

export const uploadThumbnailImage = image => ({
  type: UPLOAD_THUMBNAIL_IMAGE,
  image,
})

export const uploadThumbnailFileImage = fileName => ({
  type: UPLOAD_THUMBNAIL_FILE_NAME,
  fileName,
})

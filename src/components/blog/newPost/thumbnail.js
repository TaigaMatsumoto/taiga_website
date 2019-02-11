import React from 'react'
import Img from 'react-image'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import {
  uploadThumbnailImage,
  uploadThumbnailFileImage,
} from '../../../redux/actions/action'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
// const path = window.location.href
const mapStateToProps = state => ({
  thumbnail: state.newPost.thumbnail,
  thumbnailFileName: state.newPost.thumbnailFileName,
})
const mapDispatchToProps = dispatch => ({
  uploadThumbnailImage: image => dispatch(uploadThumbnailImage(image)),
  uploadThumbnailFileImage: fileName =>
    dispatch(uploadThumbnailFileImage(fileName)),
})
const styles = theme => ({
  flexing: {
    display: 'flex',
  },
  centeringHorizontally: {
    justifyContent: 'center',
  },
  centeringVertically: {
    alignItems: 'center',
  },
})
class Thumbnail extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   thumbnail: {
    //     uploaded: false,
    //     thumbnailURL: null,
    //   },
    // }
    this.maxFileSize = 200000
    this.onChange = this.onChange.bind(this)
  }
  async submitThumbnail(e) {
    let a = await fetch('uploadThumbnail').then(res => {
      console.log(`response in React view is `)
      console.log(res)
      console.log(`thumbnail url is ${this.state.thumbnail.thumbnailURL}`)
    })
  }

  onChange(evt) {
    const fileName = evt.target.files[0].name
    const fileSize = evt.target.files[0].size
    console.log(`file size is ${fileSize}`)
    // if (fileSize >= this.maxFileSize) {
    //   alert('Chosen photo is over maximum size')
    //   return
    // } else {
    const { uploadThumbnailImage, uploadThumbnailFileImage } = this.props
    console.log(evt.target.files[0])
    var file = evt.target.files[0]
    var reader = new FileReader()
    var url = reader.readAsDataURL(file)
    reader.onloadend = function(e) {
      // this.setState((prev, current) => {
      //   return {
      //     thumbnail: {
      //       uploaded: !prev.uploaded,
      //     },
      //   }
      // })
      uploadThumbnailImage([reader.result])
    }.bind(this)
    uploadThumbnailFileImage(fileName)
    // console.log('iine')
    // }
  }
  render() {
    const { thumbnail, thumbnailFileName, classes } = this.props
    // console.log(thumbnailFileName)
    // console.log('@@@@@@@@@@@@@')
    // console.log(thumbnail)
    // console.log('@@@@@@@@@@@@@')
    return (
      <Grid
        container
        className={[
          classes.flexing,
          classes.centeringHorizontally,
          classes.centeringVertically,
        ]}
      >
        <Grid item sm={6} md={5}>
          <Grid container style={{ display: 'flex', justifyContent: 'center' }}>
            {/* <Grid item md={12} /> */}
            <Grid item md={12}>
              <Input
                type="file"
                name="thumbnail"
                id="thumbnail"
                onChange={evt => this.onChange(evt)}
                accept="image/png, image/jpeg"
                style={{ display: 'none' }}
              />
              <Button>
                <label htmlFor="thumbnail">
                  Upload Thumbnail <br />
                  (should be under 200 KB)
                </label>
              </Button>
              <div>{thumbnailFileName}</div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={6} md={7}>
          <ImageContainer>
            {thumbnail != null ? (
              <Img
                alt="its not uploaded yet!"
                src={thumbnail}
                style={{ width: 'auto', height: '100%' }}
              />
            ) : null}
          </ImageContainer>
        </Grid>
      </Grid>
    )
  }
}

const ImageContainer = styled.div`
  width: 30%;
  height: 30vh;
  // border: solid 5px black;
  display: flex;
  justify-content: center;
`

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Thumbnail))

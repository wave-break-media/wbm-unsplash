import React from 'react'
import {connect} from 'react-redux'
import {Grid, Row, Col} from 'react-bootstrap'
import PhotoPager from './PhotoPager'
import fetchPage from '../actions/fetchPage'
import './PhotoList.css'

class PhotoList extends React.Component {
  componentDidMount() {
    this.props.fetchPage(+this.props.match.params.page || 1)
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.page !== prevProps.match.params.page) {
      this.props.fetchPage(+this.props.match.params.page || 1)
    }
  }

  render() {
    return (
      <div>
        {this.props.loading &&
        <div className="loading-overlay" />
        }
        <Grid>
          <Row>
            <Col xs={12}>
              <PhotoPager page={this.props.page} />
            </Col>
            {this.props.photos.map(photo => (
              <Col xs={4} key={photo.id}>
                <div className="photo" style={{ backgroundImage: `url(${photo.urls.small})` }}>
                  <span className='photo-by'>
                    Photo by <a
                    href={`https://unsplash.com/@${photo.user.username}?utm_source=DesignWizard&utm_medium=referral&utm_campaign=api-credit`}
                    target='_blank'>{photo.user.name}</a>
                  </span>
                  <button data-dw-send={photo.urls.regular} data-dw-asset-id={photo.id} className='hovered'>
                    <img className='dw-logo' src={require('../assets/dw-logo.png')} alt='DW Logo' />
                    <span className='text'>Edit in DesignWizard</span>
                  </button>
                </div>
              </Col>
            ))}
            <Col xs={12}>
              <PhotoPager page={this.props.page} />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { ...state }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    fetchPage (page) {
      if (page >= 1) {
        dispatch(fetchPage(page))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoList)

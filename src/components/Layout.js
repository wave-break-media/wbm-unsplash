import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import {Route} from 'react-router-dom'

class Layout extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <h1 className="text-center">Edit Trending Photos in DesignWizard</h1>
            <p>The 'Edit in DesignWizard' button allows you to bring the most popular photos from <a
              href='https://unsplash.com'>Unsplash</a> a straight to your DesignWizard account. Create inspirational
              social media posts, blogs images, posters or flyers using
              copyright free, trending images. Simply overlay your text and add design elements such as your logo using
              your DesignWizard account. You can then download or share your completed image.</p>
          </Col>
        </Row>
        {this.props.routes.map((route, index) => (
          <Route
            key={index}
            exact={route.exact}
            path={route.path}
            render={props => (<route.child {...props} />)} />
        ))}
      </Grid>
    )
  }
}

export default Layout

import React, {Component} from 'react'
import {stringify} from 'qs'

import './UrbanBar.scss'

export default class UrbanBar extends Component {
  state = {
    shareOpen: false,
  };

  toggleShareOpen = () => this.setState({shareOpen: !this.state.shareOpen});

  shareTo = (service) => {
    const params = {
      facebook: {u: "https://urbn.is/gradrates"},
      twitter: {text: "From @urbaninstitute: What’s in a College’s Graduation Rate? A Virginia Case Study. https://urbn.is/gradrates"},
      email: {
        Subject: 'New Urban Institute interactive',
        Body: "Hi! I thought you'd be interested in this new interactive from the Urban Institute: “What’s in a College’s Graduation Rate? A Virginia Case Study.” https://urbn.is/gradrates",
      },
    }[service]

    const url = {
      facebook: 'https://www.facebook.com/sharer/sharer.php',
      twitter: 'http://twitter.com/intent/tweet',
      email: 'mailto:email@provider',
    }[service]

    return `${url}?${stringify(params)}`
  };

  render() {
    const {shareOpen} = this.state

    return (
      <div className="container-fluid urban-bar mb-5">
        <div className="title-area">
          <a
            href="http://www.urban.org"
            target="_blank"
            rel="noopener noreferrer"
            className="urban-logo"
          >
          </a>
          <a href="https://www.urban.org/features" target = "_blank">Features</a>
        </div>

        <div className="share-area">
          <button className="share" onClick={this.toggleShareOpen} />

          <div className={`share-targets ${shareOpen ? 'visible' : ''}`}>
            <ul>
              <li>
                <a
                  className="facebook"
                  href={this.shareTo('facebook')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Share to Facebook
                </a>
              </li>
              <li>
                <a
                  className="twitter"
                  href={this.shareTo('twitter')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tweet
                </a>
              </li>
              <li>
                <a className="email" href={this.shareTo('email')}>
                  Send by email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

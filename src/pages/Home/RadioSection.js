import React, {Component} from 'react'
import {capitalize} from 'lodash'
import ReactTooltip from 'react-tooltip'

import DataContext from '../../modules/dataContext'

import './RadioSection.scss'

const groups = {
  institution: {
    number: 1,
    label: 'Choose institution type',
    radios: [
      {
        label: '2-year college',
        value: '2yr',
        tooltip: 'Public nonprofit 2-year colleges',
      },
      {
        label: '4-year college or university',
        value: '4yr',
        tooltip: 'Public and private nonprofit 4-year colleges and universities',
      },
    ]
  },
  graduation: {
    number: 2,
    label: 'Choose graduation rate',
    radios: [
      {
        label: '4-year',
        value: '4yr',
      },
      {
        label: '6-year',
        value: '6yr',
      },
    ]
  }
}


class RadioSection extends Component {

  handleChange = (val) => {
    const {type} = this.props
    const data = this.context
    const setValue = data[`set${capitalize(type)}`]
    setValue(val.target.value)
    if (type === 'institution') {
      data.setSchool([])
    }
  }

  render() {
    const {type} = this.props
    const data = this.context
    const value = data[type]
    const group = groups[type]
    return (
      <li className="col-12 col-lg-4">
        <div className="entry entryTop">
          <span className="entry-number">{group.number}</span>
          <div className="entry-details">
            <h2 className="h3 d-flex align-items-center">
              {group.label}
            </h2>
            {
              group.radios.map((radio) => (
                <div key={radio.value} className="form-check custom-radio my-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name={`${type}-${radio.value}`}
                    id={`${type}-${radio.value}`}
                    value={radio.value}
                    onChange={this.handleChange}
                    checked={radio.value === value}
                  />
                  <label className="h4 form-check-label" htmlFor={`${type}-${radio.value}`}>
                    {radio.label}
                    {radio.tooltip &&
                      <React.Fragment>
                        <ReactTooltip effect="solid" type="info"/>
                        <svg className="ml-2" aria-haspopup="true" data-tip={radio.tooltip} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="10" cy="10" r="9.5" stroke="#11719F"/>
                          <path d="M7.06988 5.56C7.23521 5.40533 7.41654 5.25867 7.61388 5.12C7.81654 4.98133 8.03521 4.85867 8.26988 4.752C8.50988 4.64533 8.76588 4.56267 9.03788 4.504C9.31521 4.44 9.61388 4.408 9.93388 4.408C10.3552 4.408 10.7445 4.46933 11.1019 4.592C11.4645 4.71467 11.7765 4.888 12.0379 5.112C12.2992 5.336 12.5045 5.608 12.6539 5.928C12.8032 6.248 12.8779 6.608 12.8779 7.008C12.8779 7.41333 12.8165 7.76267 12.6939 8.056C12.5765 8.34933 12.4245 8.608 12.2379 8.832C12.0565 9.05067 11.8565 9.24267 11.6379 9.408C11.4245 9.568 11.2219 9.72 11.0299 9.864C10.8379 10.008 10.6725 10.152 10.5339 10.296C10.4005 10.44 10.3232 10.6 10.3019 10.776L10.1579 12H9.18188L9.08588 10.672C9.06454 10.432 9.10988 10.224 9.22188 10.048C9.33388 9.86667 9.48054 9.69867 9.66188 9.544C9.84321 9.384 10.0432 9.22933 10.2619 9.08C10.4805 8.92533 10.6832 8.75467 10.8699 8.568C11.0619 8.38133 11.2219 8.17067 11.3499 7.936C11.4779 7.696 11.5419 7.41067 11.5419 7.08C11.5419 6.85067 11.4965 6.64267 11.4059 6.456C11.3152 6.26933 11.1925 6.112 11.0379 5.984C10.8832 5.85067 10.6992 5.74933 10.4859 5.68C10.2779 5.61067 10.0539 5.576 9.81388 5.576C9.48854 5.576 9.20854 5.616 8.97388 5.696C8.74454 5.776 8.54988 5.864 8.38988 5.96C8.22988 6.056 8.09921 6.144 7.99788 6.224C7.90188 6.304 7.82188 6.344 7.75788 6.344C7.62454 6.344 7.52054 6.28267 7.44588 6.16L7.06988 5.56ZM8.62988 15.12C8.62988 14.9813 8.65388 14.8507 8.70188 14.728C8.75521 14.6053 8.82454 14.4987 8.90988 14.408C9.00054 14.3173 9.10721 14.2453 9.22988 14.192C9.35254 14.1387 9.48321 14.112 9.62188 14.112C9.76054 14.112 9.89121 14.1387 10.0139 14.192C10.1365 14.2453 10.2432 14.3173 10.3339 14.408C10.4245 14.4987 10.4965 14.6053 10.5499 14.728C10.6032 14.8507 10.6299 14.9813 10.6299 15.12C10.6299 15.264 10.6032 15.3973 10.5499 15.52C10.4965 15.6373 10.4245 15.7413 10.3339 15.832C10.2432 15.9227 10.1365 15.992 10.0139 16.04C9.89121 16.0933 9.76054 16.12 9.62188 16.12C9.48321 16.12 9.35254 16.0933 9.22988 16.04C9.10721 15.992 9.00054 15.9227 8.90988 15.832C8.82454 15.7413 8.75521 15.6373 8.70188 15.52C8.65388 15.3973 8.62988 15.264 8.62988 15.12Z" fill="#11719F"/>
                        </svg>
                      </React.Fragment>
                    }
                  </label>
                </div>
              ))
            }
          </div>
        </div>
      </li>
    )
  }
}

RadioSection.contextType = DataContext

export default RadioSection

import React, {Component} from 'react'
import {capitalize} from 'lodash'

import DataContext from '../../modules/dataContext'

const groups = {
  institution: {
    number: 1,
    label: 'Choose institution type',
    radios: [
      {
        label: '2-year college',
        value: '2yr',
      },
      {
        label: '4-year college or university',
        value: '4yr',
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
        <div className="entry">
          <span className="entry-number">{group.number}</span>
          <div className="entry-details">
            <h2 className="h3 d-flex align-items-center">{group.label}</h2>
            {
              group.radios.map((radio) => (
                <div key={radio.value} className="form-check my-3">
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

import React, {Component} from 'react'
import {find} from 'lodash'

import {getSchoolColor} from '../lib/colors'
import DataContext from '../modules/dataContext'

import SchoolChip from './SchoolChip'

class SchoolChips extends Component {
  // We don't pass description in the selected object so we retrieve it here
  getDescription  = (name) => {
    const {data} = this.context
    const found = find(data, {name})
    return found.description
  }
  
  handleClose = (school) => {
    const {schools, setSchool} = this.context
    setSchool(schools.filter((skewl) => (skewl.value !== school)))
  }
  render() {
    const {hideDescription} = this.props
    const {schools} = this.context
    return (
      <div className="school-chips">
        {
          schools.map((school) => (
            <SchoolChip
              key={school.value}
              label={school.value}
              value={school.value}
              onClose={this.handleClose}
              color={getSchoolColor(school.value, schools)}
              desc={hideDescription ? null : this.getDescription(school.value)}
              closeable
            />
          ))
        }
      </div>
    )
  }
}

SchoolChips.contextType = DataContext

export default SchoolChips
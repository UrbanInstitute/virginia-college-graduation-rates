import React, {Component} from 'react'

import {getSchoolColor} from '../../lib/colors'
import DataContext from '../../modules/dataContext'

import SchoolChip from '../../components/SchoolChip'

class SchoolChips extends Component {
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
              desc={hideDescription ? null : 'Something important here (e.g. school enrollment, school location)'}
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

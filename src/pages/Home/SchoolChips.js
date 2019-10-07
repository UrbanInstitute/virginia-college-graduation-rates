import React, {Component} from 'react'

import DataContext from '../../modules/dataContext'

import SchoolChip from '../../components/SchoolChip'

class SchoolChips extends Component {
  handleClose = (school) => {
    const {schools, setSchool} = this.context
    setSchool(schools.filter((skewl) => (skewl.value !== school)))
  }
  render() {
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
              desc={'Something important here (e.g. school enrollment, school location)'}
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

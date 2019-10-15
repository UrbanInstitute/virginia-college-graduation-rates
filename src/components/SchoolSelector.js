import React, {Component} from 'react'
import Select from 'react-select'

import DataContext from '../modules/dataContext'

import './SchoolSelector.scss'

class SchoolSelector extends Component {

  handleChange = (value) => {
    const {schools, setSchool} = this.context
    // Limit the number of selectable schools to 3
    if (schools.length >= 3) return
    setSchool(value)
  }

  render() {
    const {data, schools} = this.context
    return (
      <Select
        className="basic-single mb-4"
        placeholder="Select up to 3 schools"
        classNamePrefix="select"
        isClearable={true}
        isMulti={true}
        isSearchable={true}
        name="color"
        options={data.map((d)=>({label: d.name, value: d.name}))}
        onChange={this.handleChange}
        value={schools}
        isDisabled={schools.length >= 3}
        theme={theme => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary: '#3b96d3',
          },
        })}
      />
    )
  }

}

SchoolSelector.contextType = DataContext

export default SchoolSelector

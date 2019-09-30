import React from 'react'
import Select from 'react-select'

import {schoolsList} from '../data.js'

const SchoolSelector = () => (
    <Select
      className="basic-single mb-4"
      classNamePrefix="select"
      isClearable={true}
      isMulti={true}
      isSearchable={true}
      name="color"
      options={schoolsList}
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

export default SchoolSelector

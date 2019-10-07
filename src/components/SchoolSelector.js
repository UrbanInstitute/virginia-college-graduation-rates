import React, {useContext} from 'react'
import Select from 'react-select'

import DataContext from '../modules/dataContext'

const SchoolSelector = () => {
  const {data, schools, setSchool} = useContext(DataContext)
  return (
    <Select
      className="basic-single mb-4"
      classNamePrefix="select"
      isClearable={true}
      isMulti={true}
      isSearchable={true}
      name="color"
      options={data.map((d)=>({label: d.college, value: d.college}))}
      onChange={(value) => {setSchool(value)}}
      value={schools}
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

export default SchoolSelector

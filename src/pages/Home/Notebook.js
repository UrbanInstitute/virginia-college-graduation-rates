import React from 'react'
import Select from 'react-select'

import {schoolsList} from '../../data.js'

const Notebook = () => (
  <div className="card" style={{minHeight:700}}>
    <div className="card-body">
      <div className="intro-text">
        <small className="text-uppercase text-primary">4-Year Schools</small>
        <h3>How do school graduation rates compare to state averages for race?</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>
      <div>
        <Select
          className="basic-single"
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
      </div>
    </div>
  </div>
)

export default Notebook

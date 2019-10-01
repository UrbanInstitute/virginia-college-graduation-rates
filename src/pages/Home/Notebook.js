import React from 'react'
import Select from 'react-select'

import SchoolSelector from '../../components/SchoolSelector'
import SchoolChip from '../../components/SchoolChip'

const Notebook = () => (
  <div className="card" style={{minHeight:700}}>
    <div className="card-body">
      <div className="intro-text">
        <small className="text-uppercase text-primary">4-Year Schools</small>
        <h3>How do school graduation rates compare to state averages for race?</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>
      <div>
        <SchoolSelector/>
        <SchoolChip
          label="State average"
        />
      </div>
    </div>
  </div>
)

export default Notebook

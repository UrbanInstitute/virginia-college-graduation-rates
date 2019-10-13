import React from 'react'

import {TAB_MAPPING} from '../../constants/mappings'

import SchoolSelector from '../../components/SchoolSelector'
import SchoolChip from '../../components/SchoolChip'
import LowerChart from './LowerChart'

const Notebook = ({selectedTab}) => (
  <div className="card" style={{minHeight:700}}>
    <div className="card-body">
      <div className="intro-text">
        <small className="text-uppercase text-primary">4-Year Schools</small>
        <h3>{TAB_MAPPING[selectedTab]['heading']}</h3>
        <p>{TAB_MAPPING[selectedTab]['subheading']}</p>
      </div>
      <div>
        <SchoolChip
          label="State average"
        />
        <SchoolSelector/>
      </div>
      <LowerChart items={TAB_MAPPING[selectedTab]['items']} />
    </div>
  </div>
)

export default Notebook

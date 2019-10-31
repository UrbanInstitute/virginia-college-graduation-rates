import React, {useContext} from 'react'

import DataContext from '../../modules/dataContext'
import {TAB_MAPPING} from '../../constants/mappings'

import SchoolSelector from '../../components/SchoolSelector'
import SchoolChip from '../../components/SchoolChip'
import LowerChart from './LowerChart'
import SchoolChips from './SchoolChips'

const Notebook = ({selectedTab}) => {
  const {institution} = useContext(DataContext)
  return (
    <div className="card" style={{minHeight:700}}>
      <div className="card-body">
        <div className="intro-text">
          <small className="text-uppercase text-primary" style={{fontSize:'1rem'}}>{institution === '4yr' ? '4' : '2'}-Year Schools</small>
          <h3>{TAB_MAPPING[selectedTab]['heading']}</h3>
          <p>{TAB_MAPPING[selectedTab]['subheading']}</p>
        </div>
        <div className="mb-5">
          <SchoolChip
            label="State average"
          />
          <SchoolSelector/>
          <SchoolChips hideDescription={true} />
        </div>
        <LowerChart items={TAB_MAPPING[selectedTab]['items']} />
      </div>
    </div>
  )
}

export default Notebook

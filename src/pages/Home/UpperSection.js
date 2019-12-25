import React from 'react'

import SchoolSelector from '../../components/SchoolSelector'

import RadioSection from './RadioSection'
import UpperChart from './UpperChart'
import SchoolChips from '../../components/SchoolChips'

const UpperSection = () => {
  return (
    <section>
      <form>
        <ul className="row list-unstyled">
          <RadioSection type="institution"/>
          <RadioSection type="graduation"/>
          <li className="col-12 col-lg-4">
            <div className="entry">
              <span className="entry-number">3</span>
              <div className="entry-details">
                <h2 className="h3 d-flex align-items-center">Choose your school (optional)</h2>
                <SchoolSelector/>
              </div>
            </div>
          </li>
        </ul>
      </form>
      <div className="row justify-content-center mb-5">
        <div className="col-12 col-md-4 order-md-2">
          <SchoolChips />
        </div>
        <div className="col-12 col-md-8 order-md-1">
          <UpperChart/>
        </div>
      </div>
    </section>
  )
}
export default UpperSection

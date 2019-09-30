import React from 'react'
import Select from 'react-select'

import {schoolsList, comparisons} from '../../data.js'

const tabItems = comparisons.map((comparison) =>
  <a class="nav-link vertical-text" id={`tabs-${comparison.value}`} data-toggle="pill" href={`#tab-${comparison.value}`} role="tab" aria-controls={`tabs-${comparison.value}`}>{comparison.label}</a>
)

const tabOptions = comparisons.map((comparison) =>
  <option value={comparison.value}>{comparison.label}</option>
)

const LowerSection = () => (
  <section>
    <div className="row mb-5">
      <div className="col-12">
        <h2 className="h3 d-flex align-items-center"><span className="display-5 font-weight-bolder text-primary mr-4">4</span>Choose your metric for comparison</h2>
        <div className="my-3 ml-4">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>
    </div>
    <div className="row justify-content-center mb-5">
      <div className="col-12 col-lg-8">
        <div className="row">
          <div className="col-12 col-md-auto order-1 order-md-2 mt-3 pl-md-0 d-none d-md-inline-block">
            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              {tabItems}
            </div>
          </div>
          <div className="col-12 col-md-auto order-0 mb-2 d-block d-md-none">
            <div className="form-group">
              <label className="sr-only" for="tab-dropdown">Choose your metric for comparison</label>
              <select className="form-control" id="tab-dropdown">
                {tabOptions}
              </select>
            </div>
          </div>
          <div className="col-12 col-md-11 order-2 order-md-1 pr-md-0">
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
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default LowerSection

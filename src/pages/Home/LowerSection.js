import React from 'react'
import Select from 'react-select'

import {schoolsList} from '../../data.js'

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
              <a class="nav-link vertical-text" id="v-pills-sat-tab" data-toggle="pill" href="#v-pills-sat" role="tab" aria-controls="v-pills-sat">SAT Score</a>
              <a class="nav-link vertical-text" id="v-pills-gpa-tab" data-toggle="pill" href="#v-pills-gpa" role="tab" aria-controls="v-pills-gpa">HS GPA</a>
              <a class="nav-link vertical-text active" id="v-pills-race-tab" data-toggle="pill" href="#v-pills-race" role="tab" aria-controls="v-pills-race" aria-selected="true">Race</a>
              <a class="nav-link vertical-text" id="v-pills-gender-tab" data-toggle="pill" href="#v-pills-gender" role="tab" aria-controls="v-pills-gender">Gender</a>
              <a class="nav-link vertical-text" id="v-pills-pell-tab" data-toggle="pill" href="#v-pills-pell" role="tab" aria-controls="v-pills-pell">Pell Status</a>
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

import React from 'react'
import Select from 'react-select'

import {schoolsList} from '../../data.js'

const UpperSection = () => (
  <section>
    <form>
      <ul className="row list-unstyled">
        <li className="col-12 col-lg-4">
          <h2 className="h3 d-flex align-items-center"><span className="display-5 font-weight-bolder text-primary mr-4">1</span>Choose institution type</h2>
          <div className="form-check my-3 ml-4">
            <input className="form-check-input" type="radio" name="institution-type" id="institution-type1" value="2year"/>
            <label className="h4 form-check-label" for="institution-type1">
              2-year college
            </label>
          </div>
          <div className="form-check my-3 ml-4">
            <input className="form-check-input" type="radio" name="institution-type" id="institution-type2" value="4year"/>
            <label className="h4 form-check-label" for="institution-type2">
              4-year college or university
            </label>
          </div>
        </li>
        <li className="col-12 col-lg-4">
          <h2 className="h3 d-flex align-items-center"><span className="display-5 font-weight-bolder text-primary mr-4">2</span>Choose graduation rate</h2>
          <div className="form-check my-3 ml-4">
            <input className="form-check-input" type="radio" name="graduation-rate" id="graduation-rate1" value="4year"/>
            <label className="h4 form-check-label" for="graduation-rate1">
              4-year
            </label>
          </div>
          <div className="form-check my-3 ml-4">
            <input className="form-check-input" type="radio" name="graduation-rate" id="graduation-rate2" value="6year"/>
            <label className="h4 form-check-label" for="graduation-rate2">
              6-year
            </label>
          </div>
        </li>
        <li className="col-12 col-lg-4">
          <h2 className="h3 d-flex align-items-center"><span className="display-5 font-weight-bolder text-primary mr-4">3</span>Choose your school (optional)</h2>
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
        </li>
      </ul>
    </form>
    <div className="row justify-content-center mb-5">
      <div className="col-10">
        <canvas className="border border-secondary w-100" style={{height: 500}}/>
      </div>
    </div>
  </section>
)

export default UpperSection

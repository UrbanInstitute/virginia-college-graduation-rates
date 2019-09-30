import React from 'react'
import Select from 'react-select'

import {schoolsList} from '../../data.js'


const chips = [...Array(3)].map((e, i) => {
  const school = schoolsList[Math.floor(Math.random()*schoolsList.length)]
  return (
    <div className="school-chip" key={i} id={school.value}>
      <span className="school-chip-icon"/>
      <div className="school-chip-details">
        <h3 className="h4">{school.label}</h3>
        <p>{school.desc}</p>
        <div className="school-chip-close">
          <a className="btn btn-link pl-0" href="/">X <span className="text-muted font-italic">Close</span></a>
        </div>
      </div>
    </div>
  )
})

const UpperSection = () => (
  <section>
    <form>
      <ul className="row list-unstyled">
        <li className="col-12 col-lg-4">
          <div className="entry">
            <span className="entry-number">1</span>
            <div class="entry-details">
              <h2 className="h3 d-flex align-items-center">Choose institution type</h2>
              <div className="form-check my-3">
                <input className="form-check-input" type="radio" name="institution-type" id="institution-type1" value="2year"/>
                <label className="h4 form-check-label" for="institution-type1">
                  2-year college
                </label>
              </div>
              <div className="form-check my-3">
                <input className="form-check-input" type="radio" name="institution-type" id="institution-type2" value="4year"/>
                <label className="h4 form-check-label" for="institution-type2">
                  4-year college or university
                </label>
              </div>
            </div>
          </div>
        </li>
        <li className="col-12 col-lg-4">
          <div className="entry">
            <span className="entry-number">2</span>
            <div class="entry-details">
              <h2 className="h3 d-flex align-items-center">Choose graduation rate</h2>
              <div className="form-check my-3">
                <input className="form-check-input" type="radio" name="graduation-rate" id="graduation-rate1" value="4year"/>
                <label className="h4 form-check-label" for="graduation-rate1">
                  4-year
                </label>
              </div>
              <div className="form-check my-3">
                <input className="form-check-input" type="radio" name="graduation-rate" id="graduation-rate2" value="6year"/>
                <label className="h4 form-check-label" for="graduation-rate2">
                  6-year
                </label>
              </div>
            </div>
          </div>
        </li>
        <li className="col-12 col-lg-4">
          <div className="entry">
            <span className="entry-number">3</span>
            <div class="entry-details">
              <h2 className="h3 d-flex align-items-center">Choose your school (optional)</h2>
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
        </li>
      </ul>
    </form>
    <div className="row justify-content-center mb-5">
      <div className="col-12 col-md-4 order-md-2">
        {chips}
      </div>
      <div className="col-12 col-md-8 order-md-1">
        <canvas className="border border-secondary w-100" style={{height: 500}}/>
      </div>
    </div>
  </section>
)

export default UpperSection

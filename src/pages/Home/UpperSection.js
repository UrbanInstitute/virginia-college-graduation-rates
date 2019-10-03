import React from 'react'
import Select from 'react-select'
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip,} from 'recharts'

import SchoolSelector from '../../components/SchoolSelector'
import SchoolChip from '../../components/SchoolChip'

import {schoolsList} from '../../data.js'

const chips = [...Array(3)].map((e, i) => {
  const school = schoolsList[Math.floor(Math.random()*schoolsList.length)]
  return (
    <SchoolChip
      label={school.label}
      value={school.value}
      desc={school.desc}
      closeable
    />
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
              <SchoolSelector/>
            </div>
          </div>
        </li>
      </ul>
    </form>
    <div className="row justify-content-center mb-5">
      <div className="col-12 col-md-4 order-md-2">
        <div className="school-chips">
          {chips}
        </div>
      </div>
      <div className="col-12 col-md-8 order-md-1">
        <ResponsiveContainer>
          <LineChart>
            <XAxis dataKey="category" allowDuplicatedCategory={false} axisLine={false} dy={0} />
            <YAxis yAxisId="line" orientation="left" dataKey="score" domain={[0, 100]} interval="preserveStartEnd" ticks={[0, 100]} tickLine={false} unit="%"/>
            <YAxis orientation="right" />
            <Tooltip/>
            {schoolsList.map(s => (
              <Line yAxisId="line" dataKey="score" data={s.data} name={s.label} key={s.value} />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  </section>
)

export default UpperSection

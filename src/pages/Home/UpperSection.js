import React, {useContext} from 'react'
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip,} from 'recharts'

import DataContext from '../../modules/dataContext'

import SchoolSelector from '../../components/SchoolSelector'
import SchoolChip from '../../components/SchoolChip'

import RadioSection from './RadioSection'

import {schoolsList} from '../../data.js'

const chips = [...Array(3)].map((e, i) => {
  const school = schoolsList[i]
  return (
    <SchoolChip
      key={school.label}
      label={school.label}
      value={school.value}
      desc={school.desc}
      closeable
    />
  )
})

const UpperSection = () => {
  const {
    institution,
    setInstitution,
    graduation,
    setGraduation
  } = useContext(DataContext)
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
}
export default UpperSection

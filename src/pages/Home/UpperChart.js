import React, {useContext} from 'react'
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip,} from 'recharts'

import DataContext from '../../modules/dataContext'

const UpperChart = () => {
  const {graduation, data, schools} = useContext(DataContext)
  // Place data into chart format
  const series = data.map((col) => ({
    label: col.name,
    data: [
      {category: 'Unadjusted Scores', score: col[`grad_rate_${graduation}`]},
      {category: 'Adjusted Scores', score: col[`adj_${graduation}_grad_rate`]},
    ]
  }))
  return (
    <ResponsiveContainer>
      <LineChart>
        <XAxis dataKey="category" allowDuplicatedCategory={false} axisLine={false} dy={0} />
        <YAxis yAxisId="line" orientation="left" dataKey="score" domain={[0, 100]} interval="preserveStartEnd" ticks={[0, 100]} tickLine={false} unit="%"/>
        <YAxis orientation="right" />
        {
          series.map((col, i) => (
            <Line
              yAxisId="line"
              dataKey="score"
              data={col.data}
              name={col.label}
              key={i}
            />
          ))
        }
      </LineChart>
    </ResponsiveContainer>
  )
}

export default UpperChart

import React, {Component} from 'react'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  LabelList,
} from 'recharts'

import {getSchoolColor} from '../../lib/colors'
import DataContext from '../../modules/dataContext'

import './UpperChart.scss'

class UpperChart extends Component {
  render() {
    const {graduation, data, schools} = this.context
    // Place data into chart format
    // TODO: Place our schools at beginning of array so they are on top
    const series = data.map((col) => ({
      label: col.name,
      color: getSchoolColor(col.name, schools),
      data: [
        {category: 'Unadjusted Scores', score: col[`grad_rate_${graduation}`]},
        {category: 'Adjusted Scores', score: col[`adj_${graduation}_grad_rate`]},
      ]
    }))
    return (
      <ResponsiveContainer className="upper-chart">
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
                stroke={col.color}
                dot={{stroke: col.color, fill: col.color, r: 5}}
                key={i}
                connectNulls={true}
              />
            ))
          }
        </LineChart>
      </ResponsiveContainer>
    )
  }
}

UpperChart.contextType = DataContext

export default UpperChart

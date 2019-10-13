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
import {arrayMoveInPlace} from '../../lib/array'
import DataContext from '../../modules/dataContext'

import './UpperChart.scss'

class UpperChart extends Component {

  reorderSeries = (series) => {
    const reordered = series.slice()
    const schools = this.context.schools.slice()
    schools.reverse()
    schools.forEach(({value}) => {
      const index = reordered.findIndex((s) => (s.label === value))
      arrayMoveInPlace(reordered, index, reordered.length - 1)
    })
    return reordered
  }

  render() {
    const {graduation, data, schools} = this.context
    // Place data into chart format
    let series = data.map((col) => ({
      label: col.name,
      color: getSchoolColor(col.name, schools),
      data: [
        {category: 'Unadjusted Scores', score: col[`grad_rate_${graduation}`]},
        {category: 'Adjusted Scores', score: col[`adj_${graduation}_grad_rate`]},
      ]
    }))
    // Move our schools to end of array so they are on top of chart
    series = this.reorderSeries(series)
    console.log(series)
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

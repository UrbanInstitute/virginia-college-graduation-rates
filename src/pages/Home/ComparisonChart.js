import React, {Component} from 'react'
import {
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts'

import {getSchoolColor} from '../../lib/colors'
import DataContext from '../../modules/dataContext'

import './ComparisonChart.scss'

class ComparisonChart extends Component {
  render() {
    const {schools} = this.context
    const {school, averageData, metricData, categories} = this.props
    // Place data into chart format
    const line = {
      label: school.value,
      color: getSchoolColor(school, schools),
      data: categories.map((category) => {
        const item = {category}
        if (category === metricData) {
          item.score = 10
        }
        if (category === averageData) {
          item.score = 10
          item.average = true
        }
        return item
      })
    }
    return (
      <ResponsiveContainer className="comparison-chart">
        <LineChart>
          <Line
            yAxisId="line"
            dataKey="score"
            data={line.data}
            name={line.label}
            stroke={line.color}
            dot={{stroke: line.color, fill: line.color, r: 5}}
            connectNulls
          />
        </LineChart>
      </ResponsiveContainer>
    )
  }
}

ComparisonChart.contextType = DataContext

export default ComparisonChart

import React, {Component} from 'react'
import {
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts'

import CustomDot from '../../components/CustomDot'

import {getSchoolColor} from '../../lib/colors'
import DataContext from '../../modules/dataContext'

import './ComparisonChart.scss'

class ComparisonChart extends Component {
  render() {
    const {schools} = this.context
    const {school, averageData, metricData, categories} = this.props
    // We are using this position to place the text next to the dots
    let averagePosition
    let metricPosition
    const difference = (metricData - averageData) + '%'
    console.log(difference)
    if (averageData > metricData) {
      averagePosition = 20
      metricPosition = -50
    } else {
      averagePosition = -50
      metricPosition = 20
    }
    const line = {
      label: school.value,
      color: getSchoolColor(school, schools),
      data: categories.map((category) => {
        const item = {category}
        if (category === metricData) {
          item.score = 10
          item.dx = metricPosition
        }
        if (category === averageData) {
          item.score = 10
          item.average = true
          item.dx = averagePosition
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
            stroke="#353535"
            dot={<CustomDot stroke={line.color} fill={line.color} r={10} />}
            connectNulls
          />
        </LineChart>
      </ResponsiveContainer>
    )
  }
}

ComparisonChart.contextType = DataContext

export default ComparisonChart

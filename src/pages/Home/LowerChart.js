import React, {Component} from 'react'
import {flatMap, map, range} from 'lodash'

import DataContext from '../../modules/dataContext'
import ComparisonChart from './ComparisonChart'

class LowerChart extends Component {
  render() {
    const {data, schools} = this.context
    const {items} = this.props
    const schoolArray = schools.map((school)=>(school.value))
    const itemKeys = Object.keys(items)
    let averageData = {}
    const schoolsData = {}
    data.forEach((col) => {
      if (schoolArray.includes(col['name'])) {
        schoolsData[col['name']] = col
      }
      if (col['name'] === 'State Average') {
        averageData = col
      }
    })
    const allValues = flatMap(data, (col) => (schoolArray.includes(col['name']) ? getTabData(col, itemKeys) : null)).filter((n)=>(n))
    const max = Math.max(...allValues)
    const min = Math.min(...allValues)
    // Create an array of numbers from our min to max
    const categories = range(min - 10, max + 10, 1)
    return map(items, (label, metric) => {
      return (
        <div style={{minHeight: '50px'}} key={metric}>
          <h3>{label}</h3>
          {
            schoolArray.map((school, i)=>(
              <ComparisonChart
                key={i}
                categories={categories}
                school={school}
                metricData={schoolsData[school][metric]}
                averageData={averageData[metric]}
              />
            ))
          }
        </div>
      )
    })
  }
}

LowerChart.contextType = DataContext

export default LowerChart

const getTabData = (data, itemKeys) => (
  map(data, (v, k) => (itemKeys.includes(k) ? v : null))
)

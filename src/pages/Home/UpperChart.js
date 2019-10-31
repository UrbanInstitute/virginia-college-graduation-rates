import React, {Component} from 'react'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
} from 'recharts'
import {cloneDeep} from 'lodash'

import UpperDot from '../../components/UpperDot'

import {getSchoolColor} from '../../lib/colors'
import {arrayMoveInPlace} from '../../lib/array'
import DataContext from '../../modules/dataContext'

import './UpperChart.scss'

class UpperChart extends Component {
  resizeHandle = null

  state = {
    hoveredSchool: null,
    margin: 150,
  }

  reorderSeries = (series) => {
    const reordered = cloneDeep(series)
    const schools = cloneDeep(this.context.schools)
    schools.reverse()
    schools.forEach(({value}) => {
      const index = reordered.findIndex((s) => (s.label === value))
      arrayMoveInPlace(reordered, index, reordered.length - 1)
    })
    return reordered
  }

  handleMouseOver = (hoveredSchool) => {
    this.setState({hoveredSchool})
  }

  handleMouseOut = () => {
    this.setState({hoveredSchool: null})
  }

  handleClick = (school) => {
    const {schools, setSchool} = this.context
    const newSchools = cloneDeep(schools)
    const schoolArray = this.schoolArray()
    if (newSchools.length < 3 && !schoolArray.includes(school)) {
      newSchools.push({label: school, value: school})
      setSchool(newSchools)
    }
  }

  schoolArray = (schools) => {
    return schools.map((school)=>(school.value))
  }

  setMargin = () => {
    if (
      document.body &&
      document.body.clientWidth < 769
    ) {
      this.setState({margin: 85})
    } else {
      this.setState({margin: 150})
    }
  }

  renderLine = (col, i) => {
    const {hoveredSchool} = this.state
    const {schools} = this.context
    const schoolArray = this.schoolArray(schools)
    return (
      <Line
        yAxisId="line"
        dataKey="score"
        data={col.data}
        name={col.label}
        stroke={col.color}
        strokeWidth={col.label === hoveredSchool ? 3 : 1}
        key={i}
        connectNulls={true}
        animationDuration={500}
        dot={{
          stroke: col.color,
          fill: col.color,
          r: schoolArray.includes(col.label) ? 7 : 5,
        }}
      />
    )
  }

  componentDidMount() {
    this.setMargin()
    this.resizeHandle = window.addEventListener('resize', this.setMargin)
  }

  componentWillUnmount() {
    window.addRemoveListener(this.resizeHandle)
  }

  render() {
    const {graduation, data, schools} = this.context
    const {hoveredSchool, margin} = this.state
    const schoolArray = this.schoolArray(schools)
    // Place data into chart format
    let series = data.map((col) => ({
      label: col.name,
      color: getSchoolColor(col.name, schools),
      data: [
        {
          category: 'Unadjusted Scores',
          score: col[`grad_rate_${graduation}`],
          schoolName: hoveredSchool === col.name || schoolArray.includes(col.name) ? col.name : null
        },
        {category: 'Adjusted Scores', score: col[`adj_${graduation}_grad_rate`]},
      ]
    }))
    // Move our schools to end of array so they are on top of chart
    series = this.reorderSeries(series)
    return (
      <ResponsiveContainer className="upper-chart">
        <LineChart
          margin={{left: margin}}
        >
          <XAxis dataKey="category" allowDuplicatedCategory={false} axisLine={false} dy={0} tickMargin={10} />
          <YAxis
            yAxisId="line"
            dataKey="score"
            domain={[0, 100]}
            interval="preserveStartEnd"
            orientation="left"
            tickLine={false}
            ticks={[0, 100]}
            unit="%"
          />
          <YAxis orientation="right" />
          {
            series.map(this.renderLine)
          }
        </LineChart>
      </ResponsiveContainer>
    )
  }
}

UpperChart.contextType = DataContext

export default UpperChart

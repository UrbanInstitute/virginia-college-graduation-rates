import React, {Component} from 'react'
import Select, {components} from 'react-select'
import DataContext from '../modules/dataContext'

import './SchoolSelector.scss'

// Components from react select that we want to customize
const {ValueContainer, Placeholder} = components

class SchoolSelector extends Component {

  handleChange = (value) => {
    const {schools, setSchool} = this.context
    // Limit the number of selectable schools to 3
    if (schools.length >= 3) return
    // If someone presses backspace in an empty select box, it passes a null
    // We should just ignore it
    if (value === null) return
    setSchool(value)
  }

  render() {
    const {data, schools} = this.context
    const CustomValueContainer = ({children, ...props}) => {
      return (
        <ValueContainer {...props}>
          <Placeholder {...props} isFocused={props.isFocused}>
            {(schools.length > 0) ? (schools.length + ' / 3') : props.selectProps.placeholder}
          </Placeholder>
          {React.Children.map(children, child => {
            return child && child.type !== Placeholder ? child : null
          })}
        </ValueContainer>
      )
    }
    return (
      <Select
        className="basic-single mb-4"
        placeholder="Select up to 3 schools"
        classNamePrefix="select"
        components={{
          ValueContainer: CustomValueContainer
        }}
        isClearable={true}
        isMulti={true}
        isSearchable={true}
        name="color"
        options={generateOptions(data)}
        onChange={this.handleChange}
        value={schools}
        isDisabled={schools.length >= 3}
        styles={{
          placeholder: (provided, state) => ({
            ...provided,
            position: 'absolute',
            right: state.hasValue || state.selectProps.inputValue ? '.75em' : 'auto',
            fontSize: (state.hasValue || state.selectProps.inputValue) && '.75em'
          })
        }}
        theme={theme => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary: '#3b96d3',
          },
        })}
      />
    )
  }

}

SchoolSelector.contextType = DataContext

export default SchoolSelector

// Removes State Average from the options
const generateOptions = (data) => {
  return data.map(
    (d) => {
      if (d.name !== 'State Average') {
        return {label: d.name, value: d.name}
      }
      return null
    }
  ).filter((n)=>(n))
}

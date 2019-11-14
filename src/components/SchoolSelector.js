import React, {Component, type ElementConfig} from 'react'
import Select, {components} from 'react-select'
import DataContext from '../modules/dataContext'

import './SchoolSelector.scss'

// Components from react select that we want to customize
const {ValueContainer, Placeholder} = components

const DropdownIndicator = (
  props: ElementConfig<typeof components.DropdownIndicator>
) => {
  return (
    <components.DropdownIndicator {...props}>
      <svg style={{marginLeft: '.2rem', marginRight: '.25rem'}} width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.852 8.148H7.292V13.008H4.604V8.148H0.068V5.736H4.604V0.888H7.292V5.736H11.852V8.148Z" fill="#12719E"/>
      </svg>
    </components.DropdownIndicator>
  )
}


class SchoolSelector extends Component {

  handleChange = (value) => {
    const {schools, setSchool} = this.context
    // Limit the number of selectable schools to 3
    if (schools.length >= 3 && value.length !== 0) return
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
      <div className="mt-3 clearfix mb-2">
        <Select
          className="basic-single mb-1"
          placeholder="Select up to 3 schools"
          classNamePrefix="select"
          components={{
            ValueContainer: CustomValueContainer,
            DropdownIndicator: DropdownIndicator
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
        { (schools.length >= 1) ?
          <div className="school-chip-close float-right" onClick={this.handleChange.bind(null, [])}>
            X <span className="school-chip-close-text"> Clear all</span>
          </div>
        :
          ''
        }
      </div>
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

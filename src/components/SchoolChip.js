import React from 'react'

import './SchoolChip.scss'

export class SchoolChip extends React.Component {
  render(){
    const {
      closeable,
      color,
      desc,
      label,
      onClose,
      value,
    } = this.props
    return(
      <div className="school-chip" id={value}>
        <span className="school-chip-icon" style={{background: color}}/>
        <div className="school-chip-details">
          <h3 className="h4">{label}</h3>
          {desc && <p>{desc}</p>}
          { closeable ? (
            <div className="school-chip-close" onClick={onClose.bind(null, value)}>
              X <span className="school-chip-close-text"> Clear</span>
            </div>
          ):
            ''
          }
        </div>
      </div>
    )
  }
}

export default SchoolChip

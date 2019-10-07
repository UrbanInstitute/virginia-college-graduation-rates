import React from 'react'

export class SchoolChip extends React.Component {
  render(){
    const {
      label,
      value,
      desc,
      closeable,
      onClose,
    } = this.props
    return(
      <div className="school-chip" id={value}>
        <span className="school-chip-icon"/>
        <div className="school-chip-details">
          <h3 className="h4">{label}</h3>
          <p>{desc}</p>
          { closeable ? (
            <div className="school-chip-close" onClick={onClose.bind(null, value)}>
              <span className="btn btn-link pl-0" href="/">X <span className="text-muted font-italic">Close</span></span>
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

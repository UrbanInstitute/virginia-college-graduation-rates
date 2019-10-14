import React, {PureComponent} from 'react'
import classNames from 'classnames'
import {getPresentationAttributes, filterEventAttributes} from 'recharts/src/util/ReactUtils'

class UpperDot extends PureComponent {
  static displayName = 'UpperDot';

  render() {
    const {cx, cy, r, className, payload} = this.props
    const layerClass = classNames('recharts-dot', className)
    if (cx === +cx && cy === +cy && r === +r) {
      return (
        <React.Fragment>
          {
            payload.category === 'Unadjusted Scores' &&
            payload.schoolName &&
            <text
              x={cx}
              y={cy}
              dx={-20}
              width={200}
              textAnchor="end"
              dy={5}
              color="#353535"
            >{
              payload.schoolName.length > 16 ?
              payload.schoolName.substring(0, 16) + '...' :
              payload.schoolName
            }</text>

          }
          <circle
            {...getPresentationAttributes(this.props)}
            {...filterEventAttributes(this.props, null, true)}
            className={layerClass}
            cx={cx}
            cy={cy}
            r={r}
          />
        </React.Fragment>
      )
    }

    return null
  }
}

export default UpperDot

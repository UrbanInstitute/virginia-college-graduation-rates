/**
 * @fileOverview Dot
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {getPresentationAttributes, filterEventAttributes} from 'recharts/src//util/ReactUtils'

class Dot extends Component {
  static displayName = 'Dot';

  static propTypes = {
    className: PropTypes.string,
    cx: PropTypes.number,
    cy: PropTypes.number,
    r: PropTypes.number,
  };

  render() {
    console.log(this.props.payload)
    const {cx, cy, r, className, payload} = this.props
    const layerClass = classNames('recharts-dot', className)
    const copiedProps = Object.assign({}, this.props)
    if (payload.average) {
      copiedProps.fill = '#bebdbe'
      copiedProps.stroke = '#bebdbe'
    }
    if (cx === +cx && cy === +cy && r === +r) {
      return (
        <circle
          {...getPresentationAttributes(copiedProps)}
          {...filterEventAttributes(this.props, null, true)}
          className={layerClass}
          cx={cx}
          cy={cy}
          r={r}
        />
      )
    }

    return null
  }
}

export default Dot

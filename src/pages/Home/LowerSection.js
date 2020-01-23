import React, {Component} from 'react'
import {forEach} from 'lodash'

import DataContext from '../../modules/dataContext'
import {TAB_MAPPING} from '../../constants/mappings'

import Notebook from './Notebook'

import './LowerSection.scss'

class LowerSection extends Component  {
  state = {
    selectedTab: null,
  }

  tabs = () => {
    const {institution} = this.context
    const tabs = []
    forEach(TAB_MAPPING, (tab, name) => {
      if (tab.institution === undefined || tab.institution === institution) {
        tabs.push(name)
      }
    })
    return tabs
  }

  changeTab = (newTab) => {
    this.setState({selectedTab: newTab})
  }

  tabItems = () => {
    const {selectedTab} = this.state
    const tabs = this.tabs()
    const sTab = tabs.includes(selectedTab) ?  selectedTab : this.tabs()[0]
    const sIndex = tabs.indexOf(selectedTab)

    return this.tabs().map((tab, i) =>
      <span
        key={i}
        className={`nav-link vertical-text ${sTab === tab ? 'active' : (i < sIndex)?  'inactive' + i : 'inactive' + (i-1)}`}
        data-toggle="pill"
        role="tab"
        onClick={this.changeTab.bind(null, tab)}
      >{tab}</span>
    )
  }

  tabOptions = () => {
    return this.tabs().map((tab, i) =>
      <option key={i} value={tab}>{tab}</option>
    )
  }

  render() {
    const selectedTab = this.state.selectedTab || this.tabs()[0]
    return (
      <section>
        <div className="row mb-5">
          <div className="col-12">
            <div className="entry">
              <span className="entry-number">4</span>
              <div className="entry-details">
                <h2 className="h3 d-flex align-items-center">Choose student characteristics to learn more about our adjustments</h2>
                <div className="my-3">
                  <p>How do these adjustments work? It depends on the size of each subgroup at each school and on the statewide graduation rates. A school’s graduation rate will be adjusted upward if it has a relatively large population of students who graduate at lower levels than other groups across the state.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-8">
            <div className="row">
              <div className="col-12 col-md-auto order-1 order-md-2 mt-3 pl-md-0 d-none d-md-inline-block">
                <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  {this.tabItems()}
                </div>
              </div>
              <div className="col-12 col-md-auto order-0 mb-2 d-block d-md-none">
                <div className="form-group">
                  <label className="sr-only" htmlFor="tab-dropdown">Pick a student characteristic and up to three schools to see how each school compares with the state average and with each other.</label>
                  <select className="form-control" id="tab-dropdown" value={selectedTab} onChange={(e) => {this.changeTab(e.target.value)}}>
                    {this.tabOptions()}
                  </select>
                </div>
              </div>
              <div className="col-12 col-md-10 order-2 order-md-1 pr-md-0">
                <Notebook selectedTab={selectedTab}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

LowerSection.contextType = DataContext

export default LowerSection

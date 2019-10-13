import React, {Component} from 'react'

import DataContext from '../../constants/data'
import {TAB_MAPPING} from '../../constants/mappings'

import Notebook from './Notebook'

const tabs = Object.keys(TAB_MAPPING)

class LowerSection extends Component  {
  state = {
    selectedTab: tabs[0],
  }

  changeTab = (newTab) => {
    this.setState({selectedTab: newTab})
  }

  tabItems = () => {
    const {selectedTab} = this.state
    return tabs.map((tab, i) =>
      <span
        key={i}
        className={`nav-link vertical-text ${selectedTab === tab ? 'active' : ''}`}
        data-toggle="pill"
        role="tab"
        onClick={this.changeTab.bind(null, tab)}
      >{tab}</span>
    )
  }

  tabOptions = () => {
    return tabs.map((tab, i) =>
      <option key={i} value={tab}>{tab}</option>
    )
  }

  render() {
    const selectedTab = this.state.selectedTab || tabs[0]
    return (
      <section>
        <div className="row mb-5">
          <div className="col-12">
            <div className="entry">
              <span className="entry-number">4</span>
              <div className="entry-details">
                <h2 className="h3 d-flex align-items-center">Choose your metric for comparison</h2>
                <div className="my-3">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
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
                  <label className="sr-only" htmlFor="tab-dropdown">Choose your metric for comparison</label>
                  <select className="form-control" id="tab-dropdown" value={selectedTab} onChange={(e) => {this.changeTab(e.target.value)}}>
                    {this.tabOptions()}
                  </select>
                </div>
              </div>
              <div className="col-12 col-md-11 order-2 order-md-1 pr-md-0">
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

import React, {Component} from 'react'

import './Footer.scss'

class Footer extends Component  {
  render() {
    return (
      <React.Fragment>
        <hr className="footer-hr"/>
        <div className="row justify-content-center my-5">
          <footer className="col-12 col-md-8">
            <h2>About the Data</h2>
            <p>The data for these analyses come from the Virginia Longitudinal Data System (VLDS) for fall cohorts in 2009, 2010, 2011, and 2012. We use a linear probability model to estimate the likelihood of a student graduating at a particular college, controlling for individual characteristics. Graduation is defined to include graduation from a Virginia college different than the one in which a student initially enrolled, to account for students who transfer. Models include only students with complete data and include controls for year. Pell receipt is for the freshman fall semester only. Only cells with 30 or more students are reported. Additional details related to the community and four-year college models specifically are described below.</p>

            <h3>Community colleges</h3>
            <p>The community college analyses include freshmen in baccalaureate or occupational or technical programs; a control for program type is included to account for this. Full time is defined as being enrolled in 12 or more credits in the freshman fall semester. The model includes writing, reading, and geometry end-of-course exams taken in high school. These are included separately in the model as continuous variables but are summed and reported in quintiles for expositional purposes. Because high school data are included, we drop students from out of state and older students, none of whom have high school records in Virginia.</p>
            <p>We focus on four- and six-year graduation rates for community college students for two reasons. One is that many students are part time, so completion in two years is infeasible. The other is that to the extent students begin at community colleges with the goal of transferring to and graduating from a four-year college, we want to allow enough time to finish those degrees.</p>
            
            <h3>Four-year colleges</h3>
            <p>The four-year analyses include freshmen in baccalaureate programs. Virginia Intermont College and Saint Paul’s College are excluded (both schools have closed), as is Averett University Non-Traditional Programs (small sample size). SAT math and reading scores are included separately in the model as continuous variables but are summed and reported in quintiles for expositional purposes. High school GPA is similarly included as a continuous variable but is reported in quintiles.</p>

            <h2 className="mt-5 ">Project Credits</h2>
            <p className="font-italic mb-4">This feature was funded by <a href="https://www.arnoldventures.org/">Arnold Ventures</a>. We are grateful to them and to all our funders, who make it possible for Urban to advance its mission. The views expressed are those of the authors and should not be attributed to the Urban Institute, its trustees, or its funders. Funders do not determine research findings or the insights and recommendations of our experts. More information on our funding principles is available <a href="https://www.urban.org/support/funding-principles">here</a>. Read our terms of service <a href="https://www.urban.org/terms-service">here</a>.</p>

            <h3 className="text-uppercase">Research</h3>
            <p><a href="https://www.urban.org/author/erica-blom">Erica Blom</a> and <a href="https://www.urban.org/author/macy-rainer">Macy Rainer</a></p>

            <h3 className="text-uppercase">Design</h3>
            <p>Allison Feldman</p>

            <h3 className="text-uppercase">Development</h3>
            <p>Sean Perkins and Richard Metzger from <a href="https://mobility-labs.com">Mobility Labs Inc.</a></p>

            <h3 className="text-uppercase">Editing</h3>
            <p>David Hinson</p>

            <h3 className="text-uppercase">Writing</h3>
            <p>Serena Lei</p>

            <a className="github-link" href="https://github.com/UrbanInstitute/pell-simulator" rel="noopener noreferrer" target="_blank">View this project on GitHub</a>
          </footer>
        </div>
      </React.Fragment>
    )
  }
}

export default Footer

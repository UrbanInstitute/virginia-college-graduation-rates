import React from 'react'
import book from '../../images/book-icon.svg'
import cap from '../../images/cap-icon.svg'
import pencil from '../../images/pencil-icon.svg'

const Header = () => (
  <React.Fragment>
    <div className="row justify-content-center mb-5">
      <div className="col-8">
        <div className="row">
          <div className="col-4 d-flex justify-content-center">
            <img src={book} className="img-fluid" alt="Book icon"/>
          </div>
          <div className="col-4 d-flex justify-content-center">
            <img src={cap} className="img-fluid" alt="Book icon"/>
          </div>
          <div className="col-4 d-flex justify-content-center">
            <img src={pencil} className="img-fluid" alt="Book icon"/>
          </div>
        </div>
      </div>
    </div>
    <div className="row mb-5">
      <div className="col-12 d-flex align-items-center flex-column text-center">
        <h1 className="display-1 font-weight-bold">What’s in a College’s Graduation Rate?</h1>
        <p className="display-4 font-weight-light mb-5">A Virginia Case Study</p>
        <time className="font-weight-light h3" dateTime="2020-01-31"><i>January 31, 2020</i></time>
      </div>
    </div>
    <div className="row justify-content-center mb-5">
      <div className="col-12">
        <p className="font-weight-light font-italic h3">Which colleges actually help students graduate? Raw graduation rates don’t show us which schools improve students’ chances of earning a degree and which ones enroll students who are already likely to graduate.</p>
        <p className="font-weight-light font-italic h3">So we used a better measure of the difference a school makes and applied it to Virginia’s colleges and universities. By adjusting for student characteristics that predict the likelihood of graduating (such as <a target="_blank" rel="noreferrer noopener" href="https://www.nytimes.com/2015/06/02/upshot/for-the-poor-the-graduation-gap-is-even-wider-than-the-enrollment-gap.html">race</a>
          , <a target="_blank" rel="noreferrer noopener" href="https://www.thirdway.org/report/what-matters-most-for-college-completion-academic-preparation-is-a-key-of-success">academic preparation</a>
          , and <a target="_blank" rel="noreferrer noopener" href="https://www.washingtonpost.com/news/storyline/wp/2014/10/20/why-poor-kids-dont-stay-in-college/">Pell grant status</a>
          ), we can get closer to the real value that schools provide.</p>
      </div>
    </div>
  </React.Fragment>
)

export default Header

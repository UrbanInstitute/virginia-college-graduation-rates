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
        <h1 className="display-1 font-weight-bold">College Metrics Tool</h1>
        <p className="display-4 font-weight-light mb-5">Subhead Goes Here</p>
        <time className="font-weight-light h3" dateTime="2019-09-27"><i>Sept 27th, 2019</i></time>
      </div>
    </div>
    <div className="row justify-content-center mb-5">
      <div className="col-12">
        <p className="font-weight-light font-italic h3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque facilisis id neque ut laoreet. Etiam leo felis, pulvinar eu nibh id, aliquam mattis erat. Integer nisi mi, gravida et nisl et, euismod cursus velit.</p>
        <p className="font-weight-light font-italic h3">Maecenas vel dui et ligula porta iaculis. Pellentesque a dictum nulla. Etiam dictum eros sit amet massa posuere, at convallis est scelerisque. Suspendisse non lobortis nulla.</p>
      </div>
    </div>
  </React.Fragment>
)

export default Header

import React, {Component} from 'react'

import './Footer.scss'

class Footer extends Component  {
  render() {
    return (
      <React.Fragment>
        <hr className="footer-hr"/>
        <div class="row justify-content-center my-5">
          <footer className="col-12 col-md-8">
            <h2>About the Data</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Donec elementum ligula eu sapien consequat eleifend. Donec nec dolor erat, condimentum sagittis sem. Praesent porttitor porttitor risus, dapibus rutrum ipsum gravida et. Integer</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Donec elementum ligula eu sapien consequat eleifend. Donec nec dolor erat, condimentum sagittis sem. Praesent porttitor porttitor risus, dapibus rutrum ipsum gravida et. Integer</p>

            <h2 className="mt-5 ">Project Credits</h2>
            <p className="font-italic mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Donec elementum ligula eu sapien consequat eleifend.</p>

            <h3 className="text-uppercase">Research</h3>
            <p>Firstname LastName</p>

            <h3 className="text-uppercase">Design</h3>
            <p>Firstname LastName</p>

            <h3 className="text-uppercase">Development</h3>
            <p>Firstname LastName</p>

            <h3 className="text-uppercase">Editing</h3>
            <p>Firstname LastName</p>

            <h3 className="text-uppercase">Writing</h3>
            <p>Firstname LastName</p>

            <a className="github-link" href="https://github.com/UrbanInstitute/pell-simulator" rel="noopener noreferrer" target="_blank">View this project on GitHub</a>
          </footer>
        </div>
      </React.Fragment>
    )
  }
}

export default Footer

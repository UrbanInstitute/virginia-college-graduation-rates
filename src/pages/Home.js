import React, {useState} from 'react'

import {DataProvider} from '../modules/dataContext'

import Header from './Home/Header'
import UpperSection from './Home/UpperSection'
import LowerSection from './Home/LowerSection'

import data from '../constants/data'

function Home() {
  const [institution, setInstitution] = useState('4yr')
  const [graduation, setGraduation] = useState('6yr')
  const [schools, setSchool] = useState([])
  const selectedData = data[institution] ? data[institution][graduation] : data['4yr']['6yr']
  return (
    <div className="container">
      <DataProvider
        value={{
          data: selectedData,
          institution,
          graduation,
          schools,
          setInstitution,
          setGraduation,
          setSchool,
        }}
      >
        <Header/>
        <UpperSection />
        <LowerSection />
      </DataProvider>
    </div>
  )
}

export default Home

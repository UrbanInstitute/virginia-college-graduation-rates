// The three colors we use for selected schools
const colors = [
  '#231f20',
  '#3b96d3',
  '#CFE8F3',
]

// Determines which color to dispay for graphs and chips
export const getSchoolColor = (school, schools) => {
  const schoolNames = schools.map((school)=>(school.value))
  const index = schoolNames.indexOf(school)
  if (index !== -1){
    return colors[index]
  }
  // Default gray for lines and school chips
  return '#bebdbe'
}

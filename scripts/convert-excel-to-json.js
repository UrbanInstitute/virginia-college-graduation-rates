const readXlsxFile = require('read-excel-file/node')
const replace = require('replace-in-file')

const file = './scripts/data.xlsx'

const parsePercentage = (value) => (
  Math.round(parseFloat(value) * 100)
)

const schema = {
  inst_name: {
    prop: 'name',
    type: String,
  },
  grad_rate_4yr: {
    prop: 'grad_rate_4yr',
    type: Number,
    parse: parsePercentage,
  },
  grad_rate_6yr: {
    prop: 'grad_rate_6yr',
    type: Number,
    parse: parsePercentage,
  },
  adj_4yr_grad_rate: {
    prop: 'adj_4yr_grad_rate',
    type: Number,
    parse: parsePercentage,
  },
  adj_6yr_grad_rate: {
    prop: 'adj_6yr_grad_rate',
    type: Number,
    parse: parsePercentage,
  },
  white: {
    prop: 'white',
    type: Number,
    parse: parsePercentage,
  },
  black: {
    prop: 'black',
    type: Number,
    parse: parsePercentage,
  },
  hispanic: {
    prop: 'hispanic',
    type: Number,
    parse: parsePercentage,
  },
  asian: {
    prop: 'asian',
    type: Number,
    parse: parsePercentage,
  },
  otherrace: {
    prop: 'otherrace',
    type: Number,
    parse: parsePercentage,
  },
  male: {
    prop: 'male',
    type: Number,
    parse: parsePercentage,
  },
  female: {
    prop: 'female',
    type: Number,
    parse: parsePercentage,
  },
  nopell: {
    prop: 'nopell',
    type: Number,
    parse: parsePercentage,
  },
  pell: {
    prop: 'pell',
    type: Number,
    parse: parsePercentage,
  },
  sat_lowest_quintile: {
    prop: 'sat_lowest_quintile',
    type: Number,
    parse: parsePercentage,
  },
  sat_2nd_quintile: {
    prop: 'sat_2nd_quintile',
    type: Number,
    parse: parsePercentage,
  },
  sat_mid_quintile: {
    prop: 'sat_mid_quintile',
    type: Number,
    parse: parsePercentage,
  },
  sat_4th_quintile: {
    prop: 'sat_4th_quintile',
    type: Number,
    parse: parsePercentage,
  },
  sat_highest_quintile: {
    prop: 'sat_highest_quintile',
    type: Number,
    parse: parsePercentage,
  },
  testscore_lowest_quintile: {
    prop: 'testscore_lowest_quintile',
    type: Number,
    parse: parsePercentage,
  },
  testscore_2nd_quintile: {
    prop: 'testscore_2nd_quintile',
    type: Number,
    parse: parsePercentage,
  },
  testscore_mid_quintile: {
    prop: 'testscore_mid_quintile',
    type: Number,
    parse: parsePercentage,
  },
  testscore_4th_quintile: {
    prop: 'testscore_4th_quintile',
    type: Number,
    parse: parsePercentage,
  },
  testscore_highest_quintile: {
    prop: 'testscore_highest_quintile',
    type: Number,
    parse: parsePercentage,
  },
  gpa_lowest_quintile: {
    prop: 'gpa_lowest_quintile',
    type: Number,
    parse: parsePercentage,
  },
  gpa_2nd_quintile: {
    prop: 'gpa_2nd_quintile',
    type: Number,
    parse: parsePercentage,
  },
  gpa_mid_quintile: {
    prop: 'gpa_mid_quintile',
    type: Number,
    parse: parsePercentage,
  },
  gpa_4th_quintile: {
    prop: 'gpa_4th_quintile',
    type: Number,
    parse: parsePercentage,
  },
  gpa_highest_quintile: {
    prop: 'gpa_highest_quintile',
    type: Number,
    parse: parsePercentage,
  },
  fulltime: {
    prop: 'fulltime',
    type: Number,
    parse: parsePercentage,
  },
  parttime: {
    prop: 'parttime',
    type: Number,
    parse: parsePercentage,
  },
}

const getSheets = async function (path) {
  return await readXlsxFile(path, {getSheets: true})
}

const getObjectFromSheet = async function (path, sheet, schema) {
  return await readXlsxFile(path, {sheet, schema})
}

const replaceDestinationFile = (finalObj) => {
  replace({
    files: './src/constants/data.js',
    from: /(?:\/\*\* START \*\*\/)([\s\S]*)(?:\/\*\* END \*\*\/)/,
    to: '/** START **/\n' + JSON.stringify(finalObj, null, 2) + '\n/** END **/',
  })
}

const finalObj = {
  '4yr': {},
  '2yr': {},
}

const addData = (institution, graduation, rows) => {
  const arr = finalObj[institution][graduation] || []
  rows.forEach((row)=>{
    const found = arr.findIndex((item)=>(item.name === row.name))
    if (found >= 0) {
      Object.assign(arr[found], row)
    } else {
      arr.push(row)
    }
  })
  finalObj[institution][graduation] = arr
}

const addLabel = (institution, graduation, rows) => {
  const arr = finalObj[institution][graduation] || []
  rows.forEach((row)=>{
    const name = row[0]
    const description = row[10] !== undefined ? row[10] : row[9]
    const found = arr.findIndex((item)=>(item.name === name))
    if (found >= 0) {
      Object.assign(arr[found], {description})
    } else {
      arr.push({name, description})
    }
  })
  finalObj[institution][graduation] = arr
}

const processExcelFile = async () => {
  const sheets = await getSheets(file)

  sheets.forEach(async (sheet) => {
    const sheetName = sheet.name
    switch (sheetName) {
      case '4yr coll 4yr grad': {
        const obj = await getObjectFromSheet(file, sheetName, schema)
        addData('4yr', '4yr', obj.rows)
        replaceDestinationFile(finalObj)
        break
      }
      case '4yr coll 6yr grad': {
        const obj = await getObjectFromSheet(file, sheetName, schema)
        addData('4yr', '6yr', obj.rows)
        replaceDestinationFile(finalObj)
        break
      }
      case '2yr coll 4yr grad': {
        const obj = await getObjectFromSheet(file, sheetName, schema)
        addData('2yr', '4yr', obj.rows)
        replaceDestinationFile(finalObj)
        break
      }
      case '2yr coll 6yr grad': {
        const obj = await getObjectFromSheet(file, sheetName, schema)
        addData('2yr', '6yr', obj.rows)
        replaceDestinationFile(finalObj)
        break
      }
      case 'Text 44': {
        const arr = await getObjectFromSheet(file, sheetName)
        addLabel('4yr', '4yr', arr)
        replaceDestinationFile(finalObj)
        break
      }
      case 'Text 46': {
        const arr = await getObjectFromSheet(file, sheetName)
        addLabel('4yr', '6yr', arr)
        replaceDestinationFile(finalObj)
        break
      }
      case 'Text 24': {
        const arr = await getObjectFromSheet(file, sheetName)
        addLabel('2yr', '4yr', arr)
        replaceDestinationFile(finalObj)
        break
      }
      case 'Text 26': {
        const arr = await getObjectFromSheet(file, sheetName)
        addLabel('2yr', '6yr', arr)
        replaceDestinationFile(finalObj)
        
        break
      }

      default: {
        console.log(`${sheetName} doesn't get processed`)
      }
    }
  })
}

processExcelFile()

import React from 'react'
export const TAB_MAPPING = {
  'SAT scores': {
    institution: '4yr',
    heading: 'How do graduation rates vary by SAT scores, and how do they compare with state averages?',
    subheading: 'Students with high SAT scores are more likely to graduate from college than students with low SAT scores, but the gap is smaller at some institutions than at others.',
    items: {
      sat_lowest_quintile: 'SAT scores, lowest group',
      sat_2nd_quintile: 'SAT scores, second-lowest group',
      sat_mid_quintile: 'SAT scores, middle group',
      sat_4th_quintile: 'SAT scores, second-highest group',
      sat_highest_quintile: 'SAT scores, highest group',
    },
  },
  'Test scores': {
    institution: '2yr',
    heading: 'How do graduation rates vary by high school test scores, and how do they compare with state averages?',
    subheading: <span>High school preparation is one of the <a target="_blank" rel="noopener noreferrer" href="https://www.thirdway.org/report/what-matters-most-for-college-completion-academic-preparation-is-a-key-of-success">most important predictors</a> of college success, but how much it matters varies by institution.</span>,
    items: {
      testscore_lowest_quintile: 'Test scores, lowest group',
      testscore_2nd_quintile: 'Test scores, second-lowest group',
      testscore_mid_quintile: 'Test scores, middle group',
      testscore_4th_quintile: 'Test scores, second-highest group',
      testscore_highest_quintile: 'Test scores, highest group',
    },
  },
  'Hours': {
    institution: '2yr',
    heading: 'How do graduation rates vary by full- or part-time status, and how do they compare with state averages?',
    subheading: <span>Students taking a full-time courseload (12 credits or more) are more likely to graduate—and graduate on time—than students taking fewer than 12 credits per semester. But even completing 12 credits isn’t enough. A student enrolled two semesters per year <a target="_blank" rel="noopener noreferrer" href="https://completecollege.org/strategy/15-to-finish/">needs to complete 15 credits</a> per semester to graduate on time.</span>,
    items: {
      'fulltime': 'Full time',
      'parttime': 'Part time'
    },
  },
  'GPA': {
    institution: '4yr',
    heading: 'How do graduation rates vary by high school grade point averages, and how do they compare with state averages?',
    subheading: <span>High school preparation is one of the <a target="_blank" rel="noopener noreferrer" href="https://www.thirdway.org/report/what-matters-most-for-college-completion-academic-preparation-is-a-key-of-success">most important predictors</a> of college success, but how much it matters varies by institution.</span>,
    items: {
      gpa_lowest_quintile: 'GPA, lowest group',
      gpa_2nd_quintile: 'GPA, second-lowest group',
      gpa_mid_quintile: 'GPA, middle group',
      gpa_4th_quintile: 'GPA, second-highest group',
      gpa_highest_quintile: 'GPA, highest group',
    },
  },
  'Race': {
    heading: 'How do graduation rates vary by race or ethnicity, and how do they compare with state averages?',
    subheading: <span>The persistence of structural racism means that black and Hispanic students are, on average, less likely to graduate from college than their peers. For example, students of color are more likely to attend <a target="_blank" rel="noopener noreferrer" href="https://www.uncf.org/pages/k-12-disparity-facts-and-stats">poorly resourced high schools</a> that offer fewer college preparation courses, have less-qualified teachers, and spend less per student—all factors that affect students’ chances of success in college</span>,
    items: {
      asian: 'Asian',
      black: 'Black',
      hispanic: 'Hispanic',
      white: 'White',
      otherrace: 'Other race or ethnicity',
    },
  },
  'Gender': {
    heading: 'How do graduation rates vary by gender, and how do they compare with state averages?',
    subheading: 'Although women tend to graduate at higher rates than men on average, the gap is smaller at some colleges.',
    items: {
      male: 'Men',
      female: 'Women',
    },
  },
  'Pell status': {
    heading: 'How do graduation rates vary by Pell status, and how do they compare with state averages?',
    subheading: <span>Students receiving Pell grants come from low-income households and may not have had the same opportunities as wealthier students, so their <a target="_blank" rel="noopener noreferrer" href="https://www.brookings.edu/blog/brown-center-chalkboard/2017/10/25/a-look-at-pell-grant-recipients-graduation-rates/">graduation rates tend to be lower</a>. But some colleges have smaller gaps than others between Pell and non-Pell students.</span>,
    items: {
      pell: 'Pell recipient',
      nopell: 'Not a Pell recipient',
    },
  },
}

import React, { Component } from 'react'
import LessonPage from '../LessonPage'

class LessonPageContainer extends Component {
  render() {
    const { lessons } = this.props
    return (
      <LessonPage lessons={lessons}/>
    )
  }
}

const putStateToProps = state => {
  return {
    lessons: state.lessons.data
  }
}

export default connect(putStateToProps)(LessonPageContainer)
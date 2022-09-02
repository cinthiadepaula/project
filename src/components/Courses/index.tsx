import React from 'react'
import CourseCard from '../CourseCard'

const Courses = () => {
  return (
    <main>
      <section className='courses-sections'>
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </section>  
    </main>
  )
}

export default Courses
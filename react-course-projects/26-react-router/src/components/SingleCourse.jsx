import React, { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import courses from '../data/courses'
// import NotFound from './NotFound'
const SingleCourse = () => {
    const { slug }=useParams()
    const course=courses.find((el)=>el.slug===slug)
    const navigate= useNavigate()
    // const location=useLocation()

    useEffect(()=>{
      if(!course){
        navigate('..',{ relative: 'path' })
      }
    },[course,navigate])

    // Simply show notFound component
    // if(!course){
    //   return <NotFound />
    // }

    // if(!course){
    //     return (
    //     <>
    //     <NotFound />
    //     <Link to=".." relative='path'>Go to all courses</Link>
    //     </>
    //         )
    // }
  return (
    <>
      <h1>{course?.title}</h1>
      <h2>{course?.slug}</h2>
      <h3>{course?.id}</h3>
      <Link to=".." relative='path'>All courses</Link>
    </>
  )
}

export default SingleCourse
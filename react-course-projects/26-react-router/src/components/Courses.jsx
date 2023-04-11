import { Link, useLocation, useNavigate } from "react-router-dom"
import courses from "../data/courses"
import queryString from 'query-string'
import { useEffect, useState } from "react"
// import { useEffect } from "react"
// import SingleCourse from "./SingleCourse"

const SORT_KEYS=['id','title','slug']

function sortCourses(courses,key){
  if(!key || !SORT_KEYS.includes(key)) return courses
  const temp=[...courses]
  return temp.sort((a,b)=>(a[key]>b[key])?1:-1)
}

const Courses = () => {
  const location=useLocation()
  const navigate=useNavigate()
  const query=queryString.parse(location.search)
  const [sortKey, setsortKey]=useState(query.sort)
  const [sortedCourses, setSortedCourses]=useState(sortCourses(courses,sortKey))

  useEffect(()=>{
    if(!SORT_KEYS.includes(sortKey)){
      navigate('.')
      setsortKey()
      setSortedCourses([...courses])
    }
  },[sortKey,navigate])


  // let resCourses=courses
  // let k=false
  // let temp
  // if(query && Object.keys(query)[0]==='sort'){
  //   temp=(query['sort']==='id' || query['sort']==='slug' || query['sort']==='title')?query['sort']:''
  //   if(temp){
  //     resCourses=courses.sort((a,b)=>{
  //       if(a[temp]>b[temp]) return 1
  //       if(a[temp]<b[temp]) return -1
  //       return 0
  //     })
  //     k=true
  //   }
  // }else{
  //     navigate('courses',{relative:'route'})
  // }
  
  return (
  <>
    <h1>{(sortKey)?`Courses sorted by ${sortKey}`:'Courses'}</h1>
    {sortedCourses.map((el)=>(<div key={el.id}><Link className="courseLink"  to={el.slug} >{el.title}</Link></div>))}
  </>
  )
}

export default Courses
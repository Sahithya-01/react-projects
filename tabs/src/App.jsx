import { useState, useEffect } from 'react'
import JobInfo from './JobInfo'
import BtnContainer from './BtnContainer'

const url = 'https://course-api.com/react-tabs-project'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [currentItem, setCurrentItem] = useState(0)

  const fetchData = async () => {
    const response = await fetch(url)
    const newJobs = await response.json()
    setJobs(newJobs)
    console.log(newJobs)
    setIsLoading(false) //autobatching setJobs and setIsLoading will have same render at once from react18
  }
  useEffect(() => {
    fetchData()
  }, [])
  if (isLoading) {
    //return <h1>Loading...</h1>
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    )
  }
  return (
    <section className="jobs-center">
      <BtnContainer
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  )
}
export default App

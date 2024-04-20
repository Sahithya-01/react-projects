import { useState, useEffect } from 'react'
import Tours from './Tours'
import Loading from './Loading'

const url = 'https://course-api.com/react-tours-project'
//got Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at https://course-api.com/react-tours-project. (Reason: CORS request did not succeed). Status code: (null).
//added CORS unblock extension to browser

const App = () => {
  const [tours, setTours] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }
  const fetchData = async () => {
    try {
      const fetchedData = await fetch(url)
      //console.log(fetchedData)
      const toursData = await fetchedData.json()
      //console.log(toursData)
      setTours(toursData)
      setIsLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if (tours.length === 0) {
    return (
      <main>
        <h3>No tours found</h3>
        <button
          type="button"
          style={{ marginTop: '2rem' }}
          className="btn btn-primary"
          onClick={fetchData}
        >
          Refresh
        </button>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}
export default App

import { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
const App = () => {
  const [index, setIndex] = useState(0) // we are setting state on index since we are gonna iterate on index and display the content of a person at a time
  const { name, job, image, text } = people[index]
  const no_of_people = people.length

  const nextPerson = () => {
    if (index === no_of_people - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }
  const prevPerson = () => {
    if (index === 0) {
      setIndex(no_of_people - 1)
    } else {
      setIndex(index - 1)
    }
  }
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length)
    if (randomNumber === index) {
      randomNumber = index + 1
      if (randomNumber === people.length) {
        randomNumber = 0
      }
    }
    setIndex(randomNumber)
  }

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          Surprise me
        </button>
      </article>
    </main>
  )
}
export default App

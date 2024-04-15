import { useState } from 'react'
import data from './data'

const App = () => {
  const [people, setPeople] = useState(data)
  const no_of_people = people.length

  const handleClick = () => {
    setPeople([])
  }

  return (
    <div className="container">
      <h3>{no_of_people} birthdays today</h3>
      <ul>
        {people.map((person) => (
          <li key={person.id} className="person">
            <img
              src={person.image}
              alt={person.name}
              className="img"
              style={{ height: '100px', width: '100px' }}
            />
            <div>
              <h2>{person.name}</h2>
              <h5>Age: {person.age}</h5>
            </div>
          </li>
        ))}
      </ul>
      <button className="btn btn-block" type="button" onClick={handleClick}>
        Clear all
      </button>
    </div>
  )
}

export default App

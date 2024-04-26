import { useState } from 'react'
import SingleQuestion from './SingleQuestion'
import data from './data'
const App = () => {
  const [questions, setQuestions] = useState(data)
  const [activeId, setActiveId] = useState(null)
  const toggleQuestion = (id) => {
    const newActiveId = id === activeId ? null : id
    setActiveId(newActiveId)
  }
  return (
    <main>
      <section className="container">
        <h1>Questions</h1>
        {questions.map((question) => {
          const { id, title, info } = question
          return (
            <SingleQuestion
              key={id}
              id={id}
              title={title}
              info={info}
              activeId={activeId}
              toggleQuestion={toggleQuestion}
            />
          )
        })}
      </section>
    </main>
  )
}
export default App

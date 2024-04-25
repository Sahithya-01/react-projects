import { useState } from 'react'
import SingleQuestion from './SingleQuestion'
import data from './data'
const App = () => {
  const [questions, setQuestions] = useState(data)
  return (
    <main>
      <section className="container">
        <h1>Questions</h1>
        {questions.map((question) => {
          const { id, title, info } = question
          return <SingleQuestion key={id} title={title} info={info} />
        })}
      </section>
    </main>
  )
}
export default App

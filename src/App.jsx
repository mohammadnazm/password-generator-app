// eslint-disable-next-line no-unused-vars
import React from "react"

function App() {
  return (
    <section>
      <div className="container">
        <form id="pg-form">
          <div className="result">
            <input type="text" id="result" placeholder="Min 6 Char" readOnly />
            <div className="clipboard"></div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default App

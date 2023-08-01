// eslint-disable-next-line no-unused-vars
import React from "react"
import { FaClipboard } from "react-icons/fa"
import { useForm } from "./useForm"

function App() {
  const [values, setValues] = useForm({
    length: 6,
    capital: true,
    small: true,
    number: true,
    symbol: true,
  })

  return (
    <section>
      <div className="container">
        <form id="pg-form">
          <div className="result">
            <input type="text" id="result" placeholder="Min 6 Char" readOnly />
            <div className="clipboard">
              <FaClipboard></FaClipboard>
            </div>
          </div>
          <div>
            <div className="field">
              <label htmlFor="length">Length</label>
              <input
                type="number"
                id="length"
                min={6}
                max={10}
                name={length}
                value={values}
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="capital">Capital</label>
            <input type="checkbox" id="capital" />
          </div>
          <div className="field">
            <label htmlFor="small">Small</label>
            <input type="checkbox" id="small" />
          </div>
          <div className="field">
            <label htmlFor="number">Number</label>
            <input type="checkbox" id="number" />
          </div>
          <div className="field">
            <label htmlFor="symbol">Symbol</label>
            <input type="checkbox" id="symbol" />
          </div>
          <button type="submit">Generate Password</button>
        </form>
      </div>
    </section>
  )
}

export default App

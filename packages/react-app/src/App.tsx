import React from "react"
import logo from "./logo.jpg"
import "./App.css"

function App() {
  return (
    <div className="App">
      <div className="stars"></div>
      <div className="twinkling"></div>
      <header className="App-header">
        <div style={{ zIndex: 1 }}>
          <h1 className="test" style={{ marginBottom: 0 }}>
            Celostrials
          </h1>
          <p style={{ marginTop: "1em", marginBottom: "2em" }}>
            Coming soon to a solar system near you...
          </p>
          <div className="homecardContainerContainer">
            <div className="homeCardContainer">
              <img src={logo} className="homeCard" alt="logo" />
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default App

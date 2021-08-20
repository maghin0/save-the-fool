import React from "react"
import Button from "./Button"

const Market = props => {
  return (
    <section className="value-prop">
      <div className="value-prop-content">
        <div className="photo-text">
          <h1>Amount of Bioherbicide to Produce</h1>

          <div className="market-photo"> </div>
        </div>
        <div className="main-message">
          <h1>Market Size</h1>
          <p className="main-subtitle">
            Egypt’s Agricultural Research Center (ARC) estimates that in order
            to become self-sufficient again, Egypt needs to cultivate 320,000
            feddans, and would add up to approximately 668,000 tons by 2030, if
            consumption and population growth forecasts hold (Abdelrahman,
            2019). Source: Abdelrahman, R., Researcher at ARC’s Field Crops
            Research Institute, Legume section. He provided this information
            during a presentation held at ICARDA’s headquarters in September
            2019. Total Available Market: 320,000 Feddans Serviceable Available
            Market: 95,948 Feddans.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Market

import React from "react"
import Button from "./Button"

const Overview = props => {
  return (
    <section className="value-prop">
      <div className="value-prop-content">
        <div className="main-message">
          <h1>OVERVIEW</h1>
          <p className="main-subtitle">
            Egypt consumes 50% of the world’s fava beans exports, making it the
            world’s largest consumer of fava beans. Throughout the past 30
            years, Egypt has steadily increased its imports of fava beans to the
            point where 70% of its annual consumption is imported. This is
            largely due to the outbreak of broomrapes in the delta region, where
            Egypt grows most of its fava bean crops. Broomrapes are a deadly
            parasitic hash that could result in 100% yield loss in heavily
            infested crops.
          </p>
          <Button label="Save The Foul" />
        </div>
        <div className="photo-text">
          <h1>Egypt’s Production & Import of Fava Beans</h1>

          <div className="main-photo"> </div>
        </div>
      </div>
    </section>
  )
}

export default Overview

import React from "react"
import Button from "./Button"

const Problem = props => {
  return (
    <section className="value-prop">
      <div className="value-prop-content">
        <div className="photo-text">
          <h1>Egypt’s Harvested Land for Fava Beans</h1>

          <div className="harvest-photo"> </div>
        </div>
        <div className="main-message">
          <h1>PROBLEM</h1>
          <p className="main-subtitle">
            Egypt has become the world’s largest consumer of fava beans but it
            has no means of producing it locally due to the outbreak of the
            broomrapes which have rendered its lands sterile, making Egypt the
            world’s largest importer of fava beans. Since the 1990s, Egypt has
            decreased the amount of land it grows fava beans, from an all-time
            high of 425,074 feddans in 1992 to an all-time low of 81,967 feddans
            in 2015. Between 2005 and 2017, Egypt imported 328,000 tons of Fava
            beans a year on average, at an average annual cost of roughly USD
            200 million. Source: Ministry of Agriculture and Land Reclamation,
            FAOSTAT (Annex 1)
          </p>
        </div>
      </div>
    </section>
  )
}

export default Problem

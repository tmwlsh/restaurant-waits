import React from "react"
import { Link } from "gatsby"
import Data from "../data.json"

const RestaurantList = () => {
  const restaurants = Data.restaurants;

  return (
    <div className="container">

      <ul className="rest-list">
        {Object.keys(restaurants).map((entry) => {
          return (
            <li>
              <div className="inner">
                <h3>{restaurants[entry].name}</h3>
                <p><span>Location</span>: {restaurants[entry].location}</p>
                <p><span>Wait Time</span>: {restaurants[entry].wait}</p>
                <a target="_blank" href={restaurants[entry].website}>
                  <span>Go To Website</span>
                </a>
              </div>
            </li>
          )
        })}
      </ul>

    </div>
  )
}

export default RestaurantList

import React from "react"
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
                <p>{restaurants[entry].location}</p>
                <p>Wait Time: {restaurants[entry].wait}</p>
              </div>
            </li>
          )
        })}
      </ul>

    </div>
  )
}

export default RestaurantList

import React from "react"
import { Link } from "gatsby"
import Data from "../data.json"
import starImg from "../images/star-solid.png"

const RestaurantList = () => {
  const restaurants = Data.restaurants;

  return (
    <div className="container">

      <ul className="rest-list">
        {Object.keys(restaurants).map((entry) => {

          let numStars = [];
          for (let i = 0; i < restaurants[entry].stars; i++) {
            numStars.push(<li><img src={starImg} /></li>);
          }

          return (
            <li>
              <div className="inner">
                <h3>{restaurants[entry].name}</h3>
                <p><span>Location</span>: {restaurants[entry].location}</p>
                <p><span>Wait Time</span>: {restaurants[entry].wait}</p>
                <ul className="stars">{numStars}</ul>
                <a target="_blank" rel="noopener noreferrer" href={restaurants[entry].website}>
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

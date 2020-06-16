import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import memoryCards from "../../mock-data/memory-cards";
import axios from "axios";
const memoryCard = memoryCards[2];

class ReviewImagery extends React.Component {
   constructor(props) {
      super(props);
      axios
         .get("https://run.mocky.io/v3/41185b3f-1ca6-44c0-8338-f3bbf38058ca")
         .then(function (response) {
            // handle success
            console.log(response);
         })
         .catch(function (error) {
            // handle error
            console.log(error);
         })
         .finally(function () {
            // always executed
         });

      /*
         queuedCards: [],
         indexOfCurrentCard: 0,
         user: {},
      */
   }

   render() {
      return (
         <AppTemplate>
            <div className="mb-5"></div>
            <div className="mb-5">
               <div className="card bg-primary">
                  <div className="card-body">{memoryCard.imagery}</div>
               </div>
            </div>

            <Link to="/review-answer" className="btn btn-link mb-4">
               Previous card
            </Link>
            <div className="float-right">
               <Link
                  to="/review-answer"
                  className="btn btn-lrg btn-outline-primary"
               >
                  Show answer
               </Link>
            </div>
         </AppTemplate>
      );
   }
}

export default ReviewImagery;

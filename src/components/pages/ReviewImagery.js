import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import actions from "../../store/actions";

class ReviewImagery extends React.Component {
   constructor(props) {
      super(props);
      axios
         .get("https://run.mocky.io/v3/41185b3f-1ca6-44c0-8338-f3bbf38058ca")
         .then(function (res) {
            // handle success
            console.log(res);
            props.dispatch({
               type: actions.STORE_QUEUED_CARDS,
               payload: res.data,
            });
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
      const memoryCard = this.props.queuedCards[this.props.indexOfCurrentCard];
      return (
         <AppTemplate>
            <div className="mb-5"></div>
            <div className="mb-5">
               <div className="card bg-primary">
                  <div className="card-body">
                     {memoryCard && memoryCard.imagery}
                  </div>
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

function mapStateToProps(state) {
   return {
      queuedCards: state.queuedCards,
      indexOfCurrentCard: state.indexOfCurrentCard,
   };
}

export default connect(mapStateToProps)(ReviewImagery);

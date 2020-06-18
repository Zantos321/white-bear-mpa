import React from "react";
import thumbsUpIcon from "../../icons/thumbs-up.svg";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import actions from "../../store/actions";

class ReviewAnswer extends React.Component {
   goToNextCard() {
      // TODO if index of current card = length of the array of all cards (end of the array)
      // then shgow out of cards component
      this.props.dispatch({ type: actions.UPDATE_INDEX_OF_CURRENT_CARD });
      this.props.history.push("/review-imagery");
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

               <div className="card bg-secondary">
                  <div className="card-body">
                     {memoryCard && memoryCard.answer}
                  </div>
               </div>
            </div>

            <Link to="/edit" className="btn btn-link btn-landing" role="button">
               Edit
            </Link>
            <div className="float-right">
               <button
                  className="btn btn-outline-primary mr-4"
                  onClick={() => {
                     this.goToNextCard();
                  }}
               >
                  Needs Work
               </button>
               <button
                  className="btn btn-primary"
                  onClick={() => {
                     this.goToNextCard();
                  }}
               >
                  <img
                     src={thumbsUpIcon}
                     width="20px"
                     style={{ marginBottom: "5px", marginRight: "8px" }}
                     alt=""
                  />
                  Got it
               </button>
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

export default connect(mapStateToProps)(ReviewAnswer);

import React from "react";
import saveIcon from "../../icons/save.svg";
import { Link } from "react-router-dom";
import memoryCards from "../../mock-data/memory-cards";
import toDisplayDate from "date-fns/format";
import AppTemplate from "../ui/AppTemplate";
import classnames from "classnames";
import { checkIsOver, MAX_CARD_CHARS } from "../../utils/helpers";

const memoryCard = memoryCards[2];

export default class Edit extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         answerText: memoryCard.answer,
         imageryText: memoryCard.imagery,
      };
   }

   checkHasInvalidCharCount() {
      if (
         this.state.answerText.length > MAX_CARD_CHARS ||
         this.state.imageryText.length > MAX_CARD_CHARS ||
         this.state.answerText.length === 0 ||
         this.state.imageryText.length === 0
      ) {
         return true;
      } else {
         return false;
      }
   }

   setImageryText(e) {
      this.setState({ imageryText: e.target.value });
   }

   setAnswerText(e) {
      this.setState({ answerText: e.target.value });
   }

   render() {
      return (
         <AppTemplate>
            <div className="text-center text-muted my-4">
               <h4>Edit card</h4>
            </div>
            <div className="mb-2">
               <div className="card bg-primary">
                  <div className="card-body">
                     <textarea
                        rows="4"
                        autoFocus={true}
                        defaultValue={memoryCard.imagery}
                        onChange={(e) => this.setImageryText(e)}
                     ></textarea>
                  </div>
               </div>

               <div className="card bg-secondary">
                  <div className="card-body">
                     <textarea
                        rows="4"
                        autoFocus={true}
                        defaultValue={memoryCard.answer}
                        onChange={(e) => this.setAnswerText(e)}
                     ></textarea>
                  </div>
               </div>
            </div>
            <div className="row float-right mb-5">
               <p className="text-muted mr-4">
                  <span
                     className={classnames({
                        "text-danger": checkIsOver(
                           this.state.imageryText,
                           MAX_CARD_CHARS
                        ),
                     })}
                  >
                     Top: {this.state.imageryText.length}/{MAX_CARD_CHARS}
                  </span>
               </p>
               <p className="text-muted mr-4">
                  <span
                     className={classnames({
                        "text-danger": checkIsOver(
                           this.state.answerText,
                           MAX_CARD_CHARS
                        ),
                     })}
                  >
                     Bottom: {this.state.answerText.length}/{MAX_CARD_CHARS}
                  </span>
               </p>
            </div>
            <div className="clearfix"></div>
            <Link to="/all-cards" className="btn btn-link" role="button">
               Discard changes
            </Link>
            <Link
               to="/all-cards"
               className={classnames("btn btn-primary btn-lg float-right", {
                  disabled: this.checkHasInvalidCharCount(),
               })}
            >
               <img
                  src={saveIcon}
                  width="20px"
                  style={{ marginBottom: "3px" }}
                  className="mr-2"
                  alt=""
               />
               Save
            </Link>
            <div className="text-center text-muted my-6">
               <h4>Card properties</h4>
            </div>
            <div className="row mb-2">
               <div className="col-4">
                  <p className="text-muted">Created on:</p>
               </div>
               <div className="col-8">
                  <p>{toDisplayDate(memoryCard.createdAt, "MMM. d, y")}</p>
               </div>
            </div>
            <div className="row mb-2">
               <div className="col-4">
                  <p className="text-muted">Last attempt:</p>
               </div>
               <div className="col-8">
                  <p>{toDisplayDate(memoryCard.lastAttemptAt, "MMM. d, y")}</p>
               </div>
            </div>
            <div className="row mb-2">
               <div className="col-4">
                  <p className="text-muted">Next attempt:</p>
               </div>
               <div className="col-8">
                  <p>{toDisplayDate(memoryCard.nextAttemptAt, "MMM. d, y")}</p>
               </div>
            </div>
            <div className="row mb-4">
               <div className="col-4">
                  <p className="text-muted">Consecutives:</p>
               </div>
               <div className="col-8">
                  <p>{memoryCard.level}</p>
               </div>
            </div>
            <div className="row col mb-4">
               <div className="custom-control custom-checkbox ">
                  <input
                     type="checkbox"
                     className="custom-control-input delete-verify"
                     id="delete-check"
                  />
                  <label
                     className="custom-control-label delete-verify"
                     htmlFor="delete-check"
                  >
                     Show delete button
                  </label>
               </div>
            </div>
            <div className="row col mb-4">
               <Link
                  to="/all-cards"
                  className="btn btn-large btn-outline-danger " //removed invisible
                  id="card-delete"
               >
                  Delete this card
               </Link>
            </div>
         </AppTemplate>
      );
   }
}

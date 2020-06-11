import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import saveIcon from "../../icons/save.svg";
import { Link } from "react-router-dom";
import memoryCards from "../../mock-data/memory-cards";
import toDisplayDate from "date-fns/format";
const memoryCard = memoryCards[2];

export default function Edit() {
   return (
      <>
         <div className="container">
            <div className="row">
               <div className="col-12 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                  <Header />
                  <Navigation />
                  <div className="text-center text-muted my-4">
                     <h4>Edit card</h4>
                  </div>
                  <div className="mb-2">
                     <div className="card bg-primary">
                        <div className="card-body">
                           <textarea
                              rows="11"
                              className="d-sm-none"
                              autoFocus={true}
                              defaultValue={memoryCard.imagery}
                           ></textarea>
                           <textarea
                              rows="6"
                              className="d-none d-sm-block"
                              autoFocus={true}
                              defaultValue={memoryCard.imagery}
                           ></textarea>
                        </div>
                     </div>

                     <div className="card bg-secondary">
                        <div className="card-body">
                           <textarea
                              rows="11"
                              className="d-sm-none"
                              autoFocus={true}
                              defaultValue={memoryCard.answer}
                           ></textarea>
                           <textarea
                              rows="6"
                              className="d-none d-sm-block"
                              autoFocus={true}
                              defaultValue={memoryCard.answer}
                           ></textarea>
                        </div>
                     </div>
                  </div>
                  <div className="row float-right mb-5">
                     <p className="text-muted mr-4">Top: 0/240</p>
                     <p className="text-muted mr-4">Bottom: 0/240</p>
                  </div>
                  <div className="clearfix"></div>
                  <Link to="/all-cards" className="btn btn-link" role="button">
                     Discard changes
                  </Link>
                  <Link
                     to="/all-cards"
                     className="btn btn-primary btn-lg float-right"
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
                        <p>
                           {toDisplayDate(memoryCard.createdAt, "MMM. d, y")}
                        </p>
                     </div>
                  </div>
                  <div className="row mb-2">
                     <div className="col-4">
                        <p className="text-muted">Last attempt:</p>
                     </div>
                     <div className="col-8">
                        <p>
                           {toDisplayDate(
                              memoryCard.lastAttemptAt,
                              "MMM. d, y"
                           )}
                        </p>
                     </div>
                  </div>
                  <div className="row mb-2">
                     <div className="col-4">
                        <p className="text-muted">Next attempt:</p>
                     </div>
                     <div className="col-8">
                        <p>
                           {toDisplayDate(
                              memoryCard.nextAttemptAt,
                              "MMM. d, y"
                           )}
                        </p>
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
               </div>
            </div>
         </div>
      </>
   );
}

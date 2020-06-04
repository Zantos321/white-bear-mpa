import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import saveIcon from "../../icons/save.svg";

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
                              autofocus="autofocus"
                           ></textarea>
                           <textarea
                              rows="6"
                              className="d-none d-sm-block"
                              autofocus="autofocus"
                           ></textarea>
                        </div>
                     </div>

                     <div className="card bg-secondary">
                        <div className="card-body">
                           One morning, when Gregor Samsa woke from troubled
                           dreams, he found himself transformed in his bed into
                           a horrible vermin. He lay on his armour-like back,
                           and if he lifted his head a little he could see his
                           brown belly, slightly domed and divided by arches
                           into stiff sections.
                        </div>
                     </div>
                  </div>

                  <p className="float-right mb-5">0/240</p>
                  <div className="clearfix"></div>
                  <a
                     href="all-cards.html"
                     className="btn btn-link"
                     role="button"
                  >
                     Discard changes
                  </a>
                  <a
                     href="all-cards.html"
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
                  </a>
                  <div className="text-center text-muted my-6">
                     <h4>Card properties</h4>
                  </div>
                  <div className="row mb-2">
                     <div className="col-4">
                        <p className="text-muted">Created on:</p>
                     </div>
                     <div className="col-8">
                        <p>Dec. 24, 2019</p>
                     </div>
                  </div>
                  <div className="row mb-2">
                     <div className="col-4">
                        <p className="text-muted">Last attempt:</p>
                     </div>
                     <div className="col-8">
                        <p>Dec. 31, 2019</p>
                     </div>
                  </div>
                  <div className="row mb-2">
                     <div className="col-4">
                        <p className="text-muted">Next attempt:</p>
                     </div>
                     <div className="col-8">
                        <p>Jul. 14, 2020</p>
                     </div>
                  </div>
                  <div className="row mb-4">
                     <div className="col-4">
                        <p className="text-muted">Consecutives:</p>
                     </div>
                     <div className="col-8">
                        <p>4</p>
                     </div>
                  </div>
                  <div className="row col mb-4">
                     <div className="custom-control custom-checkbox text-muted">
                        <input
                           type="checkbox"
                           className="custom-control-input delete-verify"
                           id="delete-check"
                        />
                        <label
                           className="custom-control-label delete-verify"
                           for="delete-check"
                        >
                           Show delete button
                        </label>
                     </div>
                  </div>
                  <div className="row col mb-4">
                     <a
                        className="btn btn-large btn-outline-danger invisible"
                        id="card-delete"
                        href="all-cards.html"
                     >
                        Delete this card
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

export default function CreateAnswer() {
   return (
      <AppTemplate>
         <div className="text-center text-muted my-4">
            <h4>Add an answer</h4>
         </div>

         <div className="mb-2">
            <div className="card bg-secondary">
               <div className="card-body">
                  <textarea
                     id="cardTextsm"
                     rows="11"
                     className="d-sm-none"
                     autoFocus={true}
                  ></textarea>
                  <textarea
                     id="cardTextlg"
                     rows="6"
                     className="d-none d-sm-block"
                     autoFocus={true}
                  ></textarea>
               </div>
            </div>
         </div>

         <div className="float-right mb-5">
            <span id="wordCount">0</span>
            <span id="wordMaximum">/240</span>
         </div>
         <div className="clearfix"></div>

         <div className="float-right mb-4">
            <Link
               id="nextButton"
               className="btn btn-lg btn-outline-primary " //disabled removed
               role="button"
               to="/create-imagery"
            >
               Next
            </Link>
         </div>
      </AppTemplate>
   );
}

import React from "react";
import saveIcon from "../../icons/save.svg";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

export default function CreateImagery() {
   return (
      <AppTemplate>
         <div className="text-center text-muted my-4">
            <h4>Add memorable imagery</h4>
         </div>

         <div className="mb-2">
            <div className="card bg-primary">
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

            <div className="card bg-secondary">
               <div className="card-body">
                  One morning, when Gregor Samsa woke from troubled dreams, he
                  found himself transformed in his bed into a horrible vermin.
                  He lay on his armour-like back, and if he lifted his head a
                  little he could see his brown belly, slightly domed and
                  divided by arches into stiff sections.
               </div>
            </div>
         </div>

         <div className="float-right mb-5">
            <span id="wordCount">0</span>
            <span id="wordMaximum">/240</span>
         </div>
         <div className="clearfix"></div>

         <Link to="/create-answer" className="btn btn-link" id="save-error">
            Back to answer
         </Link>
         <Link
            to="/create-answer"
            className="btn btn-primary btn-lg float-right mb-4 " // diabled removed
            id="save-imagery"
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
      </AppTemplate>
   );
}

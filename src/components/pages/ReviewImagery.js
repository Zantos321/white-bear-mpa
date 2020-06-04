import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

export default function ReviewImagery() {
   return (
      <AppTemplate>
         <Header />
         <Navigation />

         <div className="mb-5">
            <div className="card bg-primary">
               <div className="card-body">
                  One morning, when Gregor Samsa woke from troubled dreams, he
                  found himself transformed in his bed into a horrible vermin.
                  He lay on his armour-like back, and if he lifted his head a
                  little he could see his brown belly, slightly domed and
                  divided by arches into stiff sections.
               </div>
            </div>
         </div>

         <button className="btn btn-link mb-4">Previous card</button>
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

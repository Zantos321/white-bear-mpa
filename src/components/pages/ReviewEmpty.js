import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

export default function ReviewEmpty() {
   return (
      <AppTemplate>
         <div className="text-center text-muted my-4">
            <h4>Out of cards</h4>
         </div>
         <Link to="/review-answer" className="btn btn-link mb-4">
            Previous card
         </Link>
         <div className="float-right">
            <Link to="/review-imagery" className="btn btn-outline-primary">
               Get more cards
            </Link>
         </div>
      </AppTemplate>
   );
}

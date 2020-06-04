import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";

export default function ReviewEmpty() {
   return (
      <AppTemplate>
         <Header />
         <Navigation />
         <div className="text-center text-muted my-4">
            <h4>Edit card</h4>
         </div>
         <button className="btn btn-link mb-4">Previous card</button>
         <div className="float-right">
            <button className="btn btn-outline-primary">Get more cards</button>
         </div>
      </AppTemplate>
   );
}

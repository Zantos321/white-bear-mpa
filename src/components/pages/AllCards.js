import React from "react";
import AppTemplate from "../ui/AppTemplate";
import MemoryCard from "../ui/MemoryCard";
import memoryCards from "../../mock-data/memory-cards";

export default function AllCards() {
   return (
      <AppTemplate>
         <form className="row d-flex mt-5">
            <div className="form-group col-8">
               <input
                  id="allCardsSearchText"
                  className="form-control"
                  type="text"
                  placeholder="Search for a word"
                  aria-label="Search"
               />
            </div>
            <div className="form-group d-inline col-4 float-left">
               <button
                  id="allCardsSearchButton"
                  className="btn btn-primary btn-sm btn-block"
                  type="button"
               >
                  Search
               </button>
            </div>
         </form>
         <form className="row d-flex mt-4 mb-4">
            <div className="col-4 mt-2">
               <span className="text-nowrap">
                  <p className="text-muted">Sort cards by</p>
               </span>
            </div>
            <div className="form-group col-8">
               <select className="form-control" id="exampleFormControlSelect1">
                  <option>Most Recent</option>
                  <option>Oldest</option>
                  {/* <option>Hardest</option>
                  <option>Easiest</option> */}
               </select>
            </div>
         </form>
         {memoryCards.map((memoryCard) => {
            return (
               <MemoryCard
                  answer={memoryCard.answer}
                  imagery={memoryCard.imagery}
                  key={memoryCard.id}
               />
            );
         })}
      </AppTemplate>
   );
}

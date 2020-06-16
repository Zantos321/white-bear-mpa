import React from "react";
import AppTemplate from "../ui/AppTemplate";
import MemoryCard from "../ui/MemoryCard";
import memoryCards from "../../mock-data/memory-cards";
import orderBy from "lodash/orderBy";

export default class AllCards extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         order: '[["createdAt"], ["desc"]]',
         displayedMemoryCards: orderBy(memoryCards, ["createdAt"], ["desc"]),
         allMemoryCards: orderBy(memoryCards, ["createdAt"], ["desc"]),
      };
   }

   filterByInput() {
      const input = document.getElementById("search-input").value;
      const lowerCasedInput = input.toLowerCase();
      const copyOfAllMemoryCards = [...this.state.allMemoryCards];
      const filteredMemoryCards = copyOfAllMemoryCards.filter((memoryCard) => {
         const lowerCasedImagery = memoryCard.imagery.toLowerCase();
         const lowerCasedAnswer = memoryCard.answer.toLowerCase();
         if (
            lowerCasedImagery.includes(lowerCasedInput) ||
            lowerCasedAnswer.includes(lowerCasedInput)
         ) {
            return true;
         } else return false;
      });
      this.setState({ displayedMemoryCards: filteredMemoryCards }, () => {
         this.setMemoryCards();
      });
   }

   setOrder(e) {
      const newOrder = e.target.value;
      this.setState({ order: newOrder }, () => {
         this.setMemoryCards();
      });
   }

   setMemoryCards() {
      const copyOfDisplayedMemoryCards = [...this.state.displayedMemoryCards];
      const toJson = JSON.parse(this.state.order);
      const orderedMemoryCards = orderBy(copyOfDisplayedMemoryCards, ...toJson);
      this.setState({ displayedMemoryCards: orderedMemoryCards });
   }

   render() {
      return (
         <AppTemplate>
            <form className="row d-flex mt-5">
               <div className="form-group col-8">
                  <input
                     id="search-input"
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
                     onClick={() => this.filterByInput()}
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
                  <select
                     value={this.state.order}
                     className="form-control"
                     onChange={(e) => this.setOrder(e)}
                  >
                     <option value='[["createdAt"], ["desc"]]'>
                        Most Recent
                     </option>
                     <option value='[["createdAt"], ["asc"]]'>Oldest</option>
                     <option value='[["totalSuccessfulAttempts", "createdAt"], ["asc", "asc"]]'>
                        Hardest
                     </option>
                     <option value='[["totalSuccessfulAttempts", "createdAt"], ["desc", "desc"]]'>
                        Easiest
                     </option>
                  </select>
               </div>
            </form>
            {this.state.displayedMemoryCards.map((memoryCard) => {
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
}

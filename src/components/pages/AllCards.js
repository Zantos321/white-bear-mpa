import React from "react";
import AppTemplate from "../ui/AppTemplate";
import editIcon from "../../icons/edit.svg";
import { Link } from "react-router-dom";

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
                  <option>Hardest</option>
                  <option>Easiest</option>
               </select>
            </div>
         </form>
         <div className="row mb-4">
            <div className="col-10">
               <div className="card bg-primary">
                  <div className="card-body all-card-body-text">
                     One morning, when Gregor Samsa woke from troubled dreams,
                     he found himself transformed in his bed into a horrible
                     vermin. He lay on his armour-like back, and if he lifted
                     his head a little he could see his brown belly, slightly
                     domed and divided by arches into stiff sections.
                  </div>
               </div>
               <div className="card bg-secondary">
                  <div className="card-body all-card-body-text">
                     One morning, when Gregor Samsa woke from troubled dreams,
                     he found himself transformed in his bed into a horrible
                     vermin. He lay on his armour-like back, and if he lifted
                     his head a little he could see his brown belly, slightly
                     domed and divided by arches into stiff sections.
                  </div>
               </div>
            </div>
            <div className="col-2">
               <Link
                  to="/edit"
                  className="btn btn-link float-right text-nowrap"
                  role="button"
               >
                  <img src={editIcon} width="20px" alt="" />
                  <div className="d-inline">Edit</div>
               </Link>
            </div>
         </div>
         <div className="row mb-4">
            <div className="col-10">
               <div className="card bg-primary">
                  <div className="card-body all-card-body-text">
                     One morning, when Gregor Samsa woke from troubled dreams,
                     he found himself transformed in his bed into a horrible
                     vermin. He lay on his armour-like back, and if he lifted
                     his head a little he could see his brown belly, slightly
                     domed and divided by arches into stiff sections.
                  </div>
               </div>
               <div className="card bg-secondary">
                  <div className="card-body all-card-body-text">
                     One morning, when Gregor Samsa woke from troubled dreams,
                     he found himself transformed in his bed into a horrible
                     vermin. He lay on his armour-like back, and if he lifted
                     his head a little he could see his brown belly, slightly
                     domed and divided by arches into stiff sections.
                  </div>
               </div>
            </div>
            <div className="col-2 mb-4">
               <Link
                  to="/edit"
                  className="btn btn-link float-right text-nowrap"
                  role="button"
               >
                  <img
                     src={editIcon}
                     width="20px"
                     className="d-inline"
                     alt=""
                  />
                  <div className="d-inline">Edit</div>
               </Link>
            </div>
         </div>
      </AppTemplate>
   );
}

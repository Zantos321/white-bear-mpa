import React from "react";
import editIcon from "../../icons/edit.svg";
import { Link } from "react-router-dom";

export default function MemoryCard(props) {
   return (
      <div className="d-flex align-items-start mb-5">
         <div className="flex-fill">
            <div className="card bg-primary">
               <div className="card-body all-card-body-text">
                  {props.imagery}
               </div>
            </div>
            <div className="card bg-secondary">
               <div className="card-body all-card-body-text">
                  {props.answer}
               </div>
            </div>
         </div>
         <Link
            to="/edit"
            className="btn btn-link ml-4 d-flex mt-n2"
            role="button"
         >
            <img
               src={editIcon}
               width="20px"
               style={{ marginTop: "2px", marginRight: "8px" }}
               alt=""
            />
            <div className="d-inline">Edit</div>
         </Link>
      </div>
   );
}

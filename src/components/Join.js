import React from 'react';
import "./Join.css";

function Join(){
    return (
    <>
      <div className="join">
      </div>
      <div className="join-us">
            <h2 className="title">Who can join us?</h2>
            <div className="who">
            <ul className="u1">
            <li><i class="fa-solid fa-user-tie"/>Service Professional</li>
            <li><i class="fa-solid fa-person-dress" />Housewives</li>
            <li><i class="fa-solid fa-gavel"/>Lawyers</li>
            <li><i class="fa-solid fa-receipt" />CA/CSs</li>
            <li><i class="fa-solid fa-handshake" />Entrepreneurs</li>
            <li><i class="fa-solid fa-business-time" />Business Owners</li>
            </ul>
            <ul className="u2">
            <li><i class="fa-solid fa-user-group" />Freelancers</li>
            <li><i class="fa-solid fa-school" />Teachers/Professors</li>
            <li><i class="fa-solid fa-dollar-sign" />Investors</li>
            <li><i class="fa-solid fa-money-bill-trend-up" />Investors</li>
            <li><i class="fa-solid fa-book-atlas"/>Experienced Traders</li>
            <li><i class="fa-solid fa-graduation-cap" />Students</li>
            </ul>
            </div>
      </div>
    </>
    );
}

export default Join;

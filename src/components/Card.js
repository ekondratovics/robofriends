import React from 'react';

let Card = ({ name, email, username, id }) => {
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?size=200x200`} alt="roboFriend"/>
            <div>
                <h2>{name}</h2>
                <h3>{username}</h3>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
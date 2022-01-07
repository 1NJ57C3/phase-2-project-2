import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import HomeListCard from "./HomeListCard"

export default function Home({ myListsObj }){

    function renderLists() {
        return Object.keys(myListsObj).map(list => <HomeListCard key={myListsObj[list].id} list={myListsObj[list]} />)
    }

    return(
        <div>
            <div>
                <h3>My Lists:</h3>
                <div>
                    {renderLists()}
                </div>
            </div>
            <Link to={"/newList"}>
                <button>Create New List</button>
            </Link>
        </div>
    )
}
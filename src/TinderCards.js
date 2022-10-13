import "./TinderCard.css";
import { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import axios from "./axios";
import SwipeButtons from "./SwipeButtons";
import Header from "./Header";




function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect (() => {
        async function fetchData() {
            const req = await axios.get("/tinder/cards");
           
            setPeople(req.data);
        }
            fetchData();
           
    }, []);
   
  

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        // setLastDirection(direction);
    };
    const outOfFrame = (name) => {
        console.log(name + " left the screen!");

    }




    return (
        <>
        <Header />
        <div className="tindercards">
        <div className="tinderCards_cardConteiner">
            {people.map((person) => (
                <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={["up", "down"]}
                onSwipe={(dir) => swiped(dir,person.name)}
                onCardLeftScreen={()=> outOfFrame(person.name)}
                
                >
                    <div 
                    className="card"
                    style={{backgroundImage:"url("+person.imgUrl+")"}}
                    
                    >
                
<h3>{person.name}</h3>


                    </div>
            </TinderCard>

          

            ))}
            </div>
            <SwipeButtons/>
            
        </div>
        </>
        );
}
export default TinderCards;
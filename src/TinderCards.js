import "./TinderCard.css";
import { useState } from "react";
import TinderCard from "react-tinder-card";




function TinderCards() {
    const [people, setPeople] = useState([
        {
        name: 'ellon Musk',
        url: "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg"
    }
        ,
        {
        name: 'Newmar',
        url: "https://upload.wikimedia.org/wikipedia/commons/6/62/Julie_Newmar_-_1965.jpg"
        }
    ]); 

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        // setLastDirection(direction);
    };
    const outOfFrame = (name) => {
        console.log(name + " left the screen!");

    }




    return (
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
                    style={{backgroundImage:"url("+person.url+")"}}
                    
                    >
                
<h3>{person.name}</h3>


                    </div>
            </TinderCard>

            ))}
            </div>
        </div>
        );
}
export default TinderCards;
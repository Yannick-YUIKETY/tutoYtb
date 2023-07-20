import { useState } from "react";
import { Tweet } from "./Tweet";

const DEFAULT_TWEET = [
{
  name:"Melvyn" , 
  content: "trop cool" , 
  like: 1000 ,
},
{
  name:"Didier" , 
  content: "trop bien" , 
  like: 20 ,
},
{
  name:"Lucas" , 
  content: "trop super" , 
  like: 34 ,
},
{
  name:"Jean" , 
  content: "trop genial" , 
  like: 22 ,
},
]

function App() {
  let [tweets , setTweets] = useState(DEFAULT_TWEET) ;

  
  return (
    <div>
      <p>{username}</p>
      <button onClick={addLetter}>Ajoute une lettre</button>
      <div className="tweet-container">
        <Tweet name="Melvyn" content="trop cool" like={1000}/>
        <Tweet name="Didier" content="trop bien" like={20}/>
        <Tweet name="Lucas" content="trop super" like={34}/>
        <Tweet name="Jean" content="trop genial" like={22}/>
      </div>
    </div>
  );
}

export default App;

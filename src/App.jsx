import React from "react";
import Card from "./Card";
import Cdata from "./Cdata";

function App(){
    return(
        <>
            <div className="heading">Top Netflix shows</div>
         <div className="cards">
            {Cdata.map((val)=>{
                return(
                    <Card showsTitle={val.showsTitle} imageLink={val.imageLink} showLink={val.showLink}/>
                )

            })}
            
            
            </div>
        </>
    )
}

export default App;
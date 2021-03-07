import "C:/Users/moope/OneDrive/Documents/GitHub/dig4639c-s21-0w61-SlimyOrca/assignments/develop-2/src/App.css"
import React from "react"
import TuckerItem from "../tuckeritem"
export default class AboutMe extends React.Component{
    render(){
        return (
            <div id="box">
                <div id="About_Me">
                    <h2>About Tucker</h2>
                    <p>Tucker is a good student and a hard worker. He doesnt quite know
                    where he's going in life, but that isnt going to stop him.
                    </p>
                    <p>
                        This project was about creating a menu using the items inside an array, and by using .map(), 
                        allowing the info inside the array to populate two components filled with 
                        styiling information.
                    </p>
                    <h3>What did I add?</h3>
                    <p>This was the really fun part of the portfolio assignment. 
                        I was able to test my understanding of react and css code. 
                        What I did was make two seperate components and I added another array.
                        This array listed the options for the goals I had, and contained the 
                        difficulty of each goal.
                    </p>
                    <h2>What Tucker wants out of life</h2>
                    <h3>{this.props.listname}</h3>
                    <ul>
                    {this.props.listitems.map((obj)=><TuckerItem {...obj}></TuckerItem>)}
                    </ul>
               </div>
            </div>
        )
    }
}
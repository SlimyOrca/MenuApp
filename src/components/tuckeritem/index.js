import React from "react"
export default class TuckerItem extends React.Component{
    render() {
        return(
            <div class="tucker-item">
                <li>
                <h3>{this.props.goals}</h3>
                <p>Difficutly: {this.props.itemDifficulty}</p>
                </li>
            </div>
        )
    }
}
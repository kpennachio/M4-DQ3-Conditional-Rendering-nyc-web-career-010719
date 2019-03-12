import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {


  constructor(props) {
    super(props)

    this.state = {
      detailsToDisplay: "profile"
    }
  }

  renderBody = () => {
    if (this.state.detailsToDisplay === "profile") {
      return <Profile />
    }
    else if (this.state.detailsToDisplay === "pokemon") {
      return <Pokemon />
    }
    else if (this.state.detailsToDisplay === "photo") {
      return <Photos />
    }
    else if (this.state.detailsToDisplay === "cocktail")
      return <Cocktails />
  }

  changeState = (id) => {
    console.log("reached change state")
    this.setState({
      detailsToDisplay: id
    })
  }


  render() {
    /*
    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?
    */
    return (
      <div>
        <MenuBar handleClick={this.changeState}/>
        {this.renderBody()}
      </div>
    )
  }

}

export default MainBox

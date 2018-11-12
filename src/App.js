import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  // constructor

  constructor() {
    super();

    this.state = {
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'monospace',
      allowEdit: true
    }

    this.updateColor = this.updateColor.bind(this)
    this.updateSize = this.updateSize.bind(this)
    this.updateFamily = this.updateFamily.bind(this)
    this.updateEditStatus = this.updateEditStatus.bind(this)
  }

  // updateColor

  updateColor(color) {
    this.setState({
      fontColor: color,
    })
  }

  // updateSize

  updateSize(size) {
    this.setState({
      fontSize: size,
    })
  }

  // updateFamily

  updateFamily(family) {
    this.setState({
      fontFamily: family,
    })
  }

  // updateEditStatus

  updateEditStatus(edit) {
    this.setState({
      allowEdit: edit
    })
  }

  render() {
    return (
      <div>
        <div className="headerBar">
           <EditToggle toggleEdit={this.updateEditStatus}/>
           <ColorChanger changeColor={this.updateColor}
           allowEdit={this.state.allowEdit}/> 
          <SizeChanger changeSize={this.updateSize}
          allowEdit={this.state.allowEdit}/>
          <FamilyChanger changeFamily={this.updateFamily}
          allowEdit={this.state.allowEdit}/>
        </div>
        <div className="textArea">
          <TextContainer 
          color={this.state.fontColor}
          size={this.state.fontSize}
          family={this.state.fontFamily}
          edit={this.state.allowEdit}
          />
        </div>
      </div>
    )
  }
}

export default App;

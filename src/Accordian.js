import React from 'react';

class Accordian extends React.Component {
    static defaultProps = {
        sections: []
    }

    state = {
        currentIndex: 0
    }

    handleButtonClick(index) {
      console.log(`button clicked, ${index}`)
      this.setState({currentIndex: index})
    }

    render(){
        const buttons = this.props.sections.map((section, index) => 
            ( <li key={index}> 
              <button onClick={() => this.handleButtonClick(index)}>{section.title}</button> 
              {this.state.currentIndex === index && <p>{section.content}</p>}
             </li>)  
        )
        return (
        <ul>
            {buttons}
        </ul>
        )
    }
}

export default Accordian
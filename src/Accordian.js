import React from 'react';

class Accordian extends React.Component {
    static defaultProps = {
        sections: []
    }

    state = {
        currentIndex: 0
    }
    render(){
        const buttons = this.props.sections.map((section, index) => 
            ( <li key={index}> 
              <button >{section.title}</button> 
              {this.state.currentIndex === index && <p>{section.content}</p>}
             </li>)  
        )
        console.log(this.props)
        console.log(this.props.sections)
        return (
        <ul>
            {buttons}
        </ul>
        )
    }
}

export default Accordian
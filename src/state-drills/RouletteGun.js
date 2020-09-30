import React from 'react'

class RouletteGun extends React.Component{
    
    state = {
        chamber: null,
        spinningTheChamber: false,
        

    }
    
    handleClickChamber = () => {
        this.setState({spinningTheChamber: true, timeOut: setTimeout(() => {
            const random = Math.ceil(Math.random() * 8);
            console.log(random);
            // console.log(this.props.number);
            this.setState({chamber:random, spinningTheChamber: false})
         }, 2000)
        }

        );
        
    }
    
    componentWillUnmount(){
        clearTimeout(this.state.timeOut)
    }
    
    
    
    render(){
        return (
            <div>
                <p>{this.state.spinningTheChamber ? 'Spinning the chamber, pulling the trigger!': this.state.chamber === this.props.number ? 'Boom!' : "You're Safe!"}</p>
                <button onClick={this.handleClickChamber}> Pull the trigger!</button>
            </div>
        )
    }
}

export default RouletteGun
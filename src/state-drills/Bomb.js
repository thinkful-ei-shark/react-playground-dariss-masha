import React from 'react';


class Bomb extends React.Component {
  state = {
    count: 0,
    text: ''
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.count < 8) {
        this.state.count % 2 === 0 ?
          this.setState({ text: 'tic', count: this.state.count + 1 }) :
          this.setState({ text: 'toc', count: this.state.count + 1 })
        console.log(this.state.count)
      } else {
        this.setState({ text: 'Boom!' })
        return;
      }
    }, 1000)
  }

  render() {
    return (
      <div>
        <p>{this.state.text}</p>
      </div>
    )
  }

}

export default Bomb
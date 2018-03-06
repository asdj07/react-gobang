import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Square extends React.Component {
    constructor() {
        super();
        this.state = {
          value: null,
        };
      }
    render() {
      // this.props.value 
      return (
        <button className="square" onClick={() => this.props.onClick()}>
          {this.props.value}
        </button>
      );
    }
}

class SquareRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          squares: Array(225).fill(null),
        };
    };
    
    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({squares: squares});
    }

    renderSquare(i) {
        //  闭包   handleClick保存当前i的值
        return <Square
                    value={this.state.squares[i]}
                    onClick={() => this.handleClick(i)} 
                />;
    }

    render() {
        return (
            <div>
              <div className="board-row">
                {this.renderSquare(this.props.value*14 + 0)}
                {this.renderSquare(this.props.value*14 + 1)}
                {this.renderSquare(this.props.value*14 + 2)}
                {this.renderSquare(this.props.value*14 + 3)}
                {this.renderSquare(this.props.value*14 + 4)}
                {this.renderSquare(this.props.value*14 + 5)}
                {this.renderSquare(this.props.value*14 + 6)}
                {this.renderSquare(this.props.value*14 + 7)}
                {this.renderSquare(this.props.value*14 + 8)}
                {this.renderSquare(this.props.value*14 + 9)}
                {this.renderSquare(this.props.value*14 + 10)}
                {this.renderSquare(this.props.value*14 + 11)}
                {this.renderSquare(this.props.value*14 + 12)}
                {this.renderSquare(this.props.value*14 + 13)}
                {this.renderSquare(this.props.value*14 + 14)}
              </div>
            </div>
        );
    }
}
  
class Board extends React.Component {
    renderSquare(i) {
      return <Square value={i} />;
    }
    render() {
      return (
        <div>
          <SquareRow value={0}/>
          <SquareRow value={1}/>
          <SquareRow value={2}/>
          <SquareRow value={3}/>
          <SquareRow value={4}/>
          <SquareRow value={5}/>
          <SquareRow value={6}/>
          <SquareRow value={7}/>
          <SquareRow value={8}/>
          <SquareRow value={9}/>
          <SquareRow value={10}/>
          <SquareRow value={11}/>
          <SquareRow value={12}/>
          <SquareRow value={13}/>
          <SquareRow value={14}/>
          <SquareRow value={15}/>
        </div>
      );
    }
}
  
class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
}
  
  // ========================================
  
ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
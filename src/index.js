import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Square extends React.Component {
    render() {
        if(this.props.value){
            return (
                <button className="square" onClick={(i) => this.props.onClick(i)}>
                    <div className={this.props.value===1?"circle1":"circle2"}></div>
                </button>
            );
        }else{
            return (
                <button className="square" onClick={(i) => this.props.onClick(i)}>
                    {this.props.value}
                </button>
            );
        }
    }
}

class SquareRow extends React.Component {
    renderSquare(i) {
        return <Square
                value={this.props.squares[i]}
                onClick={() => this.props.click(i)} 
            />;    
    }
    render() {
        return (
            <div>
              <div className="board-row">
                {this.renderSquare(this.props.value*15 + 1)}
                {this.renderSquare(this.props.value*15 + 2)}
                {this.renderSquare(this.props.value*15 + 3)}
                {this.renderSquare(this.props.value*15 + 4)}
                {this.renderSquare(this.props.value*15 + 5)}
                {this.renderSquare(this.props.value*15 + 6)}
                {this.renderSquare(this.props.value*15 + 7)}
                {this.renderSquare(this.props.value*15 + 8)}
                {this.renderSquare(this.props.value*15 + 9)}
                {this.renderSquare(this.props.value*15 + 10)}
                {this.renderSquare(this.props.value*15 + 11)}
                {this.renderSquare(this.props.value*15 + 12)}
                {this.renderSquare(this.props.value*15 + 13)}
                {this.renderSquare(this.props.value*15 + 14)}
                {this.renderSquare(this.props.value*15 + 15)}
              </div>
            </div>
        );
    }
}
  
class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          squares: Array(226).fill(null),
          flag: -1,
          isWin:false
        };
    };
    handleClick(i) {
        if(this.state.isWin){
            return;
        }
        const squares = this.state.squares.slice();
        var _flag = this.state.flag * -1;  // 1白棋 -1黑棋
        squares[i] = _flag; 
        let _isWin = this.isWin(this.state.squares,i,_flag);
        this.setState({squares: squares,flag: this.state.flag*-1,isWin:_isWin});
        this.props.squareChange(this.state.flag,_isWin);
    }
    isWin(array,i,_flag){
        debugger;
        let row = Math.floor(i/15);
        let col = i%15;
        let amount = 1;
        //判断四个方向上能否连成五子
        for(let k1=1;k1<=4;k1++){
            if(col+k1<=15&&array[row*15+col+k1]==_flag){
                if(++amount==5)
                    return true;
            }else{
                for(let kb1=-1;kb1>=-4;kb1--){
                    if(col+kb1>=1&&array[row*15+col+kb1]==_flag){
                        if(++amount==5)
                            return true;
                    }
                }
                break;
            }
        }
        amount = 1;
        for(let k2=1;k2<=4;k2++){
            if(row+k2<=15&&array[(row+k2)*15+col]==_flag){
                if(++amount==5)
                    return true;
            }else{
                for(let kb2=-1;kb2>=-4;kb2--){
                    if(row+kb2>=1&&array[(row+kb2)*15+col]==_flag){
                        if(++amount==5)
                            return true;
                    }
                }
                break;
            }
        } 
        amount = 1;
        for(let k3=1;k3<=4;k3++){
            if(row+k3<=15&&col+k3<=15&&array[(row+k3)*15+col+k3]==_flag){
                if(++amount==5)
                    return true;
            }else{
                for(let kb3=-1;kb3>=-4;kb3--){
                    if(row+kb3>=1&&col+kb3>=1&&array[(row+kb3)*15+col+kb3]==_flag){
                        if(++amount==5)
                            return true;
                    }
                }
                break;
            }
        }
        amount = 1;
        for(let k4=1;k4<=4;k4++){
            if(row+k4<=15&&col-k4>=0&&array[(row+k4)*15+col-k4]==_flag){
                if(++amount==5)
                    return true;
            }else{
                for(let kb4=-1;kb4>=-4;kb4--){
                    if(row+kb4>=1&&col-kb4<=15&&array[(row+kb4)*15+col-kb4]==_flag){
                        if(++amount==5)
                            return true;
                    }
                }
                break;
            }
        }

        return false;

    }
    render() {
      return (
        <div>
          <SquareRow value={1} squares={this.state.squares} click={(i) => this.handleClick(i)}/>
          <SquareRow value={2} squares={this.state.squares} click={(i) => this.handleClick(i)}/>
          <SquareRow value={3} squares={this.state.squares} click={(i) => this.handleClick(i)}/>
          <SquareRow value={4} squares={this.state.squares} click={(i) => this.handleClick(i)}/>
          <SquareRow value={5} squares={this.state.squares} click={(i) => this.handleClick(i)}/>
          <SquareRow value={6} squares={this.state.squares} click={(i) => this.handleClick(i)}/>
          <SquareRow value={7} squares={this.state.squares} click={(i) => this.handleClick(i)}/>
          <SquareRow value={8} squares={this.state.squares} click={(i) => this.handleClick(i)}/>
          <SquareRow value={9} squares={this.state.squares} click={(i) => this.handleClick(i)}/>
          <SquareRow value={10} squares={this.state.squares} click={(i) => this.handleClick(i)}/>
          <SquareRow value={11} squares={this.state.squares} click={(i) => this.handleClick(i)}/>
          <SquareRow value={12} squares={this.state.squares} click={(i) => this.handleClick(i)}/>
          <SquareRow value={13} squares={this.state.squares} click={(i) => this.handleClick(i)}/>
          <SquareRow value={14} squares={this.state.squares} click={(i) => this.handleClick(i)}/>
          <SquareRow value={15} squares={this.state.squares} click={(i) => this.handleClick(i)}/>
        </div>
      );
    }
}
  
class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          flag: 1,
          isWin: false,
        };
    };

    handleChange(flag,isWin){
        this.setState({flag:flag,isWin: isWin});
    }
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board squareChange={(flag,isWin)=>this.handleChange(flag,isWin)}/>
          </div>
          <div className="game-info">
            <div>{this.state.isWin?"":(this.state.flag==1?"白棋下子":"黑棋下子")} {this.state.isWin?(this.state.flag==1?"黑棋赢啦":"白棋赢啦"):""}</div>
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
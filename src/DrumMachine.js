import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

class DrumMachine extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            pressedKey : "",
            displayValue: "",
            keyList: ["Q","W","E","A","S","D","Z","X","C"],
            diplayList: {
                "Q" : "Heater 1", 
                "W" : "Heater 2",
                "E" : "Heater 3",
                "A" : "Heater 4", 
                "S" : "Clap",
                "D" : "Open-HH",
                "Z" : "Kick-n'-Hat",
                "X" : "Kick",
                "C" : "Closed-HH"
            }
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        //callback function for addEventListener
        const setKey = (event) => {
            this.setState({
            pressedKey: event.key.toUpperCase(),
            displayValue: this.state.diplayList[this.state.pressedKey]
        })}
        document.addEventListener("keydown", setKey);
    }

    componentDidUpdate() {
        //if pressed key is in our keys trigger handleclick
        if(this.state.keyList.includes(this.state.pressedKey)){
            this.handleClick("keydown",this.state.pressedKey);

        }
    }


    handleClick(e){
        if(arguments[0] == "keydown"){
            var audio = document.getElementById(arguments[1]);    
        }else{
            const {name, value} = e.target;
            this.setState({
                displayValue: value
            })
            var audio = document.getElementById(name);
        }
        audio.paused ? audio.play() : audio.currentTime = 0

    }
    render(){
        return (
            <>
                <div id ="drum-machine" className="row">
                    <div id="pads-container" className="col-6">
                       <div className="row">
                            <div className="col-4">
                                <div className="pad">
                                    <button className="drum-pad" id ="Heater 1" name={this.state.keyList[0]} value="Heater 1" onClick={this.handleClick}>Q
                                        <audio className="clip" id={this.state.keyList[0]} src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"/>
                                    </button>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="pad">
                                    <button className="drum-pad" id ="Heater 2" name={this.state.keyList[1]} value="Heater 2" onClick={this.handleClick}>W
                                        <audio className="clip" id={this.state.keyList[1]} src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"/>
                                    </button>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="pad">
                                    <button className="drum-pad" id ="Heater 3" name={this.state.keyList[2]} value="Heater 3" onClick={this.handleClick}>E
                                        <audio className="clip" id={this.state.keyList[2]} src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"/>
                                    </button>
                                </div>
                            </div>
                       </div>
                       <div className="row">
                            <div className="col-4">
                                <div className="pad">
                                    <button className="drum-pad" id ="Heater 4" name={this.state.keyList[3]} value="Heater 4" onClick={this.handleClick}>A
                                        <audio className="clip" id={this.state.keyList[3]} src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"/>
                                    </button>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="pad">
                                    <button className="drum-pad" id ="Clap" onC name={this.state.keyList[4]} value="Clap" onClick={this.handleClick}>S
                                        <audio className="clip" id={this.state.keyList[4]} src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"/>
                                    </button>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="pad">
                                    <button className="drum-pad" id ="Open-HH"  name={this.state.keyList[5]} value="Open-HH" onClick={this.handleClick}>D
                                        <audio className="clip" id={this.state.keyList[5]} src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"/>
                                    </button>
                                </div>
                            </div>
                       </div>
                       <div className="row">
                            <div className="col-4">
                                <div className="pad">
                                    <button className="drum-pad" id ="Kick-n'-Hat" name={this.state.keyList[6]} value="Kick-n'-Hat" onClick={this.handleClick}>Z
                                        <audio className="clip" id={this.state.keyList[6]} src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"/>
                                    </button>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="pad">
                                    <button className="drum-pad" id ="Kick" onC name={this.state.keyList[7]} value="Kick" onClick={this.handleClick}>X
                                        <audio className="clip" id={this.state.keyList[7]} src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"/>
                                    </button>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="pad">
                                    <button className="drum-pad" id ="Closed-HH" name={this.state.keyList[8]} value="Closed-HH" onClick={this.handleClick}>C
                                        <audio className="clip" id={this.state.keyList[8]} src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"/>
                                    </button>
                                </div>
                            </div>
                       </div>
                                
                        
                    </div>
                     <div className="col-6 author" >
                        <h1 className="text">Drum Machine</h1>
                        <p className="text">by Pietro</p>   
                        <div className="row">
                            <div id="display" className="row">
                                <input type="text" value={this.state.displayValue} readonly="readonly"></input> 
                            </div>
                        </div> 
                    </div>
                    
                
                </div>
            </> 
        )
    }
}


export default DrumMachine;


import React, { Component } from 'react';
import './Modal.css';
import BackDrop from '../BackDrop/BackDrop';

class Modal extends Component {
    shouldComponentUpdate(nextProp,nextState){
        return nextProp.show !== this.props.show || nextProp.children !== this.props.children;
    }
    componentWillUpdate(){
        console.log('modal will update')
    }
    render(){
        return(
            <>
            <BackDrop show={this.props.show}
                      clicked ={this.props.modalClosed}/>
            <div className="Modal"
                 style={{
                     transform : this.props.show? "translateY(0)" : "translateY(-100vh)",
                     opacity : this.props.show? '1' : '0'
                 }}>
                {this.props.children}
            </div>
            </>
        )
    }
    }
   

export default Modal;
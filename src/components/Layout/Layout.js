import React, { Component } from 'react';

import ToolBar from '../Navigation/ToolBar/ToolBar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state={
        showSideDrawer:false
    }
    sideDrawerHandler = ()=>{
        this.setState({showSideDrawer:false})
    }
    sideDrawerToggleHandler = ()=>{
        this.setState((prevState)=>{
           return {showSideDrawer:!this.state.showSideDrawer}
        })
    }
    render(){
        return(
            <>
            <div>
                <ToolBar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerHandler}/>
            </div>
            <main className="mt-5">{this.props.children}</main>
            </>
        )
    }

}

export default Layout;
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setData } from '../store/action';

class Home extends Component {
    render() {
        console.log('Home Props', this.props);
        return (
            <div>
                <h1>Home</h1>
                <button onClick={() => this.props.setting_data()}>Seting Data</button>
            </div>
        )
    }
}
//used to get data from redux
//any property/ obj will create over here , directly save to Component props
//the param in this function carry global state property (i.e created in reducer)
const mapStateToProps = (state) => ({
    name: 'aamir aahj',
    global: state.users
})

//set data
const mapDispatchToProps = (dispatch) => ({
    setting_data: () => dispatch(setData())
})

//takes 2 param : 1st redux state and 2nd function built in action
export default connect(mapStateToProps, mapDispatchToProps)(Home);
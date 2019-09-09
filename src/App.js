import React, {Component} from 'react';
import User from './components/Userdata';
//import Author from './components/author'
class App extends Component {
    render() {
        return (
            <User udatas={this.state.udatas} />
                )
    }

state = {
        udatas: [],
        //authors: []
    };
/*     state={

    };
 */
    componentDidMount() {
        fetch('http://ppsuku.herokuapp.com/User/')
            .then(res => res.json())
            .then((data) => {
                this.setState({ udatas: data })
            })
        /* fetch('https://59076f16-05fa-4104-b6e6-86d283c2e8c7.mock.pstmn.io/a')
            .then(res => res.json())
            .then((data) => {
                this.setState({ authors: data })
            }) */
    }
}

export default App;

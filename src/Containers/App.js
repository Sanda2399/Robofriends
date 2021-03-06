import React from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots : [],
            searchfield : ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json();
        })
        .then(
           userData => { this.setState({ robots:userData })}
        );
    }

    onSearchChange = (event) => {
        this.setState({searchfield : event.target.value})
    }

    render() {
        const filteredRobots = this.state.robots.filter(
            curItem => {return curItem.name.toLowerCase().includes(this.state.searchfield.toLowerCase())}
        )

        if (this.state.robots.length === 0)
        {
            return <h1>Loading...</h1>
        }
        else
        {
            return (
                <div className="tc">
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        }
    }
}
export default App;
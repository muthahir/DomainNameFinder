import React from 'react';
import Header from '../Header/Header';
import ResultContainer from '../ResultContainer/ResultContainer';
import SearchBox from '../SearchBox/SearchBox';
import './App.css';
const name = require('@rstacruz/startup-name-generator');
class App extends React.Component {
    state = {
        headerText: 'Name It!',
        headerExpanded: true,
        suggestedNames: [],
    };
    handlerInput = (InputText) => {
        //here !InputText means = !(InputText.lenght > 0) or InputText.length >0 ? false : true
        this.setState({
            headerExpanded: !InputText,
            suggestedNames: InputText.length > 0 ? name(InputText) : [],
        });
    };
    render() {
        return (
            <div>
                <Header
                    headerExpanded={this.state.headerExpanded}
                    headTitle={this.state.headerText}
                />
                <SearchBox handlerInput={this.handlerInput} />
                <ResultContainer suggestedNames={this.state.suggestedNames} />
            </div>
        );
    }
}

export default App;

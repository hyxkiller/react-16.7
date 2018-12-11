import React, { Component } from 'react';
import './App.css';
import Test from './Test';
import { ThemeContext, themes } from './Theme';
import Button from './Button';

function Toolbar(props) {
  return (
    <Button onClick={props.changeTheme} >
      change
    </Button>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
  }
  render() {
    return (
      <div>
        {/* context */}
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <div>
          <Test>  </Test>
        </div>
      </div>
    );
  }
}

export default App;

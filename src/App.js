import React, { Component } from 'react'
import { database } from './firebase'

import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    // Root node of the database tree to establish the connection with the database
    // on will listen to the change on the value of any data on the database
    database.ref('/').on('value', (snapshot) => {
      console.log('THE DATA CHANGED!', snapshot.val())
      this.setState({
        data: snapshot.val()
      })
    })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Welcome to React and Firebase</h2>
        </header>
        <pre className="App-data">
          { JSON.stringify(this.state.data, null, 2) }
        </pre>
      </div>
    )
  }
}

export default App

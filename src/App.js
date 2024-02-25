import {Component} from 'react'

import ConfigurationContext from './context/ConfigurationContext'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {showContent: true, showLeftNavbar: true, showRightNavbar: true}

  onToggleShowContent = () => {
    this.setState(prevState => ({showContent: !prevState.showContent}))
  }

  onToggleShowLeftSide = () => {
    this.setState(prevState => ({showLeftNavbar: !prevState.showLeftNavbar}))
  }

  onToggleShowRightSide = () => {
    this.setState(prevState => ({showRightNavbar: !prevState.showRightNavbar}))
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state

    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent: this.onToggleShowContent,
          onToggleShowLeftNavbar: this.onToggleShowLeftSide,
          onToggleShowRightNavbar: this.onToggleShowRightSide,
        }}
      >
        <div>
          <ConfigurationController />
          <Layout />
        </div>
      </ConfigurationContext.Provider>
    )
  }
}

export default App

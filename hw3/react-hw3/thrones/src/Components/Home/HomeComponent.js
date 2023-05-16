import React, { Component } from 'react'

export class HomeComponent extends Component {
  render() {
    return (
      <div style={styles.headingContainer}>
      <h2 style={styles.welcomeHeading}>Welcome to the Game of Thrones</h2>
    </div>
    )
  }
}

export default HomeComponent


const styles = {
  headingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  welcomeHeading: {
    textAlign: 'center',
  },
};

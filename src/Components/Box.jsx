import React, { Component } from 'react'
import BoxElements from './BoxElements'

export default class Box extends Component {
    state={
        elements:{
            header: 'header', nav: 'nav', article: 'article', footer: 'footer', figure: 'figure', figcaption: 'figcaption'
        }
    }
  render() {
    const {elements} = this.state
    return (
      <div>
        <BoxElements elements={elements}/>
      </div>
    )
  }
}


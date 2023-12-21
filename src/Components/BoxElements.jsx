import React, { Component } from 'react'
import './style.css'

export default class BoxElements extends Component {
  render() {
    const {elements} = this.props
    return (
      <div className='all_boxs'>
        <header className='header_1'>
            <h1> {elements.header}</h1>
        </header>

        <div className='boxs_1'>
            <nav className='nav_1'>
                <h1>{elements.nav}</h1>
            </nav>

        <div className="r_boxs">
            <div className='r_box'>
                <figure>
                    <h1>{elements.figure}</h1>

                    <figcaption>
                        <p>{elements.figcaption}</p>
                    </figcaption>
                </figure>

                <article>
                    <header className='header_2'>
                        <p>{elements.header}</p>
                    </header>
                    <h1>{elements.article}</h1>
                    <footer className='footer_1'>
                        <p>{elements.footer}</p>
                    </footer>
                </article>

            </div>
            <div className='r_box'>
                <figure>
                    <h1>{elements.figure}</h1>

                    <figcaption>
                        <p>{elements.figcaption}</p>
                    </figcaption>
                </figure>

                <article>
                    <header className='header_2'>
                        <p>{elements.header}</p>
                    </header>
                    <h1>{elements.article}</h1>
                    <footer className='footer_1'>
                        <p>{elements.footer}</p>
                    </footer>
                </article>

            </div>
            <div className='r_box'>
                <figure>
                    <h1>{elements.figure}</h1>

                    <figcaption>
                        <p>{elements.figcaption}</p>
                    </figcaption>
                </figure>

                <article>
                    <header className='header_2'>
                        <p>{elements.header}</p>
                    </header>
                    <h1>{elements.article}</h1>
                    <footer className='footer_1'>
                        <p>{elements.footer}</p>
                    </footer>
                </article>

            </div>
        </div>

        </div>

        <footer className='footer_2'>
            <h1>{elements.footer}</h1>
        </footer>

      </div>
    )
  }
}


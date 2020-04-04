import React, {Component} from 'react'
import axios from 'axios'

class RandomQuote extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            quote : '',
            author : ''
        }
        this.getNewQuote = this.getNewQuote.bind(this)
    }

    componentDidMount () {
        this.getQuote()
    }

    getQuote() {
        const url = "https://raw.githubusercontent.com/rajeev29five/animequote/master/src/static/quotes.json"
        axios.get(url)
             .then(res => {
                 
                let data = res.data.quotes
                let id = Math.floor(Math.random()*data.length)
                let randomQuote = data[id]
                 
                this.setState({
                    quote : randomQuote['quote'],
                    author : randomQuote['author']
                })
             }) 
    }

    getNewQuote(){
        this.getQuote()
    }

    render() {
        const {quote, author} = this.state
        return (
            <div id='wrapper'>
                <h1>Anime Quote</h1>
                <div>
                    <p>{quote}</p>
                    <h5>{author}</h5>
                </div>
                <div id="buttons">
                    <a href={`https://twitter.com/intent/tweet?text=${quote} \n ${author}`} target='_blank' title="Post this quote on twitter!">
                        Tweet this quote.
                    </a>
                    <button id="new-quote" onClick={this.getNewQuote}>New Quote</button>
                </div>
            </div>
        )
    }
}

export default RandomQuote;
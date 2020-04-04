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
    }

    componentDidMount () {
        this.getQuote()
    }

    getQuote() {
        const url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
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

    getNewQuote() {
        this.getQuote()
    }

    render() {
        const {quote, author} = this.state
        return (
            <div id='wrapper'>
                <h1>Random Quote App</h1>
                <div>
                    <p>{quote}</p>
                    <h5>{author}</h5>
                </div>
            </div>
        )
    }
}

export default RandomQuote;
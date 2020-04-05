import React, {Component} from 'react'
import axios from 'axios'

class RandomQuote extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            quote : '',
            author : '',
            anime : ''
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
                    author : randomQuote['author'],
                    anime : randomQuote['anime']   
                })
             }) 
    }

    getNewQuote(){
        this.getQuote()
    }

    render() {
        const {quote, author} = this.state
        return (
            <div className="container text-center mt-5">
                    <h1>{anime === null ? "Anime Quotes" : anime}</h1>
                    <div className="card mt-4">
                        <div className="card-body">
                            <h4 className="card-text mt-3 mb-3">{quote}</h4>
                            <h5 className="card-text mt-3 mb-3" style={{textAlign: "end", marginRight: 100, marginBottom: 60}}><strong>{author}</strong></h5>
                            <a style={{marginRight:100, marginTop:60}} href={`https://twitter.com/intent/tweet?text=${quote} ${author}`}target='_blank' title="Post this quote on twitter!">
                                <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>     
                            </a>
                            <button className="btn btn-primary justify-content-end" onClick={this.getNewQuote}>New Quote</button>
                        </div>
                    </div>
            </div>
        )
    }
}

export default RandomQuote;
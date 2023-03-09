import React from 'react'


export default function QuoteMachine({quote}) {
  return (
    <div className='quote--machine--div'>
      <h1 className='quote---heading'> Random Quotes</h1>
        <p className='quote---tag'>Tag: {quote.tag}</p>
        <h1 className='quote---quote'>Quote: {quote.quote}</h1>
        <p className='quote---author'> Author: {quote.author}</p>
        <p className='quote---year'> Year: {quote.year}</p>  
    </div>
  )
}




import React from 'react';
import Feature from '../../components/feature/Feature.jsx';
import './whatGPT3.css';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section_margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title="What is GPT3?" text='GPT-3, which stands for "Generative Pre-trained Transformer 3," is a state-of-the-art artificial intelligence language model developed by OpenAI. It is designed to understand and generate human-like text based on the input it receives. It has been trained on a massive amount of text data from the internet, which allows it to perform a wide range of language-related tasks.' />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="Text Generation" text="GPT-3 can generate coherent and contextually relevant text based on a given prompt or input." />
        <Feature title="Text Summarization" text=" It can summarize lengthy pieces of text into shorter, more concise versions." />
        <Feature title="Translation" text="GPT-3 can translate text from one language to another." />
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="Question Answering" text=" It can answer questions by extracting information from text passages." />
        <Feature title="Text Completion" text="GPT-3 can suggest completions for sentences or paragraphs." />
        <Feature title="Chatbots" text="It can be used as the foundation for chatbots and virtual assistants." />
      </div>
    </div>
  )
}

export default WhatGPT3
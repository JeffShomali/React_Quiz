import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx';

class App extends Component{
     constructor(props){
          super(props);
          this.state = {
               questions:[
                    {
                         id: 1,
                         text: 'What is your name?',
                         choices:[
                              {
                                   id: 'a',
                                   text: 'Jeff'
                              },
                              {
                                   id: 'b',
                                   text: 'Sam'
                              },
                              {
                                   id: 'c',
                                   text: 'Dave'
                              }
                         ],
                         correct: 'b'
                    },
                    {
                         id: 2,
                         text: 'What is your GF name?',
                         choices:[
                              {
                                   id: 'a',
                                   text: 'Sara'
                              },
                              {
                                   id: 'b',
                                   text: 'Maha'
                              },
                              {
                                   id: 'c',
                                   text: 'Parisa'
                              }
                         ],
                         correct: 'c'
                    },
                    {
                         id: 3,
                         text: 'What is your best friend name?',
                         choices:[
                              {
                                   id: 'a',
                                   text: 'Habib'
                              },
                              {
                                   id: 'b',
                                   text: 'Alex'
                              },
                              {
                                   id: 'c',
                                   text: 'Mami'
                              }
                         ],
                         correct: 'a'
                    },
                    {
                         id: 4,
                         text: 'What is your favorite car?',
                         choices:[
                              {
                                   id: 'a',
                                   text: 'BMW'
                              },
                              {
                                   id: 'b',
                                   text: 'Benz'
                              },
                              {
                                   id: 'c',
                                   text: 'Tesla'
                              }
                         ],
                         correct: 'b'
                    }
               ],
               score: 0,
               current: 1
          }
     }


     render(){
          return (
               <div>
                    <QuestionList {...this.state} />
               </div>
          )
     }
}

export default App

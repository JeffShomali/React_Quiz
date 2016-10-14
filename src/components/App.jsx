import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx'
import Scorebox from './quiz/Scorebox.jsx'
import Results from './quiz/Results.jsx'

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
                         correct: 'a'
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
                         correct: 'b'
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
                         correct: 'a'
                    }
               ],
               score: 0,
               current: 1
          }
     }

     setCurrent(current){
          this.setState({current});
     }

     setScore(score){
          this.setState({score});
     }


     render(){
          if(this.state.current > this.state.questions.length){
               var scorebox = '';
               var results = <Results {...this.state} />
          } else {
               var scorebox = <Scorebox {...this.state} />;
               var results = "";
          }
          return (
               <div>
                    {scorebox}
                    <QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} />
                    {results}
          </div>
          )
     }
}

export default App

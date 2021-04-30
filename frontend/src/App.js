import './App.css';
import React, {Component} from 'react';
import Todos from './components/todos';

    class App extends Component {

      state = {
        filterText: '',
        todolist: []
      }

      componentDidMount() {
        fetch('http://localhost:3000/api/todos')
        .then(res => res.json())
        .then((data) => {
          console.log(data)
          this.setState({ todolist: data })
        })
        .catch(console.log)
      }
      handleFilterTextChange(filterText) {
       
        // this.state.videos = this.state.videos.filter(video => {
        //   return video.name.toLowerCase().includes(filterText.toLowerCase())
        //  })
      }

      render () {
         return (
           <>
           <Todos todolist={this.state.todolist} />
          
          </>
        )

        



      }
    }

    export default App;
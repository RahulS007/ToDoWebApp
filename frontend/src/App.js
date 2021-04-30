import './App.css';
import React, {Component} from 'react';

    class App extends Component {

      state = {
        filterText: '',
        videos: []
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
          <div id="container">
            <h1 id = "driver"><span><i class="fa fa-plus"></i></span>Todo list</h1>
            <input id = "text-box" type="text" placeholder="Add New" hidden></input>
            <ul>
              <li>Suit Up</li>
              <li>Fire Up the batMobile</li>
              <li>Save Gotham</li>
              <li>Repeat</li>
            </ul>
          </div>
          </>
        )

        



      }
    }

    export default App;
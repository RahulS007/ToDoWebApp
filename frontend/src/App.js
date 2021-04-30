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
          
          <p>data fetched</p>
          </>
        )

        



      }
    }

    export default App;
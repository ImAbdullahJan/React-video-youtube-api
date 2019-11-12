import React from "react";
import SearchBar from "./SearchBar";
import Youtube, { baseParams } from "../apis/Youtube";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSearch("buildings");
  }

  onVideoSelect = result => {
    this.setState({ selectedVideo: result });
  };

  onTermSearch = async term => {
    const response = await Youtube.get("/search", {
      params: {
        ...baseParams,
        q: term
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  render() {
    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onTermSearch} />
        <div className='ui grid'>
          <div className='row'>
            <div className='eleven wide column'>
              <VideoDetails video={this.state.selectedVideo} />
            </div>
            <div className='five wide column'>
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

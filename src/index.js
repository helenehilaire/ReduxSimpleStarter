// React is used to create and manage our components while ReactDOM is used to
// interact with the DOM.
import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import { YOUTUBE_API_KEY } from "./../keys";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const API_KEY = YOUTUBE_API_KEY;



// Step 1:  Create a new component. This component should produce some HTML.
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch("puppy");
    }

    videoSearch(term){
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos : videos,
                selectedVideo: videos[0]
            });

        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
                videos={this.state.videos} />
            </div>
        );
    }
}

// Step 2: Take this component's generated HTML and put it on the page in the DOM.
ReactDOM.render(<App />, document.querySelector('.container'));
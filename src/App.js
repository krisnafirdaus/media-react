// import React, { Component } from "react";
// import Prism from "prismjs";
// import { Player, ControlBar } from "video-react";
// import { Button } from "reactstrap";

// const sources = {
//   sintelTrailer: "http://media.w3.org/2010/05/sintel/trailer.mp4",
//   bunnyTrailer: "http://media.w3.org/2010/05/bunny/trailer.mp4",
//   bunnyMovie: "http://media.w3.org/2010/05/bunny/movie.mp4",
//   test: "http://media.w3.org/2010/05/video/movie.mp4",
// };

// export default class PlayerComponent extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       source: sources.sintelTrailer,
//     };

//     this.play = this.play.bind(this);
//     this.pause = this.pause.bind(this);
//     this.load = this.load.bind(this);
//     this.changeCurrentTime = this.changeCurrentTime.bind(this);
//     this.seek = this.seek.bind(this);
//     this.changePlaybackRate = this.changePlaybackRate.bind(this);
//     this.changeVolume = this.changeVolume.bind(this);
//     this.setMuted = this.setMuted.bind(this);
//   }

//   componentDidMount() {
//     Prism.highlightAll();

//     this.player.subscribeToStateChange(this.handleStateChange.bind(this));
//   }

//   componentDidUpdate() {
//     Prism.highlightAll();
//   }

//   setMuted(muted) {
//     return () => {
//       this.player.muted = muted;
//     };
//   }

//   handleStateChange(state) {
//     this.setState({ player: state });
//   }

//   play() {
//     this.player.play();
//   }

//   pause() {
//     this.player.pause();
//   }

//   load() {
//     this.player.load();
//   }

//   changeCurrentTime(seconds) {
//     return () => {
//       const { player } = this.player.getState();
//       this.player.seek(player.currentTime + seconds);
//     };
//   }

//   seek(seconds) {
//     return () => {
//       this.player.seek(seconds);
//     };
//   }

//   changePlaybackRate(steps) {
//     return () => {
//       const { player } = this.player.getState();
//       this.player.playbackRate = player.playbackRate + steps;
//     };
//   }

//   changeVolume(steps) {
//     return () => {
//       const { player } = this.player.getState();
//       this.player.volume = player.volume + steps;
//     };
//   }

//   changeSource(name) {
//     return () => {
//       this.setState({
//         source: sources[name],
//       });
//       this.player.load();
//     };
//   }

//   render() {
//     return (
//       <div>
//         <Player
//           ref={(player) => {
//             this.player = player;
//           }}
//           autoPlay
//         >
//           <source src={this.state.source} />
//           <ControlBar autoHide={false} />
//         </Player>

//         <div className="py-3">
//           <Button onClick={this.play} className="mr-3">
//             Play
//           </Button>
//           <Button onClick={this.pause} className="mr-3">
//             Pause
//           </Button>
//           <Button onClick={this.load} className="mr-3">
//             Load
//           </Button>
//         </div>

//         <div className="pb-3">
//           <Button onClick={this.changePlaybackRate(1)} className="mr-3">
//             Play Back ++
//           </Button>
//           <Button onClick={this.changePlaybackRate(-1)} className="mr-3">
//             Play Back --
//           </Button>
//           <Button onClick={this.changePlaybackRate(0.1)} className="mr-3">
//             Play Back += 0.1
//           </Button>
//           <Button onClick={this.changePlaybackRate(-0.1)} className="mr-3">
//             Play Back -= 0.1
//           </Button>
//         </div>

//         <div className="pb-3">
//           <Button onClick={this.changeVolume(0.1)} className="mr-3">
//             Volume ++
//           </Button>
//           <Button onClick={this.changeVolume(-0.1)} className="mr-3">
//             Volume --
//           </Button>
//           <Button onClick={this.setMuted(true)} className="mr-3">
//             Muted
//           </Button>
//           <Button onClick={this.setMuted(false)} className="mr-3">
//             Not Muted
//           </Button>
//         </div>

//         <div className="pb-3">
//           <Button onClick={this.changeSource("sintelTrailer")} className="mr-3">
//             Sintel Teaser
//           </Button>
//           <Button onClick={this.changeSource("bunnyTrailer")} className="mr-3">
//             Bunny Trailer
//           </Button>
//           <Button onClick={this.changeSource("bunnyMovie")} className="mr-3">
//             Bunny Movie
//           </Button>
//           <Button onClick={this.changeSource("test")} className="mr-3">
//             Test Movie
//           </Button>
//         </div>

//         <div>State</div>
//         <pre>
//           <code className="language-json">
//             {JSON.stringify(this.state.player, null, 2)}
//           </code>
//         </pre>
//       </div>
//     );
//   }
// }

import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import PdfRender from "./PdfRender";

const App = () => (
  // <PDFViewer style={{ width: "100%", height: "100vh" }}>
  <PdfRender />
  // </PDFViewer>
);

export default App;

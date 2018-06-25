import React from "react";
import ReactDOM from "react-dom";

import registerServiceWorker from "./registerServiceWorker";


let Mytypedchirp = [{chirp:'whats up joe',id:1},
{chirp:'whats up sam',id:2},
{chirp:'whats up pete',id:3}
]

class App extends React.Component {
  
  render() {
  
    return (           
             <div>
                  
      </div>
      
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

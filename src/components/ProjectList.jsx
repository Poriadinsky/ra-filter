import { Component } from "react";

export class ProjectList extends Component {  
  render() {
    const { projects, selected } = this.props;
    
    return (
        <div className="portfolio" id={selected}>
            {projects.map((el, index) => <img key={index} src={el.img}></img>)}
        </div>      
    );
  }
}
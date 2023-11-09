import { Component } from "react";
import { Toolbar } from "./Toolbar";
import { ProjectList } from "./ProjectList";
import projects from "./projects.json";

export class Portfolio extends Component {  

  constructor() {
    super();
    this.filters = ["All", "Websites", "Flayers", "Business Cards"];
    this.projects = projects;
    this.onSelectFilter = this.handleOnSelectFilter.bind(this);
    this.state = {        
        selectedFilter: this.filters[0],
        selectedProjects: projects
    };
  }

  handleOnSelectFilter(e) {
    let activeFilter = e.target.textContent;
    if (activeFilter === this.filters[0]) {
        this.setState({ 
            selectedFilter: activeFilter,
            selectedProjects: this.projects
        });
    } else {
        this.setState({ 
            selectedFilter: activeFilter,
            selectedProjects: this.projects.filter(el => { 
                return el.category === activeFilter;
            })
        });
    } 
  };

  render() {
    return (
        <>
        <Toolbar
        filters={this.filters}
        selected={this.state.selectedFilter}
        onSelectFilter={this.onSelectFilter}     
        />
        <ProjectList
        projects={this.state.selectedProjects}
        selected={this.state.selectedFilter}
        />
        </>
    );
  }
}
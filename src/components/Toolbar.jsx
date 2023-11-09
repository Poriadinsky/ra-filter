import { Component } from "react";
import classnames from 'classnames';

export class Toolbar extends Component {   

  render() {
    const { filters, selected, onSelectFilter } = this.props;
    
    return (
        <>
        {filters.map((el, index) => 
        <button key={index}
        className={classnames({ 
            "selected": el === selected,
          })} 
        onClick={onSelectFilter}>{el}</button>)}
        </>      
    );
  }
}
import React, { Component } from 'react';
import SwapiServices from '../../services/swapi-service';
import Spinner from '../spinner';

import './item-list.css';

export default class ItemList extends Component {
  
  swapiService = new SwapiServices();

  state = {
    peopleList: null
  }

  componentDidMount(){
    this.swapiService
    .getAllPeople()
    .then((peopleList) => {
      this.setState({
        peopleList
      })
    })
  }

  renderItems(arr){
    return arr.map(({id, name})=>{
      return(
        <li className="list-group-item"
            key={id}
            onClick={() => this.props.onItemSelected(id)}>
           {name}
        </li>
      )
    })
  }

  render() {

    const { peopleList } = this.state

    if(!peopleList){
      
      return (
        <ul className="item-list list-group">
          <li className="list-group-item">
            <Spinner />
          </li>
        </ul>
      )
    }
    const items = this.renderItems(peopleList)
    return (
      <ul className="item-list list-group">
        {  items }
      </ul>
    );
  }
}
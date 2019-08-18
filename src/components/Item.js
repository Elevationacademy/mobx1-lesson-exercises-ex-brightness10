import React, { Component } from 'react';
import { observer } from 'mobx-react'
import './Item.css'

@observer
class Item extends Component {
    checkItem = (e) => {
      this.props.store.checkItem(this.props.item.name)
      }
      editItem = () => {
        this.props.store.editItem(this.props.item.name, this.props.item.location)
      }
      deleteItem = () => {
        this.props.store.deleteItem(this.props.item.name)
      }
    render() {
      const item = this.props.item
        return (
            <div className={item.completed ? 'completed-item' : 'item'}>
              <input type="checkbox" checked={item.completed ? true : false}onClick={this.checkItem} name="" id=""/>
              <span>{item.name} - {item.location}
              <button className="edit-btn" onClick={this.editItem}>Edit</button>
              <button className="delete-btn" onClick={this.deleteItem}>Delete</button>
              </span>
      {/*   your code here
            each item should be in an input checkbox
            it should display the item name and location
            it should have both an edit button and a delete button
      */} 
            </div>)
    }
}

export default Item
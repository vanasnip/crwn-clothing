import React, { Component } from 'react'
import sections from './directory.data';
import './directory.styles.scss'
import MenuItem from '../menu-item/menu-item.component';

export default class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections
    }
  }
  render() {
    return <div className="directory-menu">
      {
        this.state.sections.map(({id, title, imageUrl, size}) => (
          <MenuItem size={size} key={id} title={title.toUpperCase()} imageUrl={imageUrl}></MenuItem>
        ))
      }
    </div>
  }
}
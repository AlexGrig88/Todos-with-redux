import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterChange } from '../../actions/todo-items-actions';

import './Item-status-filter.css';


class ItemStatusFilter extends Component {

  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' }
  ];

  onFilterChange = (filter) => {
    this.props.filterChange(filter);
  };

  render() {

    const { filter } = this.props;

    const buttons = this.buttons.map((button) => {
      const isActive = filter === button.name;
      const clazz = isActive ? "btn-info" : "btn-outline-secondary";
      return (
        <button type="button" className={ `btn ${clazz}` }
                key={button.name}
                onClick={ () => this.onFilterChange(button.name) }>
          { button.label }
        </button>
      )
    }
    );
    return (
      <div className="btn-group">
        { buttons }
      </div>
    );
  }
}

export default connect(null, {filterChange})(ItemStatusFilter);

import React from 'react';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.defaultChecked,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ checked: e.target.checked });
  }

  render() {
    let props = this.props;
    return (
      <span
        className={`Checkbox Checkbox--${props.modifier} Checkbox--${this.state.checked} ${props.className}`}
      >
        <input
          type="checkbox"
          id={props.id}
          name={props.name}
          value={props.value}
          defaultChecked={this.state.checked}
          disabled={props.disabled}
          onChange={this.handleChange}
          style={{ width: '20px', height: '20px', opacity: '0' }}
        />
      </span>
    );
  }
}

export default Checkbox;

import React from 'react';

class RadioButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.checked,
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
        className={`RadioButton RadioButton--${this.state.checked} ${props.className}`}
      >
        <input
          type="radio"
          className={props.modifier}
          id={props.id}
          name={props.name}
          value={props.name}
          checked={this.state.checked}
          disabled={props.disabled}
          onChange={this.handleChange}
        />
      </span>
    );
  }
}

export default RadioButton;

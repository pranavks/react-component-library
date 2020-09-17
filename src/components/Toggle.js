import React from 'react';

class Toggle extends React.Component {
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
        className={`Toggle Toggle--${props.modifier} Toggle--${this.state.checked} ${props.className}`}
      >
        <input
          type="checkbox"
          id={props.id}
          name={props.name}
          value={props.value}
          defaultChecked={props.defaultChecked}
          disabled={props.disabled}
          onChange={this.handleChange}
          style={{ width: '54px', height: '20px', opacity: '0' }}
        />
      </span>
    );
  }
}

export default Toggle;

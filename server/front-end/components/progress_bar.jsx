import React from 'react';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const bar = document.getElementById('bar');
    bar.style.width =
      Math.floor(this.props.progress / this.props.totalWidth) * 100 + '%';
  }

  render() {
    return (
      <div id="progress" className="graph">
        <div id="bar">
          {Math.floor(this.props.progress / this.props.totalWidth) * 100}
        </div>
      </div>
    );
  }
}

export default ProgressBar;
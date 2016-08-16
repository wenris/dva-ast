import React, { PropTypes } from 'react'

class States extends React.Component {
  render() {
    const { models } = this.props;
    return (
      <div>
        <ul>
          {
            models.map(m => <li key={m.data.namespace}>{m.data.namespace}</li>)
          }
        </ul>
      </div>
    )
  }
}

export default States;

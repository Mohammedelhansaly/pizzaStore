import React from 'react'

const Helmet = (props) => {
  document.title = 'Food ordering app - ' + props.title
  return <div>{props.children}</div>
}

export default Helmet

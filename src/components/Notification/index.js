import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  const {children} = props

  return (
    <div className="notification-item">
      <div className="details-container">
        <div className="icon-container">{children.imgUrl}</div>
        <div className="content">
          <h1 className={`title ${children.id}`}>{children.title}</h1>
          <p className="description">{children.description}</p>
        </div>
        <div className="close-icon-container">
          <GrFormClose className=" close-icon" />
        </div>
      </div>
    </div>
  )
}

export default Notification

import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'
import './index.css'

const notificationsList = [
  {
    id: 'SUCCESS',
    imgUrl: <AiFillCheckCircle className="icon success-icon" />,
    title: 'Success',
    description: 'You can access all the files in the folder',
  },
  {
    id: 'ERROR',
    imgUrl: <RiErrorWarningFill className="icon error-icon" />,
    title: 'Error',
    description:
      'Sorry, you are not authorized to have access to delete the file',
  },
  {
    id: 'WARNING',
    imgUrl: <MdWarning className="icon warning-icon" />,
    title: 'Warning',
    description: 'Viewers of this file can see comments and suggestions',
  },
  {
    id: 'INFO',
    imgUrl: <MdInfo className="icon info-icon" />,
    title: 'Info',
    description: 'Anyone on the internet can view these files',
  },
]

const AlertNotifications = () => (
  <div className="bg-container">
    <h1 className="heading">Alert Notifications</h1>
    <Notification>{notificationsList[0]}</Notification>
    <Notification>{notificationsList[1]}</Notification>
    <Notification>{notificationsList[2]}</Notification>
    <Notification>{notificationsList[3]}</Notification>
  </div>
)

export default AlertNotifications

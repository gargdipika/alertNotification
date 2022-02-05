// Write your code here

import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import './index.css'

import Notification from '../Notification'

const AlertNotifications = () => (
  <div className="background-container">
    <h1>Alert Notifications</h1>
    <Notification>
      <div className="item-container">
        <button type="button" className="button">
          <AiFillCheckCircle className="icons success" />
        </button>
        <div className="inner-container">
          <h1 className="heading success ">Success</h1>
          <p className="description">
            You can access all the files in the folder
          </p>
        </div>
      </div>
    </Notification>
    <Notification>
      <div className="item-container">
        <button type="button" className="button">
          <RiErrorWarningFill className="icons error" />
        </button>
        <div className="inner-container">
          <h1 className="heading error">Error</h1>
          <p className="description">
            Sorry, you are not authorized to have access to delete the file
          </p>
        </div>
      </div>
    </Notification>
    <Notification>
      <div className="item-container">
        <button type="button" className="button">
          <MdWarning className="icons warning" />
        </button>
        <div className="inner-container">
          <h1 className="heading warning">Warning</h1>
          <p className="description">
            Viewers of this file can see comments and suggestions
          </p>
        </div>
      </div>
    </Notification>
    <Notification>
      <div className="item-container">
        <button type="button" className="button">
          <MdInfo className="icons info" />
        </button>
        <div className="inner-container">
          <h1 className="heading info">Info</h1>
          <p className="description">
            Anyone on the internet can view these files
          </p>
        </div>
      </div>
    </Notification>
  </div>
)

export default AlertNotifications

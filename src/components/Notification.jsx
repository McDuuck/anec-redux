import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearNotification } from '../reducers/anecdoteReducer'

const Notification = () => {
  const dispatch = useDispatch()
  const notification = useSelector(state => state.notification)
  const [notificationData, setNotificationData] = useState({ text: notification, style: {} })

  useEffect(() => {
    if (notification.message) {
      setNotificationData({ text: notification.message, style: { 
        border: 'solid', 
        padding: 10, 
        borderWidth: 1
      }})
      const timeoutId = setTimeout(() => {
        setNotificationData({ text: '', style: {} })
        dispatch(clearNotification())
      }, notification.timeout * 1000)
      return () => clearTimeout(timeoutId)
    }
  }, [notification])

  return (
    <div style={notificationData.style}>
      {notificationData.text}
    </div>
  )
}

export default Notification

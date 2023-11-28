import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(state => state.notification)
  const [notificationData, setNotificationData] = useState({ text: notification, style: {} })

  useEffect(() => {
    setNotificationData({ text: notification, style: { 
      border: 'solid', 
      padding: 10, 
      borderWidth: 1
     } 
    })
    const timeoutId = setTimeout(() => {
      setNotificationData({ text: '', style: {} })
    }, 5000)
    return () => clearTimeout(timeoutId)
  }, [notification])

  return (
    <div style={notificationData.style}>
      {notificationData.text}
    </div>
  )
}

export default Notification

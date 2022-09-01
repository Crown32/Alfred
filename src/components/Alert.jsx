import { useEffect, useState } from 'react'
import { useAlert } from '../contexts/AlertContext'
import {AiOutlineCloseCircle, AiOutlineInfoCircle, AiOutlineWarning, AiOutlineCheckCircle} from 'react-icons/ai'

export default function Alert() {
  const { alert, removeAlert } = useAlert();

  const icons = {
    "error":<AiOutlineCloseCircle className='w-5 h-5'/>,
    "info":<AiOutlineInfoCircle className='w-5 h-5'/>,
    "warning":<AiOutlineWarning className='w-5 h-5'/>,
    "success":<AiOutlineCheckCircle className='w-5 h-5'/>
  }

  const alertTypes = {
    "error": "alert-error",
    "info": "alert-info",
    "warning": "alert-warning",
    "success": "alert-success"
  }

  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => {
        setShowAlert(true);
      } , 10);
      return () => clearTimeout(timer);
    }
  } , [alert]);

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      } , 3000);
      return () => clearTimeout(timer);
    }
  } , [alert, removeAlert]);

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => {
        removeAlert();
        setShowAlert(false);
      } , 3501);
      return () => clearTimeout(timer);
    }
  } , [alert, removeAlert]);

  return (
    <div className={`overflow-hidden absolute bottom-4 h-14 w-screen ${alert?"":"hidden"}`}>
      <div className={`alert shadow-xl w-[95%] absolute mx-auto inset-x-0 transition-all duration-500 ${showAlert?"bottom-0":"-bottom-16"} ${alert?alertTypes[alert.type]:""}`}>
        <div className='relative w-full'>
          {alert?icons[alert.type]:null}
          <p className='text-sm'>{alert?alert.message:null}</p>
        </div>
      </div>
    </div>
  )
}

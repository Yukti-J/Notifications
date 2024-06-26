import React, { useEffect, useState } from 'react';

const NotificationComponent = () => {

  const [mssg, setMssg] = useState("This is a notification");
  const [title, setTitle] = useState("DiGiLABS");
  const [mssgBox, setMssgBox] = useState(false)

  useEffect(() => {
    // Check for service worker support
    if ('serviceWorker' in navigator) {
      // Register the service worker
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('Service Worker registered successfully:', registration);
        })
        .catch(error => {
          console.error('Service Worker registration failed:', error);
        });
    }
  }, []);

  const handleNotification = () => {
    if (!("Notification" in window)) {
      alert("This browser does not support system notifications");
    } else if (Notification.permission === "granted") {
        showNotification();
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          showNotification();
        }
      });
    }
  };

  const showNotification = () => {
    console.log('Show Notifications')
    new Notification(`${title}`, {
      body: `${mssg}`,
      icon: "/icon.png"
    });
  };

  const handleSave = () => {
    setMssgBox(false);
    showNotification();
  }

  return (
    <>
      {!mssgBox &&
    <div className="h-screen grid grid-rows-3 justify-items-center align-middle">
      <div className='flex flex-col items-center py-10'>
      <h1 className='text-white text-2xl font-semibold font'>Lorem Ipsum...</h1>
      <h3 className='text-white font2'>Lorem ipsum dolor sit amet.</h3>
      </div>
      <div className='-m-12'><img src="/Bell.png" alt='Bell'/></div>
      <div className='grid items-center'>
      <button onClick={handleNotification} className="nof-btn w-80 py-2 px-4 text-white rounded-md font">
        Send Notification
      </button>
      <button className='text-white underline underline-offset-2' onClick={()=>setMssgBox(true)}>Customize</button>
    </div>
    </div>
}

    {mssgBox && 
      <div className='grid items-center m-auto h-screen'>
        <div className='flex flex-col m-auto w-2/4'>
        <label htmlFor="title" className="text-white">Enter Title</label>
        <input name='title' className='text-white my-4 border-2 py-2 px-3 border-white rounded-md' placeholder='Enter your title' onChange={(e)=>setTitle(e.target.value)}/>
        <label htmlFor="mssg" className="text-white">Your Message</label>
        <input name='mssg' className='text-white my-4 border-2 py-2 px-3 border-white rounded-md' placeholder='Enter your message' onChange={(e)=>setMssg(e.target.value)}/>
        <button className='bg-lime-700 py-2 px-4 text-white rounded-md' onClick={handleSave}>Save</button>
        </div>
      </div>
}
    </>
  );
}

export default NotificationComponent;

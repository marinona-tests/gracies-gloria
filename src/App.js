import React, { useState, useEffect } from 'react';
import './assets/styles/bootstrap.min.css'
import './App.css';
import 'antd/dist/antd.css';

import { buttons } from './components/infoButtons';
import MainPage from './components/MainPage';
import VideoModal from './components/VideoModal';
import OnStartModal from './components/OnStartModal';

const ON_START = 'ON_START';
function App() {
  const [modalVisible, setModalVisible] = useState(ON_START);

  const [isTouchscreen, setIsTouchscreen] = useState(true);

  useEffect(() => {
    window.addEventListener("touchstart", () => setIsTouchscreen(true));
    return () => window.removeEventListener("touchstart", setIsTouchscreen);
  }, []);


  return (
    <>
      <MainPage setModalVisible={setModalVisible} />
      {buttons.map(button =>
        <VideoModal
          key={button.id}
          videoUrl={button.url}
          visible={modalVisible === button.id}
          setModalVisible={setModalVisible}
        />
      )}
      <OnStartModal visible={modalVisible === ON_START} closeModal={() => setModalVisible(null)} isTouchscreen={isTouchscreen} />
    </>
  );
}

export default App;

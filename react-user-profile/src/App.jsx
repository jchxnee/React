import { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import UserList from './components/UserList';
import UserRegistration from './components/UserRegistration';
import NotFound from './components/NotFound';
import UserDetail from './components/UserDetail';
import { UserProvider } from './components/UserContext';

function App() {

  
  return (
    <UserProvider>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<UserList />} />
          <Route path="/UserDetail/:userId" element={<UserDetail />} />
          <Route path="/UserRegistration" element={<UserRegistration />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </UserProvider>
  );
}

export default App;

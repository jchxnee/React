import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUsers = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { name: "이주찬", id: "aaa123", age: 26, isOnline: true, img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20150422_97%2Fgjad17_1429665223499dIF9p_JPEG%2F20130813000832ca8.jpg&type=a340" },
    { name: "황인태", id: "bbb123", age: 21, isOnline: false, img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAxMjBfNzQg%2FMDAxNjExMTQyMjQxNzA1.qfQj9mDWpLEEsDWJzzFuNqKBWmf7bd_mDXupcU2OinAg.Suphru226wZqcCavaGZPGGgMHG-ZQBa0pQzKvDAIddgg.JPEG.ockaocka%2FIMG_0370.JPG&type=a340"},
    { name: "전진영", id: "ccc123", age: 25, isOnline: false, img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA0MjZfMjY5%2FMDAxNjE5NDM2NjQ4NTU1.pwjXubZyXEFbnTFJOdD7lVwKw2YqPwBvCWxip42EYTIg.54g_1cE86XT1h_nfo3sxveAPlEshQij7a8_-L8GsCt4g.JPEG.jeonghc1013%2F%253F%258B%25A4%253F%259A%25B4%25EB%25A1%259C%25EB%2593%259C%253F%258C%258C%253F%259D%25BC-1.jpg&type=a340"},
    { name: "김현아", id: "ddd123", age: 24, isOnline: true, img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAzMjVfMTI1%2FMDAxNzQyOTA4NTg0OTYy.28n8KSwbU7CWJQu6k9KSj99QNxgs1ILMVlPqVQvZvnYg.4Fwyr61FmOKlYLnTnDyADbn4_bAUQTi3JJwbIc0ay1cg.JPEG%2Fimage.jpeg&type=sc960_832"},
    { name: "최예찬", id: "eee123", age: 30, isOnline: true, img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEyMjZfMjQ0%2FMDAxNjA4OTE1MDMzNzEz.S5a4k9TcrLFZuf2aJFmm_Ic_WZanWUUPMQsP03rIJdsg.rAn1KZJYHKwrY_-JPeADSP2NKiCbufsAK1Ib10TPnNgg.PNG.immitmit%2Fe8b80edeab79af13a7ef487fcb6a8ab63c1a2fdfd7cef8040f6bff0006164f6ae317b70bdbac.png&type=a340"},
    { name: "최성진", id: "fff123", age: 27, isOnline: true, img: "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi1.ruliweb.com%2Fimg%2F21%2F02%2F11%2F1778ecbfa524c31e5.jpg&type=a340"},
    { name: "김승기", id: "ggg123", age: 27, isOnline: false, img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAyMTJfMTMx%2FMDAxNjc2MTY0MjQ1OTEx.BMK9ZQf3G1VRWlPhIX0CNZtfPwT9lqGNIspvWkVfLQwg.fXbKX14xfOv23xiZc1I3phUV-KNDXoSDBlJ6r1fN8HEg.JPEG.ansjhmoon%2FE1Mx0RDVIAATzil.jpg&type=a340"},
  ]);

  const deleteUser = (id) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
  };

  const addUser = (user) => {
    setUsers(prev => [...prev, user]);
  }

  return (
    <UserContext.Provider value={{ users, setUsers, deleteUser, addUser}}>
      {children}
    </UserContext.Provider>
  );
};

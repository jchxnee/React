
import './App.css'
import JavaScript from './components/JavaScript'
import Style from './components/Style'
import Products from './components/Products'
import Hello from './components/Hello'
import Heading from './components/Heading'
import VideoList from './components/VideoList'
import LifecycleText from './03_클래스 컴포넌트/LifecycleText'
import { useState } from 'react'
import Comment from './03_클래스 컴포넌트/Comment'
import CommentList from './03_클래스 컴포넌트/CommentList'
import UseStateTest from './04_ 리액트 훅/UseStateTest'
import SignUp from './04_ 리액트 훅/SignUp'
import LandingPage from './04_ 리액트 훅/LandingPage'
import UseRefTest from './05_useRef/UseRefTest'
import UseRefScroll from './05_useRef/UseRefScroll'
import UseMemoTest from './06_useMemo/UseMemoTest'
import UseCallbackTest from './07_useCallback/UseCallbackTest'
import UseEffectTest from './08_useEffect/UseEffectTest'
import EffectView from './08_useEffect/EffectView'
import BlackOrWhite from './09_useContext/BlackOrWhite'
import MyForm from './10_customHook/MyForm'
import ToggleBox from './10_customHook/ToggleBox'
import Header from './09_useContext/Header'
import { UserProvider } from './09_useContext/UserContext'
import { BrowserRouter, Routes , Route, Link} from 'react-router-dom'
import Profile from './11_pages/Profile'
import NotFound from './11_pages/NotFound'
import About from './11_pages/About'
import Home from './11_pages/Home'



const videoData = [{
  sumbnail: "https://i.ytimg.com/vi/gXSQOs8rxJY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAiXujktAQS5TuFQ-Pna434ZgN3yw",
  title: "어젯밤에 뭐했냐고",
  logo: "https://yt3.ggpht.com/LEORhjUBdvXExUSQUqkxW_sWYY2JPH5sLte1G6jDfrg1UInyjtb-T6xhCZUinebojkEDaXqkA9I=s68-c-k-c0x00ffffff-no-rj",
  channelName: "다이벌스",
  views: '6.4만',
  date: "1년전"
},{
  sumbnail: "https://i.ytimg.com/vi/gXSQOs8rxJY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAiXujktAQS5TuFQ-Pna434ZgN3yw",
  title: "어젯밤에 뭐했냐고",
  logo: "https://yt3.ggpht.com/LEORhjUBdvXExUSQUqkxW_sWYY2JPH5sLte1G6jDfrg1UInyjtb-T6xhCZUinebojkEDaXqkA9I=s68-c-k-c0x00ffffff-no-rj",
  channelName: "다이벌스",
  views: '6.4만',
  date: "1년전"
},{
  sumbnail: "https://i.ytimg.com/vi/gXSQOs8rxJY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAiXujktAQS5TuFQ-Pna434ZgN3yw",
  title: "어젯밤에 뭐했냐고",
  logo: "https://yt3.ggpht.com/LEORhjUBdvXExUSQUqkxW_sWYY2JPH5sLte1G6jDfrg1UInyjtb-T6xhCZUinebojkEDaXqkA9I=s68-c-k-c0x00ffffff-no-rj",
  channelName: "다이벌스",
  views: '6.4만',
  date: "1년전"
},{
  sumbnail: "https://i.ytimg.com/vi/gXSQOs8rxJY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAiXujktAQS5TuFQ-Pna434ZgN3yw",
  title: "어젯밤에 뭐했냐고",
  logo: "https://yt3.ggpht.com/LEORhjUBdvXExUSQUqkxW_sWYY2JPH5sLte1G6jDfrg1UInyjtb-T6xhCZUinebojkEDaXqkA9I=s68-c-k-c0x00ffffff-no-rj",
  channelName: "다이벌스",
  views: '6.4만',
  date: "1년전"
},{
  sumbnail: "https://i.ytimg.com/vi/gXSQOs8rxJY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAiXujktAQS5TuFQ-Pna434ZgN3yw",
  title: "어젯밤에 뭐했냐고",
  logo: "https://yt3.ggpht.com/LEORhjUBdvXExUSQUqkxW_sWYY2JPH5sLte1G6jDfrg1UInyjtb-T6xhCZUinebojkEDaXqkA9I=s68-c-k-c0x00ffffff-no-rj",
  channelName: "다이벌스",
  views: '6.4만',
  date: "1년전"
},{
  sumbnail: "https://i.ytimg.com/vi/gXSQOs8rxJY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAiXujktAQS5TuFQ-Pna434ZgN3yw",
  title: "어젯밤에 뭐했냐고",
  logo: "https://yt3.ggpht.com/LEORhjUBdvXExUSQUqkxW_sWYY2JPH5sLte1G6jDfrg1UInyjtb-T6xhCZUinebojkEDaXqkA9I=s68-c-k-c0x00ffffff-no-rj",
  channelName: "다이벌스",
  views: '6.4만',
  date: "1년전"
},]


function App() {
  // const [isButton, setIsButton] = useState(true);
  // const toggleButton = () => {
  //   setIsButton(!isButton);
  // }

  return (
    <>
     {/*<JavaScript/>
      <Style/>
      <Products/>
      <Heading type="h2"/>
      <Heading/>
      <Heading>
        무엇을 도와드릴까요?
      </Heading>
      <Hello/> 
      <VideoList videos={videoData}/> */}
      {/* {isButton && <LifecycleText/>}
      <button onClick={toggleButton}>count 없애기</button> */}
      {/* <Comment message={"안녕하세요"}/> */}
      {/* <CommentList/> */}
      {/* <UseStateTest/> */}
      {/* <SignUp/> */}
      {/* <LandingPage/> */}
      {/* <UseRefTest/> */}
      {/* <UseRefScroll/> */}
      {/* <UseMemoTest/> */}
      {/* <UseCallbackTest/> */}
      {/* <UseEffectTest/> */}
      {/* <EffectView/> */}
      {/* <BlackOrWhite/> */}
      {/* <MyForm/> */}
      {/* <ToggleBox/> */}
      {/* <UserProvider>
      <Header/>
      </UserProvider> */}
      <BrowserRouter>
      <nav style={{marginBottom: 20}}>
        {/* Link : a태그와 동일한 역할을 하지만 react-router-dom을 활용해 spa방식으로 자연스럽게 화면전환*/ }
        <Link to="/" style={{marginRight: 12}}>홈</Link>
        <Link to="/about" style={{marginRight: 12}}>소개</Link>
        <Link to="/profile/이주찬" style={{marginRight: 12}}>프로필</Link>
      </nav>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/profile/:username' element={<Profile/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

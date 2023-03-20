import { Fragment } from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth'
import { useSelector } from 'react-redux';

function App() {
  const isLogin =  useSelector((state)=>{
    console.log("ssssssssssssssssssssss")
    console.log(state.auth.islogin)
    return state.auth.islogin
  })
  return (
    <Fragment>
      {isLogin && <Header></Header>}
      {!isLogin && <Auth/>}
    <Counter />
    </Fragment>
  );
}

export default App;

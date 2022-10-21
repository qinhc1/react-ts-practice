import React from 'react'
import { connect, useSelector } from 'react-redux'
import { useNavigate, Outlet } from 'react-router-dom'

const Home: React.FC = (props) => {
  const navigate = useNavigate()
  const gorouter = () => {
    navigate(`/graph?id=${1}`, {
      state: { id: 'ide', name: '名字', list: [{ cid: '123' }] },
    })
  }
  const userInfo = useSelector((state: any) => state.user)
  console.log(userInfo);
  console.log(props);

  

  return (
    <div id="home" onClick={gorouter}>
      123 <Outlet />
    </div>
  )
}

export default connect(({ user }) => ({ user }), {})(Home)

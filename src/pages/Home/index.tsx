import React from 'react'
import { useNavigate, Outlet } from 'react-router-dom'

const Home: React.FC = (props) => {
  const navigate = useNavigate()
  const gorouter = () => {
    navigate(`/graph?id=${1}`, {
      state: { id: 'ide', name: '名字', list: [{ cid: '123' }] },
    })
  }

  return (
    <div id="home" onClick={gorouter}>
      123 <Outlet />
    </div>
  )
}

export default Home

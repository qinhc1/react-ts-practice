import React from 'react'
import {
  useNavigate,
  useParams,
  useSearchParams,
  useLocation,
} from 'react-router-dom'

const Graph: React.FC = (props) => {
  let param = useParams()
  // console.log('useParams',param);
  const [searchParams, setSearchParams] = useSearchParams()
  // console.log('useSearchParams', searchParams);
  // console.log('useSearchParams', searchParams.get('id'));  // 获取url中的参数
  // console.log('useLocation', useLocation());  // 获取路由对象中的参数
  const navigate = useNavigate()
  const gorouter = () => {
    navigate('/childrenpages', { replace: true }) // replace 重定向
  }
  return <div onClick={gorouter}>Graph</div>
}

export default Graph

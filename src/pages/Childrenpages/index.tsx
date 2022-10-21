import { systemUserSearch } from '@/api/login'
import { Table } from 'antd'
import React from 'react'
import { useEffect, useState } from 'react'
import type { ColumnsType } from 'antd/es/table'
import './index.scss'

const Childrenpages: React.FC = () => {
  interface DataType {
    id: number
    key: string
    createTime: string
    type: number
  }

  const columns: ColumnsType<DataType> = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '时间',
      dataIndex: 'createTime',
      key: 'createTime',
    },
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
    },
  ]

  const [pageSize, setpageSize] = useState(10)
  const [currentPage, setcurrentPage] = useState(1)
  const [data, setdata] = useState<DataType[]>([])
  const [total, settotal] = useState(0)
  const getUserList = async () => {
    const res = await systemUserSearch({
      page: currentPage,
      size: pageSize,
    })
    console.log(res)
    setdata(res.records)
    settotal(res.total)
  }

  const onPageChange = (
    page: React.SetStateAction<number>,
    size: React.SetStateAction<number>
  ) => {
    console.log(page, size);
    
    setcurrentPage(page)
    setpageSize(size)
    // getUserList()
  }
  useEffect(() => {
    getUserList()
  }, [currentPage])
  return (
    <div className="Childrenpages_con">
      <Table
        rowKey="id"
        dataSource={data}
        columns={columns}
        pagination={{
          position: ['bottomCenter'],
          defaultCurrent: 1,
          total,
          onChange: onPageChange,
          pageSize: pageSize,
          current: currentPage,
        }}
      />
      ;
    </div>
  )
}

export default Childrenpages

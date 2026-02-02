import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import axios from 'axios'
import { AreaChart } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Area, ResponsiveContainer, XAxis, YAxis } from 'recharts'


const AdminSales = () => {
  const [stats,setStats] = useState({
    totalUsers:0,
    totalProducts:0,
    totalOrders:0,
    totalSales:0,
    salesByDate:[]
  })

  const fetchStats = async()=>{
    try {
      const accessToken = localStorage.getItem("accessToken")
      const res = await axios.get(`${import.meta.env.VITE_URL}/api/v1/orders/sales`,{
        headers:{
          Authorization:`Bearer ${accessToken}`
        }
      })

      if(res.data.success){
        setStats(res.data)
      }
    } catch(error){
      console.log(error);
      
    }
  }

  useEffect(()=>{
    fetchStats()
  },[])
  return (
    <div className='pl-[350px] bg-gray-100 py-20 pr-20 mx-auto px-4'>
      <div className='p-6 grid gap-6 lg:grid-cols-4'>
        {/* stats card */}
        <Card className="bg-pink-500 text-white shadow">
        <CardHeader>
          <CardTitle>Total Users</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-bold">{stats.totalUsers}</CardContent>
        </Card>
        <Card className="bg-pink-500 text-white shadow">
        <CardHeader>
          <CardTitle>Total Products</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-bold">{stats.totalProducts}</CardContent>
        </Card>
        <Card className="bg-pink-500 text-white shadow">
        <CardHeader>
          <CardTitle>Total Orders</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-bold">{stats.totalOrders}</CardContent>
        </Card>
        <Card className="bg-pink-500 text-white shadow">
        <CardHeader>
          <CardTitle>Total Sales</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-bold">{stats.totalSales}</CardContent>
        </Card>
      </div>
    </div>
  )
}

export default AdminSales
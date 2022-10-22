import React from 'react'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { useState } from 'react';
import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify'
import '../styles/ArtPage.css'

function Art({ url }) {
	const [art, setArt] = useState([])

	useEffect(()=>{
		fetch(`${url}/products`)
		.then(res=>{
			if(res.ok){
				res.json().then(setArt)
			}else{
				toast('Something went wrong with your request')
			}
		})
		.catch(err=>toast(err.message))
	},[])
	return (
		<div className="art-img">
			{
				(Array.isArray(art) ? art : []).filter(item=> item.category_id === 1)
				.map(item=>{
					return(
						<ArtCard item={item} key={item.id}/>
					)
				})
			}
			<ToastContainer/>
		</div>
	)
}

function ArtCard({ item }) {
	return (
  <Card
	className='card-img'
    style={{
      width: 300,
    }}
    cover={
      <img
        alt="default art image"
        src={!item.image_1 ? "../../src/assets/artwork.jpeg" : item.image_1}
      />
    }
    
  >
		{/* actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]} */}
    {/* <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="Card title"
      description="This is the description"
    /> */}
		<h4>{item.name}</h4>
		<p>Location: {item.location}</p>
		<p>Start Price: {item.starting_price}</p>
		<p>Time: {item.time}</p>
  </Card>
	)
}
export default Art
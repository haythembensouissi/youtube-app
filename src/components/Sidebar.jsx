import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/constants'

const Sidebar = ({setselectedCategory,SelectedCategory}) => {
  return (
    <div>
    <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}>
    {categories.map((category)=>(
        <button onClick={()=>setselectedCategory(category.name)} key={category.name} className='category-btn' style={{background:category.name==SelectedCategory&&'#FC1503',color:"white"}}>
        <span style={{color:category.name===SelectedCategory ? "white":"red",marginRight:"15px"}}>{category.icon}</span>
        <span style={{opacity:category.name===SelectedCategory ?"1":"0.8"}}>{category.name}</span>
        </button>
    ))}
    </Stack>
    </div>
  )
}

export default Sidebar
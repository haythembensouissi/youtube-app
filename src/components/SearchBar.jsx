import{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper,IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    const navigate=useNavigate()
    const [searchTerm,setsearchTerm]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(searchTerm){
            navigate(`/search/${searchTerm}`)
            setsearchTerm("")
        }
    }
  return (
    <div>
    <Paper component="form"
    onSubmit={handleSubmit}
    sx={{borderRadius:20,border:"1px solid #e3e3e3",pl:2,boxShadow:"none",mr:{sm:5}}}

    >
    <input className='search-bar'
    placeholder='search...'
    value={searchTerm}
    onChange={(e)=>{setsearchTerm(e.target.value)}}
    />
    <IconButton type='submit' sx={{p:"10px",color:"red"}}>
    <SearchIcon/>
    </IconButton>
    </Paper>
    </div>
  )
}

export default SearchBar
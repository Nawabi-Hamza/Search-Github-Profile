import React, { useEffect, useState } from 'react'
import SearchForm from './SearchForm'

const BASE_URL = "https://api.github.com/users"
function SearchProfile() {
    const [ profile,setProfile ] = useState({ data:null , isLoadding:true , isEmpty:false})
    const [ username,setUsername ] = useState("Nawabi-Hamza")

    useEffect(function fetchPrfoile(){
        async function fetchGitHubProfile(){
            const response = await fetch(`${BASE_URL}/${username}`)
            const jsonResponse = await response.json()
            console.log(jsonResponse)
            if(jsonResponse.message) return setProfile({ data:null, isLoadding:false, isEmpty:true })
            setProfile({data:jsonResponse,isLoadding:false,isEmpty:false})
        }
        fetchGitHubProfile()
    },[username])

    function searchValue(val){
        setProfile({ data:null,isLoadding:true })
        setUsername(val)
    }
  return (
    <div>
        <h2>GitHub Search Profile</h2>
        <SearchForm search={searchValue} />
        {profile.isLoadding && <h2>Loadding....</h2>}
        {profile.isEmpty && <h2>User does not Exist try another username !</h2>}
        {profile.data && 
            <div className='Profile'>
                <h2>{profile?.data?.login}</h2>    
                <img src={profile?.data?.avatar_url} alt="" />
                <a href={profile?.data?.html_url} target='_blank'><button>See Profile</button></a>
            </div>
        }
    </div>
  )
}

export default SearchProfile
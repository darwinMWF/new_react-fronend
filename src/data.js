import React from "react";
import './data.css'
const UserData = (props)=>{
   
    const {name,age}=props;
    return (
      <>
      <h1>{name}</h1>
      <p>my age {age}</p>
      </>
    )
}
export default UserData;


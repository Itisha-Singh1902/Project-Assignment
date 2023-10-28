import React from 'react'
import {useState,useMemo } from 'react';
import Card from './Card';
import { TbAlignBoxLeftMiddleFilled } from "react-icons/tb";
import './CardList.css';
const CardList = ({data})=>{
    const [viewData,setViewData] = useState({});
    const [show, setShow] = useState(false);
    const [arg, setArg] = useState("");
    const viewOnClick = (e) => {
      setViewData(e);
      setShow(true);
  }
    data.sort((x,y)=>{
      const xTemp = parseInt(x.Project.Title.split(" ")[1]);
      const yTemp = parseInt(y.Project.Title.split(" ")[1]);
      console.log(xTemp, yTemp);
      return xTemp-yTemp})
    const searchedData = useMemo(() => {
        if (!arg) return data; 
    
        return data.filter((it) => {
          const { Title, Technologies } = it.Project;
          return (
            Title.toLowerCase().includes(arg.toLowerCase()) ||
            Technologies.toLowerCase().includes(arg.toLowerCase())
          );
        });
      }, [data, arg]);
    return (
       <div>
        <div className="row">
      <input className="inputBox" placeholder="Search here" onChange={(e) => setArg(e.target.value.toLowerCase())}/>
        </div>
        <div className="App">
    <div className='appBox'>
    {show && <div  className='projectDetail' onClick={()=>{setShow(false)}}><div className='inProjectDetail' >
      <h2 style={{paddingLeft:'20px',color:'grey'}}>{viewData.title}</h2>
      <div className='box'>
      <div className='projectBox'>
                <p className='headText'><TbAlignBoxLeftMiddleFilled className="icon"/>Title</p>
                <p className='innerText'>{viewData.title}</p>
            </div>
            <div className='projectBox'>
                <p className='headText'><TbAlignBoxLeftMiddleFilled className="icon"/>Project.Technologies</p>
                <p className='innerText'>{viewData.technologies}</p>
            </div>
            <div className='projectBox'>
                <p className='headText'><TbAlignBoxLeftMiddleFilled className="icon"/>Technical_Skillset.Frontend</p>
                <p className='innerText'>{viewData.frontend}</p>
            </div>
            <div className='projectBox'>
                <p className='headText'><TbAlignBoxLeftMiddleFilled className="icon"/>Technical_Skillset.Backend</p>
                <p className='innerText'>{viewData.backend}</p>
            </div>
            <div className='projectBox'>
                <p className='headText'><TbAlignBoxLeftMiddleFilled className="icon"/>Technical_Skillset.Databases</p>
                <p className='innerText'>{viewData.databases===undefined?'-':viewData.databases}</p>
            </div>
            <div className='projectBox'>
                <p className='headText'><TbAlignBoxLeftMiddleFilled className="icon"/>Technical_Skillset.Infrastructure</p>
                <p className='innerText'>{viewData.infrastructure===undefined?'-':viewData.infrastructure}</p>
            </div>
                  
      </div>
    </div>
    </div>}
        
    {searchedData.map((e)=>{
      return <Card key={e._id} 
      title={e.Project.Title} 
      technologies={e.Project.Technologies} 
      frontend={e.Technical_Skillset.Frontend} 
      backend={e.Technical_Skillset.Backend} 
      databases={e.Technical_Skillset.Databases} 
      infrastructure={e.Technical_Skillset.Infrastructre} 
      ViewOnClick={viewOnClick}/>;
    })
    }
    </div>

    </div>
       </div> 
    )
}
export default CardList;
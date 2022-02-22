import ShowItem from "./ShowItem";
import SectionHeader from "./SectionHeader";
import {useState , useEffect } from 'react' ;

export default function MorningShows() {

    const [shows,setShows] = useState([]);
    
    useEffect(() => {
      fetch("/shows.json")
      .then(res => res.json())
      .then((data) =>{
           console.log(data)
           setShows(data)
          })
    }, [])
    

  return (
    <div
      style={{
        minHeight: "350px",
        margin: "16px",
        overflowX: "scroll",
        scrollbarColor:"#aa2329",
      }}
    >
      <SectionHeader text={"Morning Shows"} />
      <div style={{
          display:'flex',
          justifyContent:'space-between'
      }}>
        {
            shows.map((show,index)=>{
                console.log(show)
                if(show.category === "morning-shows"){
                  return(
                      <ShowItem key={index} title={show.name} img={show.img} description={show.description} link={show.link}/>
                  )
                }
            })
        }
      </div>
    </div>
  );
}

import SectionHeader from "./SectionHeader";
import Link from "next/link"

export default function Schedule({link}){
    return(
        <div style={{
            height:'80vh',
            padding:'24px',
            background:"pink"
        }}>
          <SectionHeader text={"Schedule"}/>
          <div style={{
            height:'90%',
            padding:'32px',
            background:"url('https://www.activefm.co.za/img/AFM-schedule.png')",
            backgroundSize:'contain',
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center'
        }}>
          
        </div>
        </div>
    )
}
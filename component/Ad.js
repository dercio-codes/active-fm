import Link from "next/link"

export default function Ad({link}){
    return(
        <div style={{
            height:'50vh',
            padding:'48px'
        }}>
            <Link href="https://click.linksynergy.com/fs-bin/click?id=YYSWusbt6yg&amp;offerid=971100.11&amp;subid=0&amp;type=4" >
            <a target="_blank"  class="sc-hBEYId gcLkfL">
                <img src="	https://www.activefm.co.za/ads/ad-1.jpeg" alt="" style={{
                    objectFit:'contain',
                    width:'100%',
                    height:'100%'
                }} ></img>
            </a>
            </Link>
        </div>
    )
}
'use client'
import { useState } from "react";

const jesusArray = (count: number)=>{
  let tempArr: number[] = [];
      for(let i  =0; i < count; i++){
          tempArr.push(i)
      }
    return tempArr;
}
export default function Home() {
  const [count, setcount] = useState<any>(0);
  
  return (
    <div className="">
     
      <div style={{display:'flex', flexDirection: 'column', alignItems: 'center',justifyContent: 'center', position: 'sticky', top: '0', width: 'fit-content', margin: 'auto', padding: '0px 100px', background: 'red' }}>
            <h2> Yashu the Janamdin</h2> <br/>
            <div className="buttons">
            <button style={{color: 'green', backgroundColor: 'white', padding: '0.25rem 0.5rem'}}onClick={()=> {setcount(count+ 1) 
              }}>+</button>
           <span style={{margin: '0.5rem'}}>{count}</span>
          <button style={{color: 'red', backgroundColor: 'white', padding: '0.25rem 0.5rem'}} onClick={()=> {count != 0 ?setcount(count-1): null
          }}>-</button>
          <button style={{background: 'white', color: 'red', marginLeft: 'px', padding: '0.25rem 0.5rem'}} onClick={()=>{ setcount(0)}}>RESET</button>
            </div>
        </div>
      <main className="" style={{display: 'flex', flexWrap: 'wrap'}}>
        { count == 0? <div style={{width: 'fit-content', margin: 'auto', marginTop: '20px'}}>
            <img
          id="jesusName"
          className=""
          src="https://scontent.fjai2-4.fna.fbcdn.net/v/t39.30808-6/450484278_891920656299706_8849504715396040303_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=IezOqkt0u-kQ7kNvgFPtp7Y&_nc_zt=23&_nc_ht=scontent.fjai2-4.fna&_nc_gid=A1zMBu4T8_5BbefKMDv2D2d&oh=00_AYBUxkaHSGFxgH3933bk4pf5ZDX65hMS5Hu0zbzWwHEG5Q&oe=67710008"
          alt="Yeshu"
        />
           </div>
           :
          jesusArray(count).map((key, inedex)=>{
            return(
              <div>
            <img
          id="jesusName"
          className=""
          src="https://m.media-amazon.com/images/I/41BrmsMmeBL._SY300_SX300_QL70_FMwebp_.jpg"
          alt="Yeshu"
        />
        Mera Yashu Yashu Count: {inedex+1}
           </div>
            )
          })
        }
      </main>
    </div>
  );
}

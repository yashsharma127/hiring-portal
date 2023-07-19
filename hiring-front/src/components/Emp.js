import goku from "../images/goku.png"

const Projects = ({empdata}) => {
    console.log(empdata)
    return (
        <>
           {empdata.map(data => {
            return(
                <div  key={data.id}
                    className=" ">
                    
                    <img className="" src={goku} alt="Employee image"/>
                    <div className="">
                    <h1 className="">{data.name}</h1>
                            <p className="hero-text">{data.content}</p>
                            <a href="#"><button className="">resume</button></a>
                            
                    </div>
                </div>
            )
                }
              )
            }     
        </>
          )
}
export default Projects


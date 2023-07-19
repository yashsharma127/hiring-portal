import goku from "../images/goku.png"

const Projects = ({empdata}) => {
    console.log(empdata)
    return (
        <>
           {empdata.map(data => {
            return(
                <div  key={data.id}
                    className=" rounded-lg shadow-lg bg-white transition duration-500 h-52 hover:scale-110 p-16">
                    
                    <img className="absolute h-28 w-28 -mt-4 rounded-lg" src={goku} alt="Girl in a jacket"/>
                    <div className="absolute ml-44">
                    <h1 className="font-bold text-3xl text-black uppercase">{data.name}</h1>
                            <p className="hero-text">{data.content}</p>
                            <a href="#"><button className="bg-sky-500 hover:bg-sky-400 rounded-lg w-20">resume</button></a>
                            
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


import coverimg from "./images/cover.jpg"
import Projects from "./components/Emp";

const App = () => {
  const emp = [
    {
      id:'1',
      name: 'yash',
      content: 'HTML is easy'
    },
    {
      id:'2',
      name: 'harsh',
      content: 'Browser can execute only JavaScript'
    },
    {
      id:'3',
      name: 'arsh',
      content: 'GET and POST are the most important methods of HTTP protocol'
    }
  ]
  return (
    <div className=" gap-8 bg-gray-300 min-h-screen p-16">
    <nobr><h1 className="text-5xl text-center  font-bold ">COMPUTER SCIENCE AND ENGINEERING - HIRING PORTAL</h1></nobr> 
      <div>
        <img className="pt-20 pb-16 ml-80" src={coverimg} alt="Image not found"/>
      </div>

      <div className='flex items-center py-2 px-28 '  >
            <div > 
            <button className="bg-[#22c55e] rounded-md font-bold uppercase text-sm px-6 py-3 text-white
                    active:bg-green-500 hover:bg-green-400 rounded shadow-md 
                    mr-1 mb-1">Add Employee</button>  
            </div>
            <div className='ml-auto'>
            
                    <button
                    className='  bg-[#94221f] rounded-md font-bold uppercase text-sm px-6 py-3 text-white
                    active:bg-rose-600 hover:bg-rose-700 rounded shadow-md 
                    mr-1 mb-1 '>Filter</button>
            </div>    
        </div>

      <div className="grid grid-rows gap-8 min-h-screen -mt-20 p-28">
       <Projects empdata = {emp}/>
        
      </div>

  </div>
  );
}

export default App;

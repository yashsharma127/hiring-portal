import coverimg from "./images/cover.jpg"

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
        <img className="pt-20 ml-80" src={coverimg} alt="Image not found"/>
      </div>
      <div className="grid grid-rows gap-8 min-h-screen pt-28 p-16">
       
        
      </div>

  </div>
  );
}

export default App;

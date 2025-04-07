import { useState } from "react";


const Section = ({title,description,isVisible,setIsVisible})=>{
  return (
    <div className="border border-black p-2 m-2">
      <h2 className="font-bold text-3xl p-2 m-2">{title}</h2>
      { isVisible ? (<button className="cursor-pointer" onClick={()=>setIsVisible(false)}>Hide</button>) : <button className="cursor-pointer" onClick={()=>setIsVisible(true)}>Show</button>}
      { isVisible && <p>{description}</p>}
    </div>
  )
}




const Instamart = () => {
  const [sectionConfig,setSectionConfig] = useState({
    showAbout : false,
    showFlash : false,
    showCareer: false
  })
  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">Welcome to Instamart</h1>
     <Section title={"About Instamart"} description={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} isVisible={sectionConfig.showAbout} setIsVisible={()=> setSectionConfig({
      showAbout : true,
      showFlash : false,
      showCareer: false
     })}/>  
     <Section title={"Flash Sale"} description={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} isVisible={sectionConfig.showFlash} setIsVisible={()=> setSectionConfig({
       showAbout : false,
       showFlash : true,
       showCareer: false
     })}/>  
     <Section title={"Careers"} description={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} isVisible={sectionConfig.showCareer} setIsVisible={()=> setSectionConfig({
       showAbout : false,
       showFlash : false,
       showCareer: true
     })}/>  

    </div>
  );
};

export default Instamart;

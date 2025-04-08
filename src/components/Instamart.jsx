import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";


const Section = ({title,description,isVisible,setIsVisible})=>{
  return (
    <div className="border-b border-gray-200 py-4">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-xl text-gray-800">{title}</h2>
        {isVisible ? (
          <button 
            className="flex items-center text-orange-500 font-medium" 
            onClick={() => setIsVisible(false)}
          >
            Hide <ChevronUp className="ml-1 w-5 h-5" />
          </button>
        ) : (
          <button 
            className="flex items-center text-orange-500 font-medium" 
            onClick={() => setIsVisible(true)}
          >
            Show <ChevronDown className="ml-1 w-5 h-5" />
          </button>
        )}
      </div>
      {isVisible && (
        <div className="mt-4 text-gray-600 leading-relaxed">
          <p>{description}</p>
        </div>
      )}
    </div>
  )
}




const Instamart = () => {
  const [visibleSection,setVisibleSection] = useState("about")
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* intro div */}
      <div className="flex items-center mb-8">
        <div className="bg-orange-500 text-white p-2 rounded-md mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Welcome to Instamart</h1>
      </div>
      
      {/* reusable compoenents */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <Section 
          title={"About Instamart"} 
          description={"Instamart is your quick-commerce destination for fresh groceries, delivered in minutes! We work with local stores and vendors to bring you the best products at supermarket prices, delivered right to your doorstep. Our selection includes fresh fruits, vegetables, dairy, packaged foods, and household essentials - all just a few taps away on your Swiggy app."} 
          isVisible={visibleSection === 'about'} 
          setIsVisible={(value) => setVisibleSection(value ? 'about' : "")} 
        />  
        
        <Section 
          title={"Flash Sale"} 
          description={"Don't miss our daily flash sales with incredible discounts on seasonal fruits, premium imported chocolates, organic vegetables, and more! Our flash sales typically start at noon and last only for 3 hours or until stocks last. Open the app and look for the lightning bolt icon to see what's on sale today. Subscribe to notifications to never miss a deal!"} 
          isVisible={visibleSection === 'flash'} 
          setIsVisible={(value) => setVisibleSection(value ? 'flash' : "")}
        />  
        
        <Section 
          title={"Careers"} 
          description={"Join our dynamic team and be part of India's fastest growing quick-commerce platform! We're constantly looking for passionate individuals across technology, operations, marketing, and business development. We offer competitive salaries, meaningful work, and an environment that encourages innovation. Visit our careers page to see current openings and apply today."} 
          isVisible={visibleSection === 'careers'} 
          setIsVisible={(value) => setVisibleSection(value ? 'careers' : "")}
        />  
      </div>

      {/* end part div */}
      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Our Promise</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-start">
            <div className="bg-blue-100 p-2 rounded-full mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-gray-800">10-minute delivery</h4>
              <p className="text-sm text-gray-600">For orders within 2km radius</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-green-100 p-2 rounded-full mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Best quality assured</h4>
              <p className="text-sm text-gray-600">Handpicked fresh items</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-red-100 p-2 rounded-full mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-gray-800">No minimum order</h4>
              <p className="text-sm text-gray-600">Order as little as you need</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Instamart;

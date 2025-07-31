const LoginFooter = ({ text, button }) => {
     return (
       <div className="flex items-center justify-center h-20 w-[100%] max-w-sm fixed bottom-0 bg-[#f0f0f0] border-t border-gray-300">
         <p className="text-center text-[#000000] text-sm">{text}</p>
         {button &&
           (typeof button === "string" ? (
             <button className=" text-black cursor-pointer text-sm font-semibold py-2 px-4 rounded hover:underline transition">
               {button}
             </button>
           ) : (
             button
           ))}
       </div>
     );
    
}
export default LoginFooter;
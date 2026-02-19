

const GlobalFooter = () => {
  return (
    <>
     <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Left Side: Brand Name (Your Name) */}
         

          {/* Right Side: Credit */}
         <div className="flex items-center gap-2 justify-between ">
                <div className="w-8 h-8 bg-[#FDF2F4] rounded-full flex items-center justify-center 
                    text-[#E49EA9]">
                  {/* Simple Star/Sparkle Icon for Logo */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                        <path d="M12 2.25l2.43 5.76 6.1.53-4.63 4.08 1.38 6.01L12 15.5l-5.28 3.13 1.38-6.01L3.47 8.54l6.1-.53L12 2.25z" />
                    </svg>
                </div>
                        <span className="font-serif text-lg font-bold text-gray-800">
                        Lash & Beauty Studio
                        </span>
              </div>

              <div className="text-gray-500 text-sm flex items-center gap-1">
            Made with 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#E49EA9]">
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
            for beautiful you
          </div>

        </div>
    
    </>
     
  )
}

export default GlobalFooter

import '../styles/login.css'
export const IstaMain = () => {
    
    return (
      <main className="flex flex-col justify-center mt-10 ">
        <section className="flex justify-between ">
          <div>C</div>
          <div
            id="insta-logo"
            className="w-24 h-16 lg:w-48 md:-24 bg-no-repeat bg-center bg-cover"
          ></div>
          <div className="flex justify-center gap-1">
            <div></div> <div></div>
          </div>
        </section>
        <section className="flex justify-center gap-2 w-full">
          <div className=" rounded-full bg-blue-500 h-[56px] w-[56px]"></div>
          <div className=" rounded-full bg-blue-500 h-[56px] w-[56px]"></div>
          <div className=" rounded-full bg-blue-500 h-[56px] w-[56px]"></div>
          <div className=" rounded-full bg-blue-500 h-[56px] w-[56px]"></div>
          <div className=" rounded-full bg-blue-500 h-[56px] w-[56px]"></div>
        </section>
      </main>
    );
}
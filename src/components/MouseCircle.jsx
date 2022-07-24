export const MouseCircle = () => {
  return (
      <>
          <div id="mouseCircle" className="hidden bottom-[-10rem] md:block fixed z-40 border-2 border-[#DAE4DB] rounded-[50%] h-[3rem] w-[3rem]"></div>
          <div id="redDot" className="hidden bottom-[-10rem] md:block fixed z-40 rounded-[50%] h-[.45rem] w-[.45rem] bg-red-900 "></div>
      </>
  )
}

export default MouseCircle
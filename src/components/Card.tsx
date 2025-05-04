type Props = {
    link:string,
    ups:number,
    redditLink:string,
    title:string
}

const Card = (props: Props) => {
  return (
    <div className='bg-gray-800 shadow-[0px_40px_40px_rgba(0,0,0,0.8)] max-h-fit rounded-2xl flex p-4'>
        {props.link && <img src={props.link} alt='Image Not Found' width='100px' height='100px' className='m-3 text-white font-bold text-center border border-white min-h-8 rounded'/>}
        <div>
          <div className='m-2'><h6 className='text-white'>{props.title}</h6></div>
          <div className='flex gap-2 p-3 justify-around items-center'>
              <div>
                  <div className='relative'>
                  <div className='absolute right-0 max-w-fit max-h-fit min-w-2 min-h-2 rounded-full font-extrabold text-white bg-linear-to-br from-red-500 to-orange-300 px-2 overflow-hidden'>{props.ups}</div>
                  <i className="mt-4 fa-solid fa-square-poll-vertical text-white text-4xl"></i>
                  </div>
              </div>
              <div onClick={()=>{window.location.href=`${props.redditLink}`}}>
              <i className="fa-solid fa-link text-white text-2xl"></i>
              </div>
          </div>
          </div>
    </div>
  )
}

export default Card
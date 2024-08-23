

export default function MainTitle({text,title}) {
  return <>
    <div className='text-center mb-5'>
        <p className='font-light'>{text}</p>
        <h3 className='font-medium uppercase text-[30px]'>{title}</h3>
    </div>
  </>
}

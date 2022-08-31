import loginImage from '../../images/login_image.svg'


export default function LoginLayout({children}) {
  return (
     <div className='flex flex-col w-screen h-screen items-center justify-center'>
      <div className='w-screen px-10 py-3'>
        <img src={loginImage} alt='Login' width={500} height={350}></img>
      </div>
      <div className='mt-5'>
        {children}
      </div>
    </div>
    );
} 
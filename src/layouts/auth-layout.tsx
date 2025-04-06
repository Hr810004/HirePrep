import { Outlet } from 'react-router-dom';

const AuthenticateLayout = () => {
  return (
      <div className="w-screen h-screen overflow-hidden flex justify-center items-center relative">
          <img src="/assets/img/bg.png" className='absolute w-full h-full object-cover opacity-20' alt="" />
      <Outlet />
    </div>
  );
}

export default AuthenticateLayout
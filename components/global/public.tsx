import Image from "next/image";

export const IMCROX_LOGO = ()=>{
  return (
    <div className='p-2 bg-black rounded-full dark:border dark:border-[#ffffff1f]'>
    <div className='relative w-[24px] h-[24px] '>
      <Image src={'/icon.svg'} alt='ImaginecoreX' fill className='object-contain' />
    </div>
  </div>

  );
};

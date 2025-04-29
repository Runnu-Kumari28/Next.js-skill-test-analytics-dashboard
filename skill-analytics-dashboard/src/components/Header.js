import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Image 
            src="/whatbytes_logo.png" 
            alt="Company Logo" 
            width={320} 
            height={80}
            className="object-contain"
         />
      </div>
      <div className="flex items-center gap-2">
        <Image
          src="/user_profile_pic.png"
          alt="Candidate Profile"
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <span className="font-medium">Runnu Kumari</span>
      </div>
    </header>
  );
};

export default Header;
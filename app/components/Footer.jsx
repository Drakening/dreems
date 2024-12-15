

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-row justify-around bg-[#141414] py-4 px-4 md:flex-row md:flex-wrap md:items-center sm:justify-around sm:border-t sm:border-gray-500 sm:pt-8">
      <div className="text-center text-white text-base w-full md:w-auto">
        <p>&copy; {currentYear} Dream. All Rights Reserved.</p>
      </div>
      <div className="text-center text-white text-base w-full md:w-auto">
        <p>Mobile: (073) 456 4343</p>
      </div>
      <div className="text-center text-white text-base w-full md:w-auto">
        <p>Email: Dream@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;

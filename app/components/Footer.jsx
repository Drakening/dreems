const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col md:flex-row justify-center items-center bg-[#141414] py-4 px-4 space-y-4 md:space-y-0 md:space-x-8 sm:border-t sm:border-gray-500 sm:pt-8">
      <div className="text-center text-white text-base">
        <p>&copy; {currentYear} Dream. All Rights Reserved.</p>
      </div>
      <div className="text-center text-white text-base">
        <p>Mobile: (073) 456 4343</p>
      </div>
      <div className="text-center text-white text-base">
        <p>Email: Dream@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
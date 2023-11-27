const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <div className="container mx-auto">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Rahaman.com. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

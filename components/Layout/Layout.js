import NavBar from "../NavBar";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen bg-[#d26914]'>
      <NavBar />
      <main className='mt-6 ml-6 mr-6'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

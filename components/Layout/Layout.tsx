import NavBar from "../NavBar";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    // Used an arbitrary HSL value here for the bg color
    <div className='flex flex-col min-h-screen bg-[hsl(27_83%_39%)]'>
      <NavBar />
      <main className='flex-1'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

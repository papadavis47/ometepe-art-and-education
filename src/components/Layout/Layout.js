import NavBar from "../NavBar";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <div className='is-flex is-flex-direction-column is-fullheight-100vh'>
      <NavBar />
      <main className='column ml-6 mr-6'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

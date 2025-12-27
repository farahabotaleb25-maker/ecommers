import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function AuthLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar ثابت فوق الصفحة */}
      <Navbar />

      {/* main مع padding top لتعويض Navbar */}
      <main className="flex-grow flex justify-center items-center py-20 pt-24">
        {children} {/* الفورم يظهر هنا */}
      </main>

      <Footer />
    </div>
  );
}
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
    return (
        <div className="relative">
            <Header />
            <main className="relative">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

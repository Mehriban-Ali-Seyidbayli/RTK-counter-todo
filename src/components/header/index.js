import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <div className="d-flex flex-column justify-content-between flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
                <h5 className="my-0 mr-md-auto font-weight-normal">Example</h5>
                <nav className="my-2 my-md-0 mr-md-3">
                    <Link to={"/"} className="p-2 text-dark text-decoration-none" >Counter</Link>
                    <Link to={"/todo"} className="p-2 text-dark text-decoration-none" >Todo</Link>
                </nav>
            </div>
        </header>
    )
}
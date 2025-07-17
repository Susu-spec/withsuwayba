export default function Header() {
    return (
        <div className="flex justify-between items-center">
            <h1 className="header-initials">S.</h1>
            <button className="menu">
                <span className="hamburger">
                    <span className="line"></span>
                    <span className="line"></span>
                </span>
            </button>
        </div>
    )
}
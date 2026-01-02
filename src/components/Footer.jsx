import {footerLinks} from "../constants/index.js";

const Footer = () => {
    return (
        <footer>
            <div className="info">
                <p>More ways to shop: Find an Apple Store or other retailer near you. Or call 01017044628.</p>
                <img src="/logo.svg" alt ="Apple logo"/>
            </div>

            <hr />

            <div className="links">
                <p>Copyright © 2026 Ammar-Apple Inc. All rights reserved.</p>

                <ul>
                    {footerLinks.map(({label, link }) => (
                        <li key={label}>
                            <a href={link}>{label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}
export default Footer
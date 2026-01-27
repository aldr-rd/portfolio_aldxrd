import react from '../assets/icons/react.svg';
import html from '../assets/icons/html.svg';
import css from '../assets/icons/css.svg';
import js from '../assets/icons/js.svg';
import node from '../assets/icons/nodejs.svg';
import java from '../assets/icons/java.svg';
import sql from '../assets/icons/sql.svg';

function Banner() {
  return (
    <section className="banner">
        <div className="banner_container">
            <div className="banner_container_item">
                <div className="banner_title_container">
                    <h2 className="banner_subtitle">Engineering Student</h2>
                    <h1 className="banner_title">Richard Diaz</h1>
                    <p className='banner_text'>FrontEnd Developer</p>
                </div>
                <div className="banner_buttons">
                    <a href="" className="banner_button_item button_linkedin">Linkedin -&gt;</a>
                    <a href="" className="banner_button_item button_github">Github -&gt;</a>
                </div>
                <div>
                    <ul className='banner_icons'>
                        <li className="banner_icons_item"><img src={react} alt="react_icon" /></li>
                        <li className="banner_icons_item"><img src={html} alt="html_icon" /></li>
                        <li className="banner_icons_item"><img src={css} alt="css_icon" /></li>
                        <li className="banner_icons_item"><img src={js} alt="js_icon" /></li>
                        <li className="banner_icons_item"><img src={node} alt="node_icon" /></li>
                        <li className="banner_icons_item"><img src={java} alt="java_icon" /></li>
                        <li className="banner_icons_item"><img src={sql} alt="sql_icon" /></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner
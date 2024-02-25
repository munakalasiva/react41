// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body">
          {showLeftNavbar ? (
            <div className="cont left-box">
              <h1 className="heading">Left Navbar Menu</h1>
              <ul>
                <li className="li">Item 1</li>
                <li className="li">Item 2</li>
                <li className="li">Item 3</li>
                <li className="li">Item 4</li>
              </ul>
            </div>
          ) : null}

          {showContent ? (
            <div className="cont para">
              <h1 className="heading">Content</h1>
              <p>
                Lorem ipsum dolar sit amet,
                <br />
                Consiquter elit
              </p>
            </div>
          ) : null}

          {showRightNavbar ? (
            <div className="cont right-box">
              <h1 className="heading">Right Navbar Menu</h1>
              <p className="box">Ad 1</p>
              <p className="box">Ad 2</p>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body

import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = event => {
        onToggleShowContent(event.target.value)
      }

      const onChangeShowLeft = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeShowRight = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="nav-container">
          <div>
            <h1>Layout</h1>
            <div>
              <div>
                <input
                  type="checkbox"
                  checked={showContent}
                  onChange={onChangeContent}
                  id="content"
                />
                <label htmlFor="content">Content</label>
              </div>

              <div>
                <input
                  type="checkbox"
                  checked={showLeftNavbar}
                  onChange={onChangeShowLeft}
                  id="left-navbar"
                />
                <label htmlFor="left-navbar">Left Navbar</label>
              </div>

              <div>
                <input
                  type="checkbox"
                  checked={showRightNavbar}
                  onChange={onChangeShowRight}
                  id="right-navbar"
                />
                <label htmlFor="right-navbar">Right Navbar</label>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController

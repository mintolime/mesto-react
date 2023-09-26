import React from "react"

const Footer: React.FC = () => {
  return (
    <footer className="footer root__container">
      <p className="footer__copyright">
        &copy; {new Date().getFullYear()} Mesto Russia by mintolime
      </p>
    </footer>
  )
}
export default Footer

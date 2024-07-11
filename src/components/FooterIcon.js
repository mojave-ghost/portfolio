
const FooterIcon = ({ icon, text }) => {
  <div className="footer-icon">
    {icon}
    <span className="footer-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
}

export default FooterIcon;
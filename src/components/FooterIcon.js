
const FooterIcon = ( { icon, text, url} ) => {
  return (
  <div className="footer-icon group">
    <a href={url} target="_blank" rel="noreferrer noopener">
      {icon}
       <span className="footer-tooltip group-hover:scale-100">
        {text}
      </span>
    </a>
  </div>
  );
}

export default FooterIcon;
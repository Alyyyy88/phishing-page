
const LogoLink = ({href , src , alt}) => {
  return (
      <a className="text-lg" href={href} target='_blank'>
        <img src={src} alt={alt} />
      </a>
  )
}

export default LogoLink
const Button = ({ text, onClick, className = '', style = {}, ...props }) => {
  return (
    <button
      className={`btn text-white text-uppercase ${className}`}
      style={{
        backgroundColor: '#F28D35',
        border: 'none',
        borderRadius: '4px',
        letterSpacing: '-2%',
        fontWeight: '700',
        fontSize: '14px',
        transition: 'all 0.3s ease',
        ...style,
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = '#E55A2B';
        e.target.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = '#F28D35';
        e.target.style.transform = 'translateY(0)';
      }}
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
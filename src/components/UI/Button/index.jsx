import PropTypes from 'prop-types';

const variants = {
    fill: "px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 w-fit",
    outline:
      "border border-blue-500 text-blue-500 hover:border-blue-600 hover:text-blue-600",
    NavBarBTN: "text-sm py-2 bg-green-200",
  };
  const sizes = {
    sm: "flex py-2 text-sm px-2 text-center",
    md: "flex py-2 text-md px-4 text-center",
    lg: "flex py-2 text-lg px-5 text-center",
    xl: "flex py-3 text-xl px-6 text-center",
    xxl: "flex py-4 text-xl px-7 text-center",
    xxls: "flex py-4 text-xl px-60 text-center",
    xsxls: "flex py-4 text-xl px-40 text-center",
    slx: 'flex py-4 text-sm px-36',
  };

function Button({ children, variant = "outline", title ,size = "lg", type = "button", className, onClick, ...props }) {
    return (
        <button className={`rounded-lg flex items-center gap-4   ${variants[variant]} ${sizes[size]} ${className}`}
        {...props} type={type} onClick={onClick} title={title}>
            {children}
        </button>

    )
}

Button.propTypes = {
  children : PropTypes.node,
  variant : PropTypes.oneOf(Object.keys(variants)),
  size : PropTypes.oneOf(Object.keys(sizes)),
  type : PropTypes.string,
  className : PropTypes.string,
  onClick : PropTypes.func,
  title : PropTypes.string,
}

export default Button
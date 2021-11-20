import Link from 'next/link'
const Button = ({ children, href }) => {
  return (
    <button
      style={{ width: 'fit-content' }}
      className="dark:bg-white bg-gray-800 dark:text-black text-white p-2 rounded-sm "
    >
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </button>
  )
}

export default Button

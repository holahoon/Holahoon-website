function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer>
      <div>
        <p>© {year} David Kim. All rights reserved.</p>
      </div>

      <div></div>
    </footer>
  )
}

export default Footer

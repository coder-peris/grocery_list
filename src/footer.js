const Footer = ({ length }) => {
    // const today = new Date();
    return (
        <footer>
            <div>No. of item{length === 1 ? "" : "s"} = {length}</div>
            {/* <p>Copyright &copy; {today.getFullYear()}</p> */}

        </footer>
    )
}

export default Footer;
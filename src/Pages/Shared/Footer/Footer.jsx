
const Footer = () => {
    return (
        <footer>
            <div className=" bg-neutral text-neutral-content p-10">
  <aside>
        <p>
      ACME Industries Ltd.
      <br />
      Providing reliable tech since 1992
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Social</h6>
      </nav>
</div>
<div className=" footer-center bg-base-300 text-base-content p-4">
  <aside>
    <p>Copyright © ${new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</div>
        </footer>
    );
};

export default Footer;
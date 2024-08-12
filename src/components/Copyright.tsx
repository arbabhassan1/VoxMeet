export default function Copyright() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="copyright">
      <p>
        © {currentYear}{" "}
        <a href="https://arbabhassan.bio.link" className="link" target="_blank">
          InnoviSoft
        </a>
        . All rights reserved.
      </p>
      <p>Powered by Zego Cloud</p>
    </div>
  );
}

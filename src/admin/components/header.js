import { Button } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import logo from "../assets/logo.png"; // Adjust the path as necessary
import { useHistory, useLocation } from "./router";
import { useState, useEffect } from "@wordpress/element";
const Header = () => {
  const history = useHistory();
  const goToWelcome = () => {
    history.push({
      page: "ai-form-builder-welcome",
    });
  };
  const location = useLocation();
  const pageName = location.params.page;
  const [currentPage, setCurrentPage] = useState("");
  useEffect(() => {
    if (pageName === "ai-form-builder-welcome") {
      setCurrentPage("Dashboard");
    } else if (pageName === "ai-form-builder-forms") {
      setCurrentPage("Forms");
    } else if (pageName === "ai-form-builder-create-form") {
      setCurrentPage("New Form");
    } else if (pageName === "ai-form-builder-entries") {
      setCurrentPage("Entries");
    }
  }, [pageName]);
  return (
    <div className="header">
      <div
        className="header-left"
        onClick={goToWelcome}
        style={{ display: "flex", alignItems: "center" }}
      >
        <img src={logo} alt="Plugin Logo" className="plugin-logo" />
        {currentPage && <span className="current-page">&gt; {currentPage}</span>}
      </div>
      <div className="header-right">
        <Button variant="primary" className="header-button">
          {__("Announcement", "ai-form-builder")}
        </Button>
        <Button variant="secondary" className="header-button">
          {__("Change Log", "ai-form-builder")}
        </Button>
        <Button variant="primary" className="plugin-version-badge">
          v1.6.0
        </Button>
      </div>
    </div>
  );
};

export default Header;

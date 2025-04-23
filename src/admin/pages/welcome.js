import { __ } from "@wordpress/i18n";
import { useHistory } from "../components/router";
import { Button, Card, CardBody, CardHeader } from "@wordpress/components";
import logo from "../assets/logo.png"; // Adjust the path as necessary

const Welcome = () => {
  const history = useHistory();

  // Navigate to different pages based on the section clicked
  const goToForms = () => {
    history.push({
      page: "ai-form-builder-forms",
    });
  };

  const goToCreateForm = () => {
    history.push({
      page: "ai-form-builder-create-form",
    });
  };

  const goToEntries = () => {
    history.push({
      page: "ai-form-builder-entries",
    });
  };

  return (
    <>
      <div className="wrap">
        <div className="dashboard-cards">
          <div>
            <h3 className="dashboard-title">
              Get Started with AI Form Builder
            </h3>
          </div>
          <div className="dashboard-cards-container">
            <Card className="dashboard-card">
              <span className="dashboard-card-title-badge badge-1">
                {__("Setup", "ai-form-builder")}
              </span>
              <CardHeader className="dashboard-card-title">
                {__("Create a Form", "ai-form-builder")}
              </CardHeader>
              <CardBody>
                <p className="dashboard-card-description">
                  {__(
                    "Effortlessly design visually stunning forms with our user-friendly form builder.",
                    "ai-form-builder"
                  )}
                </p>
                <Button variant="secondary" onClick={goToCreateForm}>
                  {__("Create New Form", "ai-form-builder")}
                </Button>
              </CardBody>
            </Card>

            <Card className="dashboard-card">
              <span className="dashboard-card-title-badge  badge-2">
                {__("Form", "ai-form-builder")}
              </span>
              <CardHeader className="dashboard-card-title">
                {__("All Forms", "ai-form-builder")}
              </CardHeader>
              <CardBody>
                <p className="dashboard-card-description">
                  {__(
                    "Check out your created forms, and easily edit and customize the settings as needed.",
                    "ai-form-builder"
                  )}
                </p>
                <Button variant="secondary" onClick={goToForms}>
                  {__("View All Forms", "ai-form-builder")}
                </Button>
              </CardBody>
            </Card>

            <Card className="dashboard-card">
              <span className="dashboard-card-title-badge  badge-3">
                {__("Entries", "ai-form-builder")}
              </span>
              <CardHeader className="dashboard-card-title">
                {__("View Entries", "ai-form-builder")}
              </CardHeader>
              <CardBody>
                <p className="dashboard-card-description">
                  {__(
                    "Explore your entire form submission list and effortlessly manage each entry.",
                    "ai-form-builder"
                  )}
                </p>
                <Button variant="secondary" onClick={goToEntries}>
                  {__("View All Entries", "ai-form-builder")}
                </Button>
              </CardBody>
            </Card>
          </div>
        </div>
      
      <div className="overview-container">
        <div className="overview-header">
          <h2 className="overview-title">
            {__("Overview", "ai-form-builder")}
          </h2>
          <Button variant="primary" onClick={goToCreateForm}>
            {__("Create New Form", "ai-form-builder")}
          </Button>
        </div>


        <div className="overview-cards">
            <div className="overview-card-left">
                <Card className="overview-card">
                    <CardHeader className="overview-card-title"> {__("Integrations", "ai-form-builder")}</CardHeader>
                    <CardBody className="overview-card-body">
                        <img src={logo} alt="logo" height={40} width={40}/>
                        <div className="overview-card-body-content">
                            <h3>{__("OttoKit", "ai-form-builder")}</h3>
                            <p className="overview-card-description">
                            {__("Connect SureForms to hundreds of apps, CRMs and tools such as Slack, Mailchimp, etc.", "ai-form-builder")}
                            </p>
                        </div>
                        <Button variant="secondary">{__("Install", "ai-form-builder")}</Button>
                    </CardBody>
                </Card>

                <Card className="overview-card">
                    <CardHeader className="overview-card-title"> {__("Integrations", "ai-form-builder")}</CardHeader>
                    <CardBody className="overview-card-body">
                        <img src={logo} alt="logo" height={40} width={40}/>
                        <div className="overview-card-body-content">
                            <h3>{__("OttoKit", "ai-form-builder")}</h3>
                            <p className="overview-card-description">
                            {__("Connect SureForms to hundreds of apps, CRMs and tools such as Slack, Mailchimp, etc.", "ai-form-builder")}
                            </p>
                        </div>
                        <Button variant="secondary">{__("Install", "ai-form-builder")}</Button>
                    </CardBody>
                </Card>

                <Card className="overview-card">
                    <CardHeader className="overview-card-title"> {__("Rate Us", "ai-form-builder")}</CardHeader>
                    <CardBody className="overview-card-body-rate">
                        <p className="overview-card-description">
                        {__("We love to hear from you, we would appreciate every single review.", "ai-form-builder")}
                        </p>
                        <a href="#">{__("Submit a review", "ai-form-builder")}</a>
                    </CardBody>
                </Card>
            </div>
            
            <div className="overview-card-right">
                <Card className="overview-card">
                    <CardHeader className="overview-card-title"> {__("Entries", "ai-form-builder")}</CardHeader>
                    <CardBody className="overview-card-body">
                            <h3>{__("There is no data on this view", "ai-form-builder")}</h3>
                            <p className="overview-card-description">
                            {__("This is where your form views will appear", "ai-form-builder")}
                            </p>
                        
                    </CardBody>
                </Card>
            </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Welcome;

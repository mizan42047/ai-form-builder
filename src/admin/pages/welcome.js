import { __ } from '@wordpress/i18n';
import { useHistory } from '../components/router';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
} from '@wordpress/components';

const Welcome = () => {
    const history = useHistory();

    // Navigate to different pages based on the section clicked
    const goToForms = () => {
        history.push({
            page: 'ai-form-builder-forms',
        });
    };

    const goToCreateForm = () => {
        history.push({
            page: 'ai-form-builder-create-form',
        });
    };

    const goToEntries = () => {
        history.push({
            page: 'ai-form-builder-entries',
        });
    };

  return (
    <div className="wrap">
      <div className="dashboard-cards">
        <div>
          <h3 className="dashboard-title">Get Started with AI Form Builder</h3>
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
    </div>
  );
};

export default Welcome;

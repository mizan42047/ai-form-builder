import { Button } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { store as coreEditorStore } from '@wordpress/editor';
import { store as editPostStore } from '@wordpress/edit-post';
import { useHistory } from '../components/router';
const CreateForm = () => {
  console.log(editPostStore);
  const history = useHistory();
  const goToDashboard = () => {
    history.push({
        page: 'ai-form-builder-welcome',
    });
};

  return (
    // <div>
    //   <h1>Create Form</h1>
    //   <p>This is the create form page.</p>
    //   <Button
    //     variant='primary'
    //     onClick={() => {
    //       console.log('Create new form button clicked');
    //       console.log('history', history);
    //     }}
    //   >
    //     Create New Form
    //   </Button>
    // </div>

    <div className="create-form-page">
        <div class="create-form-container">
          <h1 className="create-form-title">How would you like to create a new form?</h1>
          <div className="create-form-options">
              <div className="create-form-option">
                  <div className="create-form-option-title">Build Form From Scratch</div>
                  <div className="create-form-option-description">
                     Tailor your form precisely to your unique needs. No coding skills required—just unleash your creativity.
                  </div>
                  <button className="create-form-btn create-form-btn-secondary">Build From Scratch</button>
              </div>
              
              <div className="create-form-option ai-highlight">
                  <div className="create-form-option-title">Generate Form with AI</div>
                  <div className="create-form-option-description">
                      Experience the future of form building with AI-powered forms. Use AI to build your form 10x faster.
                  </div>
                  <button className="create-form-btn create-form-btn-primary">Build With AI</button>
              </div>
          </div>
          <div className="create-form-exit-dashboard">
            <button href="#" onClick={goToDashboard}>Exit to dashboard</button>
          </div>
        </div>
    </div>
  );
}
export default CreateForm;
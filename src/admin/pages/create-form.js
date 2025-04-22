import { Button } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { store as coreEditorStore } from '@wordpress/editor';
import { store as editPostStore } from '@wordpress/edit-post';
import { useHistory } from '../components/router';
const CreateForm = () => {
  console.log(editPostStore);
  const history = useHistory();

  return (
    <div>
      <h1>Create Form</h1>
      <p>This is the create form page.</p>
      <Button
        variant='primary'
        onClick={() => {
          console.log('Create new form button clicked');
          console.log('history', history);
        }}
      >
        Create New Form
      </Button>
    </div>
  );
}
export default CreateForm;
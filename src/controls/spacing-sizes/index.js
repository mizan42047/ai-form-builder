import { __experimentalSpacingSizesControl as SpacingSizesControl } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
const BoilerplateSpacingSizes = ({ label, value, onChange, ...props }) => {
    return (
        <div className="ai-form-builder-spacing-sizes-control ai-form-builder-control">
            <SpacingSizesControl 
                label={label || __('Spacing', 'ai-form-builder')}
                values={value}
                onChange={onChange}
                {...props}
            />
        </div>
    )
};
export default BoilerplateSpacingSizes;
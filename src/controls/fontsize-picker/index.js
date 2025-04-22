import { FontSizePicker } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const BoilerplateFontSizePicker = ({ value, onChange, label, ...props }) => {
    return (
        <div className="ai-form-builder-fontsize-picker-control ai-form-builder-control">
            <FontSizePicker
                value={value}
                onChange={onChange}
                label={label || __('Font Size', 'ai-form-builder')}
                withSlider
                withReset
                units={['px', 'em', 'rem']}
                {...props}
            />
        </div>
    );
};

export default BoilerplateFontSizePicker;
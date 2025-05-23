import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { SelectControl } from '@wordpress/components';
import { memo } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';

const Inspector = ({ attributes, setAttributes, advancedControls, device }) => {
    const { 
        BoilerplateTab, 
        BoilerplatePanelBody, 
        BoilerplateColor, 
        BoilerplateFontSizePicker, 
        BoilerplateToggleGroup, 
        BoilerplateResponsive
    } = window?.boilerplateBlocks?.components;

    const {
        getResponsiveValue,
        setResponsiveValue
    } = window?.boilerplateBlocks?.helpers;

    addFilter(
        'boilerplateBlocks.advancedControl.layout.margin.exclude',
        'boilerplateBlocks.advancedControl.layout.margin.exclude',
        excludes => excludes.add('ai-form-builder/sample-block')
    );

    return (
        <InspectorControls>
            <BoilerplateTab
                tabs={[
                    {
                        name: 'content',
                        title: 'Content'
                    },
                    {
                        name: 'style',
                        title: 'Style'
                    },
                    {
                        name: 'advanced',
                        title: 'Advanced'
                    }
                ]}
                type="top-level"
            >
                {({ name: tabName }) => (
                    <>
                        {
                            tabName === 'content' && (
                                <BoilerplatePanelBody title={__('Content', 'ai-form-builder')}>
                                    <SelectControl
                                        label={__('Tag', 'ai-form-builder')}
                                        options={[
                                            {
                                                label: 'H1',
                                                value: 'h1'
                                            },
                                            {
                                                label: 'H2',
                                                value: 'h2'
                                            },
                                            {
                                                label: 'H3',
                                                value: 'h3'
                                            },
                                            {
                                                label: 'H4',
                                                value: 'h4'
                                            },
                                            {
                                                label: 'H5',
                                                value: 'h5'
                                            },
                                            {
                                                label: 'H6',
                                                value: 'h6'
                                            },
                                            {
                                                label: 'P',
                                                value: 'p'
                                            }
                                        ]}
                                        value={attributes?.tag}
                                        onChange={value => setAttributes({ tag: value })}
                                    />
                                    <BoilerplateResponsive left={'60px'}>
                                        <BoilerplateToggleGroup
                                            label={__('Alignment', 'ai-form-builder')}
                                            value={getResponsiveValue(attributes, 'alignment', device)}
                                            onChange={value => setResponsiveValue(setAttributes, 'alignment', value, device)}
                                            options={[
                                                {
                                                    label: 'Left',
                                                    value: 'left'
                                                },
                                                {
                                                    label: 'Center',
                                                    value: 'center'
                                                },
                                                {
                                                    label: 'Right',
                                                    value: 'right'
                                                }
                                            ]}
                                        />
                                    </BoilerplateResponsive>
                                </BoilerplatePanelBody>
                            )
                        }
                        {
                            tabName === 'style' && (
                                <BoilerplatePanelBody title={__('Style', 'ai-form-builder')}>
                                    <BoilerplateColor
                                        label={__('Text Color', 'ai-form-builder')}
                                        value={attributes?.textColor}
                                        onChange={value => setAttributes({ textColor: value })}
                                    />
                                    <BoilerplateFontSizePicker
                                        label={__('Font Size', 'ai-form-builder')}
                                        value={attributes?.fontSize}
                                        onChange={value => setAttributes({ fontSize: value })}
                                    />
                                </BoilerplatePanelBody>
                            )
                        }
                        {
                            tabName === 'advanced' && (
                                advancedControls
                            )
                        }
                    </>
                )}
            </BoilerplateTab>
        </InspectorControls>
    )
}
export default memo(Inspector);
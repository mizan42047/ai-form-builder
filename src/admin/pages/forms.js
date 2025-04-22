/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { DataViews } from '@wordpress/dataviews';
import { useEntityRecords } from '@wordpress/core-data';
import { useMemo, useState } from '@wordpress/element';

const fields = [
	{
		id: 'title',
		type: 'text',
		label: __('Title', 'text-domain'),
	},
	{
		id: 'author',
		type: 'text',
		label: __('Author', 'text-domain'),
		elements: [
			{ value: 1, label: __('Admin', 'text-domain') },
			{ value: 2, label: __('User', 'text-domain') },
		],
	},
	{
		id: 'status',
		type: 'text',
		label: __('Status', 'text-domain'),
	},
];

const Forms = () => {
	const [view, setView] = useState({
		type: 'table',
		perPage: 5,
		page: 1,
		sort: {
			field: 'title',
			direction: 'asc',
		},
		search: '',
		filters: [],
		titleField: 'title',
		fields,
		layout: {},
	});

	const queryArgs = useMemo(
		() => ({
			per_page: view.perPage,
			page: view.page,
			search: view.search || '',
		}),
		[view]
	);

	const { records, isResolving } = useEntityRecords('postType', 'page', queryArgs);

	// Map the records to only render valid fields
	const mappedRecords = records?.map((record) => {
		return view.fields.reduce((acc, field) => {
			// Check if the field is an object with `raw` and `rendered` keys
			if (record[field] && typeof record[field] === 'object') {
				acc[field] = record[field].rendered || '';
			} else {
				acc[field] = record[field] || '';
			}
			return acc;
		}, {});
	});

	// Ensure each record has a unique key (e.g., using the `id` field of the record)
	const safeMappedRecords = mappedRecords?.map((record) => ({
		...record,
		key: record?.id || Math.random().toString(36).substr(2, 9), // Ensure each item has a unique key
	}));

	// Filter out invalid fields before sending to DataViews
	const safeFields = Array.isArray(view.fields)
		? view.fields.filter(
				(field) =>
					field &&
					typeof field.id === 'string' &&
					field.id.trim() !== ''
		  )
		: [];

	return (
		<DataViews
			data={safeMappedRecords || []}
			view={{ ...view, fields: safeFields }}
			onChangeView={setView}
			fields={safeFields}
			defaultLayouts={['grid']}
			isLoading={isResolving}
			paginationInfo={{
				totalItems: records?.length || 0,
				totalPages: 10, // Optional: use real pagination info if available
			}}
		/>
	);
};

export default Forms;

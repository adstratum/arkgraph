import React from 'preact';

import ArkRow from '../../../components/row';
import ArkCell from '../../../components/cell';
import ArkItem from '../../../components/item';

const ArkTableHeader = ({
	config,
	focus_materials,
	header_list,
	header_skip,
	resources_filter,
	toggleFocusMaterial,
}) => {
	const ArkIconCell = (e) => (props) => (
		<ArkCell
			key={e.id}
			header_level={e.tier}
			is_focus_material={focus_materials.some(({ id }) => id === e.id)}
			onClick={() => toggleFocusMaterial(e.id)}
			header
			{...props}
		>
			<ArkItem id={e.id} tier={e.tier} />
			<span>{e.name}</span>
		</ArkCell>
	);

	return (
		<ArkRow
			cells={
				[
					{ content: '', halfwidth: true, header_level: 'T1' },
					{ content: '干员', header_level: 'T1' },
					{ content: '升级项目', header_level: 'T1' },
					{ content: '现等级', header_level: 'T1' },
					{ content: '下一等级', header_level: 'T1' },
					...Array.from(header_list)
						.splice(header_skip, header_list.length - header_skip)
						.map(e => config.showMaterialIcons ? ArkIconCell(e) : ({
							content: e.name,
							header_level: e.tier,
							is_focus_material: focus_materials.some(({ id }) => id === e.id),
							onClick: () => toggleFocusMaterial(e.id),
						})),
				]
			}
			resources_filter={resources_filter}
			icons_header={config.showMaterialIcons}
			header
		/>
	);
};

export default ArkTableHeader;

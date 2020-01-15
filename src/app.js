import React from 'preact';
import { Router } from 'preact-router';
import { useState, useEffect } from 'preact/hooks';

import useConfig from './config/useConfig';

import Header from './components/header';

import ArkInfo from './routes/info';
import ArkTable from './routes/table';
import ArkOperator from './routes/operator';
import ArkMaterials from './routes/materials';
import ArkStock from './routes/stock';
import ArkFarming from './routes/farming';
import ArkBackup from './routes/backup';

import useData from './models/useData';

import LocaleRender from './i18n/render';
import { locale } from './i18n/locale';

import fetchStatMatrix from './services/penguinstats';

const App = (props) => {
	const [currentUrl, setCurrentUrl] = useState('/');
	const {
		config,
		load,
		setLanguage,
		toggleShowAllResources,
		toggleShowFocusMaterials,
		toggleShowFilter,
		toggleShowExp,
		toggleShowAnnouncementCodeOnce,
		setFilters,
	} = useConfig();
	const ir = LocaleRender(config.locale);

	const [drops, setDrops] = useState([]);

	const data = useData();

	useEffect(() => {
		load();
		fetchStatMatrix().then(matrix => {
			setDrops(matrix);
		});
	}, []);

	return (
		<div id="app">
			<Header
				currentUrl={currentUrl}
				config={config}
				ir={ir}
				toggleShowAllResources={toggleShowAllResources}
				toggleShowFocusMaterials={toggleShowFocusMaterials}
				toggleShowFilter={toggleShowFilter}
				toggleShowExp={toggleShowExp}
			/>
			<Router onChange={e => {
				global.ga('set', 'page', e.url);
				global.ga('send', 'pageview');
				setCurrentUrl(e.url);
			}}
			>
				<ArkInfo
					path="/"
					toggleShowAnnouncementCodeOnce={toggleShowAnnouncementCodeOnce}
					showAnnouncementCodeOnce={config.showAnnouncementCodeOnce}
				/>
				<ArkTable path="/table"
					ir={ir}
					config={config}
					data={data}
					toggleShowFilter={toggleShowFilter}
					setFilters={setFilters}
					drops={drops}
				/>
				<ArkOperator path="/operator/:operator_name?" ir={ir} config={config} data={data} />
				<ArkMaterials path="/materials/:material_name?" ir={ir} config={config} data={data} drops={drops} />
				<ArkFarming path="/farming/:level_id?" ir={ir} config={config} data={data} />
				<ArkStock path="/stock" ir={ir} config={config} data={data} />
				<ArkBackup
					path="/settings"
					ir={ir}
					config={config}
					available_locale={locale}
					setLanguage={setLanguage}
					state={data.state}
					load={data.load}
				/>
			</Router>
		</div>
	);
};

export default App;
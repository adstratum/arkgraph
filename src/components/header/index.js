import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import { STORAGE_VERSION } from '../../config/useConfig';

import Toggle from './toggle';

const Header = ({
	currentUrl,
	config,
	toggleShowAllResources,
	toggleShowMaterialIcons,
}) => (
	<header class={style.header}>
		<div class={style.title}>
			<h1>
				<a href="./">
					<span class={style.deco}>:.:</span>  明日方舟 | 材料计算器
					<span class={style.version}>V{STORAGE_VERSION}</span>
				</a>
			</h1>
			<nav>
				<Link activeClassName={style.active} href="/">首页</Link>
				<Link activeClassName={style.active} href="/info">说明</Link>
			</nav>
		</div>
		{
			currentUrl === '/' && (
				<div class={style.toggles}>
					<Toggle
						value={config.showAllResources}
						toggle={toggleShowAllResources}
						content="显示全部资源"
					/>
					<Toggle
						value={config.showMaterialIcons}
						toggle={toggleShowMaterialIcons}
						content="显示图标"
					/>
				</div>
			)
		}
	</header>
);

export default Header;

import React from 'preact';
import style from './style';

const Info = (props) => (
	<div class={style.wrapper}>
		<div class={style.info}>
			<h1><a href="https://ark-nights.com/">ARK-NIGHTS.com</a></h1>
			<hr />
			<h2>使用说明</h2>
			<h3>干员晋升清单</h3>
			<ul>
				<li>点击表格左下角的<code>+</code>添加一行干员数据</li>
				<li>输入干员名称，按<code>Tab</code>或<code>Enter</code>有自动补全功能。支持拼音和汉字</li>
				<li>选择升级项目（精英化、技能、技能专精）</li>
				<li>输入目前等级</li><li>右边表格会自动查询所需材料并折叠不需要的材料列</li>
			</ul>
			<h3>材料追踪</h3>
			<ul>
				<li>点击表头图标添加追踪材料</li>
			</ul>
			<h2>功能列表</h2>
			<h3>已实现功能</h3>
			<ul>
				<li>干员数据查询</li>
				<li>自动本地保存</li>
				<li>自动折叠数据列</li>
				<li>离线可用</li>
				<li>材料图标</li>
				<li>材料出处展示</li>
				<li>材料合成公式展示</li>
				<li>追踪材料</li>
			</ul>
			<h3>待实现功能</h3>
			<ul>
				<li>输入完库存，会自动计算差值</li>
				<li>基于合成公式展开的单个需求计算</li>
				<li>通过追踪材料卡片直接增减库存</li>
				<li>合成消耗对应材料</li>
				<li>升级经验计算</li>
				<li>完成干员数据行消耗对应材料</li>
				<li>……</li>
			</ul>
			<h3>Tips</h3>
			<blockquote><p>虽然干员没有显示备选项，但支持模糊输入，大概输对了就能找到（</p></blockquote>
			<blockquote><p>你好，博士。你或许希望能在这找到Lancet-2，但Lancet-2什么升级都没有，毕竟她只是一台医疗机器人……</p></blockquote>
			<hr />
			<h2>更新日志</h2>
			<h3>V1.1.0</h3>
			<ul>
				<li>增加了材料卡片</li>
				<li>增加了追踪材料功能</li>
				<li>改变了界面布局</li>
			</ul>
			<h3>V1.0.4</h3>
			<ul>
				<li>进一步提高了干员名称拼音输入查找的准确性</li>
				<li>修复了一些操作Bug</li>
			</ul>
			<h3>V1.0.3</h3>
			<ul>
				<li>添加了材料图标</li>
				<li>修复了Edge选项显示不正确的Bug</li>
			</ul>
			<h3>V1.0.2</h3>
			<ul>
				<li>调整了添加干员按钮位置</li>
				<li>提高了干员名称拼音输入查找的准确性</li>
			</ul>
			<h3>V1.0.1</h3>
			<ul><li>实现了干员名称拼音输入查找.β</li></ul>
			<h3>V1.0.0</h3>
			<ul><li>实现了基本功能</li></ul>
	    <hr />
			<h2>关于项目</h2>
			<p>沉迷培养干员，然而没有理智。<del>只好写点相关项目等理智恢复</del></p>
			<p>感谢以下网站及大佬</p>
			<ul>
				<li><a target="_blank" rel="noreferrer noopener" href="http://wiki.joyme.com/arknights/">明日方舟wiki</a></li>
				<li><a target="_blank" rel="noreferrer noopener" href="https://graueneko.github.io/">明日方舟工具箱</a></li>
			</ul>
			<p>如果有各种建议或者意见，欢迎提Issue或微博找我</p>
			<p>如果你喜欢这个项目，并且希望作者能多<del>抽到几个6星</del>做些新feature，欢迎打赏催更（</p>
	    <p>项目地址：<a target="_blank" rel="noreferrer noopener" href="https://github.com/Houdou/arkgraph">GitHub</a></p>
	    <p>作者： <a target="_blank" rel="noreferrer noopener" href="https://weibo.com/timeleap">@凤瞳</a></p>
		</div>
	</div>
);

export default Info;

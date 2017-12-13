var data = [
	{
		title: '决定主轴的方向（即项目的排列方向）',
		type: 'flex-direction',
		list: [
			{
				title: '主轴为水平方向，起点在左端。',
				type: 'row'
			},
			{
				title: '主轴为水平方向，起点在右端。',
				type: 'row-reverse'
			},
			{
				title: '主轴为垂直方向，起点在上沿。',
				type: 'column'
			},
			{
				title: '主轴为垂直方向，起点在下沿。',
				type: 'column-reverse'
			}
		]
	},
	{
		title: '定义了项目是否换行及如何换行',
		type: 'flex-wrap',
		list: [
			{
				title: '不换行。',
				type: 'nowrap'
			},
			{
				title: '第一行在上方。',
				type: 'wrap'
			},
			{
				title: '换行，第一行在下方。',
				type: 'wrap-reverse'
			}
		]
	},
	{
		title: '定义了项目在主轴上的对齐方式',
		type: 'justify-content',
		list: [
			{
				title: '左对齐',
				type: 'flex-start'
			},
			{
				title: '右对齐',
				type: 'flex-end'
			},
			{
				title: '居中',
				type: 'center'
			},
			{
				title: '两端对齐，项目之间的间隔都相等。',
				type: 'space-between'
			},
			{
				title: '每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。',
				type: 'space-around'
			}
		]
	},
	{
		title: '定义项目在交叉轴上如何对齐',
		type: 'align-items',
		list: [
			{
				title: '如果项目未设置高度或设为auto，将占满整个容器的高度。',
				type: 'stretch'
			},
			{
				title: '交叉轴的起点对齐。',
				type: 'flex-start'
			},
			{
				title: '交叉轴的终点对齐。',
				type: 'flex-end'
			},
			{
				title: '交叉轴的中点对齐。',
				type: 'center'
			},
			{
				title: '项目的第一行文字的基线对齐。',
				type: 'baseline'
			}
		]
	},
	{
		title: '定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。',
		type: 'align-content',
		list: [
			{
				title: '轴线占满整个交叉轴。',
				type: 'stretch'
			},
			{
				title: '与交叉轴的起点对齐。',
				type: 'flex-start'
			},
			{
				title: '与交叉轴的终点对齐。',
				type: 'flex-end'
			},
			{
				title: '与交叉轴的中点对齐。',
				type: 'center'
			},
			{
				title: '与交叉轴两端对齐，轴线之间的间隔平均分布。',
				type: 'space-between'
			},
			{
				title: '每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。',
				type: 'space-around'
			}
		]
	}
]
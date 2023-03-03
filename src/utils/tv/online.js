const tvCommon = [
	{
		name: "素白白影视",
		url: "https://www.subaibaiys.com/",
		img: "/img/tv/online/subaibai.png",
		able: true,
	},
	{
		name: "厂长资源",
		url: "https://www.czspp.com/",
		img: "/img/tv/online/changzhang.png",
		able: true,
	},
	{
		name: "剧白白",
		url: "https://www.jubaibai.cc/",
		img: "/img/tv/online/jubaibai.png",
		able: false,
	},
	{
		name: "皮皮泡",
		url: "https://www.pipipao.com/",
		img: "/img/tv/online/pipipao.png",
		able: true,
	},
	{
		name: "HDmoli",
		url: "https://www.hdmoli.com/",
		img: "/img/tv/online/HDmoli.png",
		able: true,
	},
	{
		name: "低端影视",
		url: "https://ddys.tv/",
		img: "/img/tv/online/ddys.png",
		able: true,
	},
	{
		name: "4k鸭奈飞资源站",
		url: "https://yanetflix.com/",
		img: "/img/tv/online/yanaifei.jpg",
		able: true,
	},
	{
		name: "555电影",
		url: "https://www.o8tv.com/",
		img: "/img/tv/online/555.png",
		able: true,
	},
	{
		name: "电影先生",
		url: "http://dyxs11.com/",
		img: "/img/tv/online/dyxs.png",
		able: true,
		tip: "需要翻墙",
	},
	{
		name: "8K超清影视",
		url: "http://vip.8kvod.com:888/",
		img: "/img/tv/online/8kvod.png",
		able: true,
	},
]

const tvSearch = [
	{
		name: "白嫖者联盟",
		url: "https://www.bpzhe.com/",
		img: "/img/tv/online/bpzhe.png",
		able: true,
	},
	{
		name: "茶杯狐",
		url: "https://cupfox.app/",
		img: "/img/tv/online/cupfox.png",
		able: true,
	},
	{
		name: "五号站",
		url: "https://www.wuhaozhan.net/",
		img: "/img/tv/online/wuhaozhan.png",
		able: false,
	},
	{
		name: "影猫",
		url: "https://www.mvcat.com/",
		img: "/img/tv/online/mvcat.png",
		able: true,
	},
	{
		name: "找台词",
		url: "http://zhaotaici.cn/",
		img: "/img/tv/online/zhaotaici.png",
		able: true,
	},
	{
		name: "33台词",
		url: "http://33.agilestudio.cn/",
		img: "/img/tv/online/33taici.png",
		able: true,
	},
	{
		name: "疯狂影视搜索",
		url: "http://ifkdy.com/",
		img: "/img/tv/online/ifkdy.png",
		able: false,
	},
]

const tvCartoon = [
	{
		name: "哔咪动漫",
		url: "https://www.bimiacg4.net/",
		img: "/img/tv/online/bimiacg4.png",
		able: true,
	},
	{
		name: "樱花动漫",
		url: "http://www.yinghuacd.com/",
		img: "/img/tv/online/yinghuacd.png",
		able: true,
		tip: "有广告",
	},
	{
		name: "九九动漫",
		url: "http://www.995dm.com/",
		img: "/img/tv/online/995dm.png",
		able: true,
		tip: "有广告",
	},
	{
		name: "嘶哩嘶哩",
		url: "http://www.silisili.in/",
		img: "/img/tv/online/silisili.png",
		able: true,
		tip: "需要翻墙",
	},
	{
		name: "奇米奇米",
		url: "http://www.qimiqimi.co/",
		img: "/img/tv/online/qimiqimi.png",
		able: true,
	},
	{
		name: "AGE看动漫",
		url: "https://www.agemys.cc/",
		img: "/img/tv/online/agemys.png",
		able: true,
	},
	{
		name: "12wo看动漫",
		url: "https://www.12wo.com/",
		img: "/img/tv/online/12wo.png",
		able: false,
	},
	{
		name: "哈哩哈哩动漫",
		url: "http://halihali2.com/",
		img: "/img/tv/online/halihali2.png",
		able: false,
	},
]

const tvUSTV = [
	{
		name: "91美剧网",
		url: "https://mjw91.com/",
		img: "/img/tv/online/mjw91.png",
		able: false,
	},
]

const tvVip = [
	{
		name: "看爱奇艺",
		url: "https://www.kaniqiyi.com/",
		img: "/img/tv/online/kaniqiyi.png",
		able: true,
	},
	{
		name: "船长VIP解析",
		url: "http://czjx8.com/",
		img: "/img/tv/online/czjx8.png",
		able: true,
		tip: "需要翻墙",
	},
	{
		name: "3P VIP解析",
		url: "http://vipjiexi.p3z.net/",
		img: "/img/tv/online/p3z.png",
		able: false,
	},
]

export default [
	{
		name: "常用网站",
		content: [...tvCommon],
	},
	{
		name: "聚合搜索",
		content: [...tvSearch],
	},
	{
		name: "动漫网站",
		content: [...tvCartoon],
	},
	{
		name: "美剧网站",
		content: [...tvUSTV],
	},
	{
		name: "Vip视频解析",
		content: [...tvVip],
	},
]

const tvMovies = [
	{
		url: "http://kelezj.com/apps/index.html?id=211229kl",
		name: "网盘影视搜索",
		img: "/img/tv/download/kelezj.png",
		able: true,
	},
	{
		url: "https://www.rrdynb.com/",
		name: "人人电影网",
		img: "/img/tv/download/rrdynb.png",
		able: true,
	},
	{
		url: "https://mp4fan.org/",
		name: "高清MP4",
		img: "/img/tv/download/mp4fan.png",
		able: true,
	},
	{
		url: "https://www.domp4.cc/",
		name: "MP4电影",
		img: "/img/tv/download/domp4.png",
		able: true,
	},
	{
		url: "https://www.btnull.org/",
		name: "BTNULL",
		img: "/img/tv/download/btnull.png",
		able: true,
	},
	{
		url: "https://www.btsj5.com/",
		name: "BT世界",
		img: "/img/tv/download/btsj5.png",
		able: true,
		tip: "需要翻墙",
	},
	{
		url: "https://www.dytt8.net/",
		name: "电影天堂",
		img: "/img/tv/download/dytt8.png",
		able: true,
	},
	{
		url: "https://bde4.cc/",
		name: "哔嘀影视",
		img: "/img/tv/download/bde4.png",
		able: true,
	},
	{
		url: "http://www.hao6v.cc/",
		name: "6V电影网",
		img: "/img/tv/download/hao6v.png",
		able: true,
	},
	{
		url: "http://www.yinfans.me/",
		name: "音范丝",
		img: "/img/tv/download/yinfans.png",
		able: true,
	},
]

const tvSubtitles = [
	{
		url: "http://zimuku.org/",
		name: "字幕库",
		img: "/img/tv/download/zimuku.png",
		able: true,
	},
	{
		url: "https://subhd.tv/",
		name: "SubHD",
		img: "/img/tv/download/subhd.png",
		able: true,
	},
]

const tvDownload = [
	{
		name: "电影下载",
		content: [...tvMovies],
	},
	{
		name: "字幕下载",
		content: [...tvSubtitles],
	},
]

export default tvDownload

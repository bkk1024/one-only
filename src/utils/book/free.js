const bookPublic = [
	{
		url: "https://www.bookstack.cn/",
		name: "书栈网",
		img: "/img/book/free/bookstack.png",
		able: true,
		tip: "程序员专用",
	},
	{
		url: "https://www.pdfdrive.com/",
		name: "PDFDrive",
		img: "/img/book/free/pdfdrive.png",
		able: true,
		tip: "加载有点慢",
	},
	{
		url: "https://fire100.top/",
		name: "书火网 FireBook",
		img: "/img/book/free/fire100.png",
		able: true,
	},
	{
		url: "https://zh.ma1lib.org/",
		name: "Z-library",
		img: "/img/book/free/ma1lib.png",
		able: true,
	},
	{
		url: "http://moreread.me/",
		name: "MoreRead",
		img: "/img/book/free/moreread.png",
		able: true,
	},
	{
		url: "http://www.gezhongshu.com/",
		name: "点书网",
		img: "/img/book/free/gezhongshu.png",
		able: true,
	},
	{
		url: "https://www.tianlangbooks.com/",
		name: "天浪书屋",
		img: "/img/book/free/tianlangbooks.png",
		able: false,
	},
	{
		url: "http://www.ixinqing.com/",
		name: "心晴网",
		img: "/img/book/free/ixinqing.png",
		able: true,
		tip: "心理学书籍",
	},
	{
		url: "https://bks.thefuture.top/",
		name: "TheFuture书籍搜索",
		img: "/img/book/free/thefuture.png",
		able: true,
	},
	{
		url: "https://www.jiumodiary.com/",
		name: "鸠魔搜书",
		img: "/img/book/free/jiumodiary.png",
		able: true,
	},
	{
		url: "https://ebook2.lorefree.com/",
		name: "LoreFree",
		img: "/img/book/free/lorefree.png",
		able: true,
	},
	{
		url: "http://www.banshujiang.cn/",
		name: "搬书匠",
		img: "/img/book/free/banshujiang.png",
		able: true,
	},
	{
		url: "https://www.jb51.net/books/",
		name: "脚本之家电子书",
		img: "/img/book/free/jb51.png",
		able: true,
	},
	{
		url: "https://new.shuge.org/",
		name: "书格",
		img: "/img/book/free/shuge.png",
		able: true,
		tip: "里面全书中国古书等",
	},
	{
		url: "https://z.comdot.xyz/",
		name: "ZLibrary官网地址",
		img: "/img/book/free/comdot.png",
		able: true,
	},
]

const bookNovel = [
	{
		url: "http://www.12z.cn/",
		name: "免费小说网",
		img: "/img/book/free/12z.png",
		able: true,
	},
	{
		url: "https://noveless.com/",
		name: "书荒部落",
		img: "/img/book/free/noveless.png",
		able: true,
	},
	{
		url: "https://www.zei8.vip/",
		name: "贼吧网",
		img: "/img/book/free/zei8.png",
		able: true,
	},
	{
		url: "http://zxcs.me/",
		name: "知轩藏书",
		img: "/img/book/free/zxcs.png",
		able: true,
	},
]

const bookTextbook = [
	{
		url: "https://ebook.hep.com.cn/ebooks/index.html#/",
		name: "高教书苑",
		img: "/img/book/free/ebooks.png",
		able: true,
		tip: "大学课本在线阅读",
	},
	{
		url: "http://www.dzkbw.com/",
		name: "电子课本网",
		img: "/img/book/free/dzkbw.png",
		able: true,
		tip: "中小学教材下载",
	},
]

const bookMagazine = [
	{
		url: "http://read.nlc.cn/user/index",
		name: "龙源期刊",
		img: "/img/book/free/nlc.png",
		able: true,
		tip: "国家数字图书馆入口",
	},
	{
		url: "http://www.fuyoutech.club/",
		name: "杂志天下",
		img: "/img/book/free/fuyoutech.png",
		able: true,
	},
	{
		url: "https://www.fx361.com/",
		name: "参考网",
		img: "/img/book/free/fx361.png",
		able: true,
		tip: "需要翻墙",
	},
	{
		url: "http://www.53bk.com/baokan/",
		name: "杂志报纸大全",
		img: "/img/book/free/baokan.png",
		able: true,
	},
	{
		url: "https://web.591adb.cn/sxsfdxtsg.html",
		name: "中邮爱读宝",
		img: "/img/book/free/591adb.png",
		able: true,
	},
]

const bookBuy = [
	{
		url: "http://www.queshu.com/",
		name: "缺书网",
		img: "/img/book/free/queshu.png",
		able: true,
	},
]

const bookFree = [
	{
		name: "出版图书下载",
		content: [...bookPublic],
	},
	{
		name: "网络小说下载",
		content: [...bookNovel],
	},
	{
		name: "教材课本下载",
		content: [...bookTextbook],
	},
	{
		name: "期刊杂志阅读",
		content: [...bookMagazine],
	},
	{
		name: "优惠买书网站",
		content: [...bookBuy],
	},
]

export default bookFree

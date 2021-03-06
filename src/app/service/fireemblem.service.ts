import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class FireEmblemService {
	constructor() {}

	getData() {
		return [
	  
		  {
			  id: 1,
			name: "艾黛尔贾特",
			img: "201908041915291.jpg",
			favtea: ["香柠檬茶"],
	  
			talk: [
			  "芙多拉的将来", "发牢骚", "关于道具的保养", "关于两人的将来", "关于桥上的风景", "关于图书馆的藏书", "关于纹章的有无", "关于想成为的兵种", "关于修道院的警备", "关于修道院的谜团", "讲述理想的教师形象", "精悍骑士团的传言", "觉得最优秀的伙伴", "看过歌剧吗", "看来你状况不错", "两人曾一同欢笑的话题", "猫的话题", "其它伙伴的评价", "任何事都可以和我商量", "上次战斗的反省", "收到会很开心的礼物", "说出自己的秘密", "未来的梦想", "为了克服弱点", "我信赖着你", "喜欢的地方", "喜欢的点心", "希望成为伙伴的人", "向喜欢的人寻求的事物", "相遇之时的话题", "想懒洋洋地度过", "想要变得更亲密", "新计策的提案", "修道院规则的话题", "学校生活的回忆", "学校制服的话题", "一直以来谢谢你了", "应该适合的兵种", "最近你的气质改变了", "在危机之际获救的话题", "最近读过的书的话题"
			],
			end: [
			  "你的房间,害羞,点头,没那种事",
			  "若我不是,加油打气,露出笑容",
			  "只要发现,点头,露出笑容",
			]
		  }, {id: 2,
			name: "修伯特",
			img: "201908041915292.jpg",
			favtea: ["待补"],
	  
			talk: ["芙多拉的将来", "关于道具的保养", "关于两人的连携", "关于图书馆的藏书", "关于想成为的兵种", "关于修道院的警备", "关于修道院的谜团", "精悍骑士团的传言", "觉得最优秀的伙伴", "那个人的年龄", "其它伙伴的评价", "强大武器的话题", "上次战斗的反省", "视为目标的人物", "说出自己的秘密", "为了让计谋成功", "我信赖着你", "希望成为伙伴的人", "想去旅行看看的国家", "新计策的提案", "修道院规则的话题", "在危机之际获救的话题", "最近读过的书的话题"],
			end: [
			  "与我共度时光,没那回事,责备",
			  "贝斯特拉家,表示佩服,说出自己的想法",
			  "阁下偶尔会,没那回事,喝茶",
			]
		  }, {id: 3,
			name: "林哈尔特",
			img: "201908041915293.jpg",
			favtea: ["东方风味茶", "草本茶"],
	  
			talk: ["发牢骚", "关于钓鱼池的怪鱼", "关于桥上的风景", "关于图书室的藏书", "关于纹章的有无", "关于修道院的谜团", "觉得最优秀的伙伴", "两人曾一同欢笑的话题", "猫的话题", "门卫工作时间的话题", "任何事都可以跟我商量", "收到会很开心的礼物", "说出自己的秘密", "晚餐的邀约", "忘了收获的话题", "未来的梦想", "为了克服弱点", "午睡的话题", "喜欢的地方", "喜欢的点心", "想去旅行看看的国家", "想要变得更亲密", "相遇之时的话题", "一直以来谢谢你了", "最近读过的书的话题"],
			end: [
			  "老师明明,没那种事,说出自己的想法",
			  "待在这种,点头,加油打气",
			  "造成贵族,说出自己的想法",
			]
		  }, {id: 4,
			name: "菲尔迪南特",
			img: "201908041915294.jpg",
			favtea: ["东方风味茶", "南方果茶"],
	  
			talk: ["初恋的话题", "打扮的话题", "发牢骚芙多拉的将来", "关于道具的保养", "关于两人的将来", "关于两人的连携", "关于纹章的有无", "关于想成为的兵种", "关于浴场的设备", "何谓贵族的生存方式", "讲述理想的教师形象", "精悍骑士团的传言", "觉得最优秀的伙伴", "看过歌剧吗", "看来你过得不错", "看来你状况不错", "可爱修道士的话题", "理想的交往方式", "两人曾一同欢笑的话题", "料理失败的话题", "那个人的年龄", "其它伙伴的评价", "强大武器的话题", "任何事都可以跟我商量", "上次战斗的反省", "视为目标的人物", "收到会很开心的礼物", "说出自己的秘密", "晚餐的邀约", "未来的梦想", "我信赖着你", "午餐的话题", "喜欢的地方现在心跳得很厉害", "向喜欢的人寻求的事物", "想要变得更亲密", "想一起训练的对象", "修道院规则的话题", "学校生活的回忆", "学校制服的话题", "邀请一同用餐的对象", "一直以来谢谢你了", "应该适合的兵种", "优秀骑士的话题", "在市场的孩子的话题", "在危机之际获救的话题", "在意的伙伴的话题", "最近你的气质改变了"],
			end: [
			  "该怎么说呢,害羞,没那种事",
			  "我从小就喜欢,表示佩服,露出笑容",
			  "我不讨厌,说出自己的想法,点头,表示佩服",
			]
		  }, {id: 5,
			name: "卡斯珀尔",
			img: "201908041915295.jpg",
			favtea: ["姜茶"],
	  
			talk: ["发牢骚", "关于道具的保养", "关于钓鱼池的怪鱼", "关于两人的将来", "关于两人的连携", "关于桥上的风景", "关于想成为的兵种", "关于浴场的设备", "精悍骑士团的传言", "看来你过得不错", "看来你状况不错", "料理失败的话题", "两人曾一同欢笑的话题", "猫的话题", "门卫工作时间的话题", "强大武器的话题", "任何事都可以跟我商量", "视为目标的人物", "上次战斗的反省", "晚餐的邀约", "忘了收获的话题", "未来的梦想", "为了克服弱点", "我信赖着你", "午餐的话题", "喜欢的地方", "想要变得更亲密", "想去旅行看看的国家", "想一起吃的料理", "想一起训练的对象", "相遇之时的话题", "新计策的提案", "学校生活的回忆", "一直以来谢谢你了", "应该适合的兵种", "优秀骑士的话题", "在市场的孩子的话题", "在危机之际获救的话题", "长高的方法", "终极食谱的话题"],
			end: [
			  "啊~好像大闹一番,责备",
			  "老师的房间,害羞,没那种事",
			  "喂，你肚子不饿吗,露出笑容",
			]
		  }, {
			id: 6,
			name: "贝尔娜提塔",
			img: "201908041915296.jpg",
			favtea: ["莓茶", "蜜渍水果茶"],
	  
			talk: ["打扮的话题", "发牢骚", "关于桥上的风景", "关于图书馆的藏书", "关于相遇之时的话题", "看来你过的不错", "看来你状况不错", "可爱修道士的话题", "理想的交往方式", "两人曾一同欢笑的话题", "料理失败的话题", "猫的话题", "任何事都可以找我商量", "上次战斗的反省", "食虫植物的话题", "收到会很开心的礼物", "说出自己的秘密", "未来的梦想", "为了克服弱点", "我信赖着你", "午餐的话题", "喜欢的地方", "喜欢的点心", "想去旅行看看的国家", "向喜欢的人寻求的事物", "想要变得更亲密", "想一起吃的料理", "相遇之时的话题", "学校生活的回忆", "学校制服的话题", "一直以来谢谢你了", "在市场的孩子的话题", "在危机之际获救的话题", "在意的伙伴的话题", "在中庭的两人的话题", "终极食谱的话题", "最近读过的书的话题", "最近你的气质改变了"],
			end: [
			  "两人一起窝在,说出自己的想法,点头,喝茶",
			  "这里有这么休闲舒适,点头",
			  "贝尔有时候也想,点头",
			]
		  }, {id: 7,
			name: "佩托拉",
			img: "201908041915297.jpg",
			favtea: ["四种香料茶", "姜茶"],
	  
			talk: ["打扮的话题", "芙多拉的将来", "关于道具的保养", "关于钓鱼池的怪鱼", "关于两人的将来", "关于两人的连携", "关于桥上的风景", "关于图书室的藏书", "关于想成为的兵种", "关于修道院的警备", "关于修道院的谜团", "关于浴场的设备", "精悍骑士团的传言", "觉得最优秀的伙伴", "看来你过得不错", "看来你状况不错", "理想的交往方式", "两人曾一同欢笑的话题", "猫的话题", "门卫工作时间的话题", "那个人的年龄", "其它伙伴的评价", "强大武器的话题", "任何事都可以跟我商量", "上次战斗的反省视为目标的人物", "收到会很开心的礼物", "晚餐的邀约", "未来的梦想", "为了克服弱点", "我信赖着你", "喜欢的地方", "现在心跳得很厉害", "想去旅行看看的国家", "向喜欢的人寻求的事物", "想要变得更亲密", "想一起吃的料理", "想一起训练的对象", "新计策的提案", "修道院规则的话题", "学校生活的回忆", "一直以来谢谢你了", "应该适合的兵种", "在海中游泳的话题", "在危机之际获救的话题", "在意的伙伴的话题", "最近读过的书的话题", "最近你的气质改变了"],
			end: [
			  "加尔古.玛库,沮丧,加油打气",
			  "这之后,加油打气,责备",
			  "老师有烦恼吗,说出自己的想法",
			]
		  }, {id: 8,
			name: "多洛缇雅",
			img: "201908041915298.jpg",
			favtea: ["苹果茶", "莓茶"],
	  
			talk: ["初恋的话题", "打扮的话题", "关于钓鱼池的怪鱼", "关于两人的将来", "关于两人的连携", "关于修道院的警备", "关于浴场的设备", "看过歌剧吗", "可爱修道士的话题", "看来你过的不错", "看来你状况不错", "理想的交往方式", "两人曾一同欢笑的话题", "门卫工作时间的话题", "其它伙伴的评价", "视为目标的人物", "收到会很开心的礼物说出自己的秘密", "晚餐的邀约", "未来的梦想", "我信赖着你", "喜欢的地方", "现在心跳得很厉害", "想要变得更亲密", "向喜欢的人寻求的事物", "想一起训练的对象", "相遇之时的话题", "新计策的提案", "修道院规则的话题", "学校生活的回忆", "学校制服的话题", "邀请一同用餐的对象一切尽在不言中", "一直以来谢谢你了", "优秀骑士的话题", "在危机之际获救的话题", "在意的伙伴的话题", "在中庭的两人的话题", "最近读过的书的话题", "最近你的气质变了"],
			end: [
			  "意外的有,表示佩服",
			  "我不喜欢圣歌,说出自己的想法,沮丧",
			  "我的理想对象是,加油打气,害羞",
			]
	  
		  }, {id: 9,
			name: "亚修",
			img: "201908041915299.jpg",
			favtea: ["薄荷茶", "草本茶"],
			talk: ["发牢骚", "关于道具的保养", "关于钓鱼池的怪鱼", "关于理想的骑士", "关于两人的连携", "关于图书馆的藏书", "关于纹章的有无", "关于想成为的兵种", "关于修道院的警备", "讲述理想的教师形象", "精悍骑士团的传言", "看来你过的不错", "两人曾一同欢笑的话题", "猫的话题", "门卫工作时间的话题", "任何事都可以和我商量", "上次战斗的反省", "视为目标的人物", "收到会很开心的礼物", "晚餐的邀约", "忘了收获的话题", "未来的梦想", "我信赖着你", "喜欢的点心", "想成为的兵种", "想去旅行看看的国家", "想要变得更亲密", "想一起吃的料理", "学校生活的回忆", "一直以来谢谢你了", "优秀骑士的话题", "在市场的孩子的话题", "在危机之际获救的话题", "终极食谱的话题", "最近读过的书的话题"],
			end: [
			  "因为我从小就照顾,表示佩服",
			  "露出笑容不管何时,没那种事,加油打气",
			  "老师有看过,没那种事,喝茶",
			]
		  }, {
			id: 10,
			name: "费利克斯",
			img: "2019080419152910.jpg",
			favtea: ["东方风味茶", "四种香料茶"],
	  
			talk: ["关于道具的保养", "关于两人的连携", "关于想成为的兵种", "关于修道院的警备", "精悍骑士团的传言", "觉得最优秀的伙伴", "看过歌剧吗", "看来你状况不错", "猫的话题", "其它伙伴的评价", "强大武器的话题", "上次战斗的反省", "视为目标的人物", "未来的梦想", "为了克服弱点", "我信赖着你", "午餐的话题", "喜欢的地方", "希望成为伙伴的人", "想了新的剑技", "想一起吃的料理", "想一起训练的对象", "相遇之时的话题", "新计策的提案", "应该适合的兵种", "在市场的孩子的话题"],
			end: [
			  "我对出生自武将,表示佩服",
			  "我对你的成长,害羞,说出自己的想法",
			  "有无纹章,表示佩服,说出自己的想法",
			]
		  }, {

			  id: 11,
			name: "英谷莉特",
			img: "2019080419152911.jpg",
			favtea: ["薄荷茶", "洋甘菊花茶"],
	  
			talk: ["吃饭是生存的动力", "初恋的话题", "芙多拉的将来", "关于钓鱼池的怪鱼", "关于道具的保养", "关于两人的连携", "关于桥上的风景", "关于图书室的藏书", "关于纹章的有无", "关于想成为的兵种", "关于修道院的警备", "讲述理想的教师形象", "精悍骑士团的传言", "看来你状况不错", "看来你过得不错", "两人曾一同欢笑的话题", "料理失败的话题", "猫的话题", "门卫工作时间的话题", "其它伙伴的评价", "强大武器的话题", "任何事都可以跟我商量", "上次战斗的反省", "视为目标的人物", "收到会很开心的礼物", "晚餐的邀约", "未来的梦想", "为了克服弱点", "我信赖着你", "午餐的话题", "喜欢的地方", "喜欢的点心", "希望成为伙伴的人", "想要变得更亲密", "向喜欢的人寻求的事物", "想一起吃的料理", "想一起训练的对象", "相遇之时的话题", "新计策的提案", "修道院规则的话题", "学校生活的回忆", "一直以来谢谢你了", "应该适合的兵种", "优秀骑士的话题", "终极食谱的话题", "最近读过的书的话题"],
			end: [
			  "修道院一代很温暖,加油打气,说出自己的想法",
			  "肚子开始饿了,露出笑容",
			  "我小的时候,露出笑容,责备",
			]
		  }, {
			id: 12,
			name: "梅尔赛德司",
			img: "2019080419152912.jpg",
			favtea: ["莓茶", "南方果茶"],
	  
			talk: ["初恋的话题", "打扮的话题", "发牢骚", "关于图书室的藏书", "关于浴场的设备", "看过歌剧吗", "看来你状况不错", "可爱修道士的话题", "理想的交往方式", "两人曾一同欢笑的话题", "料理失败的话题", "猫的话题", "任何事都可以跟我商量", "上次战斗的反省", "收到会很开心的礼物", "说出自己的秘密", "晚餐的邀约", "忘了收获的话题", "为了克服弱点", "我信赖着你", "午餐的话题", "喜欢的地方", "喜欢的点心", "现在心跳得很厉害", "想去旅行看看的国家", "想要变得更亲密", "想一起吃的料理", "修道院规则的话题", "学校生活的回忆", "学校制服的话题", "邀请一同用餐的对象", "一直以来谢谢你了", "优秀骑士的话题", "在市场的孩子的话题", "在意的伙伴的话题", "在中庭的两人的话题", "珍藏的鬼故事", "终极食谱的话题", "最近读过的书的话题", "最近你的气质改变了"],
			end: [
			  "我刚才还在烤点心,点头,喝茶,沮丧",
			  "老实说,点头",
			  "我曾住过的,表示佩服",
			  "老师的房间,害羞,没那种事",
			  "偶尔也得写信,说出自己的想法,点头",
			]
		  }, {
			id: 13,
			name: "希尔凡",
			img: "2019080419152913.jpg",
			favtea: ["香柠檬茶"],
	  
			talk: ["初恋的话题", "打扮的话题", "发牢骚", "关于钓鱼池的怪鱼", "关于两人的将来", "关于两人的连携", "关于桥上的风景", "关于图书室的藏书", "关于修道院的谜团", "关于浴场的设备", "觉得最优秀的伙伴", "看过歌剧吗", "看来你过得不错", "看来你状况不错", "可爱修道士的话题", "理想的交往方式", "两人曾一同欢笑的话题", "料理失败的话题", "那个人的年龄", "其它伙伴的评价", "收到会很开心的礼物", "说出自己的秘密", "晚餐的邀约", "未来的梦想", "为了克服弱点", "我信赖着你", "午餐的话题", "喜欢的地方", "喜欢的点心", "希望成为伙伴的人", "现在的交往对象是谁", "现在心跳得很厉害", "想去旅行看看的国家", "向喜欢的人寻求的事物", "想要变得更亲密", "想一起吃的料理", "想一起训练的对象", "相遇之时的话题", "学校生活的回忆", "学校制服的话题", "邀请一同用餐的对象", "一直以来谢谢你了", "应该适合的兵种", "在危机之际获救的话题", "在意的伙伴的话题", "在中庭的两人的话题", "终极食谱的话题", "最近读过的书的话题", "最近你的气质改变了"],
			end: [
			  "歌剧,画",
			  "文学,说出自己的想法,表示佩服",
			  "为了随时能约女孩子,加油打气,表示佩服",
			  "该怎么说呢,说出自己的想法,喝茶",
			]
		  }, {id: 14,
			name: "雅妮特",
			img: "2019080419152914.jpg",
			favtea: ["苹果茶", "杏仁茶"],
	  
			talk: ["不会让锅子爆炸的方法", "打扮的话题", "发牢骚", "关于道具的保养", "关于两人的将来", "关于两人的连携", "关于图书室的藏书", "关于想成为的兵种", "关于浴场的设备", "讲述理想的教师形象", "看过歌剧吗", "看来你过得不错", "看来你状况不错", "可爱修道士的话题", "理想的交往方式", "两人曾一同欢笑的话题", "料理失败的话题", "那个人的年龄", "其它伙伴的评价", "任何事都可以跟我商量", "上次战斗的反省", "视为目标的人物", "收到会很开心的礼物", "晚餐的邀约", "忘了收获的话题", "未来的梦想", "为了克服弱点", "我信赖着你", "午餐的话题", "喜欢的地方", "喜欢的点心", "想去旅行看看的国家", "向喜欢的人寻求的事物", "想要变得更亲密", "想一起吃的料理", "相遇之时的话题", "新计策的提案", "学校生活的回忆", "学校制服的话题", "邀请一同用餐的对象", "一直以来谢谢你了", "优秀骑士的话题", "在市场的孩子的话题", "在危机之际获救的话题", "在意的伙伴的话题", "在中庭的两人的话题", "终极食谱的话题", "最近读过的书的话题", "最近你的气质改变了"],
			end: [
			  "啊，机会难得,点头,露出笑容",
			  "父亲曾经对我说过,加油打气,表示佩服,说出自己的想法",
			  "不好好打扫不行哟,点头",
	  
			]
		  }, {id: 15,
			name: "拉斐尔",
			img: "2019080419152915.jpg",
			favtea: ["姜茶", "杏仁茶"],
	  
			talk: ["锻炼肌肉的方法", "发牢骚", "关于钓鱼池的怪鱼", "关于钓鱼池的怪鱼", "关于两人的连携", "关于想成为的兵种", "精悍骑士团的传言", "看过歌剧吗", "看来你过得不错", "看来你状况不错", "两人曾一同欢笑的话题", "料理失败的话题", "猫的话题", "任何事都可以跟我商量", "上次战斗的反省", "视为目标的人物", "收到会很开心的礼物", "晚餐的邀约", "忘了收获的话题", "未来的梦想", "为了克服弱点", "我信赖着你", "午餐的话题", "喜欢的点心", "想要变得更亲密", "想一起吃的料理", "想一起训练的对象", "学校生活的回忆", "邀请一同用餐的对象", "一直以来谢谢你了", "应该适合的兵种", "优秀骑士的话题", "在市场的孩子的话题", "在危机之际获救的话题", "终极食谱的话题"],
			end: [
			  "俺得成为,加油打气,表示佩服",
			  "俺的肌肉,说出自己的想法,露出笑容,老师",
			  "有没有什么吃的,露出笑容,责备",
			]
		  }, {id: 16,
			name: "莉斯缇亚",
			img: "2019080419152916.jpg",
			favtea: ["苹果茶", "南方果茶", "蜜渍水果茶"],
	  
			talk: ["打扮的话题", "点心究竟多有魅力", "芙多拉的将来", "关于钓鱼池的怪鱼", "关于两人的连携", "关于两人的将来", "关于图书室的藏书", "关于纹章的有无", "关于想成为的兵种", "关于修道院的谜团", "关于浴场的设备", "讲述理想的教师形象", "觉得最优秀的伙伴", "两人曾一同欢笑的话题", "料理失败的话题", "猫的话题", "其它伙伴的评价", "上次战斗的反省", "视为目标的人物", "收到会很开心的礼物", "说出自己的秘密", "晚餐的邀约", "未来的梦想", "为了克服弱点", "我信赖着你", "午餐的话题", "喜欢的点心", "想去旅行看看的国家", "想要变得更亲密", "想一起吃的料理", "相遇之时的话题", "新计策的提案", "修道院规则的话题", "学校生活的回忆", "学校制服的话题", "一直以来谢谢你了", "应该适合的兵种", "在危机之际获救的话题", "在意的伙伴的话题", "终极食谱的话题", "最近读过的书的话题", "最近你的气质改变了"],
			end: [
			  "吃甜点是我,点头,露出笑容",
			  "老师觉得,说出自己的想法,露出笑容",
			  "我也想活得,说出自己的想法,加油打气",
			]
		  }, {id: 17,
			name: "洛廉兹",
			img: "2019080419152917.jpg",
			favtea: ["香柠檬茶", "玫瑰花茶"],
	  
			talk: ["初恋的话题", "打扮的话题", "发牢骚", "芙多拉的将来", "关于两人的将来", "关于两人的连携", "关于纹章的有无", "关于想成为的兵种", "关于浴场的设备", "讲述理想的教师形象", "觉得最优秀的伙伴", "看过歌剧吗", "看来你过得不错", "可爱修道士的话题", "理想的交往方式", "两人曾一同欢笑的话题", "玫瑰的颜色与香气", "其它伙伴的评价", "任何事都可以跟我商量", "视为目标的人物", "收到会很开心的礼物", "晚餐的邀约", "未来的梦想", "为了克服弱点", "我信赖着你", "喜欢的地方", "希望成为伙伴的人", "现在心跳得很厉害", "向喜欢的人寻求的事物", "想要变得更亲密", "想一起吃的料理", "相遇之时的话题", "新计策的提案", "修道院规则的话题", "学校生活的回忆", "学校制服的话题", "邀请一同用餐的对象", "一直以来谢谢你了", "优秀骑士的话题", "在意的伙伴的话题", "最近你的气质改变了"],
			end: [
			  "玫瑰兼具了,点头,喝茶",
			  "身为贵族,加油打气,没那种事",
			  "有女性因为我,责备,喝茶",
			]
		  }, {id: 18,
			name: "玛莉安奴",
			img: "2019080419153018.jpg",
			favtea: ["熏衣草茶"],
	  
			talk: ["芙多拉的将来", "关于钓鱼池的怪鱼", "关于两人的将来", "关于栖息在森林中的鸟", "关于桥上的风景", "关于图书室的藏书", "关于纹章的有无", "关于修道院的谜团", "关于浴场的设备", "讲述理想的教师形象", "猫的话题", "任何事都可以跟我商量", "上次战斗的反省", "说出自己的秘密", "晚餐的邀约", "忘了收获的话题", "未来的梦想", "为了克服弱点", "喜欢的地方", "想要变得更亲密", "相遇之时的话题", "新计策的提案", "学校生活的回忆", "一直以来谢谢你了", "在市场的孩子的话题", "在危机之际获救的话题", "在意的伙伴的话题", "最近读过的书的话题", "最近你的气质改变了"],
			end: [
			  "就算和我,没那种事,责备",
			  "竟然为了我,没那种事,抱歉",
			  "我不太会,加油打气,说出自己的想法",
			]
		  }, {id: 19,
			name: "雷欧妮",
			img: "2019080419153019.jpg",
			favtea: ["四种香料茶", "草本茶"],
	  
			talk: ["发牢骚", "芙多拉的将来", "关于道具的保养", "关于两人的将来", "关于两人的连携", "关于桥上的风景", "关于想成为的兵种", "关于修道院的谜", "团关于修道院的警备", "讲述理想的教师形象", "杰拉尔特的话题", "精悍骑士团的传言", "觉得最优秀的伙伴", "看来你过得不错", "看来你状况不错", "两人曾一同欢笑的话题", "其它伙伴的评价", "强大武器的话题", "任何事都可以跟我商量", "上次战斗的反省", "视为目标的人物", "收到会很开心的礼物", "说出自己的秘密", "晚餐的邀约", "未来的梦想", "为了克服弱点", "我信赖着你", "午餐的话题", "喜欢的地方", "想去旅行看看的国家", "希望成为伙伴的人", "想要变得更亲密", "想一起吃的料理", "想一起训练的对象", "相遇之时的话题", "新计策的提案", "学校生活的回忆", "一直以来谢谢你了", "应该适合的兵种", "在市场的孩子的话题", "在危机之际获救的话题", "最近读过的书的话题", "最近你的气质改变了"],
			end: [
			  "老师认真,点头,表示佩服",
			  "你若是有,点头,表示佩服",
			  "不论你怎么想,表示佩服,责备",
			]
		  }, {id: 20,
			name: "伊古纳兹",
			img: "2019080419153020.jpg",
			favtea: ["熏衣草茶"],
	  
			talk: ["初恋的话题", "发牢骚", "芙多拉的将来", "关于道具的保养", "关于钓鱼池的怪鱼", "关于两人的连携", "关于桥上的风景", "关于图书室的藏书", "关于修道院的谜团", "觉得最优秀的伙伴", "看过歌剧吗", "看来你过得不错", "看来你状况不错", "可爱修道士的话题", "两人曾一同欢笑的话题", "猫的话题", "那个人的年龄", "任何事都可以跟我商量", "视为目标的人物", "收到会很开心的礼物", "说出自己的秘密", "其它伙伴的评价", "忘了收获的话题", "未来的梦想", "为了克服弱点", "我信赖着你", "喜欢的地方", "想去旅行看看的国家", "想要变得更亲密", "相遇之时的话题", "修道院规则的话题", "学校生活的回忆", "一直以来谢谢你了", "应该适合的兵种", "在市场的孩子的话题", "在危机之际获救的话题", "在意的伙伴的话题", "在中庭的两人的话题", "制作颜料的方法", "最近读过的书的话题", "最近你的气质改变了"],
			end: [
			  "老师虽然年轻,害羞,喝茶,没那种事",
			  "我认为兴趣,说出自己的想法,点头",
			  "虽然想帮上,点头,加油打气",
	  
			]
		  }, {id: 21,
			name: "玛努埃拉",
			img: "2019080419153021.jpg",
			favtea: ["薄荷茶", "熏衣草茶"],
	  
			talk: ["初恋的话题", "打扮的话题", "发牢骚", "关于两人的将来", "关于两人的连携", "关于修道院的警备", "关于浴场的设备", "讲述理想的教师形象", "精悍骑士团的传言", "看过歌剧吗", "看来你过得不错", "看来你状况不错", "可爱修道士的话题", "理想的交往方式", "两人曾一同欢笑的话题", "料理失败的话题", "门卫工作时间的话题", "那个人的年龄", "任何事都可以跟我商量", "人生最棒的舞台是", "收到会很开心的礼物", "说出自己的秘密", "晚餐的邀约", "忘了收获的话题", "未来的梦想", "为了克服弱点", "我信赖着你", "午餐的话题", "喜欢的地方", "喜欢的点心", "希望成为伙伴的人", "现在心跳的很厉害", "向喜欢的人寻求的事物", "想要变得更亲密", "想一起吃的料理", "相遇之时的话题", "学校生活的回忆", "邀请一同用餐的对象", "一直以来谢谢你了", "应该适合的兵种", "优秀骑士的话题", "在市场的孩子的话题", "在危机之际获救的话题", "在意的伙伴的话题", "在中庭的两人的话题", "终极食谱的话题"],
			end: [
			  "然后呢，你到底是什么人,说出自己的想法,沮丧",
			  "这里应该没有酒吧,责备",
			  "我真的是这么糟糕,没那种事,责备",
			]
		  }, {id: 22,
			name: "芙莲",
			img: "2019080419153022.jpg",
			favtea: ["苹果茶", "三日月茶", "杏仁茶"],
	  
			talk: ["初恋的话题", "大海和鱼的话题", "发牢骚", "芙多拉的将来", "关于钓鱼池的怪鱼", "关于两人的将来", "关于两人的连携", "关于桥上的风景", "关于图书室的藏书", "讲述理想的教师形象", "看过歌剧吗", "看来你过得不错", "看来你状况不错", "可爱修道士的话题", "理想的交往方式", "两人曾一同欢笑的话题", "料理失败的话题", "猫的话题", "那个人的年龄", "任何事都可以跟我商量", "收到会很开心的礼物", "说出自己的秘密", "晚餐的邀约", "忘了收获的话题", "未来的梦想", "我信赖着你", "喜欢的点心", "现在心跳得很厉害", "向喜欢的人寻求的事物", "想要变得更亲密", "想一起吃的料理", "想一起训练的对象", "相遇之时的话题", "学校生活的回忆", "邀请一同用餐的对象", "一直以来谢谢你了", "优秀骑士的话题", "在市场的孩子的话题", "在危机之际获救的话题", "在意的伙伴的话题", "在中庭的两人的话题", "终极食谱的话题", "最近读过的书的话题"],
			end: [
			  "老师真是有趣,点头,没那种事",
			  "我偶尔会想去,点头,说出自己的想法",
			  "我很喜欢热闹,点头",
			]
		  }, {id: 23,
			name: "西提司",
			img: "2019080419153023.jpg",
			favtea: ["四种香料茶", "姜茶", "草本茶", ""],
	  
			talk: ["发牢骚", "芙多拉的将来", "芙莲的话题", "关于道具的保养", "关于两人的将来", "关于两人的连携", "关于图书室的藏书", "关于想成为的兵种", "关于浴场的设备", "关于修道院的警备", "讲述理想的教师形象", "精悍骑士团的传言", "觉得最优秀的伙伴", "看过歌剧吗", "看来你状况不错", "门卫工作时间的话题", "那个人的年龄", "其它伙伴的评价", "强大武器的话题", "任何事都可以跟我商量", "上次战斗的反省", "说出自己的秘密", "晚餐的邀约", "我信赖着你", "喜欢的地方", "希望成为伙伴的人", "想要变得更亲密", "相遇之时的话题", "新计策的提案", "修道院规则的话题", "一直以来谢谢你了", "应该适合的兵种", "在市场的孩子的话题", "在危机之际获救的话题", "在意的伙伴的话题", "最近读过的书的话题"],
			end: [
			  "大司教对你,说出自己的想法,喝茶",
			  "只要和大修道院,点头",
			  "虽然我也会,点头",
			]
		  }, {id: 24,
			name: "汉尼曼",
			img: "2019080419153024.jpg",
			favtea: ["香柠檬茶", "苹果茶", "蜜渍水果茶"],
	  
			talk: ["打扮的话题", "发牢骚", "芙多拉的将来", "关于道具的保养", "关于两人的将来", "关于图书室的藏书", "关于纹章的有无", "关于浴场的设备", "关于修道院的警备", "关于修道院的谜团", "讲述理想的教师形象", "觉得最优秀的伙伴", "看来你过得不错", "看来你状况不错", "两人曾一同欢笑的话题", "料理失败的话题", "配合研究吧", "其它伙伴的评价", "任何事都可以跟我商量", "上次战斗的反省", "收到会很开心的礼物", "说出自己的秘密", "晚餐的邀约", "未来的梦想", "为了克服弱点", "我信赖着你", "午餐的话题", "喜欢的地方", "喜欢的点心", "现在心跳得很厉害", "想去旅行看看的国家", "想要变得更亲密", "想一起吃的料理", "相遇之时的话题", "新计策的提案", "修道院规则的话题", "学校生活的回忆", "一直以来谢谢你了", "在意的伙伴的话题", "最近读过的书的话题"],
			end: [
			  "唔，还是来吾的,喝茶",
			  "结果吾依然,说出自己的想法,害羞",
			  "话说起来,没那种事,喝茶",
			]
		  }, {id: 25,
			name: "锥里尔",
			img: "2019080419153025.jpg",
			favtea: ["东方风味茶"],
	  
			talk: ["发牢骚", "关于道具的保养", "关于钓鱼池的怪鱼", "关于桥上的风景", "关于想成为的兵种", "关于修道院的警备", "看来你过得不错", "看来你状况不错", "可爱修道士的话题", "蕾雅大人的话题", "猫的话题", "门卫工作时间的话题", "那个人的年龄", "收到会很开心的礼物", "说出自己的秘密", "晚餐的邀约", "忘了收获的话题", "为了克服弱点", "午餐的话题", "我信赖着你", "喜欢的地方", "喜欢的点心", "想要变得更亲密", "想一起吃的料理", "一直以来谢谢你了", "应该适合的兵种", "在市场的孩子的话题", "在危机之际获救的话题", "在意的伙伴的话题", "终极食谱的话题", "最近你的气质改变了"],
			end: [
			  "我不讨厌工作,表示佩服,加油打气",
			  "蕾雅大人,点头,喝茶",
			  "如果被逐出,加油打气,没那种事,表示佩服",
			]
		  }, {id: 26,
			name: "阿罗伊斯",
			img: "2019080419153026.jpg",
			favtea: ["三日月茶", "蜜渍水果茶"],
	  
			talk: ["初恋的话题", "发牢骚", "芙多拉的将来", "关于道具的保养", "关于钓鱼池的怪鱼", "关于两人的连携", "关于桥上的风景", "关于想成为的兵种", "关于修道院的警备", "讲述理想的教师形象", "精悍骑士团的传言", "看过歌剧吗", "看来你过得不错", "看来你状况不错", "两人曾一同欢笑的话题", "料理失败的话题", "猫的话题", "门卫工作时间的话题", "派得上用场的笑话", "强大武器的话题", "任何事都可以跟我商量", "上次战斗的反省", "视为目标的人物", "收到会很开心的礼物", "说出自己的秘密", "晚餐的邀约", "忘了收获的话题", "未来的梦想", "为了克服弱点", "午餐的话题", "我信赖着你", "喜欢的地方", "喜欢的点心", "想去旅行看看的国家", "想要变得更亲密", "想一起吃的料理", "相遇之时的话题", "新计策的提案", "修道院规则的话题", "学校生活的回忆", "一直以来谢谢你了", "在市场的孩子的话题", "在危机之际获救的话题", "终极食谱的话题"],
			end: [
			  "幽灵,船,露出笑容",
			  "虽然阁下,点头,没那种事,表示佩服",
			  "保持房间干净,表示佩服",
			]
		  }, {id: 27,
			name: "萨米亚",
			img: "2019080419153027.jpg",
			favtea: ["三日月茶", "洋甘菊花茶"],
	  
			talk: ["关于道具的保养", "关于钓鱼池的怪鱼", "关于两人的将来", "关于两人的连携", "关于桥上的风景", "关于想成为的兵种", "关于修道院的警备", "精悍骑士团的传言", "觉得最优秀的伙伴", "看来你状况不错", "理想的交往方式", "两人曾一同欢笑的话题", "猫的话题", "其它伙伴的评价", "强大武器的话题", "上次战斗的反省", "收到会很开心的礼物", "说出自己的秘密", "晚餐的邀约", "未来的梦想", "为了克服弱点", "我信赖着你", "午餐的话题", "希望成为伙伴的人", "想去旅行看看的国家", "想要变得更亲密", "想一起吃的料理", "想一起训练的对象", "新计策的提案", "一直以来谢谢你了", "应该适合的兵种", "在市场的孩子的话题", "在危机之际获救的话题", "在战场上生存的方法", "在中庭的两人的话题"],
			end: [
			  "呵，你的表情,害羞,没那种事,喝茶",
			  "我话很少,没那种事",
			  "天帝之剑,点头,说出自己的想法",
			]
		  }, {id: 28,
			name: "卡多莉奴",
			img: "2019080419153028.jpg",
			favtea: ["玫瑰花茶"],
	  
			talk: ["关于道具的保养", "关于钓鱼池的怪鱼", "关于两人的将来", "关于两人的连携", "关于纹章的有无", "关于想成为的兵种", "关于修道院的警备", "精悍骑士团的传言", "觉得最优秀的伙伴", "看来你过得不错", "看来你状况不错", "理想的交往方式", "两人曾一同欢笑的话题", "料理失败的话题", "门卫工作时间的话题", "其它伙伴的评价", "强大武器的话题", "任何事都可以跟我商量", "上次战斗的反省", "士官学校的回忆", "视为目标的人物", "说出自己的秘密", "晚餐的邀约", "忘了收获的话题", "午餐的话题", "我信赖着你", "喜欢的地方", "想要变得更亲密", "想一起吃的料理", "想一起训练的对象", "相遇之时的话题", "新计策的提案", "学校生活的回忆", "一直以来谢谢你了", "应该适合的兵种", "在危机之际获救的话题", "在意的伙伴的话题"],
			end: [
			  "听说你的别名,喝茶,害羞,哈哈",
			  "我是不是,责备,喝茶",
			  "堂堂正正,沮丧,点头",
			]
		  }
		];
	  
	  }
	  
}

'''
1. 为什么使用简单工厂模式？
如果一个系统可以提供某些相似的产品（相似的原因是来源于同一个父类）
而我们在使用的时候，希望不需要产品的名字，只提供差异的那个参数就可以得到产品
这个时候用简单工厂模式

例子：一个衣服工厂，可以生产某一个款式（必须只能是同一款，多款的实现不是这个模式）的衣服，
我们在去工厂买衣服的时候，不想/不知道衣服的详细参数（衣料，工艺，风格...）也能获得衣服，只需要说：【给我一件白色的】，就可以拿到衣服
这样就会非常简单的获得衣服，根本不需要去new whiteCloth(args),直接create("white")就可以啦
还有就是，这样顾客只负责买，工厂负责制造，解耦的非常彻底，排bug方便，优雅
'''

# 产品逻辑细节
# interface,规定产品有哪些底层的属性和方法


class vest1109:
    def __init__(self, material, style, craft, level, color):
        self.material = material
        self.style = style
        self.craft = craft
        self.level = level
        self.color = color

    def explode(self):
        pass

# 产品创建细节
# 具体实现产品的属性和方法


class createVest1109White(vest1109):
    def explode(self):
        print(
            f"This is A {self.color} cotton explosive {self.material}  vest.")

    def callothers(self):
        print("calling")


class createVest1109Black(vest1109):
    def explode(self):
        print(
            f"This is A {self.color} cotton explosive {self.material}  vest. Very cool")


class createVest1109Red(vest1109):
    def explode(self):
        print(
            f"This is A {self.color} cotton explosive {self.material}  vest. Very very red")


# 调控不同的创建，对外接口
# tool class

class Factory:
    def __init__(self):
        pass

    @staticmethod
    def createVest(color):
        if(color == "white"):
            return createVest1109White("cotton", "classic", "handword", "2", "white")
        elif(color == "black"):
            return createVest1109Black("cotton", "classic", "handword", "2", "black")
        elif(color == "red"):
            return createVest1109Red("cotton", "classic", "handword", "0", "red")
        else:
            return None


# vest = Factory.createVest("black")
# print(vest.color)
# vest.explode()

# 开闭原则：面向扩展开放，面向修改关闭（只准扩展，不准修改）


vest = Factory.createVest("red")
print(vest.color)
vest.explode()

'''缺点
1. 工厂有问题，整个system直接爆炸
2. 产品过多会导致工厂逻辑复杂/庞大
3. 违反开闭
# https://juejin.cn/post/7141320406954147877
'''

'''适用范围
1. 需要快捷获得类似对象
2. 产品的数目少
'''

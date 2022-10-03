'''
为什么使用工厂方法模式？
1. 不存在if else，新增产品不修改现有代码，不需要修改现有的工厂类，只需要增加新工厂就行，符合开闭原则（开放扩展，关闭修改）
2. 可以应对大量产品制造需求
'''

# 产品接口


class Vest1109:
    def __init__(self, material, style, craft, level, color):
        self.material = material
        self.style = style
        self.craft = craft
        self.level = level
        self.color = color

    def explode(self):
        pass

# 具体产品


class CreateVest1109White(Vest1109):
    def explode(self):
        print(f"A {self.color} cotton explosive {self.material}  vest.")


class CreateVest1109Black(Vest1109):
    def explode(self):
        print(f"A {self.color} cotton explosive {self.material}  vest. Very cool")


class CreateVest1109Red(Vest1109):
    def explode(self):
        print(
            f"A {self.color} cotton explosive {self.material}  vest. Very redddddddddddddddd")


# 工厂接口, 抽象工厂，用来规定所有工厂的行为
class Factory:
    def __init__(self):
        pass

    @staticmethod
    def factoryMethod():
        pass

# 具体工厂


class FactoryVest1109White(Factory):
    @staticmethod
    def factoryMethod():
        return CreateVest1109White("cotton", "classic", "handword", "2", "white")


class FactoryVest1109Black(Factory):
    @staticmethod
    def factoryMethod():
        return CreateVest1109Black("cotton", "classic", "handword", "2", "black")


class FactoryVest1109Red(Factory):
    @staticmethod
    def factoryMethod():
        return CreateVest1109Red("cotton", "classic", "handword", "0", "red")

# whiteVest = FactoryVest1109White.factoryMethod()
# whiteVest.explode()

# blackVest = FactoryVest1109Black.factoryMethod()
# blackVest.explode()


redVest = FactoryVest1109Red.factoryMethod()
redVest.explode()

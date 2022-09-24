package 抽象工厂模式;

public class Factory implements IFactory{
    public ICar createAudiCar(){
        Engine engine = new Engine();
        Steering steering = new Steering();
        Wheel wheel = new Wheel();

        ICar car = new AudiCar(engine,steering,wheel);
        return car;
    }

    public ICar createMyviCar(){
        Engine engine = new Engine();
        Steering steering = new Steering();
        Wheel wheel = new Wheel();
        Seat seat = new Seat();

        ICar car = new MyviCar(engine,steering,wheel,seat);
        return car;
    }
}

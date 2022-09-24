package 抽象工厂模式;

public class MyviCar implements ICar{
    private Engine engine;
    private Steering steering;
    private Wheel wheel;
    private Seat seat;

    public MyviCar(Engine engine, Steering steering, Wheel wheel, Seat seat){
        this.engine = engine;
        this.steering = steering;
        this.wheel = wheel;
        this.seat = seat;
    }

    public void show(){
        engine.getStyle();
        steering.getStyle();
        wheel.getStyle();
        seat.getStyle();
        System.out.println("A Myvi car was done!");
    }
}

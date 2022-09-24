package 抽象工厂模式;

import java.util.Scanner;

public class LearnScanner{

    private static void useScanner(){

        double fahrenheit, temp;
        try {
            Scanner scan = new Scanner(System.in);
            System.out.println("Enter something: ");

            if(scan.hasNext()){
                fahrenheit = Double.parseDouble(scan.next());
                temp = fahrenheit - 32 * 5 /9;

                System.out.println(temp);
            }

            scan.close();
        } catch (Exception e) {
            // TODO: handle exception
        }
    }

    public static void main(String[] args) {
        useScanner();
    }

}

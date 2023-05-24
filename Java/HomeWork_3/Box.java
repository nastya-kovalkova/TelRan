package HomeWork_3;

import java.util.Scanner;

public class Box {

    // То, что закомментировано первый способ
    // Второй способ с помощью сканнера

//    private double height;
//    private double width;
//    private double length;

    public Box(double height, double width, double length) {
//        this.height = height;
//        this.width = width;
//        this.length = length;
        System.out.println("----------------------");
        System.out.println("Box volume = " + (height * width * length));
    }
    public static void main(String[] args) {
//        Box box = new Box(12.5, 15, 20);

        Scanner sc = new Scanner(System.in);

        System.out.println("Enter pls box dimensions:");
        System.out.print("Enter the height -> ");
        float height = sc.nextFloat();

        System.out.print("Enter the width  -> ");
        float width = sc.nextFloat();

        System.out.print("Enter the length -> ");
        float length = sc.nextFloat();

        sc.close();

        new Box(height, width, length);
    }

}

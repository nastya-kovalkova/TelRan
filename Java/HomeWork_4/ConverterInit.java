package HomeWork_4;

import java.util.Scanner;

public class ConverterInit {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter degrees Celsius -> ");
        double x = sc.nextDouble();

        sc.close();

        ConverterVoid convert1 = new ConverterVoid(x);

//        ConverterReturn convert2 = new ConverterReturn(x);
    }
}

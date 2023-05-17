package HomeWork_1;

import java.util.Scanner;

public class ScannerNumberSystems {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter pls your number: ");
        int number = sc.nextInt();
        sc.close();

        System.out.println("Системы исчисления:");
        System.out.println("Десятичная        -> " + number);
        System.out.println("Восьмеричная      -> " + Integer.toOctalString(number));
        System.out.println("Двоичная          -> " + Integer.toBinaryString(number));
        System.out.println("Шестнадцатеричная -> " + Integer.toHexString(number));

        sc.close();

    }
}

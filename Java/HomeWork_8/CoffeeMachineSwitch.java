package HomeWork_8;

import java.util.Scanner;

public class CoffeeMachineSwitch {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.print("Choose a button (1-espresso, 2-americano, 3-cappuccino, 4-tea): ");
        int choice = sc.nextInt();
        sc.close();

        switch(choice) {
            case 1:
                System.out.println("Your selection is Espresso!");
                System.out.println(getEspresso() + getFinalMessage());
                break;
            case 2:
                System.out.println(getAmericano());
                break;
            case 3:
                System.out.println(getCappuccino());
                break;
            case 4:
                System.out.println(getTea());
                break;
            default:
                System.out.println("\tNon-existent drink number!");
        }
    }

    public static String getEspresso() {
        return "\tEspresso in process\n";
    }

    public static String getAmericano() {
        String result= "Your selection is Americano!\n";
        result += getEspresso();
        result += getWater();
        result += getFinalMessage();
        return result;
    }

    public static String getCappuccino() {
        String result = "Your selection is Cappuccino!\n";
        result += getEspresso();
        result += "\tAdding some foam milk\n";
        result += getFinalMessage();
        return result;
    }

    public static String getTea() {
        String result = "Your selection is Tea!\n";
        result += "\tSelecting tea package\n";
        result += getWater();
        result += getFinalMessage();
        return result;
    }

    public static String getWater() {
        return "\tAdding some water\n";
    }

    public static String getFinalMessage() {
        return "\tYour drink is ready!";
    }
}

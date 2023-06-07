package HomeWork_7;

import java.util.Scanner;

public class TheDayOfTheWeek {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter pls the number of the day of the week -> ");
        int numberDayOfTheWeek = sc.nextInt();

        if (numberDayOfTheWeek == 1)
            System.out.println("-> Monday <-");
        else if (numberDayOfTheWeek == 2)
            System.out.println("-> Tuesday <-");
        else if (numberDayOfTheWeek == 3)
            System.out.println("-> Wednesday <-");
        else if (numberDayOfTheWeek == 4)
            System.out.println("-> Thursday <-");
        else if (numberDayOfTheWeek == 5)
            System.out.println("-> Friday <-");
        else if (numberDayOfTheWeek == 6)
            System.out.println("-> Saturday <-");
        else if (numberDayOfTheWeek == 7)
            System.out.println("-> Sunday <-");
        else
            System.out.println("You entered the wrong number!\nEnter a number from 1 to 7");
    }
}

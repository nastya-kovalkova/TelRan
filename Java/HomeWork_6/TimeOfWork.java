package HomeWork_6;

import java.util.Random;
import java.util.Scanner;

public class TimeOfWork {
    public static void main(String[] args) {
        Random r = new Random();
        int numberOfSeconds = r.nextInt(28801);

//        Scanner sc = new Scanner(System.in);
//        int numberOfSeconds = sc.nextInt();
//        sc.close();

        if (numberOfSeconds == 1)
            System.out.println("Before the end of the workday remaining 1 second");
        else
            System.out.println("Before the end of the workday remaining -> " + numberOfSeconds + " seconds");

        int secondsInHour = 3_600;
        int minutesInHour = 60;

        int hoursRemaining = numberOfSeconds / secondsInHour;
        int minutesRemaining = numberOfSeconds / minutesInHour;
        int numberOfMinutes =  minutesRemaining - hoursRemaining * minutesInHour;

        if (hoursRemaining > 1) {
            if (numberOfMinutes != 1)
                System.out.println("          It's -> " + hoursRemaining + " hours " + numberOfMinutes + " minutes");
            else if (numberOfMinutes == 0)
                System.out.println("          It's -> " + hoursRemaining + " hours");
            else
                System.out.println("          It's -> " + hoursRemaining + " hours " + numberOfMinutes + " minute");
        }
        else if (hoursRemaining == 1) {
            if (numberOfMinutes > 1)
                System.out.println("          It's -> 1 hour " + numberOfMinutes + " minutes");
            else if (numberOfMinutes == 1)
                System.out.println("          It's -> 1 hour 1 minute");
            else
                System.out.println("          It's -> 1 hour");
        }
        else
            System.out.println("          Less than an hour remaining");

    }

}

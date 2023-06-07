D:\#!/bin/bash
        for run in {1..10}
                do
                        date +"%H:%M:%S"
#                       sleep 5
                        ps -ef | wc -l
                done
lscpu > /opt/280323_morning/Kovalkova/file.txt
cat /etc/os-release | grep -w NAME | awk '{print$1}' | sed 's/NAME="//' >> /opt/280323_morning/Kovalkova/file.txt

        for i in {50..100}
                do
                        touch /opt/280323_morning/Kovalkova/test/$i.txt
                done

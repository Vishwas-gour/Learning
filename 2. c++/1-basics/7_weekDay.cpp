#include <iostream>
using namespace std;
int main()
{
    string weekday;
    cout << "Enter weekDay:- ";
    cin >> weekday;
    if (weekday == "sunday")
    {
        cout << "day 1";
    }
    else if (weekday == "monday")
    {
        cout << "day 2";
    }
    else if (weekday == "tuesday")
    {
        cout << "day 3";
    }
    else if (weekday == "wednesday")
    {
        cout << "day 4";
    }
    else if (weekday == "thursday")
    {
        cout << "day 5";
    }
    else if (weekday == "friday")
    {
        cout << "day 6";
    }
    else if (weekday == "sat")
    {
        cout << "day 7";
    }
    else
    {
        cout << "Invalid day";
    }
}

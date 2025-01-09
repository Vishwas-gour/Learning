#include <iostream>

using namespace std;
int sum(int number)
{
    if (number <= 1)
        return 1;
    return number + sum(number - 1);
}

int fibbo(int number)
{
    if (number <= 1)
        return number;
    return fibbo(number - 1) + fibbo(number - 2);
}

int fact(int number)
{
    if (number == 1)
        return number;
    return number * fact(number - 1);
}

int main()
{
    // cout << sum(10);
    // cout<<fibbo(4);
    cout << fact(4);
}
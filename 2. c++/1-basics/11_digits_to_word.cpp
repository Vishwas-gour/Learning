#include <iostream>
using namespace std;
int main()
{
    int numb = 1204;
    cout << numb << endl;
    int rev = 0;
    int rem = 0;
    while (numb > 0)
    {
        rem = numb % 10;
        rev = rev * 10 + rem;
        numb = numb / 10;
    }
    cout << rev;
    numb = rev;

    while (numb > 0)
    {
        rem = numb % 10;
        rev = rev * 10 + rem;
        numb = numb / 10;

        switch (rem)
        {
        case 1:
            cout << "one ";
            break;
        case 2:
            cout << "two ";
            break;
        case 3:
            cout << "three ";
            break;
        case 4:
            cout << "four ";
            break;
        case 5:
            cout << "five ";
            break;
        case 6:
            cout << "six ";
            break;
        case 7:
            cout << "seven ";
            break;
        case 8:
            cout << "eight ";
            break;
        case 9:
            cout << "nine ";
            break;
        default:
            cout << "zero ";
        }
        }
}
#include <iostream>
using namespace std;
int main()
{

    char ch[] = {'a', 'b', 'c', '\0'};
    ch[0] = 'd';
    cout << ch << endl;
 
    // ---------------------------
    char ch2[] = {"Vishwas"};
    ch2[0] = 'A';
    cout << ch2 << endl;
 
    // ---------------------------
    char ch3[10];
    cin.get(ch3, 11);
    cout << ch3 << endl;
    cin.get(ch3, 11,'$');
    cout << ch3 << endl;
    cout<<"end";
}
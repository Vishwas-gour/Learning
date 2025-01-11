#include <iostream>
using namespace std;
#include <string>
#include <algorithm>

int main()
{
    // char ch1[] = {'a', 'b', 'c', 'd', 'e', 'f'};
    // cout << ch1 << endl; // return with some garbage value
    // -------------------
    // char ch2[] = {'a', 'b', 'c', '\0'};
    // cout << ch2 << endl; // return exect value terninate by null
    // -------------------
    // char ch3[] = {'a', '', 'c' , '\0'};
    // cout << ch3<< endl; // doesn't read space
    // -------------------
    // char ch4[10];
    // cin >> ch4; // terminate from space / not taking space
    // cin.get(ch4,4) ; // (char, len-> override [10])
    // cout << ch4 << endl;
    // -------------------
    string name = "Sahil";
    string surName = "Gour";
    // reverse(name.begin(),name.end()); // return void
    cout << "name :" << name << " surName: " << surName << endl;
    name.swap(surName);
    cout<<"After swap \n";
    cout << "name :" << name << " surName: " << surName << endl;

    // surName.copy(name);
}
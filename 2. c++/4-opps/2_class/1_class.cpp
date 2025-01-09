#include <iostream>
using namespace std;
// all the members are private default
class Parent
{
public:
    int a = 10;
    // if one member is public all the lower member will be public;
    void add(int a, int b)
    {
        cout << "Sum is-> " << a + b << endl;
    }
};
//  Inheritance
class Child : public Parent
{
public:
    void subtract(int a, int b)
    {
        cout << "sub is-> " << a - b << endl;
    }
};

int main()
{
    Parent p;
    Child c; //->object creation
    int a = 10;
    int b = 11;
    p.add(a, b);
    c.subtract(a, b);
    cout << c.a << endl; //-> Accessing parent class member
}
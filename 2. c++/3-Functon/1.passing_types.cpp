#include <iostream>
using namespace std;
// we can also defile function body and use after int main() function 
void subtract(int a, int b);
// pass by value
int sum(int a, int b)
{
    return a + b;
}

// pass by refrerance
void swap(int &a, int &b)
{
    int temp = a;
    a = b;
    b = temp;
}

void deRefrance(int *a)
{
    cout << "deRefrance a :- " << *a << endl;
}

int main()
{
    int a = 10;
    int b = 11;
    cout << a << " " << b << endl;

    int sumAns = sum(a, b); //----> by value
    cout << "sum of a and b :- " << sumAns << endl;

    swap(a, b); // ---> by value but called by refrance
    cout << "After swap :- " << a << " " << b << endl;

    deRefrance(&a);

    subtract(a, b); //----> declayer on the top of the body
}

void subtract(int a, int b)
{
    int ans = a-b;
    cout << "subtract ans" <<  ans;
}
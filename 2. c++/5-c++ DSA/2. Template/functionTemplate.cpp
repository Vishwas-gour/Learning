#include <iostream>
using namespace std;
template <typename data>
data sum(data a, data b)
{
    return a + b;
}
int main()
{
    cout << sum(12, 123) << endl;
    cout << sum(1.21, 1.23) << endl;
}
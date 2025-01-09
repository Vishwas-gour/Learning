#include <iostream>
using namespace std;
template <typename T1, typename T2>
class Template
{
    T1 a;
    T2 b;

public:
    Template(T1 x, T2 y)
    {
        a = x;
        b = y;
        cout << a + b << endl;
    }
};
int main()
{
    Template<int, int> obj(1,3);
}
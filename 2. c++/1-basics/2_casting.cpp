// Online C++ compiler to run C++ program online
#include <iostream>
#include <limits>
#include <iomanip>
using namespace std;

int main()
{
    char max = (numeric_limits<char>::max());
    int maxChar = (numeric_limits<char>::max());

    cout << "1. char max in char variable :- " << max << '\n';
    cout << "2. char max in int variable:-" << maxChar << '\n';
    cout << "2. static cast:-" << static_cast<int>(numeric_limits<char>::max()) << "\n";

    float numb1 = 1312.123456;
    cout<<setprecision(9)<<numb1;
}

#include <iostream>
using namespace std;
int main()
{
  int a;
  cout << "enter your choice";
  cin >> a;
  switch (a)
  {
  case 1:
    cout << "enter your choice";
    cin >> a;
    switch (a)
    {
    case 1:
      cout << "case1.1";
      break;

    case 2:
      cout << "case1.2";
      break;

    case 3:
      cout << "case1.3";
      break;

    default:
      cout << "invalid input";
    }
    break;

  case 2:
    cout << "enter your choice";
    cin >> a;
    switch (a)
    {
    case 1:
      cout << "case2.1";
      break;

    case 2:
      cout << "case2.2";
      break;

    default:
      cout << "invalid input";
    }
    break;

  default:
    cout << "invalid input";
  }
}
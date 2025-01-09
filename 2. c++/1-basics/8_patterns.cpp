#include <iostream>

using namespace std;
int main()
{
    // int n = 5;
    // cout << "Enter number to print print pattern :-";
    // cin >> n;
    // cout << endl;
    // // *
    // // **
    // // ***
    // // ****
    // // *****
    // for (int row = 1; row <= n; ++row)
    // {
    //     for (int col = 1; col <= n; ++col)
    //     {
    //         if (col <= row)
    //         {
    //             cout << "*";
    //         }
    //         else
    //         {
    //             cout << " ";
    //         }
    //     }

    //     cout << endl;
    // }
    // cout << endl;
    // //===================================================================
    // // *****
    // //  ****
    // //   ***
    // //    **
    // //     *

    // for (int row = 1; row <= n; ++row)
    // {
    //     for (int col = 1; col <= n; ++col)
    //     {
    //         if (col >= row)
    //         {
    //             cout << "*";
    //         }
    //         else
    //         {
    //             cout << " ";
    //         }
    //     }
    //     cout << endl;
    // }
    // cout << endl;

    // // ==================================================================

    // // ....*
    // // ...**
    // // ..***
    // // .****
    // // *****
    // for (int row = 1; row <= n; ++row)
    // {
    //     for (int col = 1; col <= n; ++col)
    //     {
    //         if (col >= (n + 1) - row)
    //         {
    //             cout << "*";
    //         }
    //         else
    //         {
    //             cout << " ";
    //         }
    //     }
    //     cout << endl;
    // }
    // cout << endl;
    // // ==================================================================

    // // *****
    // // ****.
    // // ***..
    // // **...
    // // *....
    // for (int row = 1; row <= n; ++row)
    // {
    //     for (int col = 1; col <= n; ++col)
    //     {
    //         if (col <= (n + 1) - row)
    //         {
    //             cout << "*";
    //         }
    //         else
    //         {
    //             cout << " ";
    //         }
    //     }
    //     cout << endl;
    // }
    // cout << endl;

    // // ==================================================================
    // //     *
    // //    ***
    // //   *****
    // //  *******
    // // *********

    // for (int row = 1; row <= n; ++row)
    // {
    //     for (int col = 1; col <= (n * 2) - 1; ++col)
    //     {
    //         if (col >= (n + 1) - row && col <= (n - 1) + row)
    //         {
    //             cout << "*";
    //         }
    //         else
    //         {
    //             cout << " ";
    //         }
    //     }
    //     cout << endl;
    // }
    // cout << endl;

    // // ==================================================================
    // // *********
    // //  *******
    // //   *****
    // //    ***
    // //     *

    // for (int row = 1; row <= n; ++row)
    // {
    //     for (int col = 1; col <= (n * 2) - 1; ++col)
    //     {
    //         if (col >= row && col <= (n * 2) - row)
    //         {
    //             cout << "*";
    //         }
    //         else
    //         {
    //             cout << " ";
    //         }
    //     }
    //     cout << endl;
    // }
    // cout << endl;
    // // ==================================================================
    // //     *
    // //    ***
    // //   *****
    // //  *******
    // // *********
    // // *********
    // //  *******
    // //   *****
    // //    ***
    // //     *
    int n = 9;
    int a = 0;
    for (int r = 1; r <= n; ++r)
    {
        (r <= 5) ? (++a) : (--a);
        for (int c = 1; c <= 9; ++c)
        {
            if (c >= 6 - a && c <= a + 4)
            {
                cout << "*";
            }
            else
            {
                cout << " ";
            }
        }
        cout << endl;
    }

    // int n = 9;
    // int a = 0;
    // bool b = false;
    // for (int row = 1; row <= n; ++row)
    // {
    //     if (a < n / 2 && b == false)
    //     {
    //         a++;
    //     }
    //     else
    //     {
    //         a--;
    //         b = true;
    //     }
    //     for (int col = 1; col <= (n * 2) - 1; ++col)
    //     {
    //         if (col >= (n + 1) - a && col <= (n - 1) + a)
    //         {
    //             cout << "*";
    //         }
    //         else
    //         {
    //             cout << " ";
    //         }
    //     }
    //     cout << endl;
    // }
    // cout << endl;
}
#include <iostream>
#include <math.h>
using namespace std;

int main()
{

    // =====================<-ARNSTRONG NUMBER 100-1000 ->==========================

    // for (int i = 100; i < 1000; i++)
    // {
    //     int sum = 0;
    //     int numb = i;
    //     int a = numb % 10;
    //     numb = numb / 10;
    //     int b = numb % 10;
    //     numb = numb / 10;
    //     int c = numb % 10;
    //     sum = (a * a * a) + (b * b * b) + (c * c * c);
    //     if (sum == i)
    //     {
    //         cout << i << endl;
    //     }
    // }

    // =========================<-LAST NUMBER->===================================

    // int n = 200;
    // cout << "last number :-";
    // cout << n % 10 << endl;

    // for (int i = 1; n > 9; i++)
    // {
    //     if (n > 10)
    //     {
    //         n = n / 10;
    //     }
    // }
    // cout << "first number:-";
    // cout << n;
    // int n = 123;
    // cout<<endl<<n;
    // cout <<endl;
    // for (int i = 1; n > 0; i++)
    // {

    //     cout << n%10;
    //     n = n / 10;
    // }

    // // >>>>>>>>>>>>>>>><- PRIME NUMBER -><<<<<<===============================
    // int isPrime = 21;
    // int counter = 0;
    // for (int i = 1; i < isPrime; ++i)
    // {
    //     if (isPrime % i == 0)
    //     {
    //         ++counter;
    //     }
    //     if (counter > 1)
    //     {
    //         // cout << "it's not a prime prime";
    //         break;
    //     }
    // }
    // if (counter == 1)
    // {
    //     // cout << "yes it's a prime number";
    // }

    // // >>>>>>>>>>>>>>>><- PERFECT NUMBER -><<<<<===============================
    // int isPerfect = 8;
    // int sum = 0;
    // for (int i = 1; i < isPerfect; ++i)
    // {
    //     if (isPerfect % i == 0)
    //     {
    //         sum += i;
    //     }
    // }
    // if (sum == isPerfect)
    // {
    //     // cout << isPerfect << " is a perfect number";
    // }
    // else
    // {
    //     // cout << isPerfect << " is't a perfect number";
    // }

    // // >>>>>>>>>>>>>>>><- FACTORS -><<<<<<<<<<<<<<<<<============================
    // int factors = 11;

    // for (int i = 1; i < factors; ++i)
    // {
    //     if (factors % i == 0)
    //     {
    //         // cout << i << " ";
    //     }
    // }

    // // >>>>>>>>>>>>>>>><- POWER -><<<<<<<<<<<<<<<<<===============================

    // int number = 5;
    // int p = 3;
    // int power = 1;

    // for (int i = 0; i < p; ++i)
    // {
    //     power *= number;
    // }
    // // cout << power << endl;

    // // >>>>>>>>>>>>>>>><- HCF -><<<<<<<<<<<<<<<<<===============================

    // //==========>>>>> HCF is always lesser equal to lower num
    // int numb1 = 8;
    // int numb2 = 3;
    // int ans = 0;
    // for (int i = 1; i <= numb1; i++)
    // {
    //     if (numb1 % i == 0 && numb2 % i == 0)
    //     {
    //         ans = i;
    //     }
    // }
    // // cout << ans;

    // // >>>>>>>>>>>>>>>><- LCM -><<<<<<<<<<<<<<<<<===============================

    // //==========>>>>> LCM is always grater equal to grater number num
    // int n1 = 64;
    // int n2 = 24;
    // int ans2 = 0;
    // for (int i = n2;; i += n2)
    // {
    //     if (i % n2 == 0 && i % n1 == 0)
    //     {
    //         ans2 = i;
    //         break;
    //     }
    // }
    // // cout << ans2;

    // // >>>>>>>>>>>>>>>><- AP -><<<<<<<<<<<<<<<<<==============

    // int n = 10;
    // int a = 1;
    // int d = 2;
    // cout << endl;
    // for (int i = 0; i <= 10; i++)
    // {
    //     int an = a + (i)*d;
    //     // cout<<an<<endl;
    // }

    // // >>>>>>>>>>>>>>>><- GP -><<<<<<<<<<<<<<<<<==============

    // int a = 3;
    // int r = 2;
    // int n = 10;
    // for (int i = 0; i < n; i++){
    //     int ans = a * pow(r, i);
    //     cout << ans << endl;
    // }

    // ==============<- Armstrong Number->=============================

    // int a = 370;
    // int temp = a;
    // int numb1 = a % 10;
    // a /= 10;
    // int numb2 = a % 10;
    // a /= 10;
    // int numb3 = a % 10;

    // int isArmstrong = (numb1 * numb1 * numb1) + (numb2 * numb2 * numb2) + (numb3 * numb3 * numb3);
    // if (temp == isArmstrong){
    //     cout << "yes";
    // }
    // else{
    //     cout << "no";
    // }

    // ==============<- fibonacci Number->==========================

    // int f = 0;
    // int s = 1;
    // int n = 5;
    // int i = 0;
    // int fb = 0;
    // cout << i << s;
    // while (i < n)
    // {
    //     if(i<2){
    //         cout<<i;
    //         i++;
    //         continue;
    //     }
    //     fb = f + s;
    //     f = s;
    //     s = fb;
    //     cout << s;
    //     i++;
    // }

    // ==============<- SUM OF NATURAL Number->===============

    // int n = 20;
    // N natural number cout<<n*(n+1)/2;
    // GP -->>  a * pow(r, i);
    // AP -->>  a + (i)*d;

    int n = 153;
    int temp = 153;
    int sum = 0;
    while (temp > 0){
        int rem = temp% 10;
        sum += (rem * rem * rem);
        temp = temp / 10;
        cout<<sum<<" ";
    }
    if (sum == n) {
        cout << "yes";
    }
    else{
        cout << "no";
    }

}
#include <iostream>
using namespace std;
int main()
{
    int arr[] = {1, 2, 3, 2, 1};
    int n = 5;
    int index = 0;
    bool check = true;
    for (int i = 0; i < n / 2; i++){
        if (arr[i] != arr[n-i-1]){
            check = false;
        }
    }

    if (check){
        cout << "palindrom";
    }
    else{
        cout << "not palindrom";
    }
}
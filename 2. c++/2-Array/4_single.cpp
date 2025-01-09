#include <iostream>
using namespace std;
int main()
{
    // ===================<- SINGLE ->=====================
    int arr[] = {3, 2, 3, 3, 3};
    int n = 5;
    for (int i = 0; i < n; i++)
    {
        bool check = true;
        for (int j = 0; j < n; j++){
            if (j == i)
                continue;
            if (arr[i] == arr[j]){
                check = false;
                break;
            }
        }
        if (check){
            cout << arr[i] << " ";
        }
    }
}
#include <iostream>
using namespace std;
int main()
{
    // ===================<- findDuplicate ->=====================

    int arr[] = {1, 4, 1, 4, 5};
    int n = 5;
    for (int i = 0; i < n; i++){
        for (int j = i + 1; j < n; j++){
            if (arr[i] == arr[j]){
                cout << arr[i] << " ";
            }
        }
    }
}
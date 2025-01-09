#include <iostream>
using namespace std;

void selectionSort(int arr[], int n){
    for (int i = 0; i < n; i++){
        int minValIndx = i;
        for (int j = i + 1; j < n; j++){
            if (arr[j] < arr[minValIndx]){
                minValIndx = j;
            }
        }
        if (minValIndx != i){
            int temp = arr[i];
            arr[i] = arr[minValIndx];
            arr[minValIndx] = temp;
        }
    }
}
int main(){
    int arr[] = {9, 5, 7, 3, 1, 2};
    int n = sizeof(arr) / sizeof(arr[0]);
    selectionSort(arr, n);
    for (int i = 0; i < n; ++i){
        cout << arr[i] << " ";
    }
}
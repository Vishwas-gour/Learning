#include <iostream>
using namespace std;
void bubbleSort(int arr[], int n){
    for (int i = 0; i < n; ++i){
        bool check = true;
        for (int j = 0; j < n-i-1 ; ++j){
            if (arr[j] > arr[j + 1]){
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                check =false; 
            }
        }
        if(check)break;
    }
}
int main(){
    int arr[] = {5, 4, 3, 2, 1};
      
    int n = sizeof(arr)/sizeof(arr[0]);
    bubbleSort(arr,n);
    for (int i = 0; i < 5; ++i){
        cout << arr[i] << " ";
    }
    return 0;
}
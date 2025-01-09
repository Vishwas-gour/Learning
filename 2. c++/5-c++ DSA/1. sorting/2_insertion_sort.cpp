#include <iostream>
using namespace std;

void insertionSort(int arr[], int n){
  for(int i = 1; i<n; i++){
    int j = i; 
    while(j>0 && arr[j] < arr[j-1]){
        int temp = arr[j-1];
        arr[j-1] = arr[j];
        arr[j] = temp;
        j--;
    }
  }
}

int main(){
    int arr[] = {9,5,7,3,1,2};
    int n = sizeof(arr)/sizeof(arr[0]);
    cout<<sizeof(arr)<< " " << sizeof(arr[0])<<"\n";
    insertionSort(arr,n);
    for (int i = 0; i <n; ++i){
        cout << arr[i] << " ";
    }
}
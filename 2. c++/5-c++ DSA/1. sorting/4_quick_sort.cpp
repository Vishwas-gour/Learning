#include <iostream>
using namespace std;
void show(int arr[], int n){
    for (int i = 0; i < n; i++)
        cout << arr[i] << " ";
    cout<<"\n";
}

void quickSort(int arr[], int low, int high){
    if (low >= high) return;
    int p = arr[low];
    int s = low + 1;
    int e = high;
    do{
        while (arr[s] <= p)s++;  // 
        while (arr[e] > p)e--;
        if (s < e){
            int t = arr[s];
            arr[s] = arr[e];
            arr[e] = t;
        }
    } while (s < e);

    int t = arr[low];
    arr[low] = arr[e];
    arr[e] = t;
    
    quickSort(arr, low, e - 1);
    quickSort(arr, e + 1, high);
}

int main(){
    int arr[] = {11, 2, 9, 18, 5, 16};
    int n = sizeof(arr) / sizeof(arr[0]);
    show(arr, 6);
    quickSort(arr, 0, n - 1);
    show(arr, 6);
}

// time comp:-
//     ->best - o(nlogn)
//     ->avg - o(nlogn)
//     ->worst o(n^2)
// space conplx :- o(1)
// approach -> divide and conquer
// stable -- no
// in-place -> yes
// *********************************************
// I'll have to learn about (log) table
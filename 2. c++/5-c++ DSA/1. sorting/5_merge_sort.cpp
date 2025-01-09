#include <iostream>
using namespace std;
void show(int arr[], int n){
    for (int i = 0; i < n; i++) cout << arr[i] << " ";
    cout << "\n";
}

void merge(int arr[], int l, int m, int h){
    int arr2[h + 1];
    int k = l; // for putting the element in new array
    int i = l;
    int j = m + 1;
    while (i <= m || j <= h){
        if (arr[i] < arr[j]  )arr2[k++] = arr[i++];
        else arr2[k++] = arr[j++];
    }

    while (i <= m)arr2[k++] = arr[i++];
    while (j <= h)arr2[k++] = arr[j++];

    // copy all the value of arr2 in arr
    while(l <= h) arr[l] = arr2[l++];
}

void divide(int arr[], int l, int h){
    if (l >= h)  return;
    int m = (l + h) / 2;
    divide(arr, l, m);
    divide(arr, m + 1, h);
    merge(arr, l, m, h);
}

int main(){
    int arr[] = {11, 2, 9, 18, 5, 16};
    int n = sizeof(arr) / sizeof(arr[0]);
    show(arr, n);
    divide(arr, 0, n - 1);
    show(arr, n);
}
#include <iostream>
using namespace std;
int main()
{
    int arr[] = {1, 0, 0, 4, 0};
    int n = 5;
    int index = 0;
    for(int i=0; i<n; i++){
        if(arr[i] != 0){
            int temp = arr[i];
            arr[i] = arr[index];
            arr[index++] = temp;
        }
    }
    while (index < n){
        arr[index++] = 0; 
    }

    for (int i = 0; i < n; i++){
        cout<<arr[i]<<" ";
    }
    
    

}
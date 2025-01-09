#include <iostream>
using namespace std;
int main()
{
    int arr[] = {1, 2, 3, 4, 2};
    int n = 5;
    int index = 0;
    for(int i=0; i<n; i++){
        if(arr[i] != 2){
            arr[index++] = arr[i];
            cout<<arr[i];
        }
    }
    
}
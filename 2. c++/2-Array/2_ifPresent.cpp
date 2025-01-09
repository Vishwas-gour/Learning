#include <iostream>
using namespace std;
int main()
{
    // ===================<- target ->=====================
    int arr[] = {3, 2, 3, 3, 3};
    int n = 5;
    int target = 2;
    bool check = true;
    for (int j = 0; j < n; j++)
    {
        if (target == arr[j])
        {
            check = false;
            break;
        }
    }
    if (!check)
    {
        cout << "present";
    }

     check = true;
    for (int i = 0; i < n; i++)
    {
        if (arr[i] < arr[i+1])
        {
            check = false;
            break;
        }
    }

    if(check){
        
    }
}
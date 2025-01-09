#include <iostream>
using namespace std;
int main()
{
    int arr[] = {1, 2, 3, 4, 5};
        int n = 5;
    // ===================<- FIRST & SECOND LARGEST ->=====================

    int first = 0;
    int second = 0;
     int arr2[] = {1, 2, 3, 4, 5};
    for (int i = 0; i < n; i++)
    {
        if (arr2[i] > first)
        {
            second = first;
            first = arr2[i];
        }
        else if ((arr2[i] > second && arr2[i] < first))
        {
            second = arr2[i];
        }
        
    }
    cout << first << "," << second << endl;
}
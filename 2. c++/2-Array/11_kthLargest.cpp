#include <iostream>
using namespace std;
int main()
{   
   int arr[]={1,2,3,4,5};
   int k=3;
   int temp=0;
   for(int i=0;i<k;++i)
   {
    for(int j=i+1;j<5;++j)
    {
        if(arr[j]>arr[i])
        {
            temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
 
   }
for(int i=0;i<5;++i)
{
    cout<<arr[i];
}

}
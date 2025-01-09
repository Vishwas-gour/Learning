#include<iostream>
using namespace std;
int main(){
    int monthNum ;
    cout<<"Enter month Number:- ";
    cin>>monthNum;
    if(monthNum == 1 || monthNum == 3 || monthNum == 5 || monthNum == 7 || monthNum == 8 || monthNum == 10 || monthNum == 12){
        cout<<"31days month";
    }
    else if( monthNum == 4 || monthNum == 6 || monthNum == 9 || monthNum == 11)
    {
        cout<<"30days month";
    }
    else if(monthNum == 2){
        cout<<"28/29 days month";
    }
    else{
        cout<<"invalid month";
    }
}
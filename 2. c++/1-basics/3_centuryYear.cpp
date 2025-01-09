#include<iostream>
using namespace std;
int main(){
    int year ;
    cout<<"Enter year:- ";
    cin>>year;
    if(year % 100 == 0 ){
        cout<<"this is a century year";
    }
}
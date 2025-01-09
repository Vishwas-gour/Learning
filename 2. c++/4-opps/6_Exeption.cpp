#include <iostream>
using namespace std;
int main(){
    int numb1 = 10; 
    int numb2 = 0;
    try{
        if(numb2 != 0)cout<<numb1/numb2<<endl;
        else throw numb2;
    }
    catch(int e){
       cout<< e << " division exeption "<<endl; 
    }
}
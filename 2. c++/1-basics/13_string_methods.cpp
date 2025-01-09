#include<iostream>
#include<string>
using namespace std;
int main(){
    string name = "Vishwas";
    string  surname = "Gour";
    
    cout<<name.size()<<endl;
    cout<<name.at(1)<<endl;
    cout<<name+" "+"Gour"<<endl;
    cout<<name.append(" hello")<<endl;

    if(name == surname){
        cout<<"true"<<endl;
    }
    else{
        cout<<"false"<<endl;
    }
    cout<<name.substr(1,4)<<endl;
    cout<<name.find("was")<<endl;
    cout<<name.replace(1,2,1,'e')<<endl;

}
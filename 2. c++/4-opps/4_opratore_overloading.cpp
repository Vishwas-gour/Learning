#include <iostream>
using namespace std;
class a{
    int y;

public:a(int x = 0){
        y = x;
    }
    a operator +(a obj){
        cout<< "OO "<< obj.y<<endl;
        a temp;
        temp.y = y + obj.y;
        return temp;
    }

    void show(){
        cout <<"S " << y<<endl;
    }
};

int main(){
    // a obj1(10);
    // a obj2(5);
    // a obj3;
    // obj3 = obj1 + (obj2);
    // obj3.show();

    a obj1(10);
    a obj2(5);
    a obj3(2);
    a obj4;
     obj4 = (obj1 + obj2) + obj3;
    obj4.show();

    return 0;
}
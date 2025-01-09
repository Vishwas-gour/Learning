#include <iostream>
using namespace std; 
class a{
    int y;
    int *p;
public:a(int x = 0, int z = 0){
        y = x;
        p = new int;
        *p = z; 
    }

    a(a &obj){
        y = obj.y;
        p = new int;
        *p = *(obj.p);
    }

    void show(){cout << y << " " << *p << endl;}
    // ********* DESTRUCTORE ************
    ~a(){cout << "memory has been removing" << endl;}
};

int main(){
    a obj1(10, 11);
    a obj2(obj1);
    obj2.show();
}
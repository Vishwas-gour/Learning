#include <iostream>
using namespace std;
class animal{
    int y;
public:animal(int x){
        y = x;
    }
    void display(){
        cout << y << endl;
    }
};

int main(){
    animal obj1(10);
    obj1.display();
    // copy constructor = to cropy one object into the anothe object of same class

    // (SHALOW COPY ) 
    animal obj2 = obj1; //--> by assingment opratore  
    // animal obj2(obj1); // by passing other object  
    obj2.display();
}